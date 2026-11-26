---
title: "LandBridgeModifier"
description: "Forest node map step that adds land bridge edges across a low path between two higher nodes either side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandBridgeModifier

A **class** in `Root.Township`, `Alta.Forests`.

Forest node map step that adds land bridge edges across a low path between two higher nodes either side.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/mod/game-api/types/alta-world-generation/nodemapmodifier)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandBridgeModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elevationminimum" /><code>{"private float elevationMinimum"}</code> | How far above the lower path both sides must be. |
| <Link id="m-floortype" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" floorType"}</code> | Edge types that can have a bridge over them. |
| <Link id="m-landbridges" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> landBridges"}</code> | Bridges created. |
| <Link id="m-sideheightsimilarity" /><code>{"private float sideHeightSimilarity"}</code> | Most height difference allowed between the two sides. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | For each matching edge, finds two blocked neighbours shared by both ends; if both are high enough above it and similar in height, links them with a land bridge. |
