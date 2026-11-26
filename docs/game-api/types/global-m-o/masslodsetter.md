---
title: "MassLODSetter"
description: "Editor tool that sets LOD transition heights, LOD group size or child transforms on every LODGroup under it, through inspector buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MassLODSetter

A **class** in `Root.Township`, no namespace.

Editor tool that sets LOD transition heights, LOD group size or child transforms on every `LODGroup` under it, through inspector buttons.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MassLODSetter()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroups" /><code>{"private List<LODGroup> lodGroups"}</code> | Cached child LOD groups. |
| <Link id="m-lodindexfinishesat" /><code>{"private float[] LODIndexFinishesAt"}</code> | Screen height at which each LOD level ends; kept in falling order. |
| <Link id="m-lodsize" /><code>{"private float lodSize"}</code> | Size used by the Set Bounds button. |
| <Link id="m-recalculatebounds" /><code>{"private bool recalculateBounds"}</code> | Set Bounds button. |
| <Link id="m-resetlodelementstransform" /><code>{"private bool resetLODElementsTransform"}</code> | Reset children transform button. |
| <Link id="m-updatelodsettings" /><code>{"private bool updateLODSettings"}</code> | Apply Settings button. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recalculatebounds-2" /><code>{"void RecalculateBounds(float size)"}</code> | Sets the size of every child LOD group. |
| <Link id="m-reseltlodtransforms" /><code>{"void ReseltLODTransforms()"}</code> | Resets the local transform of every direct child of each LOD group. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Keeps the heights falling and runs whichever inspector button was pressed. |

</details>
