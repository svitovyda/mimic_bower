# Test task to mimic bower.io using libraries.io
Romanna Koval

## Requires
- `node v20.10.0` (works on 18 too)
- `yarn v1.22.10`

## Uses
- `react` with `styled components` styling
- `webpack` module bundler with `babel` for `Typescript` compilation
- `yarn` package manager
- `jest` unit testing

## How to use
- run `yarn install` in the root
- set in your local environment value LIBRARIES_API_KEY=YOUR_KEY

`yarn start` to run in dev mode

`yarn build` or `yarn build:prod` to get the published version in the `output` folder.

`yarn test` to run unit tests

`yarn test:full` to get the code tests coverage report

`yarn rebuild` to completely clean the caches (yarn, jest) and other work and output files and rebuild the dependencies

`yarn compile` to check the TypeScript compilation (outputs nothing)

`yarn check` to run Lint and Prettier in a check mode

`yarn fix` to run Lint and Prettier in fix mode

## What can be improved
