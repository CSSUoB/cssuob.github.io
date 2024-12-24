import globals from "globals";
import pluginJs from "@eslint/js";
import htmlPlugin from "eslint-plugin-html";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.html", "**/*.js"], 
    languageOptions: {
      globals: {
        ...globals.browser, 
        "FullCalendar": "readonly",
        "Chart": "readonly"
      },
    },
    plugins: {
      html: htmlPlugin,
    },
    rules: {
      "camelcase": ["error", { properties: "never" }],
      "no-var": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "id-match": [
        "warn",
        "^(_?[a-z][a-zA-Z0-9]*|[A-Z][A-Z0-9_]*|_)$",
        {
          properties: true,
        },
      ],
    }
  },
  pluginJs.configs.recommended,
  {
    ignores: ["vendor/**/*"],
  }
];