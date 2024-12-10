# MindStudio Discord Bot Scaffold

This simple Discord app utilizes MindStudio to create a personal assistant bot for your Discord Server. Just tag the bot and ask anything to receive a response.

![image](https://github.com/user-attachments/assets/91a5a10b-c72c-4553-a529-1e6af73c1c4a)


## Setup

After cloning this repo, you'll need the following environment variables:

```
DISCORD_BOT_TOKEN=
MINDSTUDIO_KEY=
```

This includes creating a Slack app and a MindStudio AI Worker.

### Create a Discord App

[More info on Discord docs](https://discord.com/developers/docs/quick-start/getting-started#configuring-your-bot)

1. Create a new Discord App [here](https://discord.com/developers/applications?new_application=true).

2. Inside the `Bot` tab, reset the token and grab a new one. Assign it to `DISCORD_BOT_TOKEN` in the `.env` file. 

3. Scroll down and enable `Message Content Intent`.

4. In the `Installation` tab, under `Guild Install -> SCOPES`, add `bot`. Then under `PERMISSIONS` add `Send Messages` and `Send Messages in Threads`. You may add more permissions depending on your use case.

5. Install the bot on your Discord Server using the install link in the `Installation` tab.

## Create a MindStudio AI Worker

1. Inside MindStudio, navigate to the `API Keys` tab. Create a new API key, then assign it to the `MINDSTUDIO_KEY` variable in the `.env` file.

2. Create a new MindStudio AI Worker that you will use for your assistant, or make a copy of this [pre-made Assistant](mindstudio.ai/ais/a9804b6a-f4cd-4bf2-8760-30c4767dc9b1/remix) and make any edits you may need later. The only edit you need to do right now is to add the `API Function Name` in the `Details` tab, to make it easier to invoke it via the NPM package in your app. We’ll use `Assistant` for now.

![image](https://github.com/user-attachments/assets/31512d47-4309-4d88-a138-26f35e96cb16)

___

Your `.env` file should now look like this, with actual keys:

```
MINDSTUDIO_KEY=sku***************
DISCORD_BOT_TOKEN=MTMx******************
```

## Run the app

Install packages:

```
npm install
```

Run the app:

```jsx
npm start
```

You should now see the `⚡️ MindStudio Discord bot is running!` message in the terminal.

## Test your bot

With the Node app running, anyone should be able to tag the bot and ask anything.

![image](https://github.com/user-attachments/assets/91a5a10b-c72c-4553-a529-1e6af73c1c4a)


## Next steps

This is a basic flow that only takes the user’s message and passes it to the MindStudio Worker.
An idea to expand this bot’s capabilities would be to include more messages as context (keeping in mind the AI model’s token limitations and cost).

# Useful resources:
[Discord Docs](https://discord.com/developers/docs/quick-start/getting-started#configuring-your-bot)

[MindStudio Docs](https://help.mindstudio.ai/)

[MindStudio NPM Package](https://www.npmjs.com/package/mindstudio)