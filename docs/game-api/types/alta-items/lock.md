---
title: "Lock"
description: "class Lock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Lock

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ConsumableLock`](/game-api/types/alta-items/consumablelock), [`LockEffectUnityEvent`](/game-api/types/alta-items/lockeffectunityevent), [`LockEvent`](/game-api/types/alta-items/lockevent), [`LockItemEvent`](/game-api/types/alta-items/lockitemevent), [`LockUnityEvent`](/game-api/types/alta-items/lockunityevent)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Lock()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstoignore" /><code>{"private Collider[] collidersToIgnore"}</code> |  |
| <Link id="m-cooldowncoroutine" /><code>{"private Coroutine coolDownCoroutine"}</code> |  |
| <Link id="m-correctkeyhash" /><code>{"private uint correctKeyHash"}</code> |  |
| <Link id="m-correctkeyprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" correctKeyPrefab"}</code> |  |
| <Link id="m-currentkey" /><code>{"protected "}<Link to="/game-api/types/alta-items/keyitem">{"KeyItem"}</Link>{" currentKey"}</code> |  |
| <Link id="m-delaybetweenunlockingandopening" /><code>{"private float delayBetweenUnlockingAndOpening"}</code> |  |
| <Link id="m-distancetobreakjoint" /><code>{"private float distanceToBreakJoint"}</code> |  |
| <Link id="m-dottounlock" /><code>{"private float dotToUnlock"}</code> |  |
| <Link id="m-haskey" /><code>{"protected bool hasKey"}</code> |  |
| <Link id="m-isdetachedlock" /><code>{"private bool isDetachedLock"}</code> |  |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> |  |
| <Link id="m-islockedevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" isLockedEvent"}</code> |  |
| <Link id="m-isoutofcooldown" /><code>{"private bool isOutOfCooldown"}</code> |  |
| <Link id="m-keyjoint" /><code>{"protected ConfigurableJoint keyJoint"}</code> |  |
| <Link id="m-keyturnevent" /><code>{"private "}<Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" keyTurnEvent"}</code> |  |
| <Link id="m-lockposition" /><code>{"private Transform lockPosition"}</code> |  |
| <Link id="m-noninteractinglayer" /><code>{"private int nonInteractingLayer"}</code> |  |
| <Link id="m-originallayer" /><code>{"private int originalLayer"}</code> |  |
| <Link id="m-receivednewkeyevent" /><code>{"private "}<Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" receivedNewKeyEvent"}</code> |  |
| <Link id="m-rigidbody" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" rigidBody"}</code> |  |
| <Link id="m-sqrbreakdistance" /><code>{"private float sqrBreakDistance"}</code> |  |
| <Link id="m-syncbreakkeygrip" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreakKeyGrip"}</code> |  |
| <Link id="m-syncbreakkeyjoint" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreakKeyJoint"}</code> |  |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"Collider[] Colliders { get; }"}</code> |  |
| <Link id="m-isdetachedlock-2" /><code>{"bool IsDetachedLock { get; }"}</code> |  |
| <Link id="m-islocked-2" /><code>{"bool IsLocked { get; }"}</code> |  |
| <Link id="m-islockedevent-2" /><code><Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" IsLockedEvent { get; }"}</code> |  |
| <Link id="m-keyturnevent-2" /><code><Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" KeyTurnEvent { get; }"}</code> |  |
| <Link id="m-receivednewkeyevent-2" /><code><Link to="/game-api/types/alta-items/keyitemevent">{"KeyItemEvent"}</Link>{" ReceivedNewKeyEvent { get; }"}</code> |  |
| <Link id="m-rigidbody-2" /><code><Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" Rigidbody { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-jinglejangle" /><code>{"void JingleJangle(Vector3 jingleJangleTorque)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setlock" /><code>{"void SetLock(bool isLocked)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-breakkeygrip" /><code>{"private void BreakKeyGrip()"}</code> |  |
| <Link id="m-collidersignoredelay" /><code>{"private IEnumerator CollidersIgnoreDelay(IEnumerable<Collider> colliders) (iterator)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-locked" /><code>{"protected virtual void Locked()"}</code> |  |
| <Link id="m-onjointbreak" /><code>{"private void OnJointBreak(float breakForce)"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-recentgrab" /><code>{"private void RecentGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" key, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-rungrabcooldown" /><code>{"private IEnumerator RunGrabCooldown() (iterator)"}</code> |  |
| <Link id="m-setupkey" /><code>{"private void SetupKey("}<Link to="/game-api/types/alta-items/keyitem">{"KeyItem"}</Link>{" newKey)"}</code> |  |
| <Link id="m-syncbreakkeygrip-2" /><code>{"private void SyncBreakKeyGrip("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncbreakkeyjoint-2" /><code>{"private void SyncBreakKeyJoint("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unlockdelay" /><code>{"private IEnumerator UnlockDelay() (iterator)"}</code> |  |
| <Link id="m-unlocked" /><code>{"protected virtual void Unlocked()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Lock`:

[`LockableHinge.ApplyLock`](/game-api/types/alta-items/lockablehinge#m-applylock), [`LockableHinge.currentLock`](/game-api/types/alta-items/lockablehinge#m-currentlock), [`LockableHinge.LockTrigger`](/game-api/types/alta-items/lockablehinge#m-locktrigger).
