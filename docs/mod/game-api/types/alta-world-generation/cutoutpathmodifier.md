---
title: "CutoutPathModifier"
description: "Forest generation modifier that sinks the terrain along paths between small nodes that sit low compared with their surroundings, making cut-out trenches,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CutoutPathModifier

A **class** in `Root.Township`, `Alta.Forests`.

Forest generation modifier that sinks the terrain along paths between small nodes that sit low compared with their surroundings, making cut-out trenches, and paints them with splat layer 5.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/mod/game-api/types/alta-world-generation/nodemapmodifier), [`ITerrainModifier`](/mod/game-api/types/alta-world-generation/iterrainmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CutoutPathModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributesinglevalue">{"AttributeSingleValue"}</Link>{"[] attributes"}</code> | <span className="api-desc">Node attributes to add to cut-out nodes, scaled by their strength.</span> |
| <Link id="m-blurdraw" /><code>{"private float blurDraw"}</code> | <span className="api-desc">Weight of neighbouring nodes' scores in each blur pass.</span> |
| <Link id="m-bluriterations" /><code>{"private int blurIterations"}</code> | <span className="api-desc">Number of blur passes over the node scores.</span> |
| <Link id="m-blursustain" /><code>{"private float blurSustain"}</code> | <span className="api-desc">Weight of a node's own score in each blur pass.</span> |
| <Link id="m-bumpscale" /><code>{"private float bumpScale"}</code> | <span className="api-desc">Scale of the noise added to the cut depth.</span> |
| <Link id="m-bumpstrength" /><code>{"private float bumpStrength"}</code> | <span className="api-desc">Strength of the noise added to the cut depth.</span> |
| <Link id="m-depthcurve" /><code>{"private AnimationCurve depthCurve"}</code> | <span className="api-desc">Depth falloff from the path centre (0) to the cut's edge (1).</span> |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | <span className="api-desc">Added to the path's radius to get the cut's width.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxindent" /><code>{"private float maxIndent"}</code> | <span className="api-desc">Deepest the terrain is lowered, at full strength.</span> |
| <Link id="m-maxradius" /><code>{"private float maxRadius"}</code> | <span className="api-desc">Nodes bigger than this are never cut out.</span> |
| <Link id="m-maxsurroundings" /><code>{"private float maxSurroundings"}</code> | <span className="api-desc">Nodes whose maximum relative elevation is above this are never cut out.</span> |
| <Link id="m-minsurroundings" /><code>{"private float minSurroundings"}</code> | <span className="api-desc">Nodes whose minimum relative elevation is below this are never cut out.</span> |
| <Link id="m-nodecutoffstrength" /><code>{"private float nodeCutoffStrength"}</code> | <span className="api-desc">Blurred score a node needs to be cut out.</span> |
| <Link id="m-output" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{", float> output"}</code> | <span className="api-desc">Final cut-out strength per node.</span> |
| <Link id="m-random" /><code>{"private Random random"}</code> | <span className="api-desc">Random seeded from the forest seed, used for attribute values.</span> |
| <Link id="m-sectioncutoffstrength" /><code>{"private float sectionCutoffStrength"}</code> | <span className="api-desc">Blurred score a node needs to start a cut-out.</span> |
| <Link id="m-simplexscale" /><code>{"private float simplexScale"}</code> | <span className="api-desc">Scale of the noise that varies the cut's width.</span> |
| <Link id="m-simplexweight" /><code>{"private float simplexWeight"}</code> | <span className="api-desc">How much noise varies the cut's width.</span> |
| <Link id="m-strengths" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{", Vector2> strengths"}</code> | <span className="api-desc">Working node scores during `Modify`. Cleared afterwards.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getscore" /><code>{"float GetScore("}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> | <span className="api-desc">The cut-out strength worked out for a node, 0 if it isn't cut out.</span> |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Scores each node from its relative elevation and radius, blurs the scores across normal paths, then cuts out nodes that pass `sectionCutoffStrength`.</span> |
| <Link id="m-modifyheight" /><code>{"void ModifyHeight("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearestInfo, Vector2 position, ref float height)"}</code> | <span className="api-desc">Lowers terrain near a path between cut-out nodes, by up to `maxIndent`, shaped by `depthCurve` and noise.</span> |
| <Link id="m-modifysplat" /><code>{"void ModifySplat("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearestInfo, Vector2 position, ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | <span className="api-desc">Paints splat layer 5 near paths between cut-out nodes, at the path's cut-out strength.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flood" /><code>{"private bool Flood("}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> | <span className="api-desc">Marks a node as cut out if its strength passes `nodeCutoffStrength`, and adds `attributes` to it scaled by that strength.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CutoutPathModifier`:

<div className="api-used-in">

[`CutoutPathEdgeFill.cutoutPath`](/mod/game-api/types/alta-world-generation/cutoutpathedgefill#m-cutoutpath).

</div>
