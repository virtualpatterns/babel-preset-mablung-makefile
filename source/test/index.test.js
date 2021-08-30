import { createRequire as CreateRequire } from 'module'
import Babel from '@babel/core'
import Path from 'path'
import Test from 'ava'
import URL from 'url'

import { Package } from './library/package.js'

const FilePath = URL.fileURLToPath(import.meta.url)
const FolderPath = Path.dirname(FilePath)
const Require = CreateRequire(import.meta.url)

Test('presets: [ index.cjs ] on index.cjs using transformSync', (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': FolderPath,
    'filename': 'source/test/resource/index.cjs',
    'presets': [
      Require.resolve('../index.cjs')
    ]
  }

  let { code: actualCodeOut } = Babel.transformSync(codeIn, option)
  let expectedCodeOut = '/**\n' +
                        '* \n' +
                        '* Package:     @virtualpatterns/babel-preset-mablung-makefile\n' +
                        '* Description: TBD\n' +
                        `* Version:     ${Package.version}\n` +
                        '* License:     GPL-3.0+\n' +
                        '* Author:      virtualpatterns.com <code@virtualpatterns.com> (http://www.virtualpatterns.com)\n' +
                        '* Repository:  https://github.com/virtualpatterns/babel-preset-mablung-makefile\n' +
                        '* Source:      undefined\n' +
                        '* \n' +
                        '**/\n' +
                        '"use strict";\n' +
                        '\n' +
                        'Object.defineProperty(exports, "__esModule", {\n' +
                        '  value: true\n' +
                        '});\n' +
                        'exports.OK = void 0;\n' +
                        '\n' +
                        'const OK = true;\n' +
                        'exports.OK = OK;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('presets: [ index.cjs ] on index.cjs using transformAsync', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': FolderPath,
    'filename': 'source/test/resource/index.cjs',
    'presets': [
      Require.resolve('../index.cjs')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = '/**\n' +
                        '* \n' +
                        '* Package:     @virtualpatterns/babel-preset-mablung-makefile\n' +
                        '* Description: TBD\n' +
                        `* Version:     ${Package.version}\n` +
                        '* License:     GPL-3.0+\n' +
                        '* Author:      virtualpatterns.com <code@virtualpatterns.com> (http://www.virtualpatterns.com)\n' +
                        '* Repository:  https://github.com/virtualpatterns/babel-preset-mablung-makefile\n' +
                        '* Source:      undefined\n' +
                        '* \n' +
                        '**/\n' +
                        '"use strict";\n' +
                        '\n' +
                        'Object.defineProperty(exports, "__esModule", {\n' +
                        '  value: true\n' +
                        '});\n' +
                        'exports.OK = void 0;\n' +
                        '\n' +
                        'const OK = true;\n' +
                        'exports.OK = OK;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('presets: [ index.cjs ] on index.js', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': FolderPath,
    'filename': 'source/test/resource/index.js',
    'presets': [
      Require.resolve('../index.cjs')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = '/**\n' +
                        '* \n' +
                        '* Package:     @virtualpatterns/babel-preset-mablung-makefile\n' +
                        '* Description: TBD\n' +
                        `* Version:     ${Package.version}\n` +
                        '* License:     GPL-3.0+\n' +
                        '* Author:      virtualpatterns.com <code@virtualpatterns.com> (http://www.virtualpatterns.com)\n' +
                        '* Repository:  https://github.com/virtualpatterns/babel-preset-mablung-makefile\n' +
                        '* Source:      undefined\n' +
                        '* \n' +
                        '**/\n' +
                        '\n' +
                        'export const OK = true;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('presets: [ index.cjs, { header: { exclude: \'...\' } } ] on index.cjs', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': FolderPath,
    'filename': 'source/test/resource/index.cjs',
    'presets': [
      [
        Require.resolve('../index.cjs'),
        {
          'header': {
            'exclude': 'source/test/resource/index.cjs'
          }
        }
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

Test('presets: [ index.cjs, { header: { exclude: [ ... ] } } ] on index.js', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': FolderPath,
    'filename': 'source/test/resource/index.js',
    'presets': [
      [
        Require.resolve('../index.cjs'),
        {
          'header': {
            'exclude': [
              'source/test/resource/index.js'
            ]
          }
        }
      ]
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'export const OK = true;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})
