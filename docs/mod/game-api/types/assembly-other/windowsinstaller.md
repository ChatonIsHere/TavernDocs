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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsInstaller(IContainerBuilder builder)"}</code> | <span className="api-desc">Creates a `WindowsInstaller` from `builder`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isandroideditor" /><code>{"private static bool IsAndroidEditor()"}</code> | <span className="api-desc">True in the editor when the target platform is Android.</span> |
| <Link id="m-registerfakes" /><code>{"private static void RegisterFakes(IContainerBuilder builder)"}</code> | <span className="api-desc">Binds fake platform service, platform device and valid version service.</span> |

</details>
