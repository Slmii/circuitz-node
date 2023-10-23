import express, { NextFunction, Request, Response } from 'express';
import ic from 'ic0';
import { validate } from 'lib/middlewares';
import { iccSchema } from 'lib/schemas';
import { ICC } from 'lib/types';

const iccRoutes = express.Router();

export function replaceBigIntWithNumber(obj: bigint): number;
export function replaceBigIntWithNumber(obj: bigint[]): number[];
export function replaceBigIntWithNumber<T>(obj: T): T;
export function replaceBigIntWithNumber<T>(obj: T): T | number | number[] {
	if (typeof obj === 'bigint') {
		return Number(obj) as number;
	}

	if (Array.isArray(obj)) {
		return obj.map(replaceBigIntWithNumber) as number[];
	}

	if (typeof obj === 'object' && obj !== null) {
		const newObj = {} as Record<keyof T, unknown>;

		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				newObj[key] = replaceBigIntWithNumber(obj[key]);
			}
		}

		return newObj as T;
	}

	return obj;
}

iccRoutes.post('/', validate(iccSchema), async (req: Request<any, any, ICC>, res: Response, _next: NextFunction) => {
	console.log('ICC Call', req.body, req.headers);

	const canister = ic(req.body.canisterId);
	const response = await canister.call(req.body.methodName, ...req.body.args);

	res.status(200).json(replaceBigIntWithNumber(response));
});

export { iccRoutes };
