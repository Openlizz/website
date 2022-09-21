---
sidebar_position: 0
title: Commands in vrac
---

# Use Lizz to manage a Rasberry Pis cluster

## Create the cluster with Rasberry Pis

follow instruction of the following video: https://www.youtube.com/watch?v=X9fSMGkjtug&t=1s

https://longhorn.io/docs/archives/0.8.0/install/requirements/:

```
sudo apt-get update;sudo apt-get install -y open-iscsi
```

Make sure the disks are here by running `lsblk`:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda           8:0    0 447.1G  0 disk
`-sda1        8:1    0 447.1G  0 part
mmcblk0     179:0    0  29.7G  0 disk
|-mmcblk0p1 179:1    0   256M  0 part /boot
`-mmcblk0p2 179:2    0  29.5G  0 part /
```

```
mkdir /media/external
```

```
crontab -e
```

Add the line (replace `/dev/sda1` if needed to adapt with your configuration):

```
@reboot sudo mount /dev/sda1 /media/external
```

## Create new GitHub organization

Create a new org on Github to have all the repositories linked to the cluster in one place

## Use Lizz to initialize the cluster

```
lizz init github \
  --owner=$GITHUB_USER \
  --destination=fleet \
  --origin-url=https://github.com/openlizz/fleet

flux bootstrap github \
  --owner=$GITHUB_USER \
  --repository=fleet \
  --branch=main \
  --path=cluster

lizz secret-management github --owner=$GITHUB_USER --fleet=fleet

kubectl apply -f secret.yaml
```

## Install Longhorn to manage volumes

```
lizz add github \
    --owner=$GITHUB_USER \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-longhorn \
    --path=./default \
    --destination=longhorn \
    --cluster-role

flux reconcile source git flux-system
```

Check pods:

```
kubectl -n longhorn-system get pods
```

Output:

```
NAME                                           READY   STATUS    RESTARTS      AGE
longhorn-conversion-webhook-74679ff5cb-g8z8z   1/1     Running   0             33m
longhorn-conversion-webhook-74679ff5cb-fzbwp   1/1     Running   0             33m
longhorn-ui-5c5dfcf6f9-bc7jn                   1/1     Running   0             33m
longhorn-admission-webhook-77795bf954-58lk4    1/1     Running   0             33m
longhorn-admission-webhook-77795bf954-nlj6k    1/1     Running   0             33m
instance-manager-e-ac823c7d                    1/1     Running   0             32m
instance-manager-r-471404dd                    1/1     Running   0             32m
longhorn-manager-kz6dg                         1/1     Running   0             33m
longhorn-manager-lk7fd                         1/1     Running   0             33m
longhorn-manager-5p9cq                         1/1     Running   1 (32m ago)   33m
longhorn-manager-7zg9x                         1/1     Running   1 (32m ago)   33m
instance-manager-r-a3d6577b                    1/1     Running   0             32m
instance-manager-e-5767282f                    1/1     Running   0             32m
instance-manager-r-9a39569b                    1/1     Running   0             32m
instance-manager-e-a77ad366                    1/1     Running   0             32m
longhorn-driver-deployer-6676887758-lvz4v      1/1     Running   0             33m
instance-manager-r-575a9609                    1/1     Running   0             32m
instance-manager-e-b53afa1f                    1/1     Running   0             32m
engine-image-ei-df38d2e5-h86v7                 1/1     Running   0             32m
engine-image-ei-df38d2e5-bckff                 1/1     Running   0             32m
engine-image-ei-df38d2e5-z8xcc                 1/1     Running   0             32m
engine-image-ei-df38d2e5-ggnh9                 1/1     Running   0             32m
csi-resizer-7c5bb5fd65-zjsn8                   1/1     Running   0             32m
csi-resizer-7c5bb5fd65-2g88g                   1/1     Running   0             32m
csi-attacher-dcb85d774-b6w7w                   1/1     Running   0             32m
csi-provisioner-5d8dd96b57-7z78z               1/1     Running   0             32m
longhorn-csi-plugin-9278b                      2/2     Running   0             32m
longhorn-csi-plugin-d7d4n                      2/2     Running   0             32m
csi-snapshotter-5586bc7c79-4zntq               1/1     Running   0             32m
csi-snapshotter-5586bc7c79-pdqlv               1/1     Running   0             32m
csi-snapshotter-5586bc7c79-ktjkl               1/1     Running   0             32m
csi-attacher-dcb85d774-kxkvc                   1/1     Running   0             32m
csi-provisioner-5d8dd96b57-9hkr5               1/1     Running   0             32m
csi-resizer-7c5bb5fd65-q75gd                   1/1     Running   0             32m
longhorn-csi-plugin-p5dcw                      2/2     Running   0             32m
longhorn-csi-plugin-b4kpd                      2/2     Running   0             32m
csi-provisioner-5d8dd96b57-hv5mh               1/1     Running   0             32m
csi-attacher-dcb85d774-4wzqv                   1/1     Running   0             32m
```

```
kubectl -n longhorn-system port-forward svc/longhorn-frontend 8000:80
```

Access Longhorn frontend http://localhost:8000/ and configure nodes to add ssd disks

Change default Storageclass

```
kubectl get storageclass
```

You should see:

```
NAME                   PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
local-path (default)   rancher.io/local-path   Delete          WaitForFirstConsumer   false                  20h
longhorn (default)     driver.longhorn.io      Delete          Immediate              true                   116m
```

Mark local-path storage class as non-default:

```
kubectl patch storageclass local-path -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

