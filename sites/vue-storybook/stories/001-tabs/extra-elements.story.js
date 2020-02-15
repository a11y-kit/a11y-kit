import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'

export const ExtraElements = () => ({
  components: { TabActivator, TabList, TabPanel, TabWrapper },
  data() {
    return {
      active: 'dogs'
    }
  },
  template: `
    <TabWrapper v-model="active" :auto-activate="false">

      <TabList label="Animals">
        <div>
          <TabActivator tab="dogs">Dogs <strong>Recommended</strong></TabActivator>
        </div>
        <span>
          <TabActivator tab="cats">Cats</TabActivator>
        </span>
        <TabActivator tab="birds">Birds</TabActivator>
      </TabList>

      <section>
        <TabPanel tab="dogs">
          This is the dogs tab.
          <table>
            <thead>
              <tr>
                <th>Breed</th><th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Poodle</td><td>5</td></tr>
              <tr><td>Dalmation</td><td>101</td></tr>
              <tr><td>Husky</td><td>7</td></tr>
            </tbody>
          </table>
        </TabPanel>
      </section>

      <TabPanel tab="cats">
        This is the cats tab
      </TabPanel>

      <TabPanel tab="birds">
        This is the birds tab
      </TabPanel>

    </TabWrapper>
  `
})
