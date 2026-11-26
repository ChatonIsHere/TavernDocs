---
title: "PropertyBlockColorAccessor"
description: "Sets a colour property on a list of renderers (and an optional RendererGroup) through a MaterialPropertyBlock, so materials aren't copied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PropertyBlockColorAccessor

A **class** in `Root.Township`, the global namespace.

Sets a colour property on a list of renderers (and an optional `RendererGroup`) through a `MaterialPropertyBlock`, so materials aren't copied. Does nothing on a headless server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PropertyBlockColorAccessor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorname" /><code>{"private string colorName"}</code> | Shader property to set, `_Color` by default. |
| <Link id="m-hasrenderergroup" /><code>{"private bool hasRendererGroup"}</code> | Cached check for whether `rendererGroup` is assigned. |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | Multiplier applied to every colour passed to `Set`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for errors while setting the colour. |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | Shared property block reused for every renderer. |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> | Optional group of renderers that also gets the colour. |
| <Link id="m-targets" /><code>{"private Renderer[] targets"}</code> | Renderers that get the colour. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(Color color)"}</code> | Multiplies the colour by `intensity` and writes it to `colorName` on every target renderer and group renderer. Skipped when headless. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates the property block if there are any targets and the game isn't headless. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: removes null renderers from `targets`. |

</details>