```
kubectl get storageclass
```

You should see:

```
NAME                 PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
longhorn (default)   driver.longhorn.io      Delete          Immediate              true                   116m
local-path           rancher.io/local-path   Delete          WaitForFirstConsumer   false                  20h
```

## Install Nginx ingress controller

```
lizz add github \
  --owner=$GITHUB_USER \
  --fleet=fleet \
  --origin-url=https://github.com/openlizz/application-nginx \
  --path=./nodeport \
  --destination=nginx \
  --cluster-role

flux reconcile source git flux-system
```

Check pods:

```
kubectl -n ingress-nginx get pods
```

Output:

```
NAME                                       READY   STATUS      RESTARTS   AGE
ingress-nginx-admission-create-grxm4       0/1     Completed   0          97s
ingress-nginx-admission-patch-2v84b        0/1     Completed   1          97s
ingress-nginx-controller-b7b55cccc-t7qv7   1/1     Running     0          97s
```

## Add applications

```
lizz add github \
    --owner=$GITHUB_USER \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-domain-name \
    --path=./ \
    --destination=domain-name \
    --set-value value="home.cluster"

lizz add github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-photoprism \
    --path=./default \
    --destination=photoprism

lizz add github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-nextcloud \
    --path=./default \
    --destination=nextcloud

lizz add github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-vaultwarden \
    --path=./default \
    --destination=vaultwarden

lizz add github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-homer \
    --path=./default \
    --destination=homer

flux reconcile source git flux-system
```

Check everything is installed:

```
kubectl get helmreleases -A
```

```
NAMESPACE         NAME          AGE     READY   STATUS
longhorn-system   longhorn      6h13m   True    Release reconciliation succeeded
homer             homer         5h21m   True    Release reconciliation succeeded
photoprism        photoprism    5h22m   True    Release reconciliation succeeded
nextcloud         nextcloud     3h10m   True    Release reconciliation succeeded
vaultwarden       vaultwarden   80m     True    Release reconciliation succeeded
```

You can also watch the pods and wait for them to start:

```
kubectl get pods -A --watch
```

## HTTPS

### Generate certificate

https://betterprogramming.pub/how-to-create-trusted-ssl-certificates-for-your-local-development-13fd5aad29c6

```
cat > v3.ext <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
# Local hosts
DNS.1 = home.cluster
DNS.2 = *.home.cluster
EOF
```

```
openssl req -new -nodes -newkey rsa:4096 \
  -keyout HOME-CLUSTER-CA.key -out HOME-CLUSTER-CA.csr \
  -subj "/CN=HOME-CLUSTER-CA"
```

```
openssl x509 -req -sha512 -days 365 \
  -extfile v3.ext \
  -CA ca.crt -CAkey ca.key -CAcreateserial \
  -in HOME-CLUSTER-CA.csr \
  -out HOME-CLUSTER-CA.crt
```

```
export TLS_CRT=$(cat HOME-CLUSTER-CA.crt | base64)
export TLS_KEY=$(cat HOME-CLUSTER-CA.key | base64)
```

```
lizz add github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-cert-manager \
    --path=./default \
    --destination=cert-manager \
    --cluster-role

lizz add github \
    --owner=$GITHUB_USER  \
    --fleet=fleet \
    --origin-url=https://github.com/openlizz/application-cluster-issuer \
    --path=./ca \
    --destination=cluster-issuer \
    --cluster-role \
    --set-value b64crt=$TLS_CRT \
    --set-value b64key=$TLS_KEY

flux reconcile source git flux-system
```
