module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "@typescript-eslint", "jsx-a11y"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
  },
};
