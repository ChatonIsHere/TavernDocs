---
title: "FakePlatformService"
description: "Stand-in IPlatformService for platforms with no platform SDK to start."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePlatformService

A **class** in `Alta.Platform`, `Alta.Platform.Fakes`.

Stand-in `IPlatformService` for platforms with no platform SDK to start. Always reports initialized.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IPlatformService`](/game-api/types/assembly-other/iplatformservice)
- **Attributes** `UsedImplicitly`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FakePlatformService()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. Unused. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasync" /><code>{"async Task<bool> InitializeAsync()"}</code> | Returns true at once. |
