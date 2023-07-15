export enum MonobankInvoiceStatusEnum {
	created = "created", // рахунок створено успішно, очікується оплата
	processing = "processing", // платіж обробляється
	hold = "hold", // сума заблокована
	success = "success", // успішна оплата
	failure = "failure", // неуспішна оплата
	reversed = "reversed", // оплата повернена після успіху
	expired = "expired", // час дії вичерпано
}

export const MONGO_STATUS_TO_TEXT: {
	[key in keyof typeof MonobankInvoiceStatusEnum]: string;
} = {
	[MonobankInvoiceStatusEnum.created]: "Рахунок створено успішно, очікується оплата",
	[MonobankInvoiceStatusEnum.processing]: "Платіж обробляється",
	[MonobankInvoiceStatusEnum.hold]: "Сума заблокована",
	[MonobankInvoiceStatusEnum.success]: "Успішна оплата",
	[MonobankInvoiceStatusEnum.failure]: "Неуспішна оплата",
	[MonobankInvoiceStatusEnum.reversed]: "Оплата повернена після успіху",
	[MonobankInvoiceStatusEnum.expired]: "Час дії вичерпано",
};

export interface IMonobankCreateInvoiceResponseDto {
	invoiceId: string;
	pageUrl: string;
}

export interface IMonobankErrorDto {
	errCode: string;
	errText: string;
}

export const isIMonobankError = (object: any): object is IMonobankErrorDto => {
	return object.errCode && object.errText;
};

export interface IMonobankWebhookDto {
	invoiceId: string;
	status: MonobankInvoiceStatusEnum;
	failureReason: string;
	amount: number;
	ccy: number;
	finalAmount: number;
	createdDate: string;
	modifiedDate: string;
	reference: string;
	cancelList: any[];
	walletData: {
		cardToken: string;
		walletId: string;
		status: "new" | "created" | "failure";
	};
}
