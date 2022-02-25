import Assert from 'assert'
import FileSystem from 'fs-extra'
import Json from 'json5'
import Path from 'path'

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

  let configuration = Json.parse(FileSystem.readFileSync(Path.resolve(__dirname, '../babel.config.json'), { 'encoding': 'utf-8' }))

  Assert.strictEqual(configuration.overrides[0].presets[0][0], '@babel/preset-env')
  configuration.overrides[0].presets[0][0] = require('@babel/preset-env')

  return configuration

}
