---
sidebar_position: 0
title: Create the Kubernetes cluster
---

# Create the Kubernetes cluster with Rasberry Pis

The first step to create your homelab at home with Rasberry Pis is to create a Kubernetes cluster with your Rasberry Pis.

There are plenty of tutorials online to help you doing it.
You can follow the instructions of the [video from NetworkChuck](https://www.youtube.com/watch?v=X9fSMGkjtug&) which explains well how to build a [K3s](https://k3s.io/) cluster with Raspberry Pis. 
If you follow NetworkChuck's tutorial, stop after the installation of K3s (before installtion of Rancher).

## Connect external SSDs

If you connect external SSDs to your Rasberry Pis via USB, follow the following instructions on each Pi to make sure the SSDs will be recognized.

First, make sure the disk is connected by running `lsblk`.
The ouput should be similar to: 

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda           8:0    0 447.1G  0 disk
`-sda1        8:1    0 447.1G  0 part
mmcblk0     179:0    0  29.7G  0 disk
|-mmcblk0p1 179:1    0   256M  0 part /boot
`-mmcblk0p2 179:2    0  29.5G  0 part /
```

where `sda` corresponds to the SSD.

Secondly, create a folder to mount the SSD:

```
mkdir /media/external
```

Finally, mount the SSD automatically at boot time by running:

```
crontab -e
```

and by adding the following line (replace `/dev/sda1` if needed to adapt with your configuration):

```
@reboot sudo mount /dev/sda1 /media/external
```

To make this active, reboot the Pi by running: `sudo reboot`.

## Install `open-iscsi`

Later in this tutorial you will install [Longhorn](https://longhorn.io/) in your cluster to create persistent storages.
This application [requires `open-iscii` to be installed](https://longhorn.io/docs/archives/0.8.0/install/requirements/) in each Pi.
This can be done by running on each Pi:

```
sudo apt-get update;sudo apt-get install -y open-iscsi
```
