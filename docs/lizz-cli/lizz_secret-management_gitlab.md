## lizz secret-management gitlab



```
lizz secret-management gitlab [flags]
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

* [lizz secret-management](../lizz_secret-management/)	 - 

