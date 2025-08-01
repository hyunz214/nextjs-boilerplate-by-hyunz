import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/typescript'),
	...storybook.configs['flat/recommended'],
	{
		rules: {
			'semi': ['error', 'always'],
			'quotes': ['error', 'single'],
			'comma-dangle': ['error', 'always-multiline'],
			'max-len': ['warn', { code: 200 }],
			'object-curly-spacing': ['error', 'always'],
			'arrow-spacing': ['error'],
			'indent': ['error', 'tab',{
				'SwitchCase': 1,
				'ignoredNodes': ['TemplateLiteral *'],
			}],
		},
	},
];

export default eslintConfig;
