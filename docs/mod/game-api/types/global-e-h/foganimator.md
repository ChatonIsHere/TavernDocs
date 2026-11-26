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
| <Link id="m-ctor" /><code>{"FogAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fogcolor" /><code>{"Color fogColor"}</code> | <span className="api-desc">Fog colour to apply.</span> |
| <Link id="m-fogdensity" /><code>{"float fogDensity"}</code> | <span className="api-desc">Fog density to apply.</span> |
| <Link id="m-skyboxfade" /><code>{"float skyBoxFade"}</code> | <span className="api-desc">Value written to the skybox `_Fade`.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"private static int _Fade"}</code> | <span className="api-desc">Shader property ID for the skybox `_Fade`.</span> |
| <Link id="m-originalfogcolor" /><code>{"private Color originalFogColor"}</code> | <span className="api-desc">Fog colour saved on enable.</span> |
| <Link id="m-originalfogdensity" /><code>{"private float originalFogDensity"}</code> | <span className="api-desc">Fog density saved on enable.</span> |
| <Link id="m-originalskybox" /><code>{"private Material originalSkyBox"}</code> | <span className="api-desc">Skybox material saved on enable.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Restores the fog settings and skybox saved on enable.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Saves the current fog and skybox, then swaps in a copy of the skybox material.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Writes the fields to `RenderSettings` and the skybox `_Fade` property.</span> |

</details>
