---
title: "lizz remove github"
slug: /cli/lizz_remove_github
description: ""
---

# lizz remove github

## lizz remove github

Remove an application from GitHub

### Synopsis

The remove command is used to remove an application already added to the GitHub cluster. The remove command does not delete the application repository.

```
lizz remove github [flags]
```

### Examples

```
# Remove an application from the cluster
lizz remove github --owner=<group>  --fleet=<fleet repository name> --name=<application name>
```

### Options

```
      --fleet string      GitHub repository name of the fleet repository
  -h, --help              help for github
      --hostname string   GitHub hostname (default "github.com")
      --owner string      GitHub user or organization name
      --personal          if true, the owner is assumed to be a GitHub user; otherwise an org
      --reconcile         if true, the configured options are also reconciled if the repository already exists
      --team strings      GitHub team and the access to be given to it(team:maintain). Defaults to maintainer access if no access level is specified (also accepts comma-separated values)
```

### Options inherited from parent commands

```
      --author-email string       author email for Git commits
      --author-name string        author name for Git commits (default "Lizz")
      --fleet-branch string       Git branch of the fleet repository (default "main")
      --name string               name of the application to remove
      --private-key-file string   path to a private key file used for authenticating to the Git SSH server
      --timeout duration          timeout for this operation (default 5m0s)
      --verbose                   print generated objects
```

### SEE ALSO

* [lizz remove](/docs/cli/lizz_remove/)	 - Remove an application

