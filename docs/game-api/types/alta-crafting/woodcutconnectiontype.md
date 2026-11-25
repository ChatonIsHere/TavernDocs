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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`WoodcutConnectionType.Create`](/game-api/types/alta-crafting/woodcutconnectiontype-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/woodcutconnectiontype-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutConnectionType()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private int bones"}</code> |  |
| <Link id="m-breakthreshold" /><code>{"private float breakThreshold"}</code> |  |
| <Link id="m-broken" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttreemodelevent">{"WoodcutTreeModelEvent"}</Link>{" broken"}</code> |  |
| <Link id="m-isroot" /><code>{"private bool isRoot"}</code> |  |
| <Link id="m-isstick" /><code>{"private bool isStick"}</code> |  |
| <Link id="m-rotations" /><code>{"private int rotations"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"int Bones { get; }"}</code> | Number of cut points along the joint. Defaults to 12. |
| <Link id="m-breakthreshold-2" /><code>{"float BreakThreshold { get; }"}</code> | Damage needed to break the joint, before multipliers. |
| <Link id="m-broken-2" /><code><Link to="/game-api/types/alta-crafting/woodcuttreemodelevent">{"WoodcutTreeModelEvent"}</Link>{" Broken { get; }"}</code> | Event raised when a piece of this type breaks off. |
| <Link id="m-isroot-2" /><code>{"bool IsRoot { get; }"}</code> | Whether this is the root joint of the tree. |
| <Link id="m-isstick-2" /><code>{"bool IsStick { get; }"}</code> | Whether pieces of this type drop sticks rather than wedges. |
| <Link id="m-rotations-2" /><code>{"int Rotations { get; }"}</code> | Number of evenly spaced rotations a child piece can be placed at. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" piece)"}</code> | Raises `Broken` with the piece that broke off. |

## Used in

Members of other types that take, return or hold a `WoodcutConnectionType`:

[`WoodcutConnection.connectionType`](/game-api/types/alta-crafting/woodcutconnection#m-connectiontype), [`WoodcutConnection.ConnectionType`](/game-api/types/alta-crafting/woodcutconnection#m-connectiontype-2), [`WoodcutTreeModel.type`](/game-api/types/alta-crafting/woodcuttreemodel#m-type), [`WoodcutTreeModel.Type`](/game-api/types/alta-crafting/woodcuttreemodel#m-type-2).
