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
| <Link id="m-ctor" /><code>{"LockableHinge()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlock" /><code>{"protected "}<Link to="/mod/game-api/types/alta-items/lock">{"Lock"}</Link>{" currentLock"}</code> | <span className="api-desc">The lock fitted, or null.</span> |
| <Link id="m-islocked" /><code>{"protected bool isLocked"}</code> | <span className="api-desc">Whether the lid is locked.</span> |
| <Link id="m-lidjoint" /><code>{"protected HingeJoint lidJoint"}</code> | <span className="api-desc">The hinge joint whose limit changes when locked.</span> |
| <Link id="m-lockposition" /><code>{"protected Transform lockPosition"}</code> | <span className="api-desc">Where a detachable lock is attached.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" baseColliders"}</code> | <span className="api-desc">Colliders that ignore collisions with the attached lock's colliders.</span> |
| <Link id="m-islockedevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" isLockedEvent"}</code> | <span className="api-desc">Backing field for `IsLockedEvent`.</span> |
| <Link id="m-lockedmaxangle" /><code>{"private float lockedMaxAngle"}</code> | <span className="api-desc">Lid joint lower limit while locked (default -2 degrees).</span> |
| <Link id="m-lockhash" /><code>{"private uint lockHash"}</code> | <span className="api-desc">Prefab hash of a saved detached lock, set on load and used by `LoadSetup` to respawn it.</span> |
| <Link id="m-lockjoint" /><code>{"private ConfigurableJoint lockJoint"}</code> | <span className="api-desc">Joint made by `CreateLockJoint` that holds a detached lock on; destroyed when the lock comes off.</span> |
| <Link id="m-openmaxangle" /><code>{"private float openMaxAngle"}</code> | <span className="api-desc">Lid joint lower limit while unlocked (default -150 degrees).</span> |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> | <span className="api-desc">Method sync (SyncA) that sends the locked flag.</span> |
| <Link id="m-syncsetlock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetLock"}</code> | <span className="api-desc">Method sync (SyncB) that sends the locked flag and the attached lock; sent to each player on connect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islockedevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" IsLockedEvent { get; }"}</code> | <span className="api-desc">Event raised when the locked state changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the syncs.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: fits and locks a child lock if one is found.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the lock and locked state to a joining player.</span> |
| <Link id="m-setlocked" /><code>{"virtual void SetLocked(bool isLocked)"}</code> | <span className="api-desc">Locks or unlocks the lid and changes the hinge limit. Server: unlocking drops a detachable lock and syncs.</span> |
| <Link id="m-applylock" /><code>{"protected virtual void ApplyLock("}<Link to="/mod/game-api/types/alta-items/lock">{"Lock"}</Link>{" newLock)"}</code> | <span className="api-desc">Fits a lock, or removes the old one. A built-in lock can't be removed. Server: syncs it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createlockjoint" /><code>{"private void CreateLockJoint(Rigidbody lockRigidbody)"}</code> | <span className="api-desc">Adds a springy configurable joint holding a detached lock's rigidbody to the lid at `lockPosition`.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">Server, after loading: re-applies a saved detached lock, using a child lock if present or spawning one from the saved prefab hash.</span> |
| <Link id="m-locktrigger" /><code>{"private void LockTrigger("}<Link to="/mod/game-api/types/alta-items/lock">{"Lock"}</Link>{" eventLock)"}</code> | <span className="api-desc">Server: listens to the current lock's locked event and copies its state with `SetLocked`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: picks up a child `Lock` as the current lock if none is set.</span> |
| <Link id="m-resolvesaveloadineditor" /><code>{"private void ResolveSaveLoadInEditor()"}</code> | <span className="api-desc">Empty; called at the start of save and load.</span> |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the locked flag; clients apply it with `SetLocked`.</span> |
| <Link id="m-syncsetlock-2" /><code>{"private void SyncSetLock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the locked flag and which lock entity is attached; clients attach or detach that lock, waiting for it to spawn if needed.</span> |

</details>
