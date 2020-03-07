# Testing

The testing strategy is still a work in process.  The solution should include the following:

1. A single test command should run all packages unit tests
2. Unit tests should test against the current state of other packages, not their published state
3. E2E tests should be run on multiple browsers
4. Jest and Cypress should be used for all tests
5. Config files for tests should be unique per project, but similar enough to easily understand what is unique
6. Merges to master and publishes should require running all unit and e2e tests.

In the meantime, unit tests are setup.  They are all run with

```sh
yarn test
```
