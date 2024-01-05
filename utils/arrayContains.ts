export default function arrayContains<SuperString extends string>(
	array: ReadonlyArray<SuperString>,
	searchElement: SuperString,
): boolean {
	return array.includes(searchElement);
}
