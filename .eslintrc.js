module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // update the extensions
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-underscore-dangle": ["off", { allow: ["id"] }],
    "no-unused-vars": "off",
    "object-shorthand": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off",
    "no-extraneous-dependencies": "off",
    "no-console": "off",
  },
};
