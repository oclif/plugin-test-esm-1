import {Args, Command, Flags, Interfaces} from '@oclif/core'

type Result = {
  args: Interfaces.InferredArgs<typeof ESM1.args>
  flags: Interfaces.InferredFlags<typeof ESM1.flags>
}

export default class ESM1 extends Command {
  static args = {
    optionalArg: Args.string(),
    defaultArg: Args.string({
      default: 'simple string default',
    }),
    defaultFnArg: Args.string({
      default: async () => 'async fn default',
    }),
  }
  static enableJsonFlag = true
  static flags = {
    optionalString: Flags.string(),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    defaultFnString: Flags.string({
      default: async () => 'async fn default',
    }),
  }

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(ESM1)
    this.log(`hello I am an ESM plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
