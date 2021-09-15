import { v4 as uuid } from "uuid";

class Client {
	id?: string;
	name: string;
	fabrication: string;
	size: number;
	value: number;
	createdAt?: Date;
	updatedAt?: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Client };