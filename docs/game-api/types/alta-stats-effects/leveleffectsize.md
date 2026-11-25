---
title: "LevelEffectSize"
description: "class LevelEffectSize in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelEffectSize

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LevelEffectSize()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-affectingparameter" /><code>{"private string affectingParameter"}</code> |
| <Link id="m-animatingrenderers" /><code>{"private MeshRenderer[] animatingRenderers"}</code> |
| <Link id="m-leveltovalue" /><code>{"private AnimationCurve levelToValue"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-parameterid" /><code>{"private int parameterID"}</code> |
| <Link id="m-referencelodgroup" /><code>{"private LODGroup referenceLODGroup"}</code> |
| <Link id="m-targetrenderers" /><code>{"private MeshRenderer[] targetRenderers"}</code> |
| <Link id="m-uniquematerial" /><code>{"private Material uniqueMaterial"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-updatelevel" /><code>{"void UpdateLevel(int level)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-copyrenderer" /><code>{"private MeshRenderer CopyRenderer(MeshRenderer original)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |

</details>
