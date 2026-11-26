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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier), [`ITerrainModifier`](/game-api/types/alta-world-generation/iterrainmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CutoutPathModifier()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributesinglevalue">{"AttributeSingleValue"}</Link>{"[] attributes"}</code> | Node attributes to add to cut-out nodes, scaled by their strength. |
| <Link id="m-blurdraw" /><code>{"private float blurDraw"}</code> | Weight of neighbouring nodes' scores in each blur pass. |
| <Link id="m-bluriterations" /><code>{"private int blurIterations"}</code> | Number of blur passes over the node scores. |
| <Link id="m-blursustain" /><code>{"private float blurSustain"}</code> | Weight of a node's own score in each blur pass. |
| <Link id="m-bumpscale" /><code>{"private float bumpScale"}</code> | Scale of the noise added to the cut depth. |
| <Link id="m-bumpstrength" /><code>{"private float bumpStrength"}</code> | Strength of the noise added to the cut depth. |
| <Link id="m-depthcurve" /><code>{"private AnimationCurve depthCurve"}</code> | Depth falloff from the path centre (0) to the cut's edge (1). |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | Added to the path's radius to get the cut's width. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxindent" /><code>{"private float maxIndent"}</code> | Deepest the terrain is lowered, at full strength. |
| <Link id="m-maxradius" /><code>{"private float maxRadius"}</code> | Nodes bigger than this are never cut out. |
| <Link id="m-maxsurroundings" /><code>{"private float maxSurroundings"}</code> | Nodes whose maximum relative elevation is above this are never cut out. |
| <Link id="m-minsurroundings" /><code>{"private float minSurroundings"}</code> | Nodes whose minimum relative elevation is below this are never cut out. |
| <Link id="m-nodecutoffstrength" /><code>{"private float nodeCutoffStrength"}</code> | Blurred score a node needs to be cut out. |
| <Link id="m-output" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{", float> output"}</code> | Final cut-out strength per node. |
| <Link id="m-random" /><code>{"private Random random"}</code> | Random seeded from the forest seed, used for attribute values. |
| <Link id="m-sectioncutoffstrength" /><code>{"private float sectionCutoffStrength"}</code> | Blurred score a node needs to start a cut-out. |
| <Link id="m-simplexscale" /><code>{"private float simplexScale"}</code> | Scale of the noise that varies the cut's width. |
| <Link id="m-simplexweight" /><code>{"private float simplexWeight"}</code> | How much noise varies the cut's width. |
| <Link id="m-strengths" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{", Vector2> strengths"}</code> | Working node scores during `Modify`. Cleared afterwards. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getscore" /><code>{"float GetScore("}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> | The cut-out strength worked out for a node, 0 if it isn't cut out. |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Scores each node from its relative elevation and radius, blurs the scores across normal paths, then cuts out nodes that pass `sectionCutoffStrength`. |
| <Link id="m-modifyheight" /><code>{"void ModifyHeight("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearestInfo, Vector2 position, ref float height)"}</code> | Lowers terrain near a path between cut-out nodes, by up to `maxIndent`, shaped by `depthCurve` and noise. |
| <Link id="m-modifysplat" /><code>{"void ModifySplat("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearestInfo, Vector2 position, ref "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | Paints splat layer 5 near paths between cut-out nodes, at the path's cut-out strength. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flood" /><code>{"private bool Flood("}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> | Marks a node as cut out if its strength passes `nodeCutoffStrength`, and adds `attributes` to it scaled by that strength. |

</details>

## Used in

Members of other types that take, return or hold a `CutoutPathModifier`:

[`CutoutPathEdgeFill.cutoutPath`](/game-api/types/alta-world-generation/cutoutpathedgefill#m-cutoutpath).
