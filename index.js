const authController = require('./src/authController');

/**
 * Main function that is executed when starting
 */
const main = () => {
    // We check the Magnificent Server's health every 1 second.
    setInterval(() => {
        authController.getHealtInfo()
    }, 1000)
}

// Run     
main()

