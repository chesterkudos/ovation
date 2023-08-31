const typescriptSpecifRules = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-inferrable-types": "off",
};

const sharedRules = {
  "no-extra-boolean-cast": "off",
  "no-mixed-spaces-and-tabs": "error",
  "no-nested-ternary": "error",
  "no-unneeded-ternary": "error",
};

module.exports = {
  root: true,
  ignorePatterns: ["**/*"],
  plugins: ["@nx"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
              },
            ],
          },
        ],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nx/typescript"],
      rules: {
        ...typescriptSpecifRules,
        ...sharedRules,
      },
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nx/javascript"],
      rules: {
        ...sharedRules,
      },
    },
  ],
};
