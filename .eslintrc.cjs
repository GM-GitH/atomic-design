module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-refresh", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "warn",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
