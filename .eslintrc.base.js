// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint/eslint-plugin",
		"simple-import-sort",
		"import",
		"sonarjs",
		"unicorn",
		"security",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/all",
		"plugin:security/recommended",
	],
	rules: {
		"@typescript-eslint/explicit-function-return-type": [
			"off",
			{
				allowExpressions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				classes: [
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"public-field",
					"protected-field",
					"constructor",
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"public-method",
					"protected-method",
					"private-method",
				],
			},
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: ["class"],
				format: ["PascalCase"],
				custom: {
					regex: "[A-Za-z]",
					match: true,
				},
			},
			{
				selector: ["enum"],
				format: ["PascalCase"],
				custom: {
					regex: "[A-Za-z]Enum$",
					match: true,
				},
			},
			{
				selector: ["interface"],
				format: ["PascalCase"],
				custom: {
					regex: "^I[A-Za-z]|[A-Za-z]Dto$",
					match: true,
				},
			},
		],
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/promise-function-async": "error",
		"import/newline-after-import": "error",
		"import/no-absolute-path": "error",
		"import/no-cycle": "error",
		"import/no-unresolved": "warn",
		"import/no-useless-path-segments": "error",
		"no-console": "warn",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-mixed-spaces-and-tabs": "off",
		"no-nested-ternary": "off",
		"simple-import-sort/imports": "warn",
		"unicorn/filename-case": [
			"error",
			{
				case: "camelCase",
			},
		],
		"unicorn/new-for-builtins": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-keyword-prefix": "off",
		"unicorn/no-null": "off",
		"unicorn/no-useless-undefined": "off",
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prefer-string-replace-all": "off",
		"unicorn/prevent-abbreviations": [
			"error",
			{
				replacements: {
					i: false,
				},
			},
		],
	},
};
