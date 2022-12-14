---
title: "lizz add"
slug: /cli/lizz_add
description: ""
---

# lizz add

## lizz add

Add an application

### Synopsis

The add command is used to add a Lizz compatible application to the cluster. It updates the 
fleet repository with the new application and creates a new repository for the new application.

### Options

```
      --author-email string                    author email for Git commits
      --author-name string                     author name for Git commits (default "Lizz")
      --ca-file string                         path to TLS CA file used for validating self-signed certificates
      --cluster-role                           if true, the service account used has permissions for the all cluster
      --decryption-secret string               name of the secret containing the AGE secret key (default "sops-age")
      --destination-branch string              Git branch of the destination repository (default "main")
      --fleet-branch string                    Git branch of the fleet repository (default "main")
  -h, --help                                   help for add
      --interval duration                      sync interval (default 1m0s)
      --name string                            name of the application to add (default to the name of the application)
      --namespace string                       namespace where to add the application (default to the name of the application)
      --origin-branch string                   Git branch of the application origin repository (default "main")
      --origin-url string                      Git repository URL where the application is located
      --path string                            path to kustomization in the application repository (default "./default")
      --private                                if true, the repository is setup or configured as private (default true)
      --private-key-file string                path to a private key file used for authenticating to the Git SSH server
      --set-value stringArray                  set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)
      --sourcesecret-name string               name of the source secret containing the credentials for the destination repository (default "sourcesecret")
      --ssh-ecdsa-curve ecdsaCurve             SSH ECDSA public key curve (p256, p384, p521)
      --ssh-hostname string                    SSH hostname, to be used when the SSH host differs from the HTTPS one
      --ssh-key-algorithm publicKeyAlgorithm   SSH public key algorithm (rsa, ecdsa, ed25519)
      --ssh-rsa-bits rsaKeyBits                SSH RSA public key bit size (multiplies of 8)
      --token-auth                             when enabled, the personal access token will be used instead of SSH deploy key
```

### Options inherited from parent commands

```
      --timeout duration   timeout for this operation (default 5m0s)
      --verbose            print generated objects
```

### SEE ALSO

* [lizz](/docs/cli/lizz/)	 - 
* [lizz add git](/docs/cli/lizz_add_git/)	 - Add an application from and to any Git server
* [lizz add github](/docs/cli/lizz_add_github/)	 - Add an application from and to GitHub
* [lizz add gitlab](/docs/cli/lizz_add_gitlab/)	 - Add an application from and to GitLab

