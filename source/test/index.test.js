import Test from 'ava'

import Configuration from '../index.cjs'

Test('index.cjs', (test) => {
  test.truthy(Configuration())
})
