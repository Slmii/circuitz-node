export interface JWTData {
	secret: string;
	payload: string;
	signatureMethod: string;
}
