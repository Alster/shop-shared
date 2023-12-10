import getProductImageFilename from "./getProductImageFilename";
import ImagePostfixType from "./imagePostfixType";

const imagesDomainKey = "NEXT_PUBLIC_IMAGES_DOMAIN";

const imagesDomain = process.env[imagesDomainKey] as string;

if (!imagesDomain) {
	throw new Error(`Environment variable ${imagesDomainKey} is not set`);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function getProductImageUrl<
	const ProductId extends string,
	const ImageId extends string,
	const Postfix extends ImagePostfixType,
>(productId: ProductId, imageId: ImageId, postfix: Postfix) {
	const filename = getProductImageFilename(productId, imageId, postfix);
	return `${imagesDomain}/${filename}` as const;
}
