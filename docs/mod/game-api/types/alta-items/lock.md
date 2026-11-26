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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ConsumableLock`](/mod/game-api/types/alta-items/consumablelock), [`LockEffectUnityEvent`](/mod/game-api/types/alta-items/lockeffectunityevent), [`LockEvent`](/mod/game-api/types/alta-items/lockevent), [`LockItemEvent`](/mod/game-api/types/alta-items/lockitemevent), [`LockUnityEvent`](/mod/game-api/types/alta-items/lockunityevent)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Lock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentkey" /><code>{"protected "}<Link to="/mod/game-api/types/alta-items/keyitem">{"KeyItem"}</Link>{" currentKey"}</code> | <span className="api-desc">The key currently inserted, or null.</span> |
| <Link id="m-haskey" /><code>{"protected bool hasKey"}</code> | <span className="api-desc">Whether a key is held in the lock by its joint.</span> |
| <Link id="m-keyjoint" /><code>{"protected ConfigurableJoint keyJoint"}</code> | <span className="api-desc">The joint holding the inserted key; breaks when the player pulls their hand too far away.</span> |
| <Link id="m-rigidbody" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" rigidBody"}</code> | <span className="api-desc">The lock's `NetworkRigidbody`, cached on `Awake`.</span> |

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstoignore" /><code>{"private Collider[] collidersToIgnore"}</code> | <span className="api-desc">Private: the lock's colliders, also exposed as `Colliders`.</span> |
| <Link id="m-cooldowncoroutine" /><code>{"private Coroutine coolDownCoroutine"}</code> | <span className="api-desc">Private: the running grab cooldown.</span> |
| <Link id="m-correctkeyhash" /><code>{"private uint correctKeyHash"}</code> | <span className="api-desc">Private: prefab hash a key must have to fit this lock.</span> |
| <Link id="m-correctkeyprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" correctKeyPrefab"}</code> | <span className="api-desc">The key prefab that fits this lock.</span> |
| <Link id="m-delaybetweenunlockingandopening" /><code>{"private float delayBetweenUnlockingAndOpening"}</code> | <span className="api-desc">Seconds between the key turning and the lock opening. Defaults to 1.</span> |
| <Link id="m-distancetobreakjoint" /><code>{"private float distanceToBreakJoint"}</code> | <span className="api-desc">How far the hand can be from the held key before the key is pulled out. Defaults to 0.2.</span> |
| <Link id="m-dottounlock" /><code>{"private float dotToUnlock"}</code> | <span className="api-desc">The key must turn past this angle (stored as a dot product) to unlock.</span> |
| <Link id="m-isdetachedlock" /><code>{"private bool isDetachedLock"}</code> | <span className="api-desc">Backing field for `IsDetachedLock`. A detached lock switches layer so players can't touch it while locked.</span> |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> | <span className="api-desc">Backing field for `IsLocked`.</span> |
| <Link id="m-islockedevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" isLockedEvent"}</code> | <span className="api-desc">Backing field for `IsLockedEvent`.</span> |
| <Link id="m-isoutofcooldown" /><code>{"private bool isOutOfCooldown"}</code> | <span className="api-desc">Private: false for a second after the key is grabbed, which blocks unlocking.</span> |
| <Link id="m-keyturnevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" keyTurnEvent"}</code> | <span className="api-desc">Backing field for `KeyTurnEvent`.</span> |
| <Link id="m-lockposition" /><code>{"private Transform lockPosition"}</code> | <span className="api-desc">Where the key tip sits and which way it faces when inserted.</span> |
| <Link id="m-noninteractinglayer" /><code>{"private int nonInteractingLayer"}</code> | <span className="api-desc">Private: the `NotInteractingWithPlayerBody` layer used while a detached lock is locked.</span> |
| <Link id="m-originallayer" /><code>{"private int originalLayer"}</code> | <span className="api-desc">Private: the lock's own layer, restored when unlocked.</span> |
| <Link id="m-receivednewkeyevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" receivedNewKeyEvent"}</code> | <span className="api-desc">Backing field for `ReceivedNewKeyEvent`.</span> |
| <Link id="m-sqrbreakdistance" /><code>{"private float sqrBreakDistance"}</code> | <span className="api-desc">Private: `distanceToBreakJoint` squared.</span> |
| <Link id="m-syncbreakkeygrip" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreakKeyGrip"}</code> | <span className="api-desc">Private: message for `SyncBreakKeyGrip`.</span> |
| <Link id="m-syncbreakkeyjoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreakKeyJoint"}</code> | <span className="api-desc">Private: message for `SyncBreakKeyJoint`.</span> |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> | <span className="api-desc">Private: message for `SyncLocked`, also sent to players as they connect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"Collider[] Colliders { get; }"}</code> | <span className="api-desc">All colliders under the lock, ignored against the key while the key is inserted.</span> |
| <Link id="m-isdetachedlock-2" /><code>{"bool IsDetachedLock { get; }"}</code> | <span className="api-desc">Whether this lock is a separate object. Detached locks switch to a layer that ignores the player body while locked.</span> |
| <Link id="m-islocked-2" /><code>{"bool IsLocked { get; }"}</code> | <span className="api-desc">Whether the lock is currently locked.</span> |
| <Link id="m-islockedevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" IsLockedEvent { get; }"}</code> | <span className="api-desc">Raised whenever the lock becomes locked or unlocked.</span> |
| <Link id="m-keyturnevent-2" /><code><Link to="/mod/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" KeyTurnEvent { get; }"}</code> | <span className="api-desc">Raised when the key has been turned far enough and is released from the player's hand.</span> |
| <Link id="m-receivednewkeyevent-2" /><code><Link to="/mod/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" ReceivedNewKeyEvent { get; }"}</code> | <span className="api-desc">Raised when the matching key enters the lock and is jointed in place.</span> |
| <Link id="m-rigidbody-2" /><code><Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" Rigidbody { get; }"}</code> | <span className="api-desc">The lock's `NetworkRigidbody`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced lock state, key joint break and key grip break messages.</span> |
| <Link id="m-jinglejangle" /><code>{"void JingleJangle(Vector3 jingleJangleTorque)"}</code> | <span className="api-desc">Adds a torque to the lock's rigidbody to rattle it, unless a key is inserted. Called by `Chest` when shaken.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current locked state to a newly connected player.</span> |
| <Link id="m-setlock" /><code>{"void SetLock(bool isLocked)"}</code> | <span className="api-desc">Sets the locked state, raises the event and, on the server, syncs it to clients. Does nothing if unchanged.</span> |
| <Link id="m-locked" /><code>{"protected virtual void Locked()"}</code> | <span className="api-desc">Called when the lock becomes locked; sets the flag and raises `IsLockedEvent`. Override to add behaviour.</span> |
| <Link id="m-unlocked" /><code>{"protected virtual void Unlocked()"}</code> | <span className="api-desc">Called when the lock becomes unlocked; clears the flag and raises `IsLockedEvent`. Override to add behaviour.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the colliders, rigidbody, layers and squared break distance, and the hash of the correct key prefab.</span> |
| <Link id="m-breakkeygrip" /><code>{"private void BreakKeyGrip()"}</code> | <span className="api-desc">Private: forces every hand off the inserted key, freezes it and raises `KeyTurnEvent`. The server syncs this to clients.</span> |
| <Link id="m-collidersignoredelay" /><code>{"private IEnumerator CollidersIgnoreDelay(IEnumerable<Collider> colliders) (iterator)"}</code> | <span className="api-desc">Private: turns collisions between the lock and a removed key back on after half a second.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Breaks the key joint when the local hand pulls too far, and on the server starts unlocking once the key is turned far enough.</span> |
| <Link id="m-onjointbreak" /><code>{"private void OnJointBreak(float breakForce)"}</code> | <span className="api-desc">Private: releases the key when its joint breaks, giving physics back to both the lock and key.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Private: when a key of the correct prefab enters the trigger, freezes both and seats the key with `SetupKey`.</span> |
| <Link id="m-recentgrab" /><code>{"private void RecentGrab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" key, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private, server: starts a one second cooldown whenever the inserted key is grabbed.</span> |
| <Link id="m-rungrabcooldown" /><code>{"private IEnumerator RunGrabCooldown() (iterator)"}</code> | <span className="api-desc">Private: waits one second, then allows unlocking again.</span> |
| <Link id="m-setupkey" /><code>{"private void SetupKey("}<Link to="/mod/game-api/types/alta-items/keyitem">{"KeyItem"}</Link>{" newKey)"}</code> | <span className="api-desc">Private: snaps a key into the lock and joins it with a joint that can only twist, up to 90 degrees.</span> |
| <Link id="m-syncbreakkeygrip-2" /><code>{"private void SyncBreakKeyGrip("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: client side of `BreakKeyGrip`.</span> |
| <Link id="m-syncbreakkeyjoint-2" /><code>{"private void SyncBreakKeyJoint("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: breaks the key joint when a client reports pulling out the key; the server relays it to other players.</span> |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the locked state, applied on clients with `SetLock`.</span> |
| <Link id="m-unlockdelay" /><code>{"private IEnumerator UnlockDelay() (iterator)"}</code> | <span className="api-desc">Private: breaks the key grip, waits `delayBetweenUnlockingAndOpening`, then unlocks.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Lock`:

<div className="api-used-in">

[`LockableHinge.ApplyLock`](/mod/game-api/types/alta-items/lockablehinge#m-applylock), [`LockableHinge.currentLock`](/mod/game-api/types/alta-items/lockablehinge#m-currentlock), [`LockableHinge.LockTrigger`](/mod/game-api/types/alta-items/lockablehinge#m-locktrigger).

</div>
