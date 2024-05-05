export interface ICC {
	methodName: string;
	canisterId: string;
	args: Array<unknown>;
}

export interface ApiICC {
	url: string;
	method: string;
	requesyBody?: string;
	headers?: Record<string, string>;
}
