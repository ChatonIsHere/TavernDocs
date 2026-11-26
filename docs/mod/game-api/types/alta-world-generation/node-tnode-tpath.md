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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`IAStarNode<TNode, TPath>`](/mod/game-api/types/global-i-l/iastarnode-tnode-tconnection)
- **Derived types** [`Node`](/mod/game-api/types/alta-world-generation/node), [`RiverNode`](/mod/game-api/types/alta-world-generation/rivernode)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Node(int index, Vector2 position, float height)"}</code> | <span className="api-desc">Creates a `Node` from `index`, `position` and `height`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code><Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; }"}</code> | <span className="api-desc">Biome attributes at this node.</span> |
| <Link id="m-height" /><code>{"float Height { get; set; }"}</code> | <span className="api-desc">Ground height at the node.</span> |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | <span className="api-desc">Position of the node in its graph's list.</span> |
| <Link id="m-isheightfixed" /><code>{"bool IsHeightFixed { get; set; }"}</code> | <span className="api-desc">If true, the height shouldn't be changed by later steps, probably.</span> |
| <Link id="m-isused" /><code>{"bool IsUsed { get; set; }"}</code> | <span className="api-desc">Flag set by generation steps when the node has been used.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Text label with the index and position.</span> |
| <Link id="m-newpaths" /><code>{"List<TPath> NewPaths { get; private set; }"}</code> | <span className="api-desc">Paths being built for the next version of the graph.</span> |
| <Link id="m-oldheight" /><code>{"float OldHeight { get; set; }"}</code> | <span className="api-desc">Height before the last change, probably kept while smoothing.</span> |
| <Link id="m-paths" /><code>{"List<TPath> Paths { get; private set; }"}</code> | <span className="api-desc">Paths connected to this node.</span> |
| <Link id="m-position" /><code>{"Vector2 Position { get; private set; }"}</code> | <span className="api-desc">Position on the ground plane (x and z).</span> |
| <Link id="m-position3d" /><code>{"Vector3 Position3d { get; }"}</code> | <span className="api-desc">World position with the height as y.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applynewpaths" /><code>{"void ApplyNewPaths()"}</code> | <span className="api-desc">Makes the new paths current and clears the new list.</span> |
| <Link id="m-calculateheuristic" /><code>{"float CalculateHeuristic(TNode target)"}</code> | <span className="api-desc">Flat distance to the target, for A-star.</span> |
| <Link id="m-getconnectionsforastar" /><code>{"ICollection<TPath> GetConnectionsForAStar()"}</code> | <span className="api-desc">The paths, for A-star searches.</span> |
