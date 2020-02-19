# @a11y-kit/vue-tabs

![Badge displaying current bundle size](https://badgen.net/bundlephobia/minzip/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/v/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/dw/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/license/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/types/@a11y-kit/vue-tabs)

A suite of *unstyled* components which can be used to build an accessible tabs interface.  The implementation is kept as close to the [WCAG example](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html) as possible, while making it friendly to use in a Vue environment.

[📖Full documentation](https://a11y-kit.com/packages/vue-tabs)

## Installation

```bash
yarn add @a11y-kit/vue-tabs
```

or

```bash
npm i @a11y-kit/vue-tabs
```

## Usage

```vue
<template>
  <TabWrapper v-model="activeTab">

    <TabList label="Animals">
      <TabActivator tab="dogs">Dogs</TabActivator>
      <TabActivator tab="cats">Cats</TabActivator>
    </TabList>

    <TabPanel tab="dogs">
      Dogs are pretty cool.  Here's some info about them.
    </TabPanel>
    <TabPanel tab="cats">
      Cats are pretty neat too.  Here's some stuff about them!
    </TabPanel>
  </TabWrapper>
</template>

<script>
import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'

export default {
  components: { TabActivator, TabList, TabPanel, TabWrapper },

  data() {
    return {
      activeTab: ''
    }
  }
}
</script>
```

[📖Full documentation](https://a11y-kit.com/packages/vue-tabs) | [More examples](https://a11y-kit.github.io/a11y-kit/vue-storybook)

