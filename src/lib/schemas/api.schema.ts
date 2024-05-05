import { object, string, InferType, array } from 'yup';

export const apiSchema = object({
	body: object({
		url: string().required('Endpoint is required'),
		method: string().required('Method is required'),
		headers: array().optional(),
		requesyBody: string().optional()
	})
});

export type ApiSchema = InferType<typeof apiSchema>;
