import { createLogger, format, transports } from 'winston';
import datadogWinston from 'datadog-winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    new datadogWinston({
      apiKey: process.env.DD_API_KEY,
      service: 'wa-sender-backend',
    }),
  ],
});

export default logger;


