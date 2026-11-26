---
title: "LevelSelectCaveTeleporter"
description: "A cave teleporter whose destination layer is picked with a LevelSelector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelSelectCaveTeleporter

A **class** in `Root.Township`, `Alta.Caves`.

A cave teleporter whose destination layer is picked with a `LevelSelector`. Each level maps to a layer a set distance deeper.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveTeleporter`](/mod/game-api/types/alta-world-generation/caveteleporter)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelSelectCaveTeleporter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{"[] connections"}</code> | One connection per selector level, built once the manager has synced. |
| <Link id="m-distancebetweenlayers" /><code>{"private int distanceBetweenLayers"}</code> | How many cave layers each selector level steps down. |
| <Link id="m-levelselector" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/levelselector">{"LevelSelector"}</Link>{" levelSelector"}</code> | The selector the player uses to choose a level. |
| <Link id="m-targetlayer" /><code>{"private int targetLayer"}</code> | Backing field for `TargetLayer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetlayer-2" /><code>{"override int TargetLayer { get; }"}</code> | The layer the teleporter currently sends players to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Listens for the teleporter manager's full sync so connections can be built. |
| <Link id="m-updatelevel" /><code>{"void UpdateLevel(int level)"}</code> | Sets the target layer from a selector level and switches to that level's connection. |
| <Link id="m-initializeconnection" /><code>{"protected override void InitializeConnection()"}</code> | Requests a connection for every selector level, sets up the level pips on clients and applies the current level. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlayer" /><code>{"private int GetLayer(int level)"}</code> | Turns a selector level into a cave layer: `(level + 1) * distanceBetweenLayers - 1`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening for the manager's full sync. |

</details>
