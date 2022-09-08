---
title: "lizz init"
slug: /cli/lizz_init
description: ""
---

# lizz init

## lizz init

Initialize the fleet repository

### Synopsis

The init command is used to initialize the cluster by creating the fleet repository.

### Options

```
      --author-email string         author email for Git commits
      --author-name string          author name for Git commits (default "Lizz")
      --ca-file string              path to TLS CA file used for validating self-signed certificates
      --destination-branch string   Git branch of the destination repository (default "main")
  -h, --help                        help for init
      --origin-branch string        Git branch of the repository (default "main")
      --origin-url string           Git repository URL
      --private                     if true, the repository is setup or configured as private (default true)
      --private-key-file string     path to a private key file used for authenticating to the Git SSH server
      --ssh-hostname string         SSH hostname, to be used when the SSH host differs from the HTTPS one
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz](/docs/cli/lizz/)	 - 
* [lizz init git](/docs/cli/lizz_init_git/)	 - Initialize the fleet repository in any Git server
* [lizz init github](/docs/cli/lizz_init_github/)	 - Initialize the fleet repository in GitHub
* [lizz init gitlab](/docs/cli/lizz_init_gitlab/)	 - Initialize the fleet repository in GitLab

