---
title: "lizz refresh git"
slug: /cli/lizz_refresh_git
description: ""
---

# lizz refresh git

## lizz refresh git

Refresh an application from any Git server

### Synopsis

The refresh command is used to refresh an application already added to the Git cluster. It refreshs the
application configuration with the current cluster state. It can also update the application by using the latest
changes of the application origin Git repository.

```
lizz refresh git [flags]
```

### Options

```
      --fleet-url string   Git repository URL of the fleet repository
  -h, --help               help for git
  -p, --password string    basic authentication password
  -s, --silent             assumes the deploy key is already setup, skips confirmation
  -u, --username string    basic authentication username (default "git")
```

### Options inherited from parent commands

```
      --author-email string       author email for Git commits
      --author-name string        author name for Git commits (default "Lizz")
      --ca-file string            path to TLS CA file used for validating self-signed certificates
      --fleet-branch string       Git branch of the fleet repository (default "main")
      --name string               name of the application to refresh (default to the name of the application)
      --origin-branch string      Git branch of the application origin repository (default "main")
      --path string               path to kustomization in the application repository
      --private-key-file string   path to a private key file used for authenticating to the Git SSH server
      --set-value stringArray     set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)
      --ssh-hostname string       SSH hostname, to be used when the SSH host differs from the HTTPS one
      --timeout duration          timeout for this operation (default 5m0s)
      --upgrade origin-branch     if true, the application will be upgraded with the latest changes from the origin-branch Git branch
      --verbose                   print generated objects
```

### SEE ALSO

* [lizz refresh](/docs/cli/lizz_refresh/)	 - Refresh an application

