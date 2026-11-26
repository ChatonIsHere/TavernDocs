---
title: "MassLODSetter"
description: "Editor tool that sets LOD transition heights, LOD group size or child transforms on every LODGroup under it, through inspector buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MassLODSetter

A **class** in `Root.Township`, the global namespace.

Editor tool that sets LOD transition heights, LOD group size or child transforms on every `LODGroup` under it, through inspector buttons.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MassLODSetter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroups" /><code>{"private List<LODGroup> lodGroups"}</code> | <span className="api-desc">Cached child LOD groups.</span> |
| <Link id="m-lodindexfinishesat" /><code>{"private float[] LODIndexFinishesAt"}</code> | <span className="api-desc">Screen height at which each LOD level ends; kept in falling order.</span> |
| <Link id="m-lodsize" /><code>{"private float lodSize"}</code> | <span className="api-desc">Size used by the Set Bounds button.</span> |
| <Link id="m-recalculatebounds" /><code>{"private bool recalculateBounds"}</code> | <span className="api-desc">Set Bounds button.</span> |
| <Link id="m-resetlodelementstransform" /><code>{"private bool resetLODElementsTransform"}</code> | <span className="api-desc">Reset children transform button.</span> |
| <Link id="m-updatelodsettings" /><code>{"private bool updateLODSettings"}</code> | <span className="api-desc">Apply Settings button.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recalculatebounds-2" /><code>{"void RecalculateBounds(float size)"}</code> | <span className="api-desc">Sets the size of every child LOD group.</span> |
| <Link id="m-reseltlodtransforms" /><code>{"void ReseltLODTransforms()"}</code> | <span className="api-desc">Resets the local transform of every direct child of each LOD group.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Keeps the heights falling and runs whichever inspector button was pressed.</span> |

</details>
