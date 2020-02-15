import { withA11y } from '@storybook/addon-a11y'

export * from './001-tabs'

import '@a11y-kit/vue-tabs/styles/simple.css'

export default {
  title: 'Tabs',
  decorators: [withA11y]
}
