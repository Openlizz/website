---
title: "lizz add github"
slug: /cli/lizz_add_github
description: ""
---

# lizz add github

## lizz add github

Add an application from and to GitHub

### Synopsis

The add github command is used to add a Lizz compatible application to the cluster when the 
	repositories are stored in GitHub. It updates the fleet GitHub repository with the new application and 
	creates a new GitHub repository for the new application.

```
lizz add github [flags]
```

### Examples

```
# Create a GitHub API token and export it as an env var
export GITHUB_TOKEN=<my-token>

# Add an application to a private repository using HTTPS token authentication
lizz add github \
	--owner=<organization> \
	--fleet=<repository name of the fleet repository> \
	--origin-url=<https github repository url of the application> \
	--path=<path to kustomization in application repository> \
	--destination=<repository name of the application>

# Add an application with the cluster-role (access to all namespaces)
lizz add github \
	--owner=<organization> \
	--fleet=<fleet repository name> \
	--origin-url=<application url> \
	--path=<path> \
	--destination=<application repository name> \
	--cluster-role

# Add an application with explicit values
lizz add github 
	--owner=<organization> \
	--fleet=<fleet repository name> \
	--origin-url=<application url> \
	--path=<path> \
	--destination=<application repository name> \
	--set-value <key1=val1,key2=val2 values>


# This command share many flags with the flux bootstrap github command. See https://fluxcd.io/flux/cmd/flux_bootstrap_github/ to have more example how to use the flags.
```

### Options

```
      --destination string   GitHub repository name where to push the application repository
      --fleet string         GitHub repository name of the fleet repository
  -h, --help                 help for github
      --hostname string      GitHub hostname (default "github.com")
      --owner string         GitHub user or organization name
      --personal             if true, the owner is assumed to be a GitHub user; otherwise an org
      --read-write-key       if true, the deploy key is configured with read/write permissions
      --reconcile            if true, the configured options are also reconciled if the repository already exists
      --team strings         GitHub team and the access to be given to it(team:maintain). Defaults to maintainer access if no access level is specified (also accepts comma-separated values)
```

### Options inherited from parent commands

```
      --author-email string                    author email for Git commits
      --author-name string                     author name for Git commits (default "Lizz")
      --ca-file string                         path to TLS CA file used for validating self-signed certificates
      --cluster-role                           if true, the service account used has permissions for the all cluster
      --decryption-secret string               name of the secret containing the AGE secret key (default "sops-age")
      --destination-branch string              Git branch of the destination repository (default "main")
      --fleet-branch string                    Git branch of the fleet repository (default "main")
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
      --timeout duration                       timeout for this operation (default 5m0s)
      --token-auth                             when enabled, the personal access token will be used instead of SSH deploy key
      --verbose                                print generated objects
```

### SEE ALSO

* [lizz add](/docs/cli/lizz_add/)	 - Add an application

