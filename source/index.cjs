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
  //         "source/header/"
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

  let path = Path.resolve(`${__dirname}/../configuration/compile.json`)
  let configuration = FileSystem.readJsonSync(path, { 'encoding': 'utf-8' })

  let name = null

  name = configuration.overrides[0].presets[0][0]
  Assert.strictEqual(name, '@babel/preset-env')
  configuration.overrides[0].presets[0][0] = require('@babel/preset-env')

  name = configuration.overrides[1].plugins[0][0]
  Assert.strictEqual(name, 'babel-plugin-add-header-comment')
  configuration.overrides[1].plugins[0][0] = require('babel-plugin-add-header-comment')

  let exclude = null
  exclude = option.header?.exclude || []
  exclude = Is.array(exclude) ? exclude : [exclude]

  configuration.overrides[1].exclude = exclude

  return configuration

}
