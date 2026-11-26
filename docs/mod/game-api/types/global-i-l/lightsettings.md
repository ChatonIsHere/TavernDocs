---
title: "LightSettings"
description: "Applies a skybox and ambient colour when enabled, and deactivates the previously active LightSettings object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightSettings

A **class** in `Root.Township`, the global namespace.

Applies a skybox and ambient colour when enabled, and deactivates the previously active `LightSettings` object.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambience" /><code>{"private Color ambience"}</code> | <span className="api-desc">Ambient light colour to apply.</span> |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/lightsettings">{"LightSettings"}</Link>{" current"}</code> | <span className="api-desc">The settings object applied last.</span> |
| <Link id="m-skybox" /><code>{"private Material skybox"}</code> | <span className="api-desc">Skybox material to apply.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Deactivates the last active settings object and applies this one's skybox and ambient light.</span> |

</details>
