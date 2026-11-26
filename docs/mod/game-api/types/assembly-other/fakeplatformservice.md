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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IPlatformService`](/mod/game-api/types/assembly-other/iplatformservice)
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePlatformService()"}</code> | <span className="api-desc">Creates a `FakePlatformService` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class. Unused.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasync" /><code>{"async Task<bool> InitializeAsync()"}</code> | <span className="api-desc">Returns true at once.</span> |
