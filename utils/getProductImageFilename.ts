import ImagePostfixType from "./imagePostfixType";

const kind = "product-images" as const;

export default function getProductImageFilename<
	const ProductId extends string,
	const ImageId extends string,
	const Postfix extends ImagePostfixType,
>(
	productId: ProductId,
	imageId: ImageId,
	postfix: Postfix,
): `${typeof kind}/${ProductId}/${ImageId}.${Postfix}.jpeg` {
	return `${kind}/${productId}/${imageId}.${postfix}.jpeg`;
}
