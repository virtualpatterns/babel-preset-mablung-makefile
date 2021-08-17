export function Configuration( /* option */ ) {
  
  return {
    'failFast': true,
    'files': [
      'release/**/test/**/*.test.*'
    ],
    'require': [
      "@virtualpatterns/mablung-makefile/source-map-support"
    ],
    'verbose': true
  }

}
