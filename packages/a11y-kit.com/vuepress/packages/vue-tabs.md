# @a11y-kit/vue-tabs

![Badge displaying current bundle size](https://badgen.net/bundlephobia/minzip/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/v/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/dw/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/license/@a11y-kit/vue-tabs)
![Badge displaying current release](https://badgen.net/npm/types/@a11y-kit/vue-tabs)

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

@a11y-kit/vue-tabs provides 4 components.  These components can be grouped together to create a set of tabs.  

::: tip
Take a look at our [Storybook](https://a11y-kit.com/vue-storybook/?path=/story/tabs--simplest-example) to see the tabs in action.  Note that these tabs have some rudimentary styling applied that is not available by default.  See [Styling](#styling) for more info.
:::

### Simplest example

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
      Cats are pretty neat too.  Here's some stuff about them!****
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

## Components

### TabWrapper

Wrapper component that must surround all other components.  Performs the bulk of the work behind the scenes.

Hook into the wrapper with `v-model` to keep track of a string that represents the currently open tab.  

When a user selects a new tab, the wrapper with emit an `activate` event with the name of the tab that has been opened.

#### TabWrapper Props

Prop | Type | Description
---|---|---
`active` | String | The current tab that is open.  This is hooked into `v-model`, it does not need to be supplied by itself, but can be used if `v-model` cannot for some reason.
`auto-activate` | Boolean | Determines if a tab should be opened as soon as the activator has focus (`true`) or if it should wait until it has been clicked / actioned (`false`).  This should generally be set to `true` unless you are loading async content or there is a delay on open.
`orientation` | String | `horizontal` or `vertical`.  Sets the orientation of the activators.  Note that this does not style anything - it only determines which keyboard arrows should move between tabs.  It also sets `aria-orientation`.
`rtl` | Boolean | If true, inverts left and right keys.
`scope` | String | If there are multiple tabs on the page, a scope will need to be set to identify which components should work together.

### TabList

Component that contains a list of Activators.  Performs the `tablist` role.

#### TabList Props

Prop | Type | Description
---|---|---
label | Aria label to be placed on the TabList.  Describes the purpose of the tabs.
`scope` | String | If there are multiple tabs on the page, a scope will need to be set to identify which components should work together.

### TabActivator

A button which activates a tab when actioned with a click/enter/spacebar press.  

The activator provides a slot where you should place your tabs label.  The slot does take any content, so feel free to add an icon, badge, or any other custom component.  Be careful to make sure the content is accessible and semantic.

When a users focus is on an Activator, they can press tab to immediately focus on the associated open panel.  They can navigate between activators with their arrow keys and the home/end button.  The `rtl` and `orientation` props on the TabWrapper determine which activator should receive focus.

#### TabActivator Props

Prop | Type | Description
---|---|---
`disabled` | Boolean | Disables the Activator if set to true.  Note that setting an active Activator to disabled will not change the tab, but will make it impossible to focus on any Activator.
`scope` | String | If there are multiple tabs on the page, a scope will need to be set to identify which components should work together.
`tab` | String | A unique identifier for this tab.  Tab names can be duplicated across scopes if you have multiple sets of Tab components on a page.  This identifier must have an associated panel.

### TabPanel

The panel which is shown when active.  Feel free to add any content in the panel, but take care to ensure it is accessible and semantic.

Prop | Type | Description
---|---|---
`scope` | String | If there are multiple tabs on the page, a scope will need to be set to identify which components should work together.
`tab` | String | A unique identifier for this tab.  Tab names can be duplicated across scopes if you have multiple sets of Tab components on a page.  This identifier must have an associated activator.

## Styling

The tab components are provided unstyled to allow you to theme without getting in the way.  The base tab functionality, including hiding and showing tabs, works using the HTML hidden attribute.

::: tip
We have some pre-built rudimentary styles available, which mostly add structure to the components.  Just add the following line to your `main.js` (or other entry file) to use:

```js
import '@a11y-kit/vue-tabs/styles/simple.css'
```

:::

Each component provides a class which you can either style globally, or through a [deep selector](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors) per implementation.

The available classes are:

Component | Class
---|---
TabActivator | `.ak-vt__activator`
TabList | `.ak-vt__list`
TabPanel | `.ak-vt__panel`
TapWrapper | `.ak-vt__wrapper`

The TabWrapper component will also add some classes for different permutations of props.  Add your props and take a look to see what is available.

Each TabPanel and TabActivator will also include their name as a data attribute.  Target them with `[data-tab="tab-name"]`.


## Accessibility Features

- Activators (buttons) and panels are linked by `aria-controls` and `aria-labelledby`
- Activators and panels have their appropriate `aria-role`s set
- Activators support keyboard navigation (arrow keys + home / end)
- Users can tab onto an activator and immediately into the associated tab
- Tabs can be activated by click, automatically on focus, or manually by pressing enter / space
- Non-active tabs are hidden natively
- `aria-orientation` is applied to the TabList to help identify which arrows a user should press.
