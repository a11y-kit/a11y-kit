import { TabEventBus } from '../eventBus'

export default {
  props: {
    tab: {
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
      selected: false
    }
  },

  computed: {
    panelID() {
      return this.tab + '-panel'
    },

    activatorID() {
      return this.tab + '-activator'
    }
  },

  created() {
    TabEventBus.$on('activate', this.onActivate)
  },

  destroyed() {
    TabEventBus.$off('activate', this.onActivate)
  },

  methods: {
    onActivate({ tab, scope }) {
      if (scope === this.scope) {
        this.selected = tab === this.tab
      }
    }
  }
}
