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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`LiquidSurfaceVisual`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BottledLiquid()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicrenderertransform" /><code>{"private Transform dynamicRendererTransform"}</code> | <span className="api-desc">Transform of the liquid renderer.</span> |
| <Link id="m-finallevel" /><code>{"private float finalLevel"}</code> | <span className="api-desc">The fill height last worked out.</span> |
| <Link id="m-materialcreator" /><code>{"private static "}<Link to="/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator">{"BottleLiquidMaterialCreator"}</Link>{" materialCreator"}</code> | <span className="api-desc">Shared creator for the bottle liquid material and its shader properties.</span> |
| <Link id="m-maximumy" /><code>{"private float maximumY"}</code> | <span className="api-desc">Highest mesh point, relative to the renderer.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">The bottle liquid mesh.</span> |
| <Link id="m-minimumy" /><code>{"private float minimumY"}</code> | <span className="api-desc">Lowest mesh point, relative to the renderer.</span> |
| <Link id="m-vertices" /><code>{"private Vector3[] vertices"}</code> | <span className="api-desc">Cached vertices of the mesh.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Caches the bottle mesh vertices (skipped on a headless server).</span> |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected override void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the liquid colour on the LOD renderer's property block.</span> |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected override void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the liquid colour on the renderer's property block.</span> |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected override Material SetupMaterialFromLiquidVisualSettings("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> | <span className="api-desc">Creates the bottle liquid material from the visual settings.</span> |
| <Link id="m-updatevisual" /><code>{"protected override void UpdateVisual()"}</code> | <span className="api-desc">Works out the fill height between the mesh's lowest and highest points and sends it to the shader.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatebounds" /><code>{"private void EvaluateBounds()"}</code> | <span className="api-desc">Finds the lowest and highest point of the mesh in world height.</span> |

</details>
