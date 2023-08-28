\*\*\*\*# Kudos Monorepo

This project was created by running the following command:

```sh
npx create-nx-workspace@latest
```

You should probably install nx globally

```sh
npm i nx -g
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

---

## Intro

This monorepo runs through NX. NX allows you to run common commands in multiple apps and libraries. Similar to create-react-app, you can create a react project. NX takes it a step further by allowing you to generate more than just a react project. See [here](https://nx.dev/packages/nest/generators/application) for more generators.

NX is more more than just a generator. It works works similar to Lerna were it allows you to run the same command in every project which defines it (build, test, lint, etc...). It also allows you have more granular control of these commands. For example a production build vs a development build.

For example if you want to build all the apps and libraries, you would would the command:

```sh
nx run-many -t build # will default to prod
nx run-many -t build:development # will build all apps in dev mode
nx run-many -t build:production # will build all apps in prod mode
nx run web-app:build:development # will build web-app only in dev mode
nx run web-app:build:production # will build web-app only in prod mode
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

## Getting Started

```sh
npm i

# this will serve all servable applications
npm run serve
```

NX Supports the following commands out of the box:

- `serve`
- `build`
- `lint`
- `test`

Meaning you can run these directly in your terminal through nx

```sh
nx run-many -t serve
nx run-many -t lint
nx run-many -t test
```

## Useful NX Commands

If the build seems broken or cache is out of sync, you can run this to clear all NX caches:

```sh
nx reset
```

To view the entire dependency tree/graph you run this command:

```sh
nx graph
```

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
nx g @nx/workspace:move --project my-feature-lib --destination shared/my-feature-lib
```

### Remove

```sh
nx g rm project-name
```
