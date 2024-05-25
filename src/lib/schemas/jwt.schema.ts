import { object, string, InferType, array } from 'yup';

export const jwtSchema = object({
	body: object({
		secret: string().required('Secret is required'),
		payload: string().required('Payload is required'),
		signatureMethod: string().required('Signature is required')
	})
});

export type JWTSchema = InferType<typeof jwtSchema>;
