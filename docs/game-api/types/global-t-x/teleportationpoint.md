---
title: "TeleportationPoint"
description: "Custom teleport target: when the local player's teleporter points at it, moves them to a saved target position instead."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportationPoint

A **class** in `Root.Township`, no namespace.

Custom teleport target: when the local player's teleporter points at it, moves them to a saved target position instead. The target and mode are saved and synced to players.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`CustomTeleportation`](/game-api/types/global-c-d/customteleportation), [`ISavable<TeleportationPointSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TeleportationPointSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TeleportationPointSaveData`](/game-api/types/global-t-x/teleportationpointsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleportationPoint()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private GameObject effect"}</code> | Object shown while a teleporter aims at this point. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the target position and mode. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform the player is sent to. |
| <Link id="m-teleportmode" /><code>{"private "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" teleportMode"}</code> | How the target is applied (feet by default). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempt" /><code>{"override bool Attempt("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | Teleports the player if the teleporter belongs to a `PlayerCharacter`; returns whether it did. |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | Shows the effect while a teleporter aims here. |
| <Link id="m-end" /><code>{"override void End("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | Hides the effect. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the method sync for the target. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the target position and mode to the joining player. |
| <Link id="m-positiontarget" /><code>{"void PositionTarget(Vector3 position)"}</code> | Moves the target to a world position and syncs it to players in the chunk. |
| <Link id="m-teleportplayer" /><code>{"void TeleportPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Client: moves the local player to the target with the chosen `TeleportMode`. Does nothing for other players. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hides the effect. |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the target position and teleport mode; remote clients apply what they read. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that calls `Serialize`. |

</details>
