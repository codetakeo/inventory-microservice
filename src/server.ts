import app from './app';
import { CONSTANTS } from './config';
//import { AppLogger } from './helpers/app-logger';
console.log(CONSTANTS.port);
app.listen(CONSTANTS.port)
    .on('listening', () => {
        //AppLogger.info(
        //     'server.ts',
        //     `Server Listening at port ${CONSTANTS.port}`,
        // );
        console.log('Server Listening');
    })
    .on('error', (err: Error) => {
        // AppLogger.error('Error', err.message);
        console.error(err.message);
        process.exit(1);
    });
