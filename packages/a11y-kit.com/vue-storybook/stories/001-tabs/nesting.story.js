import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'

export const NestedTabs = () => ({
  components: { TabActivator, TabList, TabPanel, TabWrapper },
  data() {
    return {
      activeAnimal: 'dogs',
      activeDog: 'poodle'
    }
  },
  template: `
    <TabWrapper v-model="activeAnimal" scope="animals">

      <TabList label="Animals" scope="animals">
        <TabActivator tab="dogs" scope="animals">Dogs</TabActivator>
        <TabActivator tab="cats" scope="animals">Cats</TabActivator>
        <TabActivator tab="birds" scope="animals">Birds</TabActivator>
      </TabList>

      <TabPanel tab="dogs" scope="animals">
        This is the dogs tab.  Select a breed.
        <TabWrapper v-model="activeDog" scope="canines" orientation="vertical">

          <TabList label="Dogs" scope="canines">
            <TabActivator tab="poodle" scope="canines">Poodle</TabActivator>
            <TabActivator tab="dalmation" scope="canines">Dalmation</TabActivator>
            <TabActivator tab="husky" scope="canines">Husky</TabActivator>
          </TabList>

          <TabPanel tab="poodle" scope="canines">
            Information on poodles
          </TabPanel>

          <TabPanel tab="dalmation" scope="canines">
            Information on dalmations
          </TabPanel>

          <TabPanel tab="husky" scope="canines">
            Information on huskies
          </TabPanel>

        </TabWrapper>

      </TabPanel>

      <TabPanel tab="cats" scope="animals">
        This is the cats tab
      </TabPanel>

      <TabPanel tab="birds" scope="animals">
        This is the birds tab
      </TabPanel>

    </TabWrapper>
  `
})
