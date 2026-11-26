---
title: "WindowsInstaller"
description: "Registers the Windows platform services: user service, post-process controller, analytics readers, the SteamVR XR setup, and fake platform services."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsInstaller

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Registers the Windows platform services: user service, post-process controller, analytics readers, the SteamVR XR setup, and fake platform services.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsInstaller(IContainerBuilder builder)"}</code> | Creates a `WindowsInstaller` from `builder`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isandroideditor" /><code>{"private static bool IsAndroidEditor()"}</code> | True in the editor when the target platform is Android. |
| <Link id="m-registerfakes" /><code>{"private static void RegisterFakes(IContainerBuilder builder)"}</code> | Binds fake platform service, platform device and valid version service. |

</details>
