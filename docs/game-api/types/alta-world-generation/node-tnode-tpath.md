---
title: "Node<TNode, TPath>"
description: "A point in a forest generation graph (river and path networks), with a 2D position, height and connecting paths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Node&lt;TNode, TPath&gt;

A **class** in `Root.Township`, `Alta.Forests`.

A point in a forest generation graph (river and path networks), with a 2D position, height and connecting paths. Can be searched with A-star.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IAStarNode<TNode, TPath>`](/game-api/types/global-i-l/iastarnode-tnode-tconnection)
- **Derived types** [`Node`](/game-api/types/alta-world-generation/node), [`RiverNode`](/game-api/types/alta-world-generation/rivernode)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Node(int index, Vector2 position, float height)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; }"}</code> | Biome attributes at this node. |
| <Link id="m-height" /><code>{"float Height { get; set; }"}</code> | Ground height at the node. |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | Position of the node in its graph's list. |
| <Link id="m-isheightfixed" /><code>{"bool IsHeightFixed { get; set; }"}</code> | If true, the height shouldn't be changed by later steps, probably. |
| <Link id="m-isused" /><code>{"bool IsUsed { get; set; }"}</code> | Flag set by generation steps when the node has been used. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Text label with the index and position. |
| <Link id="m-newpaths" /><code>{"List<TPath> NewPaths { get; private set; }"}</code> | Paths being built for the next version of the graph. |
| <Link id="m-oldheight" /><code>{"float OldHeight { get; set; }"}</code> | Height before the last change, probably kept while smoothing. |
| <Link id="m-paths" /><code>{"List<TPath> Paths { get; private set; }"}</code> | Paths connected to this node. |
| <Link id="m-position" /><code>{"Vector2 Position { get; private set; }"}</code> | Position on the ground plane (x and z). |
| <Link id="m-position3d" /><code>{"Vector3 Position3d { get; }"}</code> | World position with the height as y. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applynewpaths" /><code>{"void ApplyNewPaths()"}</code> | Makes the new paths current and clears the new list. |
| <Link id="m-calculateheuristic" /><code>{"float CalculateHeuristic(TNode target)"}</code> | Flat distance to the target, for A-star. |
| <Link id="m-getconnectionsforastar" /><code>{"ICollection<TPath> GetConnectionsForAStar()"}</code> | The paths, for A-star searches. |
