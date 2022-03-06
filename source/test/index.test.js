import Babel from '@babel/core'
import Path from 'path'
import Test from 'ava'
import URL from 'url'

const ReleaseFolderPath = Path.dirname(URL.fileURLToPath(import.meta.url))
const SourceFolderPath = ReleaseFolderPath.replace('/release/', '/source/')

// Test('index.cjs using transformSync', (test) => {

//   let codeIn = 'export const OK = true'
//   let option = {
//     'root': SourceFolderPath,
//     'filename': Path.resolve(SourceFolderPath, 'index.cjs'),
//     'presets': [
//       '@virtualpatterns/babel-preset-mablung-makefile'
//     ]
//   }

//   let { code: actualCodeOut } = Babel.transformSync(codeIn, option)
//   let expectedCodeOut = '"use strict";\n' +
//                         '\n' +
//                         'Object.defineProperty(exports, "__esModule", {\n' +
//                         '  value: true\n' +
//                         '});\n' +
//                         'exports.OK = void 0;\n' +
//                         'const OK = true;\n' +
//                         'exports.OK = OK;'

//   // test.log(actualCodeOut)
//   test.is(actualCodeOut, expectedCodeOut)

// })

// Test('index.cjs using transformAsync', async (test) => {

//   let codeIn = 'export const OK = true'
//   let option = {
//     'root': SourceFolderPath,
//     'filename': Path.resolve(SourceFolderPath, 'index.cjs'),
//     'presets': [
//       '@virtualpatterns/babel-preset-mablung-makefile'
//     ]
//   }

//   let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
//   let expectedCodeOut = '"use strict";\n' +
//                         '\n' +
//                         'Object.defineProperty(exports, "__esModule", {\n' +
//                         '  value: true\n' +
//                         '});\n' +
//                         'exports.OK = void 0;\n' +
//                         'const OK = true;\n' +
//                         'exports.OK = OK;'

//   // test.log(actualCodeOut)
//   test.is(actualCodeOut, expectedCodeOut)

// })

Test('index.cjs', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': SourceFolderPath,
    'filename': Path.resolve(SourceFolderPath, 'index.cjs'),
    'presets': [
      '@virtualpatterns/babel-preset-mablung-makefile'
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

Test('index.js', async (test) => {

  let codeIn = 'export const OK = true'
  let option = {
    'root': SourceFolderPath,
    'filename': Path.resolve(SourceFolderPath, 'index.js'),
    'presets': [
      '@virtualpatterns/babel-preset-mablung-makefile'
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'export const OK = true;'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})
