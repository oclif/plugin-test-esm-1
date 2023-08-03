import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
  .stdout()
  .command(['esm1'])
  .it('runs esm1 cmd', ctx => {
    expect(ctx.stdout).to.contain('hello I am an ESM plugin')
  })
})
