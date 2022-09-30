---
sidebar_position: 2
title: Setup Ingress management
---

# Setup the Ingress-NGINX controller and certificates

Now that your cluster is initialized to work with Lizz and the volume configured, you can start adding applications.
Firstly, you can setup the Infress-NGINX controller and the certificates to access the cluster through HTTPS.

## Add the Ingress controller

The first application we need is the Ingress Nginx controller to be able to expose the other applications on a public IP address.
As you do not have a load balancer, the Ingress controller is using a [NodePort service](https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#over-a-nodeport-service).

Run the following command to add Nginx to your cluster:

```
lizz add github \
  --owner=$GITHUB_ORG \
  --fleet=fleet \
  --origin-url=https://github.com/openlizz/application-nginx \
  --path=./nodeport \
  --destination=nginx \
  --cluster-role
```

Reconcile the fleet repository to deploy the application:

```
flux reconcile source git flux-system
```

You can check the pods are correctly running:

```
kubectl -n ingress-nginx get pods
```

After a couple of minutes, the output should be:

```
NAME                                       READY   STATUS      RESTARTS   AGE
ingress-nginx-admission-create-grxm4       0/1     Completed   0          97s
ingress-nginx-admission-patch-2v84b        0/1     Completed   1          97s
ingress-nginx-controller-b7b55cccc-t7qv7   1/1     Running     0          97s
```

## Configure certificate management

The [cert-manager application](https://github.com/Openlizz/application-cert-manager) installed the [cert-manager helm chart](https://cert-manager.io/docs/installation/helm/) in your cluster.
It is a certificate controller for Kubernetes and will allow you to obtain a TLS certificate to enable HTTPS.

The [cluster-issuer application](https://github.com/Openlizz/application-cluster-issuer) is coupled with the cert-manager application and installed the [cluster issuer](https://cert-manager.io/docs/configuration/) of your choice depending on the `--path` used.
As the Rasberry Pis cluster is in a private network, you can use a [CA issuer using a SelfSigned certificate](https://cert-manager.io/docs/configuration/ca/#deployment) with the `./selfsigned_ca` path.

```
lizz add github \
    --owner=$GITHUB_ORG  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-cert-manager \
    --path=./default \
    --destination=cert-manager \
    --cluster-role

lizz add github \
    --owner=$GITHUB_ORG  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-cluster-issuer \
    --path=./selfsigned_ca \
    --destination=cluster-issuer \
    --cluster-role
```

Again, reconcile the fleet repository to deploy the application using Flux:

```
flux reconcile source git flux-system
```

Check the cluster issuer are ready with the following command:

```
kubectl -n cert-manager get clusterissuers.cert-manager.io
```

After a couple of minutes, the output should be:

```
NAME                READY   AGE
selfsigned-issuer   True    81m
cluster-issuer      True    81m
```

The SelfSigned certificate is stored in a secret:

```
kubectl -n cert-manager get secrets ca-key-pair
```

The output is:

```
NAME          TYPE                DATA   AGE
ca-key-pair   kubernetes.io/tls   3      82m
```

## Trusting the certificate

To avoid warnings in your browser, the SelfSigned certificate has to be trusted in your machine.

First of all, you can export the certificate in a file using the following command:

```
kubectl get secrets -n cert-manager ca-key-pair -o 'go-template={{index .data "ca.crt"}}' | base64 -d > ca.crt
```

This creates a `ca.crt` file on your file system which contains the certificate.

Trusting the CA certificate is a process that varies across operating systems.
The process is well explained on [this blog post](https://betterprogramming.pub/how-to-create-trusted-ssl-certificates-for-your-local-development-13fd5aad29c6#ee40).

For macOS, you need to import the file in keychain and "Trust" the certificate in its settings.
