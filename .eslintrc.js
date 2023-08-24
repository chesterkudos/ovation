const sharedRules = {
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
