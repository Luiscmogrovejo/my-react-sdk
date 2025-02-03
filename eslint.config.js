const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginTypeScript = require('@typescript-eslint/eslint-plugin');
const eslintPluginPrettier = require('eslint-plugin-prettier'); // Add this
const parser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': eslintPluginTypeScript,
      prettier: eslintPluginPrettier, // Add the plugin here
    },
    rules: {
      'prettier/prettier': 'error', // Now this rule will work
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
