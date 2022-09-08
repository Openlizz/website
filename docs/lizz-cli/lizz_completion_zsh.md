---
title: "lizz completion zsh"
slug: /cli/lizz_completion_zsh
description: ""
---

# lizz completion zsh

## lizz completion zsh

Generate the autocompletion script for zsh

### Synopsis

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

	echo "autoload -U compinit; compinit" >> ~/.zshrc

To load completions in your current shell session:

	source <(lizz completion zsh); compdef _lizz lizz

To load completions for every new session, execute once:

#### Linux:

	lizz completion zsh > "${fpath[1]}/_lizz"

#### macOS:

	lizz completion zsh > $(brew --prefix)/share/zsh/site-functions/_lizz

You will need to start a new shell for this setup to take effect.


```
lizz completion zsh [flags]
```

### Options

```
  -h, --help              help for zsh
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz completion](/docs/cli/lizz_completion/)	 - Generate the autocompletion script for the specified shell

