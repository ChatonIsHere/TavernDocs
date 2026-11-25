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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<LockableHingeSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<LockableHingeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LockableHingeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`Chest`](/game-api/types/alta-items/chest), [`LockableEvent`](/game-api/types/alta-items/lockableevent), [`LockableHingeSaveData`](/game-api/types/alta-items/lockablehingesavedata), [`LockableUnityEvent`](/game-api/types/alta-items/lockableunityevent)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockableHinge()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basecolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" baseColliders"}</code> |  |
| <Link id="m-currentlock" /><code>{"protected "}<Link to="/game-api/types/alta-items/lock">{"Lock"}</Link>{" currentLock"}</code> | The lock fitted, or null. |
| <Link id="m-islocked" /><code>{"protected bool isLocked"}</code> | Whether the lid is locked. |
| <Link id="m-islockedevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" isLockedEvent"}</code> |  |
| <Link id="m-lidjoint" /><code>{"protected HingeJoint lidJoint"}</code> | The hinge joint whose limit changes when locked. |
| <Link id="m-lockedmaxangle" /><code>{"private float lockedMaxAngle"}</code> |  |
| <Link id="m-lockhash" /><code>{"private uint lockHash"}</code> |  |
| <Link id="m-lockjoint" /><code>{"private ConfigurableJoint lockJoint"}</code> |  |
| <Link id="m-lockposition" /><code>{"protected Transform lockPosition"}</code> | Where a detachable lock is attached. |
| <Link id="m-openmaxangle" /><code>{"private float openMaxAngle"}</code> |  |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> |  |
| <Link id="m-syncsetlock" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetLock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islockedevent-2" /><code><Link to="/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" IsLockedEvent { get; }"}</code> | Event raised when the locked state changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the syncs. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: fits and locks a child lock if one is found. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the lock and locked state to a joining player. |
| <Link id="m-setlocked" /><code>{"virtual void SetLocked(bool isLocked)"}</code> | Locks or unlocks the lid and changes the hinge limit. Server: unlocking drops a detachable lock and syncs. |
| <Link id="m-applylock" /><code>{"protected virtual void ApplyLock("}<Link to="/game-api/types/alta-items/lock">{"Lock"}</Link>{" newLock)"}</code> | Fits a lock, or removes the old one. A built-in lock can't be removed. Server: syncs it. |
| <Link id="m-createlockjoint" /><code>{"private void CreateLockJoint(Rigidbody lockRigidbody)"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-locktrigger" /><code>{"private void LockTrigger("}<Link to="/game-api/types/alta-items/lock">{"Lock"}</Link>{" eventLock)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-resolvesaveloadineditor" /><code>{"private void ResolveSaveLoadInEditor()"}</code> |  |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsetlock-2" /><code>{"private void SyncSetLock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
