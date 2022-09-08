---
sidebar_position: -1
title: Create a Kubernetes cluster
---

# Create a Kubernetes cluster locally

This guide shows how to create a Kubernetes cluster locally using [Kubernetes kind](https://kind.sigs.k8s.io/docs/user/quick-start/).

## Requirements

You need to have kind installed. Please refer to the [official documentation](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).

Run `kind version` to make sure kind is correctly installed.

You also need to have the [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) CLIs installed.

## Create the Kubernetes cluster locally

You can now create the Kubernetes cluster locally using the following command:

```
cat <<EOF | kind create cluster --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
EOF
```

This creates a cluster which allows the deployement of an ingress controller.
You will need this in the next guides.

Check the installation with the following command:

```
kubectl get nodes
```

The output is similar to:

```
NAME                 STATUS   ROLES           AGE   VERSION
kind-control-plane   Ready    control-plane   10m   v1.24.0
```

## Next

Your have a Kubernetes cluster locally 🥳

You can now [initialize it](./init) to work with Lizz.
