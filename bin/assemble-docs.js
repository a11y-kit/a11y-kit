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

const DOCS_PATH_VUE_STORYBOOK = path.resolve(DOCS_ROOT, 'vue-storybook')
fs.emptyDir(DOCS_PATH_VUE_STORYBOOK)
fs.copySync(VUE_STORYBOOK_PATH, DOCS_PATH_VUE_STORYBOOK)
