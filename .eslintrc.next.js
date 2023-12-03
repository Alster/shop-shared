// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["jsx-a11y", "react", "react-hooks", "security", "prettier", "simple-import-sort"],
	extends: [
		"next/core-web-vitals",
		"next",
		"plugin:tailwindcss/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:security/recommended",
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	rules: {
		"@typescript-eslint/no-empty-function": "off",
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
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		//new rules
		"unicorn/consistent-function-scoping": "off",
		"unicorn/prefer-ternary": "off",
		"unicorn/no-nested-ternary": "off",
		"unicorn/prefer-logical-operator-over-ternary": "off",
		"unicorn/prefer-regexp-test": "off",
		"unicorn/no-document-cookie": "off",
		"@typescript-eslint/no-extra-parens": "off",
		"unicorn/prefer-string-replace-all": "off",
	},
};
