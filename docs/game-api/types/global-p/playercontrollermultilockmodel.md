---
title: "PlayerControllerMultiLockModel"
description: "Tracks objects that lock the local player's controls (such as a screen fade) and syncs the locked state to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerMultiLockModel

A **class** in `Root.Township`, no namespace.

Tracks objects that lock the local player's controls (such as a screen fade) and syncs the locked state to the server. While locked, `PlayerHealth` ignores damage.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPlayerControllerMultiLockModel`](/game-api/types/global-i-l/iplayercontrollermultilockmodel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerControllerMultiLockModel()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-locks" /><code>{"private HashSet<object> locks"}</code> | Objects currently holding a lock. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player controller being locked. |
| <Link id="m-synclockstate" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLockState"}</code> | Network message sent to chunks when the state changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"bool IsLocked { get; private set; }"}</code> | True while any lock is held. The server takes it from the owning player's message. |

## Events

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlockstatechanged" /><code>{"private event Action<bool> onLockStateChanged"}</code> | Event raised with the new state when the lock changes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlock" /><code>{"void AddLock(object lockerObject)"}</code> | Local player only: adds a lock object; the first lock sets `IsLocked` and syncs it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message for the lock state. |
| <Link id="m-removelock" /><code>{"void RemoveLock(object lockerObject)"}</code> | Local player only: removes a lock object; removing the last one clears `IsLocked` and syncs it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synclockstate-2" /><code>{"private void SyncLockState("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes the lock state; the server only accepts it from the player who owns this controller. |

</details>
