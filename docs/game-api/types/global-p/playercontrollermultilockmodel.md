---
title: "PlayerControllerMultiLockModel"
description: "class PlayerControllerMultiLockModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerMultiLockModel

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPlayerControllerMultiLockModel`](/game-api/types/global-i-l/iplayercontrollermultilockmodel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerControllerMultiLockModel()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-locks" /><code>{"private HashSet<object> locks"}</code> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |
| <Link id="m-synclockstate" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLockState"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-islocked" /><code>{"bool IsLocked { get; private set; }"}</code> |

## Events

<details>
<summary>1 private and internal event</summary>

| Member |
| --- |
| <Link id="m-onlockstatechanged" /><code>{"private event Action<bool> onLockStateChanged"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addlock" /><code>{"void AddLock(object lockerObject)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-removelock" /><code>{"void RemoveLock(object lockerObject)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-synclockstate-2" /><code>{"private void SyncLockState("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
