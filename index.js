const mineflayer = require('mineflayer');

// Bot variable
let bot;

// Function to create and configure the bot
function createBot() {
  bot = mineflayer.createBot({
    host: 'imyours1231.aternos.me', // Server IP
    port: 22382,                    // Server port
    username: 'demigodbot',         // Bot's name
    version: '1.16.4'               // Server version
  });
  setupEventListeners(bot);
}

// Function to set up event listeners for the bot
function setupEventListeners(bot) {
  bot.on('spawn', () => {
    console.log('Bot has spawned in the game.');
    const password = '12341234'; // Replace with your desired password

    // Send register command
    bot.chat(`/register demigodbot ${password}`);
    console.log(`Sent register command: /register demigodbot ${password}`);

    // Wait for a moment before sending the login command
    setTimeout(() => {
      bot.chat(`/login demigodbot ${password}`);
      console.log(`Sent login command: /login demigodbot ${password}`);
    }, 2000); // 2 seconds delay

    // Start random movement
    randomMovement();
  });

  // Handle chat messages
  bot.on('chat', (username, message) => {
    if (username === bot.username) return; // Ignore own messages

    if (message.includes('You are now registered') || message.includes('You are now logged in')) {
      console.log(message);
    } else if (message === 'hi') {
      bot.chat(`Hello, ${username}!`);
    } else if (message === 'move') {
      bot.setControlState('forward', true);
      setTimeout(() => {
        bot.setControlState('forward', false);
      }, 3000); // Move forward for 3 seconds
    } else if (message === 'place') {
      placeBlock(); // Call the function to place a block when 'place' command is received
    } else if (message === 'dancebot') {
      dance(); // Call the dance function when 'dancebot' command is received
    } else if (message.startsWith('tp')) {
      const targetLocation = message.split(' ')[1];
      teleportPlayer(username, targetLocation);
    } else if (message === 'stop') {
      bot.chat('Shutting down...');
      bot.quit();
    }
  });

  // Error handling
  bot.on('error', (err) => {
    console.error('Bot encountered an error:', err.message);
  });

  // Bot disconnect event
  bot.on('end', () => {
    console.log('Bot has disconnected.');
    reconnect(); // Attempt to reconnect on disconnect
  });
}

// Function to teleport players
function teleportPlayer(username, targetLocation) {
  const locations = {
    home: { x: 312.382, y: 80, z: -926.800 },
    xpfarm: { x: 641.904, y: -21.000, z: -703.569 },
  };

  if (targetLocation in locations) {
    const { x, y, z } = locations[targetLocation];
    bot.chat(`Teleporting ${username} to ${targetLocation} at (${x}, ${y}, ${z})...`);
    bot.chat(`/tp ${username} ${x} ${y} ${z}`);
  } else {
    bot.chat(`Unknown location: ${targetLocation}`);
  }
}

// Function for random movement
function randomMovement() {
  setInterval(() => {
    const randomDirection = Math.random() < 0.5 ? 'forward' : 'back';
    bot.setControlState(randomDirection, true);

    // Randomly jump
    if (Math.random() < 0.5) {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 300); // Jump for a short duration
    }

    // Randomly turn left or right
    if (Math.random() < 0.5) {
      bot.setControlState('left', true);
      setTimeout(() => bot.setControlState('left', false), 1000); // Turn left for 1 second
    } else {
      bot.setControlState('right', true);
      setTimeout(() => bot.setControlState('right', false), 1000); // Turn right for 1 second
    }

    // Move for 2 seconds
    setTimeout(() => {
      bot.setControlState(randomDirection, false);
    }, 2000);
    
  }, 5000); // Every 5 seconds
}

// Function to make the bot dance
function dance() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 300);
      bot.setControlState('left', true);
      setTimeout(() => bot.setControlState('left', false), 300);
      bot.setControlState('right', true);
      setTimeout(() => bot.setControlState('right', false), 300);
    }, i * 1000);
  }
}

// Function to place a block
function placeBlock() {
  const block = bot.inventory.findInventoryItem(1); // Replace with the ID of the block you want to place
  if (block) {
    const position = bot.entity.position.offset(0, -1, 0);
    bot.placeBlock(position, new mineflayer.Vec3(0, 1, 0), (err) => {
      if (err) console.log('Error placing block:', err);
      else console.log('Block placed!');
    });
  } else {
    console.log('No block found in inventory.');
  }
}

// Function to reconnect the bot
function reconnect() {
  console.log('Attempting to reconnect...');
  if (bot) {
    bot.quit(); // Quit the current bot
  }
  createBot(); // Create a new bot instance
}

// Initial bot creation
createBot();
