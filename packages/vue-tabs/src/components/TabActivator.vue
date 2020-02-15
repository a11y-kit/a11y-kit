<template>
  <button 
    ref="button"
    :id="activatorID"
    :aria-selected="selected ? 'true' : 'false'"
    :aria-controls="panelID"
    :tabindex="selected ? null : -1"
    :disabled="disabled"
    :data-tab="tab"
    class="ak-vt__activator"
    role="tab"
    @keydown="onKeydown"
    @click="onClick"
    @focus="onFocus">
    <slot />
  </button>
</template>

<script>
import { TabEventBus } from '../eventBus'
import tabMixin from '../mixins/tab-mixin'

/**
 * A button which activates an associated tab.  A user can press
 * space or enter to activate the tab.
 */
export default {
  name: 'TabActivator',

  mixins: [tabMixin],

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  watch: {
    tab(newName) {
      this.unregister()
      this.$nextTick(this.register)
    },

    disabled(disabled) {
      if (disabled) {
        this.unregister()
      } else {
        this.register()
      }
    }
  },

  mounted() {
    if (!this.disabled) {
      this.register()
    }
  },

  destroyed() {
    this.unregister()
  },

  methods: {
    register() {
      this.busEmit('register', {
        ref: this.$refs.button
      })
    },

    unregister() {
      this.busEmit('unregister')
    },

    onFocus() {
      this.busEmit('focus')
    },

    onKeydown($event) {
      this.busEmit('keydown', { $event })
    },

    onClick() {
      this.busEmit('click')
    },

    busEmit(event, payload) {
      TabEventBus.$emit(event, {
        tab: this.tab,
        scope: this.scope,
        ...payload
      })
    }
  }
}
</script>

<style>
</style>
