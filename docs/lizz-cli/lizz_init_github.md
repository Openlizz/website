---
title: "lizz init github"
slug: /cli/lizz_init_github
description: ""
---

# lizz init github

## lizz init github

Initialize the fleet repository in GitHub

### Synopsis

The init command is used to initialize the cluster by creating the fleet repository in GitHub.

```
lizz init github [flags]
```

### Examples

```
# Create a GitHub API token and export it as an env var
export GITHUB_TOKEN=<my-token>

# Initialize the fleet repository using HTTPS token authentication
lizz init github --owner=<organization> --destination=fleet --origin-url=https://github.com/openlizz/fleet

# Initialize the fleet repository using SSH authentication
lizz init github --owner=<organization> --destination=fleet --origin-url=ssh://git@github.com/openlizz/fleet

# Initialize the fleet repository to a public repository on a personal account
lizz init github --owner=<user> --destination=fleet --origin-url=https://github.com/openlizz/fleet --private=false --personal=true
```

### Options

```
      --destination string   GitHub repository name where to push the application repository
  -h, --help                 help for github
      --hostname string      GitHub hostname (default "github.com")
      --owner string         GitHub user or organization name
      --personal             if true, the owner is assumed to be a GitHub user; otherwise an org
      --reconcile            if true, the configured options are also reconciled if the repository already exists
      --team strings         GitHub team and the access to be given to it(team:maintain). Defaults to maintainer access if no access level is specified (also accepts comma-separated values)
```

### Options inherited from parent commands

```
      --author-email string         author email for Git commits
      --author-name string          author name for Git commits (default "Lizz")
      --ca-file string              path to TLS CA file used for validating self-signed certificates
      --destination-branch string   Git branch of the destination repository (default "main")
      --origin-branch string        Git branch of the repository (default "main")
      --origin-url string           Git repository URL
      --private                     if true, the repository is setup or configured as private (default true)
      --private-key-file string     path to a private key file used for authenticating to the Git SSH server
      --ssh-hostname string         SSH hostname, to be used when the SSH host differs from the HTTPS one
      --timeout duration            timeout for this operation (default 5m0s)
      --verbose                     print generated objects
```

### SEE ALSO

* [lizz init](/docs/cli/lizz_init/)	 - Initialize the fleet repository

