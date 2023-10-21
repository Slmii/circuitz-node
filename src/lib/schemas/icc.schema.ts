import { object, string, InferType, array } from 'yup';

export const iccSchema = object({
	body: object({
		methodName: string().required('Method Name is required'),
		canisterId: string().required('Canister ID is required'),
		args: array().required('Args is required')
	})
});

export type IccSchema = InferType<typeof iccSchema>;
