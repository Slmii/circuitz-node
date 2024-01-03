import express from 'express';
// import cors from 'cors';
import { iccRoutes } from 'lib/routes';
import { errorHandler } from 'lib/middlewares';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
// 	cors({
// 		origin: '*',
// 		credentials: true,
// 		optionsSuccessStatus: 200
// 	})
// );

app.use((_req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Idempotency-Key, User-Agent, Host');

	// Pass to next layer of middleware
	next();
});

app.use('/icc', iccRoutes);
app.use(errorHandler);

// Server setup
app.listen(PORT, () => {
	console.log(`Example app is listening on port ${PORT}.`);
});
