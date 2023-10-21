import express from 'express';
import cors from 'cors';
import { iccRoutes } from 'lib/routes';
import { errorHandler } from 'lib/middlewares';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', () => {
	console.log('Hello World');
});
app.use('/icc', iccRoutes);
app.use(errorHandler);

// Server setup
app.listen(PORT, () => {
	console.log(`Example app is listening on port ${PORT}.`);
});
