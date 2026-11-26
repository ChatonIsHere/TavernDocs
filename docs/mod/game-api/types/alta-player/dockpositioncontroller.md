---
title: "DockPositionController"
description: "Moves a player character's tool belt and pouch docks in or out from a centre point to suit their body type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockPositionController

A **class** in `Root.Township`, `Alta.Character`.

Moves a player character's tool belt and pouch docks in or out from a centre point to suit their body type. `PlayerCharacter` holds one and calls `Setup` with the body type's ratios.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Documented in** [Player inventory](/mod/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockPositionController()"}</code> | <span className="api-desc">Creates a `DockPositionController` with default values.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accessibledocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/accessibledocks">{"AccessibleDocks"}</Link>{" accessibleDocks"}</code> | <span className="api-desc">Private: the character's `AccessibleDocks`, told when positioning is done.</span> |
| <Link id="m-center" /><code>{"private Transform center"}</code> | <span className="api-desc">Private: the point the dock offsets are measured from.</span> |
| <Link id="m-hassetup" /><code>{"private bool hasSetup"}</code> | <span className="api-desc">Private: whether the original offsets have been recorded.</span> |
| <Link id="m-pouchdistances" /><code>{"private Vector3[] pouchDistances"}</code> | <span className="api-desc">Private: original pouch dock offsets from the centre.</span> |
| <Link id="m-pouchdocks" /><code>{"private Transform[] pouchDocks"}</code> | <span className="api-desc">Private: the pouch belt dock transforms.</span> |
| <Link id="m-tooldistances" /><code>{"private Vector3[] toolDistances"}</code> | <span className="api-desc">Private: original tool dock offsets from the centre.</span> |
| <Link id="m-tooldocks" /><code>{"private Transform[] toolDocks"}</code> | <span className="api-desc">Private: the tool belt dock transforms.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-duplicate" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" Duplicate("}<Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" original, Transform parent)"}</code> | <span className="api-desc">Makes a copy with new instances of every dock and the centre, parented under the given transform at the same positions.</span> |
| <Link id="m-setup" /><code>{"void Setup(float toolDistanceRatio, float pouchDistanceRatio)"}</code> | <span className="api-desc">Scales tool and pouch dock offsets by the given ratios, recording the original offsets the first time, then finishes `AccessibleDocks` setup.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positiondocks" /><code>{"private void PositionDocks(float toolDistanceRatio, Vector3[] distances, Transform[] docks, Vector3 centerPosition)"}</code> | <span className="api-desc">Private: places each dock at its original offset from the centre, scaled by the ratio.</span> |
| <Link id="m-setup-2" /><code>{"private void Setup(Vector3 centerPosition)"}</code> | <span className="api-desc">Scales tool and pouch dock offsets by the given ratios, recording the original offsets the first time, then finishes `AccessibleDocks` setup.</span> |
| <Link id="m-setupdocks" /><code>{"private void SetupDocks(Transform[] docks, ref Vector3[] distances, Vector3 centerPosition)"}</code> | <span className="api-desc">Private: records each dock's offset from the centre.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DockPositionController`:

<div className="api-used-in">

[`PlayerCharacter.dockPositionController`](/mod/game-api/types/alta-player/playercharacter#m-dockpositioncontroller), [`PlayerCharacter.DockPositionController`](/mod/game-api/types/alta-player/playercharacter#m-dockpositioncontroller-2).

</div>
