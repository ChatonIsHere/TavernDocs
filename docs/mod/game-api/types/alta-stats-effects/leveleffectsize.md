---
title: "LevelEffectSize"
description: "Visual for a levelled stat effect: copies some mesh renderers with an overlay material and sets a shader value from the level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelEffectSize

A **class** in `Root.Township`, `Alta.StatSystem`.

Visual for a levelled stat effect: copies some mesh renderers with an overlay material and sets a shader value from the level. Client only. Nothing in code calls `UpdateLevel`, so it is probably wired up through a Unity event.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelEffectSize()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingparameter" /><code>{"private string affectingParameter"}</code> | <span className="api-desc">Name of the shader float the level drives.</span> |
| <Link id="m-animatingrenderers" /><code>{"private MeshRenderer[] animatingRenderers"}</code> | <span className="api-desc">The overlay copies of the target renderers, created on first use.</span> |
| <Link id="m-leveltovalue" /><code>{"private AnimationCurve levelToValue"}</code> | <span className="api-desc">Curve from level to the shader value.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The overlay material; a copy of it is used.</span> |
| <Link id="m-parameterid" /><code>{"private int parameterID"}</code> | <span className="api-desc">Shader property ID of `affectingParameter`.</span> |
| <Link id="m-referencelodgroup" /><code>{"private LODGroup referenceLODGroup"}</code> | <span className="api-desc">LOD group used at build time to keep only LOD 0 renderers.</span> |
| <Link id="m-targetrenderers" /><code>{"private MeshRenderer[] targetRenderers"}</code> | <span className="api-desc">Mesh renderers that get an overlay copy.</span> |
| <Link id="m-uniquematerial" /><code>{"private Material uniqueMaterial"}</code> | <span className="api-desc">This instance's copy of `material`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatelevel" /><code>{"void UpdateLevel(int level)"}</code> | <span className="api-desc">Client: above level 0, creates the overlay copies if needed, shows them and sets the shader value from the curve. At 0 it hides them.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: looks up the shader property ID for `affectingParameter`.</span> |
| <Link id="m-copyrenderer" /><code>{"private MeshRenderer CopyRenderer(MeshRenderer original)"}</code> | <span className="api-desc">Makes a child object with the same mesh as a target renderer, drawn with the unique overlay material.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the unique material.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: drops target renderers that are null or not in LOD 0 of the reference LOD group.</span> |

</details>
