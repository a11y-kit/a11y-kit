import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'

export const OutsideControl = () => ({
  components: { TabActivator, TabList, TabPanel, TabWrapper },
  data() {
    return {
      active: '',
      activations: 0
    }
  },
  template: `
    <div>
      <button @click="active='dogs'">Activate dogs</button>
      <button @click="active='cats'">Activate cats</button>
      <button @click="active=''">Close all</button>
      <hr />
      <TabWrapper @activate="activations++" v-model="active">

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
      <hr />
      Active tab: {{ active }} <br />
      Activations (by component): {{ activations }}
    </div>
  `
})
