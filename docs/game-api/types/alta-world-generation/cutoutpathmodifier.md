---
title: "CutoutPathModifier"
description: "class CutoutPathModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CutoutPathModifier

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier), [`ITerrainModifier`](/game-api/types/alta-world-generation/iterrainmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CutoutPathModifier()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributesinglevalue">{"AttributeSingleValue"}</Link>{"[] attributes"}</code> |
| <Link id="m-blurdraw" /><code>{"private float blurDraw"}</code> |
| <Link id="m-bluriterations" /><code>{"private int blurIterations"}</code> |
| <Link id="m-blursustain" /><code>{"private float blurSustain"}</code> |
| <Link id="m-bumpscale" /><code>{"private float bumpScale"}</code> |
| <Link id="m-bumpstrength" /><code>{"private float bumpStrength"}</code> |
| <Link id="m-depthcurve" /><code>{"private AnimationCurve depthCurve"}</code> |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maxindent" /><code>{"private float maxIndent"}</code> |
| <Link id="m-maxradius" /><code>{"private float maxRadius"}</code> |
| <Link id="m-maxsurroundings" /><code>{"private float maxSurroundings"}</code> |
| <Link id="m-minsurroundings" /><code>{"private float minSurroundings"}</code> |
| <Link id="m-nodecutoffstrength" /><code>{"private float nodeCutoffStrength"}</code> |
| <Link id="m-output" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{", float> output"}</code> |
| <Link id="m-random" /><code>{"private Random random"}</code> |
| <Link id="m-sectioncutoffstrength" /><code>{"private float sectionCutoffStrength"}</code> |
| <Link id="m-simplexscale" /><code>{"private float simplexScale"}</code> |
| <Link id="m-simplexweight" /><code>{"private float simplexWeight"}</code> |
| <Link id="m-strengths" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{", Vector2> strengths"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getscore" /><code>{"float GetScore("}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |
| <Link id="m-modifyheight" /><code>{"void ModifyHeight("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearestInfo, Vector2 position, ref float height)"}</code> |
| <Link id="m-modifysplat" /><code>{"void ModifySplat("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearestInfo, Vector2 position, ref "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-flood" /><code>{"private bool Flood("}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CutoutPathModifier`:

[`CutoutPathEdgeFill.cutoutPath`](/game-api/types/alta-world-generation/cutoutpathedgefill#m-cutoutpath).
