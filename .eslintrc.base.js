// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint/eslint-plugin",
		"prettier",
		"security",
		"simple-import-sort",
		"import",
		"sonarjs",
		"unicorn",
	],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:security/recommended",
		"eslint:recommended",
		"plugin:import/typescript",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/all",
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	rules: {
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				parser: "typescript",
				endOfLine: "auto",
				"no-console": "warn",
			},
		],
		"max-len": [
			"error",
			{
				code: 120,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
			},
		],
		"no-console": "warn",
		"no-duplicate-imports": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
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
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/explicit-function-return-type": [
			"off",
			{
				allowExpressions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],
		"no-nested-ternary": "off",
		"simple-import-sort/imports": "warn",
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
		"no-else-return": "error",
		"import/no-absolute-path": "error",
		"import/no-useless-path-segments": "error",
		"import/newline-after-import": "error",
		"import/no-unresolved": "warn",
		"import/no-cycle": "error",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-keyword-prefix": "off",
		"unicorn/filename-case": [
			"error",
			{
				case: "camelCase",
			},
		],
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prevent-abbreviations": [
			"error",
			{
				replacements: {
					i: false,
				},
			},
		],
		"unicorn/no-null": "off",
		"unicorn/new-for-builtins": "off",
		"unicorn/no-useless-undefined": "off",
		"unicorn/prefer-string-replace-all": "off",
	},
};
