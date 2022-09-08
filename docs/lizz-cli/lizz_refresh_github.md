---
title: "lizz refresh github"
slug: /cli/lizz_refresh_github
description: ""
---

# lizz refresh github

## lizz refresh github

Refresh an application from GitHub

### Synopsis

The refresh command is used to refresh an application already added to the GitHub cluster. It refreshs the
application configuration with the current cluster state. It can also update the application by using the latest
changes of the application origin GitHub repository.

```
lizz refresh github [flags]
```

### Examples

```
# Refresh an application to update its configuration regarding the current cluster state
lizz refresh github --owner=<group>  --fleet=<fleet repository name> --name=<application name>

# Refresh an application and upgrade it
lizz refresh github --owner=<group>  --fleet=<fleet repository name> --name=<application name> --upgrade
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

