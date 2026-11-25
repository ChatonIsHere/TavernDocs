---
title: "TeleportationPoint"
description: "class TeleportationPoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportationPoint

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-effect" /><code>{"private GameObject effect"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-teleportmode" /><code>{"private "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" teleportMode"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-attempt" /><code>{"override bool Attempt("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> |
| <Link id="m-end" /><code>{"override void End("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-positiontarget" /><code>{"void PositionTarget(Vector3 position)"}</code> |
| <Link id="m-teleportplayer" /><code>{"void TeleportPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
