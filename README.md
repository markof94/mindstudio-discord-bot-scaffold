# MindStudio Discord Bot Scaffold

This simple Discord app utilizes MindStudio to create a personal assistant bot for your Discord Server. Just tag the bot and ask anything to receive a response.

![image](https://github.com/user-attachments/assets/a880827d-248e-4799-944b-f91e73d3cd2c)


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

2. Inside the `Basic Information` tab, find the `Signing Secret`, and assign it to `SLACK_SIGNING_SECRET` in your `.env` file.

3. Scroll down to `App-Level Tokens` , click on `Generate Token and Scopes` . Give it a name and choose all 3 scopes, then click `Generate`.

4. Assign the `Token` to the `SLACK_APP_TOKEN` in your `.env` file.

5. (Optional) Scroll down to `Display Information` and add some more details for your Slack bot.
6. Save changes.
7. Go into `Socket Mode` tab and `Enable Socket Mode`. For this guide we’ll use the socket mode instead of HTTP. [More info here](https://tools.slack.dev/bolt-js/getting-started/#setting-up-events).

8. Go into `Event Subscriptions`  tab, toggle on `Enable Events`  and add the following to `Subscribe to Bot Events`

9. Install the App to your Slack workspace in the `Install App` tab.

10. Assign the **`Bot User OAuth Token`** into your `SLACK_BOT_TOKEN` variable in the `.env` file.

## Create a MindStudio AI Worker

1. Inside MindStudio, navigate to the `API Keys` tab. Create a new API key, then assign it to the `MINDSTUDIO_KEY` variable in the `.env` file.

2. Create a new MindStudio AI Worker that you will use for your assistant, or make a copy of this [pre-made Assistant](mindstudio.ai/ais/a9804b6a-f4cd-4bf2-8760-30c4767dc9b1/remix) and make any edits you may need later. The only edit you need to do right now is to add the `API Function Name` in the `Details` tab, to make it easier to invoke it via the NPM package in your app. We’ll use `Assistant` for now.

![image](https://github.com/user-attachments/assets/31512d47-4309-4d88-a138-26f35e96cb16)

___

Your `.env` file should now look like this, with actual keys:

```
SLACK_SIGNING_SECRET=b65daa5c486***************
SLACK_BOT_TOKEN=xoxb-***************
SLACK_APP_TOKEN=xapp-***************
MINDSTUDIO_KEY=sku***************
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

You should now see the `⚡️ MindStudio Slack bot is running!` message in the terminal.

## Test your bot

With the Node app running, anyone should be able to tag the bot and ask anything.

![image](https://github.com/user-attachments/assets/0f31b1d8-403e-46b0-9816-d2d53c530b91)


## Next steps

This is a basic flow that only takes the user’s message and passes it to the MindStudio Worker.
An idea to expand this bot’s capabilities would be to use the whole thread as context (keeping in mind the AI model’s token limitations and cost).

# Useful resources:
[Slack Developer Docs](https://tools.slack.dev/)

[MindStudio Docs](https://help.mindstudio.ai/) (For creating AI workers)

[MindStudio NPM Package](https://www.npmjs.com/package/mindstudio)