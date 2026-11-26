---
title: "IPlatformService"
description: "Starts up the platform SDK (such as Oculus) at launch."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlatformService

An **interface** in `Alta.Platform`, `Alta.Platform`.

Starts up the platform SDK (such as Oculus) at launch. `FakePlatformService` is the stand-in where there is none.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`FakePlatformService`](/game-api/types/assembly-other/fakeplatformservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; }"}</code> | True once the platform SDK is ready. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasync" /><code>{"Task<bool> InitializeAsync()"}</code> | Starts the platform SDK; returns whether it worked. |
