## lizz secret-management



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

* [lizz](../lizz/)	 - 
* [lizz secret-management git](../lizz_secret-management_git/)	 - 
* [lizz secret-management github](../lizz_secret-management_github/)	 - 
* [lizz secret-management gitlab](../lizz_secret-management_gitlab/)	 - 

