## lizz completion bash

Generate the autocompletion script for bash

### Synopsis

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

	source <(lizz completion bash)

To load completions for every new session, execute once:

#### Linux:

	lizz completion bash > /etc/bash_completion.d/lizz

#### macOS:

	lizz completion bash > $(brew --prefix)/etc/bash_completion.d/lizz

You will need to start a new shell for this setup to take effect.


```
lizz completion bash
```

### Options

```
  -h, --help              help for bash
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz completion](../lizz_completion/)	 - Generate the autocompletion script for the specified shell

