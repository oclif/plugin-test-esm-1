oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-esm-1
$ esm1 COMMAND
running command...
$ esm1 (--version)
@oclif/plugin-test-esm-1/0.8.74 linux-x64 node-v20.19.2
$ esm1 --help [COMMAND]
USAGE
  $ esm1 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`esm1 esm1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#esm1-esm1-optionalarg-defaultarg-defaultfnarg)
* [`esm1 help [COMMAND]`](#esm1-help-command)
* [`esm1 plugins`](#esm1-plugins)
* [`esm1 plugins:inspect PLUGIN...`](#esm1-pluginsinspect-plugin)
* [`esm1 plugins install PLUGIN`](#esm1-plugins-install-plugin)
* [`esm1 plugins link PATH`](#esm1-plugins-link-path)
* [`esm1 plugins reset`](#esm1-plugins-reset)
* [`esm1 plugins uninstall [PLUGIN]`](#esm1-plugins-uninstall-plugin)
* [`esm1 plugins update`](#esm1-plugins-update)

## `esm1 esm1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ esm1 esm1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/esm1.ts](https://github.com/oclif/plugin-test-esm-1/blob/0.8.74/src/commands/esm1.ts)_

## `esm1 help [COMMAND]`

Display help for esm1.

```
USAGE
  $ esm1 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for esm1.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.28/src/commands/help.ts)_

## `esm1 plugins`

List installed plugins.

```
USAGE
  $ esm1 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ esm1 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/index.ts)_

## `esm1 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ esm1 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ esm1 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/inspect.ts)_

## `esm1 plugins install PLUGIN`

Installs a plugin into esm1.

```
USAGE
  $ esm1 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into esm1.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ESM1_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ESM1_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ esm1 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ esm1 plugins install myplugin

  Install a plugin from a github url.

    $ esm1 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ esm1 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/install.ts)_

## `esm1 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ esm1 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ esm1 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/link.ts)_

## `esm1 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ esm1 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/reset.ts)_

## `esm1 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ esm1 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ esm1 plugins unlink
  $ esm1 plugins remove

EXAMPLES
  $ esm1 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/uninstall.ts)_

## `esm1 plugins update`

Update installed plugins.

```
USAGE
  $ esm1 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.40/src/commands/plugins/update.ts)_
<!-- commandsstop -->
