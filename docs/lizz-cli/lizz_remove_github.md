## lizz remove github



```
lizz remove github [flags]
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
      --fleet-branch string       Git branch of the fleet repository (default "main")
      --name string               name of the application to remove
      --private-key-file string   path to a private key file used for authenticating to the Git SSH server
      --timeout duration          timeout for this operation (default 5m0s)
      --verbose                   print generated objects
```

### SEE ALSO

* [lizz remove](../lizz_remove/)	 - 

