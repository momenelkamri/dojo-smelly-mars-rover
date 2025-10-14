
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import complexityPlugin from "eslint-plugin-complexity";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ignores: ["**/node_modules/**", "**/dist/**", "**/.history/**", "**/coverage/**"],
    plugins: {
      js,
      complexity: complexityPlugin as unknown as import("eslint").ESLint.Plugin,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "complexity": ["error", 5],
    },
  },
  tseslint.configs.recommended,
]);
