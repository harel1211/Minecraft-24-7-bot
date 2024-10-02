# Mineflayer Bot

Welcome to the Mineflayer Bot project! This bot connects to a Minecraft server, allows for automated gameplay, and responds to chat commands.

**This bot is created by Demigod.**

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Features

- Automatic registration and login to the Minecraft server.
- Responds to chat messages with friendly replies.
- Executes commands like movement, block placement, teleportation, and dancing.
- Handles reconnections if disconnected from the server.
- Random movement behavior for more natural interaction.

## Installation

To set up the Mineflayer bot, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mineflayer-bot.git
   cd mineflayer-bot
Install dependencies: Make sure you have Node.js installed, then run:
bash
Copy code
npm install mineflayer
Configuration
Before running the bot, you need to configure its settings. Follow these detailed steps:

Step 1: Open the Configuration File
Navigate to the bot.js file in your project directory.
Open bot.js in a text editor (e.g., VSCode, Sublime Text, or Notepad).
Step 2: Change the Username
Locate the username field in the bot configuration section:
javascript
Copy code
username: 'demigodbot', // Bot's name
Replace 'demigodbot' with your desired username (make sure it's not already taken on the server):
javascript
Copy code
username: 'your_new_bot_username',
Step 3: Update the Server Address
Find the host field in the configuration:
javascript
Copy code
host: 'imyours1231.aternos.me', // Server IP
Change the server address to the correct IP or domain of the Minecraft server you wish to connect to:
javascript
Copy code
host: 'your.minecraft.server.ip',
Step 4: Modify the Server Port
Look for the port field:
javascript
Copy code
port: 22382, // Server port
Change the port number to match the port used by your Minecraft server:
javascript
Copy code
port: your_server_port,
Step 5: Set the Password
Find the line where the password is set:
javascript
Copy code
const password = '12341234'; // Replace with your desired password
Replace '12341234' with the password you wish to use for registering the bot:
javascript
Copy code
const password = 'your_secure_password';
Step 6: Save Your Changes
After making all the necessary changes, save the bot.js file in your text editor.
Usage
To start the bot, simply run:

bash
Copy code
node bot.js
The bot will connect to the specified Minecraft server and begin operating according to the defined behaviors.

Commands
The bot responds to the following chat commands:

hi: The bot greets the user.
move: The bot will move forward for 3 seconds.
place: The bot will attempt to place a block from its inventory.
dancebot: The bot performs a dance sequence.
tp <location>: The bot teleports the specified player to predefined locations (e.g., home, xpfarm).
stop: The bot shuts down and disconnects from the server.
Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for details
