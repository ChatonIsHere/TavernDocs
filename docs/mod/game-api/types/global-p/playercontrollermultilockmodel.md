---
title: "PlayerControllerMultiLockModel"
description: "Tracks objects that lock the local player's controls (such as a screen fade) and syncs the locked state to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerMultiLockModel

A **class** in `Root.Township`, the global namespace.

Tracks objects that lock the local player's controls (such as a screen fade) and syncs the locked state to the server. While locked, `PlayerHealth` ignores damage.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IPlayerControllerMultiLockModel`](/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerMultiLockModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-locks" /><code>{"private HashSet<object> locks"}</code> | <span className="api-desc">Objects currently holding a lock.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player controller being locked.</span> |
| <Link id="m-synclockstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLockState"}</code> | <span className="api-desc">Network message sent to chunks when the state changes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"bool IsLocked { get; private set; }"}</code> | <span className="api-desc">True while any lock is held. The server takes it from the owning player's message.</span> |

## Events

<details className="api-private">
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlockstatechanged" /><code>{"private event Action<bool> onLockStateChanged"}</code> | <span className="api-desc">Event raised with the new state when the lock changes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlock" /><code>{"void AddLock(object lockerObject)"}</code> | <span className="api-desc">Local player only: adds a lock object; the first lock sets `IsLocked` and syncs it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network message for the lock state.</span> |
| <Link id="m-removelock" /><code>{"void RemoveLock(object lockerObject)"}</code> | <span className="api-desc">Local player only: removes a lock object; removing the last one clears `IsLocked` and syncs it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synclockstate-2" /><code>{"private void SyncLockState("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Serializes the lock state; the server only accepts it from the player who owns this controller.</span> |

</details>
