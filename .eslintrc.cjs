module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:prettier/recommended',
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:perfectionist/recommended-natural",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh", "formatjs"],
  rules: {
    'prettier/prettier': 'warn',
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/consistent-type-exports": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "formatjs/enforce-default-message": ["error", "literal"],
    "formatjs/enforce-id": "warn",
    "import/no-absolute-path": "warn",
    "import/no-amd": "warn",
    "import/no-anonymous-default-export": "warn",
    "import/no-commonjs": "warn",
    "import/no-deprecated": "warn",
    "import/no-duplicates": ["warn", { "prefer-inline": true }],
    "import/no-dynamic-require": "warn",
    "import/no-mutable-exports": "warn",
    "import/no-nodejs-modules": "warn",
    "import/no-self-import": "warn",
    "import/no-unresolved": "warn",
    "import/no-useless-path-segments": "warn",
    "import/order": [
      "off",
      {
        warnOnUnassignedImports: true,
      },
    ],
    "perfectionist/sort-imports": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"],
          "style",
          "object",
          "side-effect",
        ],
        "newlines-between": "always",
        "read-tsconfig": true,
      },
    ],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        'always-on-top': ['id', 'name', 'control'],
        callback: 'ignore',
        multiline: 'first',
        shorthand: 'last'
      }
    ],
    "import/unambiguous": "warn",
    "no-console": "warn",
    "react/jsx-no-bind": "warn",
    'react/jsx-no-literals': 'warn',
    'react/no-array-index-key': 'warn',
  },
  settings: {
    react: {
      version: "18.0",
    }
  }
};
