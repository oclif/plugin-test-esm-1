import {Command} from '@oclif/core'

export default class ESM1 extends Command {
  async run(): Promise<void> {
    this.log(`hello I am an ESM plugin from ${this.config.root}!`)
  }
}
