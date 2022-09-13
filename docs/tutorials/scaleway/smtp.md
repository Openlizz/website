---
sidebar_position: 2
title: Setup SMTP server
---

# Setup SMTP server for the applications

Now that you have added applications to your cluster and that they are running correctly, you may have already noticed that the Nextcloud and Vaultwarden cannot send emails, when create a new user of forgot a password for example.

In this tutorial, you will add emails support to these application using [SendGrid](https://sendgrid.com/) and the [SMTP server application](https://github.com/Openlizz/application-smtp-server).

## Create SendGrid account

xxx

```
export DOMAIN=
export TOKEN=
```

## Change network rules to enable SMTP ports

By default, Scaleway blocks SMTP ports.
To be able to send emails using SendGrid, you need to change the network rules.
To do so, access the [instances' security groups page](https://console.scaleway.com/instance/security-groups) of the Scaleway console.
From here find the group which corresponds to your cluster, and in the rules tab update the rules as follows:

![security group rules tab screenshot](./img/smtp/rules.png)

## Add the SMTP server application

The [SMTP server application](https://github.com/Openlizz/application-smtp-server) is a very simple application that only contains the configuration of the SMTP server.
This configuration is used by other applications to be able to send emails.

```
lizz add github \
    --owner=$GITHUB_USER \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-smtp-server \
    --path=./ \
    --destination=smtp \
    --personal \
    --set-value host=smtp.sendgrid.net,secure=ssl,port=465,domain=$DOMAIN,smtpUsername=apikey,smtpPassword=$TOKEN
```

## Refresh the Nextcloud and Vaultwarden applications

You can now refresh the Nextcloud and the Vaultwarden applications to refresh their configurations to include the SMTP server configuration.
It is important to set the [Password](../../concepts/values#password) values when refreshing the applications to not create conflicts and avoid malfunction.

```
lizz refresh github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --name=nextcloud \
    --set-value adminPassword="G041xI8NR6tv"
    --personal

lizz refresh github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --name=vaultwarden \
    --set-value token="b0s23IhOhHRU913o5XmnYqMzg9PkWnaxkR6X79EIK6b5RpYZHPy6jV4CJH4vajkc"
    --personal
```

## Reconcile the repositories

With the previous lizz commands, the fleet repository changed and needs to be reconciled using the following command:

```
flux reconcile source git flux-system
```

However, you also changed the nextcloud and vaultwarden repositories with the refresh commands, so they need to be reconciled too:

```
flux reconcile -n nextcloud source git nextcloud
flux reconcile -n vaultwarden source git vaultwarden
```

You can wait for the pods to restart:

```
kubectl get pod --all-namespaces --watch
```

##
