---
title: "lizz refresh gitlab"
slug: /cli/lizz_refresh_gitlab
description: ""
---

# lizz refresh gitlab

## lizz refresh gitlab

Refresh an application from GitLab

### Synopsis

The refresh command is used to refresh an application already added to the GitLab cluster. It refreshs the
application configuration with the current cluster state. It can also update the application by using the latest
changes of the application origin GitLab repository.

```
lizz refresh gitlab [flags]
```

### Examples

```
# Refresh an application to update its configuration regarding the current cluster state
lizz refresh gitlab --owner=<group>  --fleet=<fleet repository name> --name=<application name>

# Refresh an application and upgrade it
lizz refresh gitlab --owner=<group>  --fleet=<fleet repository name> --name=<application name> --upgrade
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

