import express, { NextFunction, Request, Response } from 'express';
import { validate } from 'lib/middlewares';
import { iccSchema } from 'lib/schemas';
import { ICC } from 'lib/types';

const iccRoutes = express.Router();

iccRoutes.post('/', validate(iccSchema), async (req: Request<any, any, ICC>, res: Response, _next: NextFunction) => {
	console.log('req.body', req.body);

	res.status(200).json(req.body);
});

export { iccRoutes };
