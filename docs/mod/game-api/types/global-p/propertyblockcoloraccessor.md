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
| <Link id="m-ctor" /><code>{"PropertyBlockColorAccessor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorname" /><code>{"private string colorName"}</code> | <span className="api-desc">Shader property to set, `_Color` by default.</span> |
| <Link id="m-hasrenderergroup" /><code>{"private bool hasRendererGroup"}</code> | <span className="api-desc">Cached check for whether `rendererGroup` is assigned.</span> |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | <span className="api-desc">Multiplier applied to every colour passed to `Set`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for errors while setting the colour.</span> |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Shared property block reused for every renderer.</span> |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> | <span className="api-desc">Optional group of renderers that also gets the colour.</span> |
| <Link id="m-targets" /><code>{"private Renderer[] targets"}</code> | <span className="api-desc">Renderers that get the colour.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(Color color)"}</code> | <span className="api-desc">Multiplies the colour by `intensity` and writes it to `colorName` on every target renderer and group renderer. Skipped when headless.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates the property block if there are any targets and the game isn't headless.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: removes null renderers from `targets`.</span> |

</details>
