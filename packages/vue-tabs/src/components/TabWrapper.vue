<template>
  <div 
    ref="wrapper" 
    :class="classes"
    :dir="rtl ? 'rtl' : 'ltr'"
    class="ak-vt__wrapper"
  >
    <slot />
  </div>
</template>

<script>
import { TabEventBus } from '../eventBus'

export default {
  name: 'TabWrapper',

  model: {
    prop: 'active',
    event: 'activate'
  },

  props: {
    active: {
      type: String,
      required: true,
      default: ''
    },

    orientation: {
      type: String,
      required: false,
      default: 'horizontal',
      validator: val => ['vertical', 'horizontal'].includes(val)
    },

    rtl: {
      type: Boolean,
      required: false,
      default: false
    },

    autoActivate: {
      type: Boolean,
      required: false,
      default: true
    },

    scope: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {
      activators: []
    }
  },

  computed: {
    isHorizontal() {
      return this.orientation === 'horizontal'
    },

    classes() {
      const classes = {
        ['auto-activate']: this.autoActivate,
        ['rtl']: this.rtl,
        [`orientation-${this.orientation}`]: true,
        [`no-active-tab`]: this.active === '',
        [`active-tab-${this.active}`]: this.active !== '',
        [`no-scope`]: this.scope === '',
        [`scope-${this.scope}`]: this.scope !== ''
      }

      return Object.keys(classes).reduce(
        (acc, key) => ({
          ...acc,
          [`ak-vt__wrapper--${key}`]: classes[key]
        }),
        {}
      )
    }
  },

  watch: {
    active(tab) {
      TabEventBus.$emit('activate', { tab, scope: this.scope })
    },

    orientation(orientation) {
      TabEventBus.$emit('set-orientation', { orientation, scope: this.scope })
    }
  },

  created() {
    TabEventBus.$on('focus', this.onFocus)
    TabEventBus.$on('keydown', this.onKeydown)
    TabEventBus.$on('click', this.onClick)
    TabEventBus.$on('register', this.onRegister)
    TabEventBus.$on('unregister', this.onUnregister)
  },

  destroyed() {
    TabEventBus.$off('focus', this.onFocus)
    TabEventBus.$off('keydown', this.onKeydown)
    TabEventBus.$off('click', this.onClick)
    TabEventBus.$off('register', this.onRegister)
    TabEventBus.$off('unregister', this.onUnregister)
  },

  mounted() {
    TabEventBus.$emit('set-orientation', {
      orientation: this.orientation,
      scope: this.scope
    })

    TabEventBus.$emit('activate', { tab: this.active, scope: this.scope })
  },

  methods: {
    emitActivation(tab) {
      if (tab !== this.active) this.$emit('activate', tab)
    },
    // Event Handlers
    // =====================================================
    onFocus(event) {
      if (event.scope === this.scope && this.autoActivate) {
        this.emitActivation(event.tab)
      }
    },

    onKeydown({ tab, scope, $event }) {
      if (scope === this.scope) {
        switch ($event.key) {
          case 'Left':
          case 'ArrowLeft':
            this.onLeft()
            break

          case 'Right':
          case 'ArrowRight':
            this.onRight()
            break

          case 'Up':
          case 'ArrowUp':
            this.onUp()
            break

          case 'Down':
          case 'ArrowDown':
            this.onDown()
            break

          case 'Home':
            this.onHome()
            break

          case 'End':
            this.onEnd()
            break
        }
      }
    },

    onClick(event) {
      if (event.scope === this.scope) {
        this.emitActivation(event.tab)
      }
    },

    onRegister({ tab, scope, ref, disabled }) {
      if (scope === this.scope) {
        // Remove the tab from the list if present
        this.removeActivator(tab)

        // Add the activator to the list
        this.activators.push({ tab, ref, disabled })

        // Resort the list
        this.sortActivators()
      }
    },

    onUnregister({ tab, scope }) {
      if (scope === this.scope) {
        this.removeActivator(tab)
      }
    },

    // Activator management
    // =====================================================
    sortActivators() {
      this.activators.sort((a, b) => {
        if (
          a.ref.compareDocumentPosition(b.ref) &
          Node.DOCUMENT_POSITION_FOLLOWING
        ) {
          return -1
        }

        if (
          a.ref.compareDocumentPosition(b.ref) &
          Node.DOCUMENT_POSITION_PRECEDING
        ) {
          return 1
        }

        return 0
      })
    },

    removeActivator(tab) {
      this.activators = this.activators.filter(act => act.tab !== tab)
    },

    focusFirstActivator() {
      if (this.activators.length) this.activators[0].ref.focus()
    },

    focusLastActivator() {
      if (this.activators.length)
        this.activators[this.activators.length - 1].ref.focus()
    },

    focusNextActivator() {
      const currentFocus = this.activators.findIndex(
        act => act.ref === document.activeElement
      )

      if (currentFocus !== -1 && currentFocus + 1 < this.activators.length) {
        this.activators[currentFocus + 1].ref.focus()
      }
    },

    focusPreviousActivator() {
      const currentFocus = this.activators.findIndex(
        act => act.ref === document.activeElement
      )

      if (currentFocus !== -1 && currentFocus !== 0) {
        this.activators[currentFocus - 1].ref.focus()
      }
    },

    // Activator keydowns
    // =====================================================
    onRight() {
      if (this.isHorizontal) {
        if (this.rtl) {
          this.focusPreviousActivator()
          return
        }
        this.focusNextActivator()
      }
    },

    onLeft() {
      if (this.isHorizontal) {
        if (this.rtl) {
          this.focusNextActivator()
          return
        }

        this.focusPreviousActivator()
      }
    },

    onUp() {
      if (!this.isHorizontal) this.focusPreviousActivator()
    },

    onDown() {
      if (!this.isHorizontal) this.focusNextActivator()
    },

    onHome() {
      if (!this.isHorizontal) {
        this.focusFirstActivator()
        return
      }

      this.rtl ? this.focusLastActivator : this.focusFirstActivator()
    },

    onEnd() {
      if (!this.isHorizontal) {
        this.focusLastActivator()
        return
      }

      this.rtl ? this.focusFirstActivator : this.focusLastActivator()
    }
  }
}
</script>

<style>
</style>
