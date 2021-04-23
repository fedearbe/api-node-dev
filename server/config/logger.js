const { createLogger, format, transport, transports } = require('winston');

// Setup logger
const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

module.exports = logger;
