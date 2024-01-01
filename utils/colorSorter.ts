import * as assert from "assert";
// @ts-expect-error - no typings for this package
import { fromString } from "css-color-converter";

interface IHSLA {
	hue: number;
	saturation: number;
	lightness: number;
	alpha: number;
	reference: string;
}

const convert = (color: string): IHSLA | null => {
	const parsedColor = fromString(color);

	if (parsedColor === null) {
		return null;
	}

	const [hue, saturation, lightness, alpha] = parsedColor.toHslaArray();

	return {
		hue,
		saturation,
		lightness,
		alpha,
		reference: color,
	};
};

const compareColors = (a: string, b: string): number => {
	const colorA = convert(a);
	const colorB = convert(b);

	if (colorA === null && colorB === null) {
		return 0;
	}
	if (colorA === null && colorB !== null) {
		return 1;
	}
	if (colorA !== null && colorB === null) {
		return -1;
	}
	assert.ok(colorA !== null && colorB !== null);

	// Move grey-ish values to the back
	if (
		(colorA.saturation === 0 || colorB.saturation === 0) &&
		colorA.saturation !== colorB.saturation
	) {
		return colorB.saturation - colorA.saturation;
	}

	// Sort by hue (lowest first)
	if (colorA.hue !== colorB.hue) {
		return colorA.hue - colorB.hue;
	}

	// Sort by saturation (highest first)
	if (colorA.saturation !== colorB.saturation) {
		return colorA.saturation - colorB.saturation;
	}

	// Comparing gray values, light before dark
	if (
		colorA.saturation === 0 &&
		colorB.saturation === 0 &&
		colorA.lightness !== colorB.lightness
	) {
		return colorB.lightness - colorA.lightness;
	}

	// Sort by transparency, least transparent first
	if (colorA.alpha === colorB.alpha) {
		return colorA.reference.toLowerCase().localeCompare(colorB.reference.toLowerCase());
	}

	return colorB.alpha - colorA.alpha;
};

export default compareColors;
