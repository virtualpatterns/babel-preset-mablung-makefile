// module.exports = function (api, option) {

//   // "babel": {
//   //   "overrides": [
//   //     {},
//   //     {
//   //       "exclude": [
//   //         "source/header/",
//   //         "source/sandbox/",
//   //         "source/test/"
//   //       ],
//   //       "plugins": []
//   //     }
//   //   ]
//   // },

//   let configuration = require('@virtualpatterns/mablung-makefile/package.json').babel

//   let exclude = null
//   exclude = option.header?.exclude || []
//   exclude = Array.isArray(exclude) ? exclude : [ exclude ]
  
//   configuration.overrides[1].exclude.push(...exclude)

//   return configuration

// }
