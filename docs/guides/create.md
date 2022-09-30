---
sidebar_position: 4
title: Create a Lizz-compatible application
---

# Create a Lizz-compatible application

A Lizz-compatible application is a Git repository that contains the manifest templates of the application.
When added, the application templates are rendered using values from the cluster and therefore the application is deployed with the best configuration possible.
Once rendered, the Lizz-compatible application corresponds to a [tenant repository](https://github.com/fluxcd/flux2-multi-tenancy/tree/dev-team) in the [multi-tenancy setup](http://localhost:3000/docs/concepts/multi_tenancy#multi-tenancy).

This guide explains the main steps to create a Lizz-compatible application.
You can also have a look at the [existing applications](/applications/) before creating yours.

## Create the repository

As already said, a Lizz-compatible application is a Git repository.
Therefore the first step to create one is to create a repository on GitHub or GitLab.

## Create the `lizz.yaml` file

At the root of the repository, every Lizz-compatible application needs to have its configuration file named `lizz.yaml`.

This file contains the following.

### Application information

First, the configuration file contains basic information about the application and its deployement.
You have to define the name of the application, and can overwrite the namespace and the service account name used.

```yaml title="lizz.yaml"
name: <name of the application, required>
namespace: <namespace where to deploy the application, default to name>
serviceAccountName: <service account name used to deploy the application, default to name>
```

### Values

Second, it contains all the values needed to render the application.
To know all the available values, refeer to the [Values page of the documentation](http://localhost:3000/docs/concepts/values).

The values can later be used to render the applications templates but also the rest of the configuration file itself.

For example, here are the values of the [Vaultwarden application](https://github.com/Openlizz/application-vaultwarden/blob/main/lizz.yaml):

```yaml title="lizz.yaml"
values:
  applicationDependencies:
    - name: isNginxInstalled
      repository: github.com/openlizz/application-nginx
    - name: isCertManagerInstalled
      repository: github.com/openlizz/application-cert-manager
    - name: isClusterIssuerInstalled
      repository: github.com/openlizz/application-cluster-issuer
    - name: isPostgresqlInstalled
      repository: github.com/openlizz/application-postgresql
    - name: isSmtpServerInstalled
      repository: github.com/openlizz/application-smtp-server
    - name: isDomainInstalled
      repository: github.com/openlizz/application-domain-name
  clusterValues:
    - name: nginxName
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-nginx" }}{{.Name}}{{ end }}{{ end }}'
    - name: nginxNamespace
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-nginx" }}{{.Configuration.Namespace}}{{ end }}{{ end }}'
    - name: certManagerName
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-cert-manager" }}{{.Name}}{{ end }}{{ end }}'
    - name: certManagerNamespace
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-cert-manager" }}{{.Configuration.Namespace}}{{ end }}{{ end }}'
    - name: clusterIssuerName
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-cluster-issuer" }}{{.Configuration.Name}}{{ end }}{{ end }}'
    - name: clusterIssuerNamespace
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-cluster-issuer" }}{{.Configuration.Namespace}}{{ end }}{{ end }}'
    - name: postgresqlName
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-postgresql" }}{{.Configuration.Name}}{{ end }}{{ end }}'
    - name: postgresqlNamespace
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-postgresql" }}{{.Configuration.Namespace}}{{ end }}{{ end }}'
    - name: smtpServerName
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-smtp-server" }}{{.Configuration.Name}}{{ end }}{{ end }}'
    - name: smtpServerNamespace
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-smtp-server" }}{{.Configuration.Namespace}}{{ end }}{{ end }}'
    - name: domainName
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-domain-name" }}{{.Configuration.Name}}{{ end }}{{ end }}'
    - name: domainNamespace
      template: '{{ range .Applications }}{{ if eq .Configuration.Repository "github.com/openlizz/application-domain-name" }}{{.Configuration.Namespace}}{{ end }}{{ end }}'
  applicationValues:
    - name: domain
      repository: github.com/openlizz/application-domain-name
      path: configmap.yaml
      keys: ["data", "value"]
    - name: smtpSecure
      repository: github.com/openlizz/application-smtp-server
      path: base/configmap.yaml
      keys: ["data", "secure"]
  applicationSecrets:
    - destinationPath: base/postgres_secret.yaml
      originPath: base/secret.yaml
      kustomizationPath: base/kustomization.yaml
      repository: github.com/openlizz/application-postgresql
    - destinationPath: base/smtp_server_secret.yaml
      originPath: base/secret.yaml
      kustomizationPath: base/kustomization.yaml
      repository: github.com/openlizz/application-smtp-server
  passwords:
    - name: token
      description: "token to access the /admin page"
      print: true
      length: 64
      numDigits: 16
      numSymbols: 0
      noUpper: false
      allowRepeat: true
```

### Dependencies of the application

You can define the dependencies of the application in two ways.

The first one is using the `dependencies` field.
This field accepts an array of booleans and they all need to be true in order the application to be added.
The booleans are usually values defined previously.

```yaml title="lizz.yaml"
dependencies:
  - {{index . "valueNameX"}}
  - {{index . "valueNameY"}}
  - {{index . "valueNameZ"}}
```

The second one is the `dependsOn` field which corresponds to the usual Kubernetes `dependsOn` field.
Everything added in the field will be added to the [corresponding field of the Kustomization file](https://fluxcd.io/flux/components/kustomize/kustomization/#kustomization-dependencies) in the fleet repository used for the application.

```yaml title="lizz.yaml"
dependsOn:
  {{- if index . "isNginxInstalled" }}
  - name: {{index . "nginxName"}}
    namespace: {{index . "nginxNamespace"}}
  {{- end }}
```

### Encryption

The last available configuration is encryption.
If your application contains secret files that need to be encrypted in order to be stored in Git, these files need to be listed in the `encryption` field as follows:

```yaml title="lizz.yaml"
encryption:
  enabled: true
  inputPaths:
    - path/to/secret.yaml
```

## Application files

In addition to the configuration file, a Lizz-compatible application contains the application template files.

### Templates

The application template files can be any Kubernetes manifest organised as you want.
The repository only needs to contain one [Kustomization file](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/) that points to the other files.

All the files are rendered using a mechanism similar to the [Helm chart template mechanism](https://helm.sh/docs/chart_template_guide/getting_started/) using the [values](#values) defined in the `lizz.yaml` file.
Lizz uses the [standard template library of Go](https://pkg.go.dev/text/template) enhanced with [template functions from the Sprig library](https://masterminds.github.io/sprig/).
It is possible to create complexe flow as described in the [Helm documentation](https://helm.sh/docs/chart_template_guide/control_structures/).
Here is an example with the beginning of the `release.yaml` file of the [Homer application](https://github.com/Openlizz/application-homer):

```yaml title="base/release.yaml"
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: homer
  namespace: {{ index . "namespace" }}
spec:
  serviceAccountName: {{ index . "serviceAccountName" }}
  releaseName: homer
  chart:
    spec:
      chart: homer
      version: "8.0.2"
      sourceRef:
        kind: HelmRepository
        name: k8s-at-home
  interval: 30m
  install:
    remediation:
      retries: 3
  test:
    enable: false
  values:
    ingress:
      main:
        {{- if and (index . "isNginxInstalled") (index . "isDomainInstalled") }}
        enabled: true
        annotations:
          kubernetes.io/ingress.class: nginx
        hosts:
          - host: homer.{{ index . "domain"}}
            paths:
              - path: "/"
                pathType: Prefix
        {{- else }}
        enable: false
        {{- end }}
        {{- if and (index . "isNginxInstalled") (index . "isDomainInstalled") (index . "isCertManagerInstalled") }}
        tls:
          - secretName: homer-cert
            hosts:
              - homer.{{ index . "domain"}}
        {{- end }}
[...]
```

### File structure

There is no required file structure and you can use the file structure you prefer.
However, the recommended structure is as follows:

- a `/base` folder containing the application files and a Kustomization file,
- a `/default` folder containing a Kustomaization for the default configuration of the application,
- one folder per configuration (if multiple configurations are needed) with a Kustomization file.

For example, the repository structure of the [Nextcloud application](https://github.com/Openlizz/application-nextcloud) is the following:

```
├── base
│   ├── certificate.yaml
│   ├── kustomization.yaml
│   ├── release.yaml
│   ├── secret.yaml
│   └── source.yaml
├── default
│   └── kustomization.yaml
└── lizz.yaml
```

The `base` folder contains the manifests of the application and a Kustomization resource.
The `default` folder contains the default Kustomization resource that simply point to the `base` folder without any kustomization of the manifests.
It is possible to add other folders with other Kustomization resources depending on the use cases, for example a specific configuration of the application for a specific cloud provider.
The `lizz.yaml` file is the Lizz configuration file which is explained later in this page.
