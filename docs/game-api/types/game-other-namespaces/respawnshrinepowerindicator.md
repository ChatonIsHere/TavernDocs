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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrinePowerIndicator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property ID for the gauge fill amount. |
| <Link id="m-instantiatedmaterial" /><code>{"private Material instantiatedMaterial"}</code> | Backing field for `InstantiatedMaterial`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-powergauges" /><code>{"private Renderer[] powerGauges"}</code> | The gauge renderers. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedmaterial-2" /><code>{"private Material InstantiatedMaterial { get; }"}</code> | A material copy made on first use and shared across all the gauge renderers. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setgaugematerialprogression" /><code>{"void SetGaugeMaterialProgression(float progress)"}</code> | Sets the gauges' `_FillProgress`, clamped to 0 to 1. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the material copy. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build bake step that drops null gauge renderers. |

</details>
