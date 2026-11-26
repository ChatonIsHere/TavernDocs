---
title: "PickupDockPedestalSpawn"
description: "A dock with a linked Spawner that can refill it, such as a display pedestal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockPedestalSpawn

A **class** in `Root.Township`, the global namespace.

A dock with a linked `Spawner` that can refill it, such as a display pedestal.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PickupDock`](/mod/game-api/types/alta-items/pickupdock)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockPedestalSpawn()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawner" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawner">{"Spawner"}</Link>{" spawner"}</code> | <span className="api-desc">Spawner that refills the dock.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnifempty" /><code>{"void SpawnIfEmpty()"}</code> | <span className="api-desc">Runs the spawner if the dock holds nothing.</span> |
