const Clone = require('clone')
const Is = require('@pwn/is')

const Package = require('../package.json')

module.exports = function (api, option) {

  // {
  //   "overrides": [
  //     {
  //       "include": [
  //         "source/**/*.cjs"
  //       ],
  //       "presets": [
  //         [
  //           "@babel/preset-env",
  //           {
  //             "targets": {
  //               "node": "current"
  //             }
  //           }
  //         ]
  //       ]
  //     },
  //     {
  //       "exclude": [
  //         "source/header/**/*"
  //       ],
  //       "plugins": [
  //         [
  //           "babel-plugin-add-header-comment",
  //           {
  //             "header": [
  //               "!node release/header/index.js"
  //             ]
  //           }
  //         ]
  //       ]
  //     }
  //   ]
  // },

  let configuration = Clone(Package.babel)

  configuration.overrides[1].exclude = []

  let name = null
  name = configuration.overrides[0].presets[0][0]

  // console.log(`configuration.overrides[0].presets[0][0] = require('${name}')`)
  configuration.overrides[0].presets[0][0] = require(name)

  let exclude = null
  exclude = option.header?.exclude || []
  exclude = Is.array(exclude) ? exclude : [ exclude ]

  // console.log(`configuration.overrides[1].exclude.push('${exclude.join('\', \'')}')`)
  configuration.overrides[1].exclude.push('source/header', ...exclude)

  name = configuration.overrides[1].plugins[0][0]

  // console.log(`configuration.overrides[1].plugins[0][0] = require('${name}')`)
  configuration.overrides[1].plugins[0][0] = require(name)

  return configuration

}
