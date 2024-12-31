export function buildUrl(baseUrl: string, ...paths: string[]): string {
	return paths.reduce((url, path) => {
		const urlEndsWithSlash = url.endsWith("/");
		const pathStartsWithSlash = path.startsWith("/");

		console.log(
			`url: ${url}, path: ${path}, urlEndsWithSlash: ${urlEndsWithSlash}, pathStartsWithSlash: ${pathStartsWithSlash}`,
		);

		if (urlEndsWithSlash && pathStartsWithSlash) {
			return url + path.slice(1);
		}

		if (!urlEndsWithSlash && !pathStartsWithSlash) {
			return url + "/" + path;
		}

		return url + path;
	}, baseUrl);
}
