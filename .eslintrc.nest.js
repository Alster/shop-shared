module.exports = {
	extends: [
		"./.eslintrc.base.js",
		"plugin:@darraghor/nestjs-typed/recommended",
		"plugin:security/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	plugins: [
		"@darraghor/nestjs-typed",
		"security",
		"vtex",
		"jest",
	],
	env: {
		node: true,
		jest: true,
		"jest/globals": true,
	},
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
		"vtex/prefer-early-return": "error",
	}
};
