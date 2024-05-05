export interface ICC {
	methodName: string;
	canisterId: string;
	args: Array<unknown>;
}

export interface ApiICC {
	url: string;
	method: string;
	requestBody?: string;
	headers?: Record<string, string>;
}
