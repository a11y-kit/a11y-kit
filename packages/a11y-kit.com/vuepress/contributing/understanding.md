# Understanding

There's a lot going on here, but it's kinda real simple.

::: warning
This section is a work in progress.  Things haven't stabilized quite yet.
:::

## Architecture

a11y-kit is a [Lerna](https://github.com/lerna/lerna) monorepo that is tied together through [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).  This approach was chosen so that we can quickly publish packages that rely on other packages in the project, and make sure all packages work well together.
