---
title: "CraftingPieceChiselable"
description: "A Chiselable on a generic crafting piece, so chisel hits damage the piece."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingPieceChiselable

A **class** in `Root.Township`, `Alta.Crafting`.

A `Chiselable` on a generic crafting piece, so chisel hits damage the piece. Only chiselable while the piece can be removed.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`Chiselable`](/mod/game-api/types/alta-crafting/chiselable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftingPieceChiselable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing flag for `IsEnabled`.</span> |
| <Link id="m-piece" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" piece"}</code> | <span className="api-desc">The crafting piece this chiselable belongs to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"override bool IsEnabled { get; set; }"}</code> | <span className="api-desc">True when enabled and the piece can be removed; setting it only changes the enabled flag.</span> |
| <Link id="m-triggerhaptics" /><code>{"override bool TriggerHaptics { get; }"}</code> | <span className="api-desc">Haptics fire only while the piece can be removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Applies the normal chisel damage and passes the damage to the piece as a chisel hit.</span> |
