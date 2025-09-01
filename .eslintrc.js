// .eslintrc.js
module.exports = {
  // ... your existing config ...
  overrides: [
    {
      files: [
        "app/generated/prisma/client.js",
        "app/generated/prisma/default.js",
      ],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};
