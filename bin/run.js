#!/usr/bin/env node

// --loader ts-node/esm --no-warnings=ExperimentalWarning

(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'esm', dir: import.meta.url})
})()
