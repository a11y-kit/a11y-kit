const fs = require('fs-extra')
const path = require('path')

const DOCS_ROOT = path.resolve(__dirname, '..', 'docs')

const DOCS_DIST = path.join(DOCS_ROOT, 'dist')
const DOCS_SRC = path.resolve(DOCS_ROOT, 'src')

// Clean out dist
if (fs.existsSync(DOCS_DIST)) {
  fs.emptyDirSync(DOCS_DIST)
} else {
  fs.mkdirpSync(DOCS_DIST)
}

// Copy homepage placeholder
fs.copySync(
  path.resolve(DOCS_SRC, 'index.html'),
  path.resolve(DOCS_DIST, 'index.html')
)

// Copy vue storybook
fs.copySync(
  path.resolve(DOCS_SRC, 'vue-storybook', 'dist'),
  path.resolve(DOCS_DIST, 'vue-storybook')
)
