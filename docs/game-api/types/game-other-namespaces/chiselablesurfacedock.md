---
title: "ChiselableSurfaceDock"
description: "class ChiselableSurfaceDock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselableSurfaceDock

A **class** in `Root.Township`, `Features.Gameplay.Inventory.SurfaceDock`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`BasicChiselable`](/game-api/types/game-other-namespaces/basicchiselable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChiselableSurfaceDock()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-pickupdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] pickupDocks"}</code> |
| <Link id="m-unplacedsurfacedockprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" unplacedSurfaceDockPrefab"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-onbrokenserver" /><code>{"protected override void OnBrokenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |
| <Link id="m-ondamagetakenserver" /><code>{"protected override bool OnDamageTakenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |
