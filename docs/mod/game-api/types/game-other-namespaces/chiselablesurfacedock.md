---
title: "ChiselableSurfaceDock"
description: "Placed surface dock that players can chisel off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselableSurfaceDock

A **class** in `Root.Township`, `Features.Gameplay.Inventory.SurfaceDock`.

Placed surface dock that players can chisel off. Server: it ignores hits while any of its docks hold an item, and when broken it is replaced with the unplaced dock prefab.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`BasicChiselable`](/mod/game-api/types/game-other-namespaces/basicchiselable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselableSurfaceDock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] pickupDocks"}</code> | Docks checked before damage is taken. |
| <Link id="m-unplacedsurfacedockprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" unplacedSurfaceDockPrefab"}</code> | Prefab spawned in place of this one when it breaks. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onbrokenserver" /><code>{"protected override void OnBrokenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Server: runs the base break, then replaces this entity with `unplacedSurfaceDockPrefab`. |
| <Link id="m-ondamagetakenserver" /><code>{"protected override bool OnDamageTakenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Server: refuses damage while any listed pickup dock has an item in it. |
