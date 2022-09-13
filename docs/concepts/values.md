---
sidebar_position: 3
title: Values
description: "Definitions of the values available to an application."
---

# Values

There are multiple types of values, each one serves a different purpose.

```go
type Values struct {
	ApplicationDependencies []ApplicationDependency `json:"applicationDependencies,omitempty"`
	UserValues              []UserValue             `json:"userValues,omitempty"`
	ClusterValues           []ClusterValue          `json:"clusterValues,omitempty"`
	ApplicationValues       []ApplicationValue      `json:"applicationValues,omitempty"`
	ApplicationSecrets      []ApplicationSecret     `json:"applicationSecrets,omitempty"`
	Passwords               []Password              `json:"passwords,omitempty"`
}
```

## Application dependency

This value is a boolean that is true if the targeted application is already added in the cluster.

```go
type ApplicationDependency struct {
	Name        string `json:"name"`
	Description string `json:"description,omitempty"`
	Print       bool   `json:"print,omitempty"`
	Repository  string `json:"repository,omitempty"`
	Value       bool   `json:"value,omitempty"`
}
```

## User value

This value can be anything and needs to be defined by the user using the `--set-value` flag of the `lizz add` command.

```go
type UserValue struct {
	Name     string      `json:"name"`
	Required bool        `json:"required,omitempty"`
	Value    interface{} `json:"value,omitempty"`
}
```

## Cluster value

This value allows to extract a value from the `lizz.yaml` file of the fleet repository by executing the template to this file.

```go
type ClusterValue struct {
	Name        string      `json:"name"`
	Required    bool        `json:"required,omitempty"`
	Description string      `json:"description,omitempty"`
	Print       bool        `json:"print,omitempty"`
	Template    string      `json:"template,omitempty"`
	Value       interface{} `json:"value,omitempty"`
}
```

## Application value

This value allows to extract a value of any manifest of another application using yaml keys.

```go
type ApplicationValue struct {
	Name       string      `json:"name"`
	Required   bool        `json:"required,omitempty"`
	Repository string      `json:"repository,omitempty"`
	Path       string      `json:"path,omitempty"`
	Keys       []string    `json:"keys,omitempty"`
	Value      interface{} `json:"value,omitempty"`
}
```

## Application secret

This value allows to copy a secret from another application to be able to use it.

```go
type ApplicationSecret struct {
	Repository        string                      `json:"repository,omitempty"`
	OriginPath        string                      `json:"originPath,omitempty"`
	DestinationPath   string                      `json:"destinationPath,omitempty"`
	KustomizationPath string                      `json:"kustomizationPath,omitempty"`
	Secret            map[interface{}]interface{} `json:"-"`
}
```

## Password

This value is a [password randomly generated](https://pkg.go.dev/github.com/sethvargo/go-password@v0.2.0/password?utm_source=gopls#Generate) using the given parameters.
The password can be printed to the user and used in the application.

```go
type Password struct {
	Name        string      `json:"name"`
	Description string      `json:"description,omitempty"`
	Print       bool        `json:"print,omitempty"`
	Lenght      int         `json:"length,omitempty"`
	NumDigits   int         `json:"numDigits,omitempty"`
	NumSymbols  int         `json:"numSymbols,omitempty"`
	NoUpper     bool        `json:"noUpper,omitempty"`
	AllowRepeat bool        `json:"allowRepeat,omitempty"`
	Base64      bool        `json:"base64,omitempty"`
	Value       interface{} `json:"value,omitempty"`
}
```

## Default values

There are also default values that contains information related to the application itself:

- `name`: Name of the application
- `namespace`: Namespace of the application
- `serviceAccountName`: Service account name used for the application
- `repository`: Repository where the application will be stored
- `username`: Username used to push to the repository
- `password`: Password used to push to the repository
