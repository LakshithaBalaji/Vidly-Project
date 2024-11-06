const winston = require('winston');
const path = require('path');

// Define the log file path
const logFilePath = path.join(__dirname, 'logs', 'combined.log');

// Create the logger
const logger = winston.createLogger({
  level: 'info', // Set the default logging level
  format: winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to the logs
    winston.format.json() // Format logs as JSON
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple() // Log to console in simple format
    }),
    new winston.transports.File({
      filename: logFilePath, // Log to file
      level: 'info' // Log only 'info' level messages and above
    })
  ]
});

// Handle unhandled exceptions by logging to the same file
logger.exceptions.handle(
  new winston.transports.File({ filename: logFilePath })
);

// Export the logger
module.exports = logger;
