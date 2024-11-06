const winston = require('winston');
require('winston-mongodb');

module.exports = function() {
    // Handle uncaught exceptions
    winston.exceptions.handle(
        new winston.transports.Console({ colorize:true, prettyPrint: true}),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );
    

    // Create transports
    const fileTransport = new winston.transports.File({ filename: 'logfile.log' });
    const mongoTransport = new winston.transports.MongoDB({
        db: 'mongodb://localhost/vidly',
        level: 'info'
    });

    // Add transports to the logger
    winston.add(fileTransport);
    winston.add(mongoTransport);

    // Log that logging has been initialized
    winston.info('Logging initialized...');
};
