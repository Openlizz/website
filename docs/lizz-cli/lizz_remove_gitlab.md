---
title: "lizz remove gitlab"
slug: /cli/lizz_remove_gitlab
description: ""
---

# lizz remove gitlab

## lizz remove gitlab

Remove an application from GitLab

### Synopsis

The remove command is used to remove an application already added to the GitLab cluster. The remove command does not delete the application repository.

```
lizz remove gitlab [flags]
```

### Examples

```
# Remove an application from the cluster
lizz remove gitlab --owner=<group>  --fleet=<fleet repository name> --name=<application name>
```

### Options

```
      --fleet string      GitLab repository name where to push the application repository
  -h, --help              help for gitlab
      --hostname string   GitLab hostname (default "gitlab.com")
      --owner string      GitLab user or group name
      --personal          if true, the owner is assumed to be a GitLab user; otherwise a group
      --reconcile         if true, the configured options are also reconciled if the repository already exists
      --team strings      GitLab teams to be given maintainer access (also accepts comma-separated values)
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

