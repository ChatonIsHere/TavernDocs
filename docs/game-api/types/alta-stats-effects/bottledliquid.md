---
title: "BottledLiquid"
description: "Liquid surface visual for bottles: sets a fill plane on the bottle's shader from how full it is, following the liquid's up direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BottledLiquid

A **class** in `Root.Township`, `Alta.Liquid`.

Liquid surface visual for bottles: sets a fill plane on the bottle's shader from how full it is, following the liquid's up direction.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`LiquidSurfaceVisual`](/game-api/types/alta-stats-effects/liquidsurfacevisual)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BottledLiquid()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicrenderertransform" /><code>{"private Transform dynamicRendererTransform"}</code> | Transform of the liquid renderer. |
| <Link id="m-finallevel" /><code>{"private float finalLevel"}</code> | The fill height last worked out. |
| <Link id="m-materialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/bottleliquidmaterialcreator">{"BottleLiquidMaterialCreator"}</Link>{" materialCreator"}</code> | Shared creator for the bottle liquid material and its shader properties. |
| <Link id="m-maximumy" /><code>{"private float maximumY"}</code> | Highest mesh point, relative to the renderer. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | The bottle liquid mesh. |
| <Link id="m-minimumy" /><code>{"private float minimumY"}</code> | Lowest mesh point, relative to the renderer. |
| <Link id="m-vertices" /><code>{"private Vector3[] vertices"}</code> | Cached vertices of the mesh. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Caches the bottle mesh vertices (skipped on a headless server). |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected override void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets the liquid colour on the LOD renderer's property block. |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected override void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets the liquid colour on the renderer's property block. |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected override Material SetupMaterialFromLiquidVisualSettings("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> | Creates the bottle liquid material from the visual settings. |
| <Link id="m-updatevisual" /><code>{"protected override void UpdateVisual()"}</code> | Works out the fill height between the mesh's lowest and highest points and sends it to the shader. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatebounds" /><code>{"private void EvaluateBounds()"}</code> | Finds the lowest and highest point of the mesh in world height. |

</details>
