# `@a11y-kit/vue-tabs`

A suite of *unstyled* components which can be used to build an accessible tabs interface.  The implementation is kept as close to the [WCAG example](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html) as possible, while making it friendly to use in a Vue environment.

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

## Styling

The tab components are provided unstyled to allow you to theme without getting in the way.  The base tab functionality, including hiding and showing tabs, works using the HTML hidden attribute.

Each component provides a class which you can either style globally, or through a [deep selector](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors) per implementation.

The available classes are:

Component | Class
---|---
TabActivator | `.ak-vt__activator`
TabList | `.ak-vt__list`
TabPanel | `.ak-vt__panel`
TapWrapper | `.ak-vt__wrapper`

## Accessibility Features

- Activators (buttons) and panels are linked by `aria-controls` and `aria-labelledby`
- Activators and panels have their appropriate `aria-role`s set
- Activators support keyboard navigation (arrow keys + home / end)
- Users can tab onto an activator and immediately into the associated tab
- Tabs can be activated by click, automatically on focus, or manually by pressing enter / space
- Non-active tabs are hidden natively
