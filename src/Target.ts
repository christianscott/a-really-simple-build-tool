export interface Target {
	label: string;
}

export class InputFileTarget implements Target {
	constructor(public label: string, public filename: string) {}
}

export class RuleTarget implements Target {
	constructor(public label: string) {}
}

export class OutputFileTarget implements Target {
	constructor(
		public label: string,
		public filename: string,
		public createdByTarget: RuleTarget,
	) {}
}
