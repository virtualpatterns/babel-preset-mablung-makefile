import { Package } from './library/package.js'
import Is from '@pwn/is'

export default (api, option) => {

  // "babel": {
  //   "overrides": [
  //     {
  //     },
  //     {
  //       "exclude": [
  //         "source/header/**/*",
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

  let configuration = Package.babel

  let exclude = null
  exclude = option.header?.exclude || []
  exclude = Is.array(exclude) ? exclude : [ exclude ]

  configuration.overrides[1].exclude.push(...exclude)

  return configuration

}
