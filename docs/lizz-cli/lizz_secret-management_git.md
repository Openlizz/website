---
title: "lizz secret-management git"
slug: /cli/lizz_secret-management_git
description: ""
---

# lizz secret-management git

## lizz secret-management git

Configure secret management for any Git server

### Synopsis

The secret-management command is used to configure Kubernetes secrets management with Mozilla SOPS. It generates a age key, store the public key in the fleet repository, and store the private key in a yaml file to apply it.

```
lizz secret-management git [flags]
```

### Options

```
      --fleet-url string   Git repository URL of the fleet repository
  -h, --help               help for git
  -p, --password string    basic authentication password
  -u, --username string    basic authentication username (default "git")
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

