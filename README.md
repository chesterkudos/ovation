
# Kudos Monorepo

This monorepo is runs through NX. NX allows you to run common commands in multiple apps and libraries. For example if you want to build all the apps and libraries, you would would the command:

```
nx run-many -t build
```

This command is wrapped in npm so you can also run:

```
npm run build
```

NX also manages the dependency graph and local caching. Meaning if we have _"App A, B, C"_ and they all share library _"react-library"_. NX will know to build **react-library first** then the corresponding application.

This also means if you only made a change to _App B_ for example, and you run a build or serve command again, NX will use the cache output from the previous run (cache hit) of _react-library_ to build but will re-run a fresh build of _App B_ (cache miss) because changes would've been detected.

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

meaning you can run these directly in your terminal through nx

```
nx run-many -t serve
nx run-many -t lint
nx run-many -t test
```

To view the entire dependency tree/graph you run this command:

```
nx graph
```
