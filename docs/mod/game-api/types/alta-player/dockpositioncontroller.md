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
| <Link id="m-ctor" /><code>{"DockPositionController()"}</code> | Creates a `DockPositionController` with default values. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accessibledocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/accessibledocks">{"AccessibleDocks"}</Link>{" accessibleDocks"}</code> | Private: the character's `AccessibleDocks`, told when positioning is done. |
| <Link id="m-center" /><code>{"private Transform center"}</code> | Private: the point the dock offsets are measured from. |
| <Link id="m-hassetup" /><code>{"private bool hasSetup"}</code> | Private: whether the original offsets have been recorded. |
| <Link id="m-pouchdistances" /><code>{"private Vector3[] pouchDistances"}</code> | Private: original pouch dock offsets from the centre. |
| <Link id="m-pouchdocks" /><code>{"private Transform[] pouchDocks"}</code> | Private: the pouch belt dock transforms. |
| <Link id="m-tooldistances" /><code>{"private Vector3[] toolDistances"}</code> | Private: original tool dock offsets from the centre. |
| <Link id="m-tooldocks" /><code>{"private Transform[] toolDocks"}</code> | Private: the tool belt dock transforms. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-duplicate" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" Duplicate("}<Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" original, Transform parent)"}</code> | Makes a copy with new instances of every dock and the centre, parented under the given transform at the same positions. |
| <Link id="m-setup" /><code>{"void Setup(float toolDistanceRatio, float pouchDistanceRatio)"}</code> | Scales tool and pouch dock offsets by the given ratios, recording the original offsets the first time, then finishes `AccessibleDocks` setup. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positiondocks" /><code>{"private void PositionDocks(float toolDistanceRatio, Vector3[] distances, Transform[] docks, Vector3 centerPosition)"}</code> | Private: places each dock at its original offset from the centre, scaled by the ratio. |
| <Link id="m-setup-2" /><code>{"private void Setup(Vector3 centerPosition)"}</code> | Scales tool and pouch dock offsets by the given ratios, recording the original offsets the first time, then finishes `AccessibleDocks` setup. |
| <Link id="m-setupdocks" /><code>{"private void SetupDocks(Transform[] docks, ref Vector3[] distances, Vector3 centerPosition)"}</code> | Private: records each dock's offset from the centre. |

</details>

## Used in

Members of other types that take, return or hold a `DockPositionController`:

[`PlayerCharacter.dockPositionController`](/mod/game-api/types/alta-player/playercharacter#m-dockpositioncontroller), [`PlayerCharacter.DockPositionController`](/mod/game-api/types/alta-player/playercharacter#m-dockpositioncontroller-2).
