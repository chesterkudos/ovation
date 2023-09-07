# Kudos Monorepo

## Getting Started

```sh
npm i -g pnpm # pnpm version 8.7.1
npm i -g nx # nx cli to call commands within the monrepo
pnpm i
```

### Make Sure Everything Works

_all commands go through **pnpm**, pnpm is another package manager like npm and yarn_

> See more about pnpm: https://pnpm.io/

This command will run through all the commands to make sure everything works as intended.

```sh
pnpm system-check
```

### Serving Apps

```sh
# this will serve all servable applications
pnpm serve

# this will serve only the app named kudos-react-app
pnpm serve:react-app
```

---

## Some NX Basics

NX Supports the following commands out of the box:

- `serve`
- `build`
- `lint`
- `test`

Meaning you can run these directly in your terminal through nx

```sh
nx run-many -t test # this will run the "test" command in all projects which define the command "test"
nx run kudos-react-app:lint --verbose # this will run the "lint" command in the kudos-react-app project
nx affected:build # this will run the "build" on all affected projects since the last commit
```

---

## Quick Overview

This project was created by running the following command:

```sh
npx create-nx-workspace@latest
```

Although you can still run any command through npx without installing nx globally. It is recommended you install NX globally. Here are the options for running an nx command:

```sh
# if installed nx globally
nx generate @nx/js:library

# if nx is not installed globally
npx nx generate @nx/js:library
```

## Convenient VS Code Plugin

[NX Console Plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

[Original NX README](./README-NX.md)

---

## Summary

This monorepo runs through NX. NX allows you to run common commands in multiple apps and libraries. Similar to create-react-app, you can create a react project. NX takes it a step further by allowing you to generate more than just a react project. See [here](https://nx.dev/packages/nest/generators/application) for more generators.

NX is more more than just a generator. It works works similar to Lerna were it allows you to run the same command in every project which defines it (build, test, lint, etc...). It also allows you have more granular control of these commands. For example a production build vs a development build.

For example if you want to build all the apps and libraries, you would would the command:

```sh
nx run-many -t build # will default to prod
nx run-many -t build:development # will build all apps in dev mode
nx run-many -t build:production # will build all apps in prod mode
nx run kudos-react-app:build:development # will build kudos-react-app only in dev mode
nx run kudos-react-app:build:production # will build kudos-react-app only in prod mode
```

This command is currently wrapped in npm so you can also run:

```sh
npm run build
```

NX also manages the dependency graph and **local caching**. If you have the following project setup:

```
-- Apps
  |-- App A
  |-- App B
  |-- App C
-- Libs
  |-- react-library
```

We have _"App A, B and C"_ and they all share library _"react-library"_. NX will know to build **react-library first** then the corresponding applications.

This also means if you only made a change to _App B_, and you run a build again, NX will use the cache output from the previous run (cache hit) of _react-library_ to build but will re-run a fresh build of _App B_ (cache miss) because changes would've been detected.

On the other side, if you make a change to _react-library_ all 3 apps (A,B and C) will be rebuilt because they all depend on that same library.

---

## Useful NX Commands

If the build seems broken or cache is out of sync, you can run this to clear all NX caches:

```sh
nx reset
```

To view the entire dependency tree/graph you run this command:

```sh
nx graph
```

![CleanShot 2023-08-30 at 14 45 38@2x](https://github.com/chesterkudos/ovation/assets/142827766/23072f39-170e-42e9-8c3b-0ccc05ba8fe5)

---

## Generators

You can use generators to generate a new app or library. You need to install the generator as a dev-dependency (`-D`) then you can run it throug nx cli.

Although, I would recommend after installing the generator to use the NX Console plugin for a GUI to walk through the steps.

### Create a new React Application

```sh
npm i @nx/react -D

nx g @nx/react:app
```

### Create a new Next Application

```sh
npm i @nx/next -D

nx g @nx/next:application
```

### Create a new JS/TS library

```sh
npm i @nx/js -D

nx g @nx/js:lib
```

---

## Move and Remove

### Move

```sh
nx g mv --project komponents --destination komponents-new-name
```

### Remove

```sh
nx g rm project-name
```
