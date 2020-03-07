# Developing

All packages should have a `dev` command which allows them to be run in development mode.  This mode watches for changes in the package and its dependencies.  When a change is detected the package is rebuilt.

Packages can be run in dev mode individually or all at once.  At this point in the project it makes sense to just run them all at once.  

```sh
# Run all packages at once
yarn dev

# OR run an individual package (e.g. vue-tabs)
yarn workspace @a11y-kit/vue-tabs dev
```

Some packages (like @a11y-kit/a11y-kit.com) may have multiple dev commands.  Take a look at the documentation in each in the [packages](./packages) section of the docs.