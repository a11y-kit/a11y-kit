# @a11y-kit/utils

![Badge displaying current bundle size](https://badgen.net/bundlephobia/minzip/@a11y-kit/utils)
![Badge displaying current release](https://badgen.net/npm/v/@a11y-kit/utils)
![Badge displaying weekly downloads](https://badgen.net/npm/dw/@a11y-kit/utils)
![Badge displaying license](https://badgen.net/npm/license/@a11y-kit/utils)
![Badge displaying types availability](https://badgen.net/npm/types/@a11y-kit/utils)

A suite of utils to aid accessible development. Used primarily by other packages in the @a11y-kit namespace, but feel free to use directly in your projects.

## Installation

```bash
yarn add @a11y-kit/utils
```

or

```bash
npm i @a11y-kit/utils
```

## Usage

```js
import { orderNodes } from '@a11y-kit/utils`
```

## Available utils

### orderNodes

Orders an array of Nodes by document position.  Used when handling many nodes and you want to make sure you are interacting with them in the correct order.

```js
import { orderNodes } from '@a11y-kit/utils`

const foo = document.getElementById('foo')
const bar = document.getElementById('bar')

const sorted = [foo, bar].sort(orderNodes)
```

