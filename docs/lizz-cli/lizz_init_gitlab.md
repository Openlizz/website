## lizz init gitlab



```
lizz init gitlab [flags]
```

### Options

```
      --destination string   GitLab repository name where to push the application repository
  -h, --help                 help for gitlab
      --hostname string      GitLab hostname (default "gitlab.com")
      --owner string         GitLab user or group name
      --personal             if true, the owner is assumed to be a GitLab user; otherwise a group
      --reconcile            if true, the configured options are also reconciled if the repository already exists
      --team strings         GitLab teams to be given maintainer access (also accepts comma-separated values)
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

* [lizz init](../lizz_init/)	 - 

