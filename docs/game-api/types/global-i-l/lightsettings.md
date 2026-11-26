---
title: "LightSettings"
description: "Applies a skybox and ambient colour when enabled, and deactivates the previously active LightSettings object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightSettings

A **class** in `Root.Township`, no namespace.

Applies a skybox and ambient colour when enabled, and deactivates the previously active `LightSettings` object.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambience" /><code>{"private Color ambience"}</code> | Ambient light colour to apply. |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/global-i-l/lightsettings">{"LightSettings"}</Link>{" current"}</code> | The settings object applied last. |
| <Link id="m-skybox" /><code>{"private Material skybox"}</code> | Skybox material to apply. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Deactivates the last active settings object and applies this one's skybox and ambient light. |

</details>
