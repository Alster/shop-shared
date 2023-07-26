export default function getProductImageUrl(productId: string, imageId: string, postfix: string) {
	const kind = "product-images";
	const filename = `${kind}/${productId}/${imageId}_${postfix}.jpeg`;
	return `https://unicorn-bleak.s3.eu-central-1.amazonaws.com/${filename}`;
}
