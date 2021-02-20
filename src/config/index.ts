const initDotenv = () => require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    const dotenv = initDotenv();
    const envFound = dotenv.config();
    if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export const CONSTANTS = {
    /**
     * Environment config
     */
    environment: process.env.NODE_ENV || 'development',
    /**
     * Port config
     */
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
    /**
     * Database config
     */
    database: {
        url: process.env.DB_URL,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DIALECT,
        name: process.env.DB_NAME,
    },
    /**
     * Winston logger config
     */
    logs: {
        directory: 'logs',
        level: process.env.LOG_LEVEL || 'silly',
    },
    /**
     * API Route config
     */
    api: {
        prefix: '/api/v1/inventory',
    },
};
