import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('esm1', () => {
  it('runs esm1 cmd', async () => {
    const {stdout} = await runCommand(['esm1'])
    expect(stdout).to.contain('hello I am an ESM plugin')
  })
})
