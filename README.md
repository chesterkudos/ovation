
# Kudos Monorepo

This project was created by running the following command:

```sh
npx create-nx-workspace@latest
```

You should probably install nx globally

```sh
npm i nx -g
```

Although you can still run any command through npx without installing nx globally. For example an nx command could look like this:

```sh
# if installed nx globally
nx generate @nx/js:library

# if nx is not installed globally
npx nx generate @nx/js:library
```

----

## Intro

This monorepo runs through NX. NX allows you to run common commands in multiple apps and libraries. Similar to create-react-app, you can create a react project. NX takes it a step further by allow you to generate more than just a react project. See here for more generators.

Also more than just being a generator NX works similar to Lerna were it allows you to run the same command in every project which defines that command.

For example if you want to build all the apps and libraries, you would would the command:

```sh
nx run-many -t build
```

This command is currently wrapped in npm so you can also run:

```sh
npm run build
```

NX also manages the dependency graph and **local caching**. If you have the following project setup:

```
-- Apps
  |-- AppA
  |-- AppB
  |-- AppC
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

To view the entire dependency tree/graph you run this command:

```sh
nx graph
```

## Generators

### Create a new React Application

```sh
npm i @nx/react -D

nx g @nx/react:app new-app
```

### Create a new JS/TS library

```sh
npm i @nx/js -D

nx g @nx/js:lib js-lib

npx nx generate @nx/js:library --name=kudos-types --unitTestRunner=none --bundler=vite --compiler=swc --no-interactive
```

### Create a new React Application

```sh
npm i -D @nx/react

nx g @nx/react:app my-new-app
```

### Create a new React Application

```sh
npm i -D @nx/react

nx g @nx/react:app my-new-app
```

## Move and Remove

### Move

```sh
nx g @nx/workspace:move --project my-feature-lib --destination shared/my-feature-lib

nx g mv project-name
```

### Remove

```sh
nx g rm project-name
```
