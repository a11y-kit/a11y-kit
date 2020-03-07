# Installation

::: tip
If you're planning on contributing (and please do!), you may want to familiarize yourself with [Chaser324's forking document](https://gist.github.com/Chaser324/ce0505fbed06b947d962).  Make sure you're working on a forked version of the project, not on the project itself.
:::

## Prerequisites

* [Node.js](https://nodejs.org/en/) - This project has been built on Node 12.x.  Development may work on earlier versions.  Feel free to try and update these docs with your results.
* [yarn](https://yarnpkg.com/) - At least 1.x.

::: warning
`yarn` _must_ be used in development, `npm` won't work here.  This project relies heavily on [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).
:::

## Installation
To work on a package, first clone the entire repository.
```sh
# Via SSH
git clone git@github.com:a11y-kit/a11y-kit.git

# OR via HTTPS
git clone https://github.com/a11y-kit/a11y-kit.git
```

Once cloned, install dependencies
```sh
# Change into the cloned repository
cd a11y-kit

# Install all dependencies
yarn
```

## Test

It's a good idea to immediately test the codebase to make sure you're starting in a good place.

```sh
# Test _all_ packages at once
yarn test
```

If all tests do not pass, make sure you're on the master branch and the project was successfully installed.  If you believe the setup was done correctly and the test failure is legitimate, open a [new issue](https://github.com/a11y-kit/a11y-kit/issues/new) and describe what's going on.

