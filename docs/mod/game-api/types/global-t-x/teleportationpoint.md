---
title: "TeleportationPoint"
description: "Custom teleport target: when the local player's teleporter points at it, moves them to a saved target position instead."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportationPoint

A **class** in `Root.Township`, the global namespace.

Custom teleport target: when the local player's teleporter points at it, moves them to a saved target position instead. The target and mode are saved and synced to players.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`CustomTeleportation`](/mod/game-api/types/global-c-d/customteleportation), [`ISavable<TeleportationPointSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TeleportationPointSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TeleportationPointSaveData`](/mod/game-api/types/global-t-x/teleportationpointsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportationPoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private GameObject effect"}</code> | <span className="api-desc">Object shown while a teleporter aims at this point.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the target position and mode.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform the player is sent to.</span> |
| <Link id="m-teleportmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" teleportMode"}</code> | <span className="api-desc">How the target is applied (feet by default).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempt" /><code>{"override bool Attempt("}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Teleports the player if the teleporter belongs to a `PlayerCharacter`; returns whether it did.</span> |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Shows the effect while a teleporter aims here.</span> |
| <Link id="m-end" /><code>{"override void End("}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Hides the effect.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the method sync for the target.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the target position and mode to the joining player.</span> |
| <Link id="m-positiontarget" /><code>{"void PositionTarget(Vector3 position)"}</code> | <span className="api-desc">Moves the target to a world position and syncs it to players in the chunk.</span> |
| <Link id="m-teleportplayer" /><code>{"void TeleportPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Client: moves the local player to the target with the chosen `TeleportMode`. Does nothing for other players.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hides the effect.</span> |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the target position and teleport mode; remote clients apply what they read.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that calls `Serialize`.</span> |

</details>
