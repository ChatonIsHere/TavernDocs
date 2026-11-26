---
title: "RespawnShrinePowerIndicator"
description: "Fills the shrine's power gauge renderers to show how much fuel is left."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrinePowerIndicator

A **class** in `Root.Township`, `ATT.Respawn`.

Fills the shrine's power gauge renderers to show how much fuel is left.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrinePowerIndicator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property ID for the gauge fill amount.</span> |
| <Link id="m-instantiatedmaterial" /><code>{"private Material instantiatedMaterial"}</code> | <span className="api-desc">Backing field for `InstantiatedMaterial`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-powergauges" /><code>{"private Renderer[] powerGauges"}</code> | <span className="api-desc">The gauge renderers.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedmaterial-2" /><code>{"private Material InstantiatedMaterial { get; }"}</code> | <span className="api-desc">A material copy made on first use and shared across all the gauge renderers.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setgaugematerialprogression" /><code>{"void SetGaugeMaterialProgression(float progress)"}</code> | <span className="api-desc">Sets the gauges' `_FillProgress`, clamped to 0 to 1.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Destroys the material copy.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build bake step that drops null gauge renderers.</span> |

</details>
