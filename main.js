import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { MindStudio, MindStudioError } from "mindstudio";

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const RATE_LIMIT_TIME = 60 * 1000; // 1 minute in milliseconds
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

const userTimestamps = new Map();

// Function to clean up outdated entries from the Map
const cleanupTimestamps = () => {
  const now = Date.now();
  for (const [userId, lastMessageTime] of userTimestamps.entries()) {
    if (now - lastMessageTime > RATE_LIMIT_TIME) {
      userTimestamps.delete(userId);
    }
  }
};

// Set up periodic cleanup
setInterval(cleanupTimestamps, CLEANUP_INTERVAL);

// Define the event listener for when the bot is ready
client.once("ready", () => {
  console.log("⚡️ MindStudio Discord bot is running!");
});

// Define the event listener for when a message is created
client.on("messageCreate", async (message) => {
  // Check if the message mentions the bot
  if (message.mentions.has(client.user) && !message.author.bot) {
    const userId = message.author.id;
    const now = Date.now();
    const lastMessageTime = userTimestamps.get(userId);

    if (lastMessageTime && now - lastMessageTime < RATE_LIMIT_TIME) {
      return message.reply("Please wait a minute before asking again.");
    }

    userTimestamps.set(userId, now);

    try {
      // Initialize the MindStudio client with the API key
      const mindStudioClient = new MindStudio(process.env.MINDSTUDIO_KEY);

      // Reply immediately with a "thinking" indicator to show that the message is being processed
      const responseMessage = await message.reply("Just a moment...");

      // Call The Assistants' API workflow that takes a prompt and returns a response
      const { result: mindstudioResult, billingCost } =
        await mindStudioClient.workers.Assistant.api({
          prompt: message.content,
        });

      // Handle empty or undefined responses
      if (!mindstudioResult) {
        await responseMessage.edit(
          "Error generating a response, please try again."
        );
        return;
      }

      // Update message with the MindStudio response
      await responseMessage.edit(mindstudioResult);
    } catch (error) {
      if (error instanceof MindStudioError) {
        console.error("Workflow failed:", error.message);
      }
    }
  }
});

// Log in to Discord with the bot token
client.login(process.env.DISCORD_BOT_TOKEN);
