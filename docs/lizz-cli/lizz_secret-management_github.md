---
title: "lizz secret-management github"
slug: /cli/lizz_secret-management_github
description: ""
---

# lizz secret-management github

## lizz secret-management github

Configure secret management for GitHub

### Synopsis

The secret-management command is used to configure Kubernetes secrets management with Mozilla SOPS. It generates a age key, store the public key in the GitHub fleet repository, and store the private key in a yaml file to apply it.

```
lizz secret-management github [flags]
```

### Examples

```
# Configure secret management
lizz secret-management github --owner=<group>  --fleet=<fleet repository name>
kubectl apply -f secret.yaml
```

### Options

```
      --fleet string      GitHub repository name of the fleet repository
  -h, --help              help for github
      --hostname string   GitHub hostname (default "github.com")
      --owner string      GitHub user or organization name
      --personal          f true, the owner is assumed to be a GitHub user; otherwise an org
      --reconcile         if true, the configured options are also reconciled if the repository already exists
      --team strings      GitHub team and the access to be given to it(team:maintain). Defaults to maintainer access if no access level is specified (also accepts comma-separated values)
```

### Options inherited from parent commands

```
      --author-email string        author email for Git commits
      --author-name string         author name for Git commits (default "Lizz")
      --decryption-secret string   name of the secret containing the AGE secret key (default "sops-age")
      --fleet-branch string        Git branch of the fleet repository (default "main")
  -o, --ouput string               output where to save the secret to apply (default "secret.yaml")
      --path string                path to the applications yaml file (default "cluster/applications.yaml")
      --private-key-file string    path to a private key file used for authenticating to the Git SSH server
      --timeout duration           timeout for this operation (default 5m0s)
      --verbose                    print generated objects
```

### SEE ALSO

* [lizz secret-management](/docs/cli/lizz_secret-management/)	 - Configure secret management

