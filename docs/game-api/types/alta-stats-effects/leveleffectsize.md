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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LevelEffectSize()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingparameter" /><code>{"private string affectingParameter"}</code> | Name of the shader float the level drives. |
| <Link id="m-animatingrenderers" /><code>{"private MeshRenderer[] animatingRenderers"}</code> | The overlay copies of the target renderers, created on first use. |
| <Link id="m-leveltovalue" /><code>{"private AnimationCurve levelToValue"}</code> | Curve from level to the shader value. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The overlay material; a copy of it is used. |
| <Link id="m-parameterid" /><code>{"private int parameterID"}</code> | Shader property ID of `affectingParameter`. |
| <Link id="m-referencelodgroup" /><code>{"private LODGroup referenceLODGroup"}</code> | LOD group used at build time to keep only LOD 0 renderers. |
| <Link id="m-targetrenderers" /><code>{"private MeshRenderer[] targetRenderers"}</code> | Mesh renderers that get an overlay copy. |
| <Link id="m-uniquematerial" /><code>{"private Material uniqueMaterial"}</code> | This instance's copy of `material`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatelevel" /><code>{"void UpdateLevel(int level)"}</code> | Client: above level 0, creates the overlay copies if needed, shows them and sets the shader value from the curve. At 0 it hides them. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: looks up the shader property ID for `affectingParameter`. |
| <Link id="m-copyrenderer" /><code>{"private MeshRenderer CopyRenderer(MeshRenderer original)"}</code> | Makes a child object with the same mesh as a target renderer, drawn with the unique overlay material. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the unique material. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: drops target renderers that are null or not in LOD 0 of the reference LOD group. |

</details>
