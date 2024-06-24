export default function arrayContains<const SuperString extends string>(
	array: ReadonlyArray<SuperString>,
	searchElement: SuperString,
): boolean {
	return array.includes(searchElement);
}
