import { Response, Request, NextFunction } from 'express';

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err);

	res.status(res.statusCode).json({
		status: res.status,
		message: err.message,
		name: err.name
	});
};
