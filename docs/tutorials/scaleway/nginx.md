---
sidebar_position: 0
title: Setup Ingress controller
---

# Setup the Ingress-NGINX controller

Now that your cluster is initialized to work with Lizz, you can start adding applications.

## Add the Ingress controller

The first application we need is the [Ingress Nginx controller](https://github.com/Openlizz/application-nginx) to be able to expose the other applications on a public IP address.

Run the following command to add Nginx to your cluster:

```
lizz add github \
  --owner=$GITHUB_USER \
  --fleet=fleet \
  --origin-url=https://github.com/openlizz/application-nginx \
  --path=./default \
  --destination=nginx \
  --cluster-role \
  --personal
```

## Check the deployment

Reconcile the fleet repository to deploy the application directly:

```
flux reconcile source git flux-system
```

The Ingress Nginx controller is being installed in your cluster and you can check it by running:

```
kubectl -n ingress-nginx get pod
```

After some time, the output should be similar to:

```
NAME                                        READY   STATUS    RESTARTS   AGE
ingress-nginx-controller-686556747b-pk5nh   1/1     Running   0          35s
```

## Obtain public IP address

When the pod is ready, run the following command to obtain the public IP address of your load balancer created by the Nginx application:

```
kubectl -n ingress-nginx get svc ingress-nginx-controller
```

The output is similar to:

```
NAME                       TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                      AGE
ingress-nginx-controller   LoadBalancer   10.42.141.173   51.159.207.124   80:31203/TCP,443:32595/TCP   3m40s
```

The `EXTERNAL-IP` is the public IP address of your load balancer.

Store it in an environment variable for future use:

```
export LB_IP=$(kubectl -n ingress-nginx get svc ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
```
