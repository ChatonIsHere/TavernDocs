---
title: "Space"
description: "One triangle of a procedural forest's layout graph, made of three nodes and the three paths between them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Space

A **class** in `Root.Township`, `Alta.Forests`.

One triangle of a procedural forest's layout graph, made of three nodes and the three paths between them.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Space(int index, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeA, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeB, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeC, "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" ab, "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" bc, "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" ca)"}</code> | Creates a `Space` from `index`, `nodeA`, `nodeB`, `nodeC`, `ab`, `bc` and `ca`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code><Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" A { get; private set; }"}</code> | First corner node. |
| <Link id="m-ab" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" AB { get; private set; }"}</code> | Path from `A` to `B`. |
| <Link id="m-b" /><code><Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" B { get; private set; }"}</code> | Second corner node. |
| <Link id="m-bc" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" BC { get; private set; }"}</code> | Path from `B` to `C`. |
| <Link id="m-c" /><code><Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" C { get; private set; }"}</code> | Third corner node. |
| <Link id="m-ca" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" CA { get; private set; }"}</code> | Path from `C` to `A`. |
| <Link id="m-index" /><code>{"int Index { get; }"}</code> | The space's index in the forest. Rivers use it to match nodes to spaces. |
| <Link id="m-nodes" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> Nodes { get; }"}</code> | The three corner nodes. |
| <Link id="m-paths" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> Paths { get; }"}</code> | The three edge paths. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" Type { get; set; }"}</code> | Normal, dense or open. Normal by default. |

## Used in

Members of other types that take, return or hold a `Space`:

[`ForestGeneration.GetSpace`](/mod/game-api/types/alta-world-generation/forestgeneration#m-getspace), [`ForestGeneration.spaces`](/mod/game-api/types/alta-world-generation/forestgeneration#m-spaces), [`ForestGeneration.Spaces`](/mod/game-api/types/alta-world-generation/forestgeneration#m-spaces-2), [`ForestGeneration.WorkingSpaces`](/mod/game-api/types/alta-world-generation/forestgeneration#m-workingspaces), [`Path.Left`](/mod/game-api/types/alta-world-generation/path#m-left), [`Path.Right`](/mod/game-api/types/alta-world-generation/path#m-right), [`RiverNode.RiverNode`](/mod/game-api/types/alta-world-generation/rivernode#m-ctor), [`RiverNode.Space`](/mod/game-api/types/alta-world-generation/rivernode#m-space).
