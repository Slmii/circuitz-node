import express, { NextFunction, Request, Response } from 'express';
import ic from 'ic0';
import { validate } from 'lib/middlewares';
import { iccSchema } from 'lib/schemas';
import { ICC } from 'lib/types';

const iccRoutes = express.Router();

iccRoutes.post('/', validate(iccSchema), async (req: Request<any, any, ICC>, res: Response, _next: NextFunction) => {
	console.log('ICC Call', req.body, req.headers);

	const canister = ic(req.body.canisterId);
	const response = await canister.call(req.body.methodName, ...req.body.args);

	res.status(200).json(response);
});

export { iccRoutes };
