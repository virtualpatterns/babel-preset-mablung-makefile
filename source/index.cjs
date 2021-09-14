const Assert = require('assert')
const FileSystem = require('fs-extra')
const Is = require('@pwn/is')
const Path = require('path')

module.exports = function (api, option) {

  // {
  //   "overrides": [
  //     {
  //       "presets": [
  //         [
  //           "@babel/preset-env",
  //           {}
  //         ]
  //       ]
  //     },
  //     {
  //       "exclude": [
  //       ],
  //       "plugins": [
  //         [
  //           "babel-plugin-add-header-comment",
  //           {}
  //         ]
  //       ]
  //     }
  //   ]
  // },

  let path = Path.resolve(`${__dirname}/../babel.config.json`)
  let configuration = FileSystem.readJsonSync(path, { 'encoding': 'utf-8' })

  Assert.strictEqual(configuration.overrides[0].presets[0][0], '@babel/preset-env')
  configuration.overrides[0].presets[0][0] = require('@babel/preset-env')

  Assert.strictEqual(configuration.overrides[1].plugins[0][0], 'babel-plugin-add-header-comment')
  configuration.overrides[1].plugins[0][0] = require('babel-plugin-add-header-comment')

  let exclude = null
  exclude = option.header?.exclude || []
  exclude = Is.array(exclude) ? exclude : [ exclude ]

  configuration.overrides[1].exclude = exclude

  return configuration

}
