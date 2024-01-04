// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@darraghor/nestjs-typed", "vtex", "jest"],
	extends: [
		"plugin:@darraghor/nestjs-typed/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	overrides: [
		{
			files: ["test/**"],
			plugins: ["jest"],
			extends: ["plugin:jest/recommended"],
			rules: { "jest/prefer-expect-assertions": "off" },
		},
	],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters": "warn",
		"@darraghor/nestjs-typed/controllers-should-supply-api-tags": "off",
		"vtex/prefer-early-return": "error",
	},
};
