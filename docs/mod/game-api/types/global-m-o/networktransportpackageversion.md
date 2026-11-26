---
title: "NetworkTransportPackageVersion"
description: "Global settings asset that records the version of the com.alta.networktransport package the build was made with."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportPackageVersion

A **class** in `Root.Township`, the global namespace.

Global settings asset that records the version of the `com.alta.networktransport` package the build was made with.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<NetworkTransportPackageVersion>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`NetworkTransportPackageVersion`](/mod/game-api/types/global-m-o/networktransportpackageversion)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportPackageVersion()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-servertransportversion" /><code>{"const string ServerTransportVersion"}</code> | Key name `transport_version`, probably for reporting the version in server data. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-packagename" /><code>{"private const string PackageName"}</code> | The package name, `com.alta.networktransport`. |
| <Link id="m-version" /><code>{"private string version"}</code> | Backing field for `Version`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-version-2" /><code>{"string Version { get; }"}</code> | The transport package version. |
