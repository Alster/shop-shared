function getOrThrow(item, error) {
	if (item instanceof Error) throw item;
	if (item == null || item === undefined) {
		const errorToThrow = typeof error === "function" ? error() : error;
		throw errorToThrow instanceof Error ? errorToThrow : new Error(errorToThrow);
	}

	return item;
}

module.exports = { getOrThrow };
