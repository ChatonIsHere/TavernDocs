---
title: "DockByDefault"
description: "Server-side generator that fills a dock with a random number of an item the first time the entity is generated."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockByDefault

A **class** in `Root.Township`, the global namespace.

Server-side generator that fills a dock with a random number of an item the first time the entity is generated.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockByDefault()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-countmax" /><code>{"private int countMax"}</code> | Upper bound of the random count. |
| <Link id="m-countmin" /><code>{"private int countMin"}</code> | Lower bound of the random count. Nothing spawns if the count is 0. |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock to fill. |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | The item to spawn into the dock. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgeneratingfirsttime" /><code>{"protected override bool IsGeneratingFirstTime { get; }"}</code> | Always true, so it generates when the entity is first created. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns a random count of `item` into `dock`. The count is floored, so `countMax` is only reached when both bounds match. |
