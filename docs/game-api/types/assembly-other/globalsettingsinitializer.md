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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalSettingsInitializer()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger for this class. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/assembly-other/globalsettings">{"GlobalSettings"}</Link>{"[] settings"}</code> | The global settings assets to initialise. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `InitializeInstance` on each settings asset, logging and skipping any that throw. |

</details>
