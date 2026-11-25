---
title: "LevelSelectCaveTeleporter"
description: "class LevelSelectCaveTeleporter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelSelectCaveTeleporter

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveTeleporter`](/game-api/types/alta-world-generation/caveteleporter)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LevelSelectCaveTeleporter()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-connections" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{"[] connections"}</code> |
| <Link id="m-distancebetweenlayers" /><code>{"private int distanceBetweenLayers"}</code> |
| <Link id="m-levelselector" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/levelselector">{"LevelSelector"}</Link>{" levelSelector"}</code> |
| <Link id="m-targetlayer" /><code>{"private int targetLayer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-targetlayer-2" /><code>{"override int TargetLayer { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-updatelevel" /><code>{"void UpdateLevel(int level)"}</code> |
| <Link id="m-initializeconnection" /><code>{"protected override void InitializeConnection()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getlayer" /><code>{"private int GetLayer(int level)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |

</details>
