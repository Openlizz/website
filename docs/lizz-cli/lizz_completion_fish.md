## lizz completion fish

Generate the autocompletion script for fish

### Synopsis

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

	lizz completion fish | source

To load completions for every new session, execute once:

	lizz completion fish > ~/.config/fish/completions/lizz.fish

You will need to start a new shell for this setup to take effect.


```
lizz completion fish [flags]
```

### Options

```
  -h, --help              help for fish
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz completion](../lizz_completion/)	 - Generate the autocompletion script for the specified shell

