/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Server } from 'http';
import app from './app';
import config from './config/index';

// "src/**/*.{js, jsx,ts,tsx}": [
//       "eslint --fix"
//     ],
//     "src/**/*.{json,js,ts,jsx,tsx,html}": [
//       "prettier --write --ignore-unknown"
//     ]

let server: Server;

async function bootstrap() {
  try {
    server = app.listen(config.port, () => {
      console.log(`Application is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect database', err);
  }
}

bootstrap();
