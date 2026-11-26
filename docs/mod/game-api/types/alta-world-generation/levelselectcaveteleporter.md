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
| <Link id="m-ctor" /><code>{"LevelSelectCaveTeleporter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{"[] connections"}</code> | <span className="api-desc">One connection per selector level, built once the manager has synced.</span> |
| <Link id="m-distancebetweenlayers" /><code>{"private int distanceBetweenLayers"}</code> | <span className="api-desc">How many cave layers each selector level steps down.</span> |
| <Link id="m-levelselector" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/levelselector">{"LevelSelector"}</Link>{" levelSelector"}</code> | <span className="api-desc">The selector the player uses to choose a level.</span> |
| <Link id="m-targetlayer" /><code>{"private int targetLayer"}</code> | <span className="api-desc">Backing field for `TargetLayer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetlayer-2" /><code>{"override int TargetLayer { get; }"}</code> | <span className="api-desc">The layer the teleporter currently sends players to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Listens for the teleporter manager's full sync so connections can be built.</span> |
| <Link id="m-updatelevel" /><code>{"void UpdateLevel(int level)"}</code> | <span className="api-desc">Sets the target layer from a selector level and switches to that level's connection.</span> |
| <Link id="m-initializeconnection" /><code>{"protected override void InitializeConnection()"}</code> | <span className="api-desc">Requests a connection for every selector level, sets up the level pips on clients and applies the current level.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlayer" /><code>{"private int GetLayer(int level)"}</code> | <span className="api-desc">Turns a selector level into a cave layer: `(level + 1) * distanceBetweenLayers - 1`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening for the manager's full sync.</span> |

</details>
