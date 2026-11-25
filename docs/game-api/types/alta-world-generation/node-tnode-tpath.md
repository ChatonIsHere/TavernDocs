---
title: "Node<TNode, TPath>"
description: "class Node<TNode, TPath> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Node&lt;TNode, TPath&gt;

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IAStarNode<TNode, TPath>`](/game-api/types/global-i-l/iastarnode-tnode-tconnection)
- **Derived types** [`Node`](/game-api/types/alta-world-generation/node), [`RiverNode`](/game-api/types/alta-world-generation/rivernode)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Node(int index, Vector2 position, float height)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; }"}</code> |  |
| <Link id="m-height" /><code>{"float Height { get; set; }"}</code> |  |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> |  |
| <Link id="m-isheightfixed" /><code>{"bool IsHeightFixed { get; set; }"}</code> |  |
| <Link id="m-isused" /><code>{"bool IsUsed { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-newpaths" /><code>{"List<TPath> NewPaths { get; private set; }"}</code> |  |
| <Link id="m-oldheight" /><code>{"float OldHeight { get; set; }"}</code> |  |
| <Link id="m-paths" /><code>{"List<TPath> Paths { get; private set; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector2 Position { get; private set; }"}</code> |  |
| <Link id="m-position3d" /><code>{"Vector3 Position3d { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applynewpaths" /><code>{"void ApplyNewPaths()"}</code> |  |
| <Link id="m-calculateheuristic" /><code>{"float CalculateHeuristic(TNode target)"}</code> |  |
| <Link id="m-getconnectionsforastar" /><code>{"ICollection<TPath> GetConnectionsForAStar()"}</code> |  |
