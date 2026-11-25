---
title: "Chest"
description: "class Chest in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chest

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LockableHinge`](/game-api/types/alta-items/lockablehinge)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Chest()"}</code> |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-anglecostoelevation" /><code>{"private AnimationCurve angleCosToElevation"}</code> |
| <Link id="m-autodocks" /><code>{"private "}<Link to="/game-api/types/alta-items/automaticdockarea">{"AutomaticDockArea"}</Link>{"[] autoDocks"}</code> |
| <Link id="m-chesthandles" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] chestHandles"}</code> |
| <Link id="m-childdocks" /><code>{"private "}<Link to="/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{"[] childDocks"}</code> |
| <Link id="m-closedistance" /><code>{"private float closeDistance"}</code> |
| <Link id="m-creakevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" creakEvent"}</code> |
| <Link id="m-currentplayer" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" currentPlayer"}</code> |
| <Link id="m-distancesqrdtoelevation" /><code>{"private AnimationCurve distanceSqrdToElevation"}</code> |
| <Link id="m-docksanimation" /><code>{"private "}<Link to="/game-api/types/global-c-d/curveelevation">{"CurveElevation"}</Link>{"[] docksAnimation"}</code> |
| <Link id="m-isplayerclose" /><code>{"private bool isPlayerClose"}</code> |
| <Link id="m-isplayingeffects" /><code>{"private bool isPlayingEffects"}</code> |
| <Link id="m-isrunningonlateupdate" /><code>{"private bool isRunningOnLateUpdate"}</code> |
| <Link id="m-issaveloading" /><code>{"private bool isSaveLoading"}</code> |
| <Link id="m-janglesensitivity" /><code>{"private float jangleSensitivity"}</code> |
| <Link id="m-jinglejangletorque" /><code>{"private Vector3 jingleJangleTorque"}</code> |
| <Link id="m-justjangled" /><code>{"private bool justJangled"}</code> |
| <Link id="m-laststatus" /><code>{"private bool lastStatus"}</code> |
| <Link id="m-lidgizmosize" /><code>{"private Vector3 lidGizmoSize"}</code> |
| <Link id="m-lidrigidbody" /><code>{"private Rigidbody lidRigidbody"}</code> |
| <Link id="m-lidtransform" /><code>{"private Transform lidTransform"}</code> |
| <Link id="m-lockjinglejangle" /><code>{"private "}<Link to="/game-api/types/alta-items/lockitemevent">{"LockItemEvent"}</Link>{" lockJingleJangle"}</code> |
| <Link id="m-popforce" /><code>{"private Vector3 popForce"}</code> |
| <Link id="m-thumpevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" thumpEvent"}</code> |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-creakevent-2" /><code><Link to="/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" CreakEvent { get; }"}</code> |
| <Link id="m-lockjinglejangle-2" /><code><Link to="/game-api/types/alta-items/lockitemevent">{"LockItemEvent"}</Link>{" LockJingleJangle { get; }"}</code> |
| <Link id="m-thumpevent-2" /><code><Link to="/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" ThumpEvent { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-setlocked" /><code>{"override void SetLocked(bool isLocked)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-delayeffects" /><code>{"private IEnumerator DelayEffects() (iterator)"}</code> |
| <Link id="m-handleinteracted" /><code>{"private void HandleInteracted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-jinglejangle" /><code>{"private void JingleJangle()"}</code> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-updatedistance" /><code>{"private void UpdateDistance("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |

</details>
