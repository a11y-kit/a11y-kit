const fs = require('fs-extra')
const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '..')

const DOCS_ROOT = path.resolve(PROJECT_ROOT, 'docs')

const VUE_STORYBOOK_PATH = path.resolve(
  PROJECT_ROOT,
  'sites',
  'vue-storybook',
  'dist'
)

fs.copySync(VUE_STORYBOOK_PATH, path.resolve(DOCS_ROOT, 'vue-storybook'))
