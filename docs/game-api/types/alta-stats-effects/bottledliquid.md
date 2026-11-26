---
title: "BottledLiquid"
description: "class BottledLiquid in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BottledLiquid

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`LiquidSurfaceVisual`](/game-api/types/alta-stats-effects/liquidsurfacevisual)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BottledLiquid()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dynamicrenderertransform" /><code>{"private Transform dynamicRendererTransform"}</code> |
| <Link id="m-finallevel" /><code>{"private float finalLevel"}</code> |
| <Link id="m-materialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/bottleliquidmaterialcreator">{"BottleLiquidMaterialCreator"}</Link>{" materialCreator"}</code> |
| <Link id="m-maximumy" /><code>{"private float maximumY"}</code> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> |
| <Link id="m-minimumy" /><code>{"private float minimumY"}</code> |
| <Link id="m-vertices" /><code>{"private Vector3[] vertices"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected override void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected override void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected override Material SetupMaterialFromLiquidVisualSettings("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> |
| <Link id="m-updatevisual" /><code>{"protected override void UpdateVisual()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-evaluatebounds" /><code>{"private void EvaluateBounds()"}</code> |

</details>
