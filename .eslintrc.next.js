module.exports = {
	extends: [
		"./.eslintrc.base.js",
		"next/core-web-vitals",
		"next",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	plugins: [
		"jsx-a11y",
		"react",
		"react-hooks",
	],
	env: {
		node: true,
	},
	globals: {
		NodeJS: true,
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
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
	}
};
