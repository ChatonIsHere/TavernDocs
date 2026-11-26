---
title: "FogAnimator"
description: "Drives the scene's fog density, fog colour and skybox fade from its own fields every frame, and restores the originals when disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FogAnimator

A **class** in `Root.Township`, the global namespace.

Drives the scene's fog density, fog colour and skybox fade from its own fields every frame, and restores the originals when disabled. Works in edit mode.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FogAnimator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fogcolor" /><code>{"Color fogColor"}</code> | Fog colour to apply. |
| <Link id="m-fogdensity" /><code>{"float fogDensity"}</code> | Fog density to apply. |
| <Link id="m-skyboxfade" /><code>{"float skyBoxFade"}</code> | Value written to the skybox `_Fade`. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"private static int _Fade"}</code> | Shader property ID for the skybox `_Fade`. |
| <Link id="m-originalfogcolor" /><code>{"private Color originalFogColor"}</code> | Fog colour saved on enable. |
| <Link id="m-originalfogdensity" /><code>{"private float originalFogDensity"}</code> | Fog density saved on enable. |
| <Link id="m-originalskybox" /><code>{"private Material originalSkyBox"}</code> | Skybox material saved on enable. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Restores the fog settings and skybox saved on enable. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Saves the current fog and skybox, then swaps in a copy of the skybox material. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Writes the fields to `RenderSettings` and the skybox `_Fade` property. |

</details>
