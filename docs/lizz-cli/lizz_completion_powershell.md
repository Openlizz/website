---
title: "lizz completion powershell"
slug: /cli/lizz_completion_powershell
description: ""
---

# lizz completion powershell

## lizz completion powershell

Generate the autocompletion script for powershell

### Synopsis

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	lizz completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.


```
lizz completion powershell [flags]
```

### Options

```
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz completion](/docs/cli/lizz_completion/)	 - Generate the autocompletion script for the specified shell

