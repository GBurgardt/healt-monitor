/**
 * Formated date
 */
const prettyDate = (someDate) => {
    const day = someDate.getDate();
    const month = someDate.getMonth() + 1;
    const year = someDate.getFullYear();

    return `${day<10 ? '0' : ''}${day}-${month<10 ? '0' : ''}${month}-${year}`
}

/**
 * Formated time
 */
const prettyTime = (someDate) => {
    const hours = someDate.getHours(); 
    const minutes = someDate.getMinutes(); 
    const seconds = someDate.getSeconds(); 

    return `${hours}:${minutes}:${seconds}`
}

exports.prettyDate = prettyDate;
exports.prettyTime = prettyTime;