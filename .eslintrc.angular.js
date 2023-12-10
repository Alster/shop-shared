// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@angular-eslint"],
	overrides: [
		{
			files: ["*.ts"],
			extends: [
				"plugin:@angular-eslint/recommended",
				"plugin:@angular-eslint/template/process-inline-templates",
			],
			rules: {
				"@angular-eslint/directive-selector": [
					"error",
					{
						type: "attribute",
						prefix: "app",
						style: "camelCase",
					},
				],
				"@angular-eslint/component-selector": [
					"error",
					{
						type: "element",
						prefix: "app",
						style: "kebab-case",
					},
				],
			},
		},
		{
			files: ["*.html"],
			extends: [
				"plugin:@angular-eslint/template/recommended",
				"plugin:@angular-eslint/template/accessibility",
			],
			rules: {},
		},
	],
};
