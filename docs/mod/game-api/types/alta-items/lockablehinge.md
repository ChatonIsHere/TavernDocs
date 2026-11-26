---
title: "LockableHinge"
description: "A hinged lid (chest and similar) that can be locked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockableHinge

A **class** in `Root.Township`, `Alta.Inventory`.

A hinged lid (chest and similar) that can be locked. A child `Lock` limits the hinge angle when locked; a detachable lock is attached at a lock point and saved with the lid.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<LockableHingeSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<LockableHingeSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LockableHingeSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`Chest`](/mod/game-api/types/alta-items/chest), [`LockableEvent`](/mod/game-api/types/alta-items/lockableevent), [`LockableHingeSaveData`](/mod/game-api/types/alta-items/lockablehingesavedata), [`LockableUnityEvent`](/mod/game-api/types/alta-items/lockableunityevent)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockableHinge()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlock" /><code>{"protected "}<Link to="/mod/game-api/types/alta-items/lock">{"Lock"}</Link>{" currentLock"}</code> | The lock fitted, or null. |
| <Link id="m-islocked" /><code>{"protected bool isLocked"}</code> | Whether the lid is locked. |
| <Link id="m-lidjoint" /><code>{"protected HingeJoint lidJoint"}</code> | The hinge joint whose limit changes when locked. |
| <Link id="m-lockposition" /><code>{"protected Transform lockPosition"}</code> | Where a detachable lock is attached. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" baseColliders"}</code> | Colliders that ignore collisions with the attached lock's colliders. |
| <Link id="m-islockedevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" isLockedEvent"}</code> | Backing field for `IsLockedEvent`. |
| <Link id="m-lockedmaxangle" /><code>{"private float lockedMaxAngle"}</code> | Lid joint lower limit while locked (default -2 degrees). |
| <Link id="m-lockhash" /><code>{"private uint lockHash"}</code> | Prefab hash of a saved detached lock, set on load and used by `LoadSetup` to respawn it. |
| <Link id="m-lockjoint" /><code>{"private ConfigurableJoint lockJoint"}</code> | Joint made by `CreateLockJoint` that holds a detached lock on; destroyed when the lock comes off. |
| <Link id="m-openmaxangle" /><code>{"private float openMaxAngle"}</code> | Lid joint lower limit while unlocked (default -150 degrees). |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> | Method sync (SyncA) that sends the locked flag. |
| <Link id="m-syncsetlock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetLock"}</code> | Method sync (SyncB) that sends the locked flag and the attached lock; sent to each player on connect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islockedevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" IsLockedEvent { get; }"}</code> | Event raised when the locked state changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the syncs. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: fits and locks a child lock if one is found. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the lock and locked state to a joining player. |
| <Link id="m-setlocked" /><code>{"virtual void SetLocked(bool isLocked)"}</code> | Locks or unlocks the lid and changes the hinge limit. Server: unlocking drops a detachable lock and syncs. |
| <Link id="m-applylock" /><code>{"protected virtual void ApplyLock("}<Link to="/mod/game-api/types/alta-items/lock">{"Lock"}</Link>{" newLock)"}</code> | Fits a lock, or removes the old one. A built-in lock can't be removed. Server: syncs it. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createlockjoint" /><code>{"private void CreateLockJoint(Rigidbody lockRigidbody)"}</code> | Adds a springy configurable joint holding a detached lock's rigidbody to the lid at `lockPosition`. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | Server, after loading: re-applies a saved detached lock, using a child lock if present or spawning one from the saved prefab hash. |
| <Link id="m-locktrigger" /><code>{"private void LockTrigger("}<Link to="/mod/game-api/types/alta-items/lock">{"Lock"}</Link>{" eventLock)"}</code> | Server: listens to the current lock's locked event and copies its state with `SetLocked`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: picks up a child `Lock` as the current lock if none is set. |
| <Link id="m-resolvesaveloadineditor" /><code>{"private void ResolveSaveLoadInEditor()"}</code> | Empty; called at the start of save and load. |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the locked flag; clients apply it with `SetLocked`. |
| <Link id="m-syncsetlock-2" /><code>{"private void SyncSetLock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the locked flag and which lock entity is attached; clients attach or detach that lock, waiting for it to spawn if needed. |

</details>
