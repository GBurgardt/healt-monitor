const fs = require('fs');
const utils = require('./utils');

/**
 * Write logs with healt info
 * @param {*} infoHealt 
 */
const writeLogs = (infoHealt) => {
    const logName = `log-${utils.prettyDate(new Date())}`
    
    // We look if the log file already exists
    fs.readFile(`${__dirname}/../logs/${logName}.txt`, 'utf-8' , (err, data) => {
        
        // We concatenate new health information
        const currentHour = utils.prettyTime(new Date());
        const newLog = `[${currentHour}] \nStatus: ${infoHealt.status} \nStatus Message: ${infoHealt.statusMessage} \nInfo: ${infoHealt.info}\n`
        const newData = data ? data.concat(`\n${newLog}`) : newLog;

        // We write the changes
        fs.writeFile(
            `${__dirname}/../logs/${logName}.txt`, 
            `${newData}`, 
            (err) => {
                if(err) {
                    return console.log(err);
                }
                console.log("Logs updated");
            }
        );
    });
}

exports.writeLogs = writeLogs;