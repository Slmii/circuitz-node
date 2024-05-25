import express, { NextFunction, Request, Response } from 'express';
import { validate } from 'lib/middlewares';
import { jwtSchema } from 'lib/schemas';
import { JWTData } from 'lib/types';
import jwt, { Algorithm } from 'jsonwebtoken';

const jwtRoutes = express.Router();

jwtRoutes.post(
	'/',
	validate(jwtSchema),
	async (req: Request<any, any, JWTData>, res: Response, _next: NextFunction) => {
		const payload = JSON.parse(req.body.payload);
		const expiresIn = payload.exp ?? '1h';

		// Remove exp field from payload
		delete payload.exp;

		const jwtToken = jwt.sign(payload, req.body.secret, {
			algorithm: req.body.signatureMethod as Algorithm,
			expiresIn
		});

		res.status(200).json(jwtToken);
	}
);

export { jwtRoutes };
