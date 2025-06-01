import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // typescript-eslint recommended rules
  ...tseslint.configs.recommended,

  // jsx-a11y configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "jsx-a11y": jsxA11y },
    rules: jsxA11y.flatConfigs.recommended
      ? jsxA11y.flatConfigs.recommended.rules
      : {},
  },

  // Prettier plugin and simple-import-sort configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  // eslint-config-prettier (must be last to override other formatting rules)
  ...compat.extends("eslint-config-prettier"),
];

export default eslintConfig;
