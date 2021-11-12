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
  //           {
  //              "header": [
  //                "!node release/header/index.js"
  //              ]
  //            }
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

  let content = null
  content = option.header?.content || [ '!npx --no-install --package @virtualpatterns/mablung-makefile mablung-makefile get-header' ]
  content = Is.array(content) ? content : [ content ]

  configuration.overrides[1].plugins[0][1].header = content

  return configuration

}
