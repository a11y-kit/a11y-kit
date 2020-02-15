<template>
  <div 
    :aria-label="label"
    :aria-orientation="orientation"
    class="ak-vt__list"
    role="tablist"
  >
    <slot />
  </div>
</template>

<script>
import { TabEventBus } from '../eventBus'

export default {
  name: 'TabList',

  props: {
    label: {
      type: String,
      required: true
    },

    scope: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {
      orientation: 'horizontal'
    }
  },

  created() {
    TabEventBus.$on('set-orientation', this.setOrientation)
  },

  destroyed() {
    TabEventBus.$off('set-orientation', this.setOrientation)
  },

  methods: {
    setOrientation({ scope, orientation }) {
      if (scope === this.scope) {
        this.orientation = orientation
      }
    }
  }
}
</script>

<style>
</style>
