import express, {Application, Request, Response} from 'express';
import {json, urlencoded} from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import {xssFilter, noSniff, hidePoweredBy, frameguard} from 'helmet';

import './alias-modules';

import {CONSTANTS} from '@/config';
import {notFound} from '@/helpers';
import {APIRouter} from '@/infrastructure/api';
//import { Database } from '@/infrastructure/database';

class App {
	private _app: Application;
	private _apiRouter: APIRouter = new APIRouter();

	constructor() {
		// Start the Application Logger
		// Define Auth Strategy
		// Configure Express Server - Middlewares
		this._app = express();
		//// Body Parser
		this._app.use(json({limit: '50mb'}));
		this._app.use(urlencoded({limit: '50mb', extended: true}));
		//// CORS
		this._app.use(cors());
		//// Only-Production Middlewares
		if (CONSTANTS.environment === 'production') {
			//// Compression
			this._app.use(compression());
			//// Helmet
			this._app.use(xssFilter());
			this._app.use(noSniff());
			this._app.use(hidePoweredBy());
			this._app.use(frameguard({action: 'deny'}));
		}
		// Database Initialization
		//Database.initialize();
		// Configure Authentication
		// Load API Routes
		this._app.use(CONSTANTS.api.prefix, this._apiRouter.routes());
		this._app.use((req: Request, res: Response) => notFound(res));
	}

	public get app(): Application {
		return this._app;
	}
}

export default new App().app;
