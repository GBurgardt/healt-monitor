/**
 * Load dependencies
 */
const request = require('request');
const fileController = require('./fileController');

/**
 * Return relevant info of the health of Magnificent Server
 */
const getHealtInfo = () => 
    // Make request to the service
    request(
        'http://localhost:3000', 
        { json: true }, 
        (err, res, body) => {

            // Check if service responds
            if (err && err.code === 'ECONNREFUSED') {
                // If not respond, send relevant info
                const infoHealt = {
                    status: err.code,
                    statusMessage: 'Server has not been responding at all',
                    info: `address - ${err.address}, port - ${err.port}`
                }
                
                fileController.writeLogs(infoHealt);
            } else {
                // If yes respond, send relevant info
                const infoHealt = {
                    status: res.statusCode,
                    statusMessage: res.statusMessage,
                    info: res.body
                }

                fileController.writeLogs(infoHealt);
            }
        }
    );
    
exports.getHealtInfo = getHealtInfo;