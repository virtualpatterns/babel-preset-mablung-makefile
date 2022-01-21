import { createRequire as CreateRequire } from 'module'
import Babel from '@babel/core'
import Path from 'path'
import Test from 'ava'
import URL from 'url'

const Require = CreateRequire(import.meta.url)

const SourceFilePath = URL.fileURLToPath(import.meta.url).replace('/release/', '/source/')
const SourceFolderPath = Path.dirname(SourceFilePath).replace('/release/', '/source/')

Test('presets: [ \'...\' ] on index.cjs using transformSync', (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': SourceFolderPath,
    'filename': Path.resolve(SourceFolderPath, 'index.cjs'),
    'presets': [
      Require.resolve('@virtualpatterns/babel-preset-mablung-makefile')
    ]
  }

  let { code: actualCodeOut } = Babel.transformSync(codeIn, option)
  let expectedCodeOut = '"use strict";\n' +
                        '\n' +
                        'Object.defineProperty(exports, "__esModule", {\n' +
                        '  value: true\n' +
                        '});\n' +
                        'exports.OK = void 0;\n' +
                        'const OK = true;\n' +
                        'exports.OK = OK;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('presets: [ \'...\' ] on index.cjs using transformAsync', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': SourceFolderPath,
    'filename': Path.resolve(SourceFolderPath, 'index.cjs'),
    'presets': [
      Require.resolve('@virtualpatterns/babel-preset-mablung-makefile')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = '"use strict";\n' +
                        '\n' +
                        'Object.defineProperty(exports, "__esModule", {\n' +
                        '  value: true\n' +
                        '});\n' +
                        'exports.OK = void 0;\n' +
                        'const OK = true;\n' +
                        'exports.OK = OK;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('presets: [ \'...\' ] on index.js', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': SourceFolderPath,
    'filename': Path.resolve(SourceFolderPath, 'index.js'),
    'presets': [
      Require.resolve('@virtualpatterns/babel-preset-mablung-makefile')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'export const OK = true;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('presets: [ \'...\' ] on index.cjs', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': SourceFolderPath,
    'filename': Path.resolve(SourceFolderPath, 'index.cjs'),
    'presets': [
      [
        Require.resolve('@virtualpatterns/babel-preset-mablung-makefile')
      ]
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = '"use strict";\n' +
                        '\n' +
                        'Object.defineProperty(exports, "__esModule", {\n' +
                        '  value: true\n' +
                        '});\n' +
                        'exports.OK = void 0;\n' +
                        'const OK = true;\n' +
                        'exports.OK = OK;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})
