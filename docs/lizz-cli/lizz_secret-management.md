---
title: "lizz secret-management"
slug: /cli/lizz_secret-management
description: ""
---

# lizz secret-management

## lizz secret-management

Configure secret management

### Synopsis

The secret-management command is used to configure Kubernetes secrets management with Mozilla SOPS. It generates a age key, store the public key in the fleet repository, and store the private key in a yaml file to apply it.

### Options

```
      --author-email string        author email for Git commits
      --author-name string         author name for Git commits (default "Lizz")
      --decryption-secret string   name of the secret containing the AGE secret key (default "sops-age")
      --fleet-branch string        Git branch of the fleet repository (default "main")
  -h, --help                       help for secret-management
  -o, --ouput string               output where to save the secret to apply (default "secret.yaml")
      --path string                path to the applications yaml file (default "cluster/applications.yaml")
      --private-key-file string    path to a private key file used for authenticating to the Git SSH server
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz](/docs/cli/lizz/)	 - 
* [lizz secret-management git](/docs/cli/lizz_secret-management_git/)	 - Configure secret management for any Git server
* [lizz secret-management github](/docs/cli/lizz_secret-management_github/)	 - Configure secret management for GitHub
* [lizz secret-management gitlab](/docs/cli/lizz_secret-management_gitlab/)	 - Configure secret management for GitLab

