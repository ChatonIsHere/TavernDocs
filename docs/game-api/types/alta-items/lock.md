---
title: "Lock"
description: "A lock that opens when its matching key prefab is pushed in and turned far enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Lock

A **class** in `Root.Township`, `Alta.Inventory`.

A lock that opens when its matching key prefab is pushed in and turned far enough. Used on chests (`Chest`) and subclassed by `ConsumableLock`; the server decides when it unlocks and syncs the state.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ConsumableLock`](/game-api/types/alta-items/consumablelock), [`LockEffectUnityEvent`](/game-api/types/alta-items/lockeffectunityevent), [`LockEvent`](/game-api/types/alta-items/lockevent), [`LockItemEvent`](/game-api/types/alta-items/lockitemevent), [`LockUnityEvent`](/game-api/types/alta-items/lockunityevent)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Lock()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentkey" /><code>{"protected "}<Link to="/game-api/types/alta-items/keyitem">{"KeyItem"}</Link>{" currentKey"}</code> | The key currently inserted, or null. |
| <Link id="m-haskey" /><code>{"protected bool hasKey"}</code> | Whether a key is held in the lock by its joint. |
| <Link id="m-keyjoint" /><code>{"protected ConfigurableJoint keyJoint"}</code> | The joint holding the inserted key; breaks when the player pulls their hand too far away. |
| <Link id="m-rigidbody" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" rigidBody"}</code> | The lock's `NetworkRigidbody`, cached on `Awake`. |

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstoignore" /><code>{"private Collider[] collidersToIgnore"}</code> | Private: the lock's colliders, also exposed as `Colliders`. |
| <Link id="m-cooldowncoroutine" /><code>{"private Coroutine coolDownCoroutine"}</code> | Private: the running grab cooldown. |
| <Link id="m-correctkeyhash" /><code>{"private uint correctKeyHash"}</code> | Private: prefab hash a key must have to fit this lock. |
| <Link id="m-correctkeyprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" correctKeyPrefab"}</code> | The key prefab that fits this lock. |
| <Link id="m-delaybetweenunlockingandopening" /><code>{"private float delayBetweenUnlockingAndOpening"}</code> | Seconds between the key turning and the lock opening. Defaults to 1. |
| <Link id="m-distancetobreakjoint" /><code>{"private float distanceToBreakJoint"}</code> | How far the hand can be from the held key before the key is pulled out. Defaults to 0.2. |
| <Link id="m-dottounlock" /><code>{"private float dotToUnlock"}</code> | The key must turn past this angle (stored as a dot product) to unlock. |
| <Link id="m-isdetachedlock" /><code>{"private bool isDetachedLock"}</code> | Backing field for `IsDetachedLock`. A detached lock switches layer so players can't touch it while locked. |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> | Backing field for `IsLocked`. |
| <Link id="m-islockedevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" isLockedEvent"}</code> | Backing field for `IsLockedEvent`. |
| <Link id="m-isoutofcooldown" /><code>{"private bool isOutOfCooldown"}</code> | Private: false for a second after the key is grabbed, which blocks unlocking. |
| <Link id="m-keyturnevent" /><code>{"private "}<Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" keyTurnEvent"}</code> | Backing field for `KeyTurnEvent`. |
| <Link id="m-lockposition" /><code>{"private Transform lockPosition"}</code> | Where the key tip sits and which way it faces when inserted. |
| <Link id="m-noninteractinglayer" /><code>{"private int nonInteractingLayer"}</code> | Private: the `NotInteractingWithPlayerBody` layer used while a detached lock is locked. |
| <Link id="m-originallayer" /><code>{"private int originalLayer"}</code> | Private: the lock's own layer, restored when unlocked. |
| <Link id="m-receivednewkeyevent" /><code>{"private "}<Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" receivedNewKeyEvent"}</code> | Backing field for `ReceivedNewKeyEvent`. |
| <Link id="m-sqrbreakdistance" /><code>{"private float sqrBreakDistance"}</code> | Private: `distanceToBreakJoint` squared. |
| <Link id="m-syncbreakkeygrip" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreakKeyGrip"}</code> | Private: message for `SyncBreakKeyGrip`. |
| <Link id="m-syncbreakkeyjoint" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreakKeyJoint"}</code> | Private: message for `SyncBreakKeyJoint`. |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> | Private: message for `SyncLocked`, also sent to players as they connect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"Collider[] Colliders { get; }"}</code> | All colliders under the lock, ignored against the key while the key is inserted. |
| <Link id="m-isdetachedlock-2" /><code>{"bool IsDetachedLock { get; }"}</code> | Whether this lock is a separate object. Detached locks switch to a layer that ignores the player body while locked. |
| <Link id="m-islocked-2" /><code>{"bool IsLocked { get; }"}</code> | Whether the lock is currently locked. |
| <Link id="m-islockedevent-2" /><code><Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" IsLockedEvent { get; }"}</code> | Raised whenever the lock becomes locked or unlocked. |
| <Link id="m-keyturnevent-2" /><code><Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" KeyTurnEvent { get; }"}</code> | Raised when the key has been turned far enough and is released from the player's hand. |
| <Link id="m-receivednewkeyevent-2" /><code><Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" ReceivedNewKeyEvent { get; }"}</code> | Raised when the matching key enters the lock and is jointed in place. |
| <Link id="m-rigidbody-2" /><code><Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" Rigidbody { get; }"}</code> | The lock's `NetworkRigidbody`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced lock state, key joint break and key grip break messages. |
| <Link id="m-jinglejangle" /><code>{"void JingleJangle(Vector3 jingleJangleTorque)"}</code> | Adds a torque to the lock's rigidbody to rattle it, unless a key is inserted. Called by `Chest` when shaken. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current locked state to a newly connected player. |
| <Link id="m-setlock" /><code>{"void SetLock(bool isLocked)"}</code> | Sets the locked state, raises the event and, on the server, syncs it to clients. Does nothing if unchanged. |
| <Link id="m-locked" /><code>{"protected virtual void Locked()"}</code> | Called when the lock becomes locked; sets the flag and raises `IsLockedEvent`. Override to add behaviour. |
| <Link id="m-unlocked" /><code>{"protected virtual void Unlocked()"}</code> | Called when the lock becomes unlocked; clears the flag and raises `IsLockedEvent`. Override to add behaviour. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the colliders, rigidbody, layers and squared break distance, and the hash of the correct key prefab. |
| <Link id="m-breakkeygrip" /><code>{"private void BreakKeyGrip()"}</code> | Private: forces every hand off the inserted key, freezes it and raises `KeyTurnEvent`. The server syncs this to clients. |
| <Link id="m-collidersignoredelay" /><code>{"private IEnumerator CollidersIgnoreDelay(IEnumerable<Collider> colliders) (iterator)"}</code> | Private: turns collisions between the lock and a removed key back on after half a second. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Breaks the key joint when the local hand pulls too far, and on the server starts unlocking once the key is turned far enough. |
| <Link id="m-onjointbreak" /><code>{"private void OnJointBreak(float breakForce)"}</code> | Private: releases the key when its joint breaks, giving physics back to both the lock and key. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Private: when a key of the correct prefab enters the trigger, freezes both and seats the key with `SetupKey`. |
| <Link id="m-recentgrab" /><code>{"private void RecentGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" key, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private, server: starts a one second cooldown whenever the inserted key is grabbed. |
| <Link id="m-rungrabcooldown" /><code>{"private IEnumerator RunGrabCooldown() (iterator)"}</code> | Private: waits one second, then allows unlocking again. |
| <Link id="m-setupkey" /><code>{"private void SetupKey("}<Link to="/game-api/types/alta-items/keyitem">{"KeyItem"}</Link>{" newKey)"}</code> | Private: snaps a key into the lock and joins it with a joint that can only twist, up to 90 degrees. |
| <Link id="m-syncbreakkeygrip-2" /><code>{"private void SyncBreakKeyGrip("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: client side of `BreakKeyGrip`. |
| <Link id="m-syncbreakkeyjoint-2" /><code>{"private void SyncBreakKeyJoint("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: breaks the key joint when a client reports pulling out the key; the server relays it to other players. |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs the locked state, applied on clients with `SetLock`. |
| <Link id="m-unlockdelay" /><code>{"private IEnumerator UnlockDelay() (iterator)"}</code> | Private: breaks the key grip, waits `delayBetweenUnlockingAndOpening`, then unlocks. |

</details>

## Used in

Members of other types that take, return or hold a `Lock`:

[`LockableHinge.ApplyLock`](/game-api/types/alta-items/lockablehinge#m-applylock), [`LockableHinge.currentLock`](/game-api/types/alta-items/lockablehinge#m-currentlock), [`LockableHinge.LockTrigger`](/game-api/types/alta-items/lockablehinge#m-locktrigger).
