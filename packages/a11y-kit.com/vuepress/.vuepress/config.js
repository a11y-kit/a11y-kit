module.exports = {
  title: 'a11y-kit',
  description: 'Documentation around the a11y-kit project and packages.',
  dest: 'dist',
  themeConfig: {
    sidebar: [
      {
        title: 'Home',
        path: '/',
        collapsable: false,
        children: [
          '/about',
        ]
      },
      {
        title: 'Packages',
        path: '/packages/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/packages/utils', 'utils'],
          ['/packages/vue-tabs', 'vue-tabs'],
        ]
      }
    ],
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/a11y-kit/a11y-kit'
      }
    ]
  }
}