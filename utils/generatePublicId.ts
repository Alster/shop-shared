/**
 * Generates public id from text
 * For example, pas here title in "en" language.
 * Function will replace all spaces with "-".
 * All other symbols are removed
 */
export function generatePublicId(text: string): string {
	return text
		.trim()
		.replaceAll(/\s/g, "-")
		.replaceAll(/[^\dA-Za-z-]/g, "")
		.toLowerCase();
}
