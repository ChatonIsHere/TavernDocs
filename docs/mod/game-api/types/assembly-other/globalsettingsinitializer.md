---
title: "GlobalSettingsInitializer"
description: "Scene component that sets up a list of global settings assets on Awake, so their static Instance is ready."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettingsInitializer

A **class** in `Alta.Global.Runtime`, `Alta.Global`.

Scene component that sets up a list of global settings assets on `Awake`, so their static `Instance` is ready.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalSettingsInitializer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/globalsettings">{"GlobalSettings"}</Link>{"[] settings"}</code> | <span className="api-desc">The global settings assets to initialise.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `InitializeInstance` on each settings asset, logging and skipping any that throw.</span> |

</details>
