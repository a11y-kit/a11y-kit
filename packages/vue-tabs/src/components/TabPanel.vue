<template>
  <div 
    :id="panelID"
    :aria-labelledby="activatorID"
    :hidden="selected ? null : ''"
    :data-tab="tab"
    class="ak-vt__panel"
    tabindex="0"
    role="tabpanel">
    <slot />
  </div>
</template>

<script>
import tabMixin from '../mixins/tab-mixin'

export default {
  name: 'TabPanel',
  mixins: [tabMixin]
}
</script>

<style>
</style>
