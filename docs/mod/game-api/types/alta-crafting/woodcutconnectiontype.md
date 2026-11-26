---
title: "WoodcutConnectionType"
description: "Asset describing how one piece of a choppable tree joins its parent: how it can be rotated, how many cut points it has and how much damage breaks it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutConnectionType

A **class** in `Root.Township`, `Alta.Woodcutting`.

Asset describing how one piece of a choppable tree joins its parent: how it can be rotated, how many cut points it has and how much damage breaks it.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`WoodcutConnectionType.Create`](/mod/game-api/types/alta-crafting/woodcutconnectiontype-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/woodcutconnectiontype-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutConnectionType()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private int bones"}</code> | <span className="api-desc">How many woodcut points a connection of this type spans for breaking (default 12).</span> |
| <Link id="m-breakthreshold" /><code>{"private float breakThreshold"}</code> | <span className="api-desc">Base damage a connection takes before it breaks, scaled by species and node multipliers.</span> |
| <Link id="m-broken" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodelevent">{"WoodcutTreeModelEvent"}</Link>{" broken"}</code> | <span className="api-desc">Event raised with the piece when this connection breaks (called for the root when a tree falls).</span> |
| <Link id="m-isroot" /><code>{"private bool isRoot"}</code> | <span className="api-desc">Marks the root connection type. Not read elsewhere in the code.</span> |
| <Link id="m-isstick" /><code>{"private bool isStick"}</code> | <span className="api-desc">Whether pieces of this type use the species' stick distribution instead of the wedge one.</span> |
| <Link id="m-rotations" /><code>{"private int rotations"}</code> | <span className="api-desc">Number of evenly spaced yaw rotations a child piece can be given (default 1).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"int Bones { get; }"}</code> | <span className="api-desc">Number of cut points along the joint. Defaults to 12.</span> |
| <Link id="m-breakthreshold-2" /><code>{"float BreakThreshold { get; }"}</code> | <span className="api-desc">Damage needed to break the joint, before multipliers.</span> |
| <Link id="m-broken-2" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttreemodelevent">{"WoodcutTreeModelEvent"}</Link>{" Broken { get; }"}</code> | <span className="api-desc">Event raised when a piece of this type breaks off.</span> |
| <Link id="m-isroot-2" /><code>{"bool IsRoot { get; }"}</code> | <span className="api-desc">Whether this is the root joint of the tree.</span> |
| <Link id="m-isstick-2" /><code>{"bool IsStick { get; }"}</code> | <span className="api-desc">Whether pieces of this type drop sticks rather than wedges.</span> |
| <Link id="m-rotations-2" /><code>{"int Rotations { get; }"}</code> | <span className="api-desc">Number of evenly spaced rotations a child piece can be placed at.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" piece)"}</code> | <span className="api-desc">Raises `Broken` with the piece that broke off.</span> |

## Used in

Members of other types that take, return or hold a `WoodcutConnectionType`:

<div className="api-used-in">

[`WoodcutConnection.connectionType`](/mod/game-api/types/alta-crafting/woodcutconnection#m-connectiontype), [`WoodcutConnection.ConnectionType`](/mod/game-api/types/alta-crafting/woodcutconnection#m-connectiontype-2), [`WoodcutTreeModel.type`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-type), [`WoodcutTreeModel.Type`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-type-2).

</div>
