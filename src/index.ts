import ESM1 from './commands/esm1.js'
import hook from './hooks/init/init.js'

export const hooks = {
  init: hook,
}

export const commands = {
  esm1: ESM1,
}
