---
title: "lizz remove"
slug: /cli/lizz_remove
description: ""
---

# lizz remove

## lizz remove

Remove an application

### Synopsis

The remove command is used to remove an application added to the cluster.

### Options

```
      --author-email string       author email for Git commits
      --author-name string        author name for Git commits (default "Lizz")
      --fleet-branch string       Git branch of the fleet repository (default "main")
  -h, --help                      help for remove
      --name string               name of the application to remove
      --private-key-file string   path to a private key file used for authenticating to the Git SSH server
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz](/docs/cli/lizz/)	 - 
* [lizz remove git](/docs/cli/lizz_remove_git/)	 - Remove an application from any Git server
* [lizz remove github](/docs/cli/lizz_remove_github/)	 - Remove an application from GitHub
* [lizz remove gitlab](/docs/cli/lizz_remove_gitlab/)	 - Remove an application from GitLab

