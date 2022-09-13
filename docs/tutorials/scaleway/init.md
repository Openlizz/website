---
sidebar_position: 0
title: Initialize the cluster
---

# Initialize the Kubernetes cluster

Now that you have your cluster ready, you need to initialize it to work with Lizz

## Requirements

To initialize a cluster, you first need to have the [flux](https://fluxcd.io) and [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) CLIs installed.

## Export your credentials

Export your GitHub personal access token and username:

```bash
export GITHUB_TOKEN=<your-token>
export GITHUB_USER=<your-username>
```

## Create the fleet repository

The following command creates the fleet repository with the correct structure and content for Lizz and Flux:

```
lizz init github \
  --owner=$GITHUB_USER \
  --destination=fleet \
  --origin-url=https://github.com/openlizz/fleet \
  --personal
```

The output is similar to:

```
Initialize the cluster repository...
 ✓ Clone the cluster repository
 ✓ Create a new configuration for the cluster
 ✓ Create new repository
 ✓ Commit and push to the cluster repository
```

## Install Flux in your cluster

Run the Flux bootstrap command:

```
flux bootstrap github \
  --owner=$GITHUB_USER \
  --repository=fleet \
  --branch=main \
  --path=cluster \
  --personal
```

The output is similar to:

```
► connecting to github.com
► cloning branch "main" from Git repository
✔ cloned repository
► generating component manifests
✔ generated component manifests
✔ committed sync manifests to "main"
► pushing component manifests
► installing components in "flux-system" namespace
✔ installed components
✔ reconciled components
► determining if source secret "flux-system/flux-system" exists
► generating source secret
✔ public key: xxx
✔ configured deploy key "flux-system-main-flux-system-./cluster"
► applying source secret "flux-system/flux-system"
✔ reconciled source secret
► generating sync manifests
✔ generated sync manifests
✔ committed sync manifests to "main"
► pushing sync manifests
► applying sync manifests
✔ reconciled sync configuration
◎ waiting for Kustomization "flux-system/flux-system" to be reconciled
✔ Kustomization reconciled successfully
► confirming components are healthy
✔ helm-controller: deployment ready
✔ kustomize-controller: deployment ready
✔ notification-controller: deployment ready
✔ source-controller: deployment ready
✔ all components are healthy
```

## Configure Kubernetes secrets management

In order to store secrets safely in public or private Git repositories, Lizz uses Mozilla’s [SOPS](https://github.com/mozilla/sops).

Run the following command to configure secret management:

```
lizz secret-management github --owner=$GITHUB_USER --fleet=fleet
```

The output is similar to:

```
Configure secret management...
 ✓ Clone the cluster repository
 ✓ Open and read the cluster configuration file
 ✓ Configure the secret management
 ✓ Commit and push to the cluster repository
Run `kubectl apply -f secret.yaml` to apply the secret to the cluster
```

This command generates the `secret.yaml` file which contains the [age](https://github.com/FiloSottile/age) private key used to decrypt secrets.
You need to store the private key in your Kubernetes cluster by running:

```
kubectl apply -f secret.yaml
```

Keep safe the private key or the `secret.yaml` file as this is the **only** way to decrypt the secrets stored in the Git repositories.
You will need this key in case of a disaster to restore your cluster.
