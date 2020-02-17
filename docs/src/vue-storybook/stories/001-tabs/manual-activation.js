import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'

export const RequireClick = () => ({
  components: { TabActivator, TabList, TabPanel, TabWrapper },
  data() {
    return {
      active: 'dogs'
    }
  },
  template: `
    <TabWrapper v-model="active" :auto-activate="false">

      <TabList label="Animals">
        <TabActivator tab="dogs">Dogs</TabActivator>
        <TabActivator tab="cats">Cats</TabActivator>
        <TabActivator tab="birds">Birds</TabActivator>
      </TabList>

      <TabPanel tab="dogs">
        This is the dogs tab
      </TabPanel>

      <TabPanel tab="cats">
        This is the cats tab
      </TabPanel>

      <TabPanel tab="birds">
        This is the birds tab
      </TabPanel>

    </TabWrapper>
  `
})
