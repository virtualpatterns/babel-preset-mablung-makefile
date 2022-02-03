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
  //     }
  //   ]
  // },

  let path = Path.resolve(__dirname, '../babel.config.json')
  let configuration = FileSystem.readJsonSync(path, { 'encoding': 'utf-8' })

  let packageName = null

  Assert.strictEqual(configuration.overrides[0].presets[0][0], '@babel/preset-env')
  (packageName = configuration.overrides[0].presets[0][0]) = require(packageName)

  return configuration

}
