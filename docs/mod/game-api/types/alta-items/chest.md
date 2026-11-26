---
title: "Chest"
description: "A lockable chest: a LockableHinge lid that pops open when unlocked, raises its inner docks as the local player leans in, and plays lid and lock sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chest

A **class** in `Root.Township`, `Alta.Inventory`.

A lockable chest: a `LockableHinge` lid that pops open when unlocked, raises its inner docks as the local player leans in, and plays lid and lock sounds. Component on chest prefabs.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LockableHinge`](/mod/game-api/types/alta-items/lockablehinge)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglecostoelevation" /><code>{"private AnimationCurve angleCosToElevation"}</code> | Curve from lid angle (as a dot product) to dock elevation. |
| <Link id="m-autodocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/automaticdockarea">{"AutomaticDockArea"}</Link>{"[] autoDocks"}</code> | Automatic dock areas the server enables only while the lid is open. |
| <Link id="m-chesthandles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] chestHandles"}</code> | Lid handle pickups whose grab can rattle a locked chest. |
| <Link id="m-childdocks" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{"[] childDocks"}</code> | Nearby-player scalers the client enables only while the lid is open. |
| <Link id="m-closedistance" /><code>{"private float closeDistance"}</code> | Head distance within which the inner docks start to rise. |
| <Link id="m-creakevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" creakEvent"}</code> | Backing field for `CreakEvent`. |
| <Link id="m-currentplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" currentPlayer"}</code> | The local `PlayerCharacter` whose movement this chest is listening to. |
| <Link id="m-distancesqrdtoelevation" /><code>{"private AnimationCurve distanceSqrdToElevation"}</code> | Curve from squared head distance to dock elevation. |
| <Link id="m-docksanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curveelevation">{"CurveElevation"}</Link>{"[] docksAnimation"}</code> | Curve elevations that move the inner docks up as the player leans in. |
| <Link id="m-isplayerclose" /><code>{"private bool isPlayerClose"}</code> | True while the local player is within `closeDistance`, so `LateUpdate` keeps updating elevation. |
| <Link id="m-isplayingeffects" /><code>{"private bool isPlayingEffects"}</code> | Set by `DelayEffects` after 3 seconds; until then no lid sounds play. |
| <Link id="m-isrunningonlateupdate" /><code>{"private bool isRunningOnLateUpdate"}</code> | True when there is no `PlayerCharacter` to listen to, so distance is checked every frame. |
| <Link id="m-issaveloading" /><code>{"private bool isSaveLoading"}</code> | Skips the unlock pop force when true. Nothing in this class sets it. |
| <Link id="m-janglesensitivity" /><code>{"private float jangleSensitivity"}</code> | Dot product threshold of lid angle that counts as lifted, for the jangle and creak sounds. |
| <Link id="m-jinglejangletorque" /><code>{"private Vector3 jingleJangleTorque"}</code> | Torque applied to the lock when it rattles. |
| <Link id="m-justjangled" /><code>{"private bool justJangled"}</code> | Whether the lid is currently past the jangle angle, so each crossing only plays once. |
| <Link id="m-laststatus" /><code>{"private bool lastStatus"}</code> | Last seen open state of the lid, used to detect opening and closing. |
| <Link id="m-lidgizmosize" /><code>{"private Vector3 lidGizmoSize"}</code> | Size of the editor gizmo box drawn on the lid. |
| <Link id="m-lidrigidbody" /><code>{"private Rigidbody lidRigidbody"}</code> | Lid rigidbody that gets the pop force on unlock. |
| <Link id="m-lidtransform" /><code>{"private Transform lidTransform"}</code> | Cached transform of the lid joint. |
| <Link id="m-lockjinglejangle" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockitemevent">{"LockItemEvent"}</Link>{" lockJingleJangle"}</code> | Backing field for `LockJingleJangle`. |
| <Link id="m-popforce" /><code>{"private Vector3 popForce"}</code> | Impulse applied to the lid at the lock position when the chest unlocks. |
| <Link id="m-thumpevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" thumpEvent"}</code> | Backing field for `ThumpEvent`. |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> | The chest's up direction cached in `Awake`, compared with the lid's to get its angle. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-creakevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" CreakEvent { get; }"}</code> | Event fired when an unlocked lid is lifted past the jangle angle. |
| <Link id="m-lockjinglejangle-2" /><code><Link to="/mod/game-api/types/alta-items/lockitemevent">{"LockItemEvent"}</Link>{" LockJingleJangle { get; }"}</code> | Event fired with the lock when someone tugs a locked chest's lid. |
| <Link id="m-thumpevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" ThumpEvent { get; }"}</code> | Event fired when an unlocked lid falls back shut past the jangle angle. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Runs the base setup, then starts `DelayEffects` unless the build is headless. |
| <Link id="m-setlocked" /><code>{"override void SetLocked(bool isLocked)"}</code> | Locks or unlocks the lid; on unlock (outside save loading) also kicks the lid open with `popForce`. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Resets the dock animations, hooks the chest handles' grab event to `HandleInteracted`, and caches the lid transform. |
| <Link id="m-delayeffects" /><code>{"private IEnumerator DelayEffects() (iterator)"}</code> | Coroutine started by `Initialize` on non-headless builds: waits 3 seconds, then turns on lid sound effects. |
| <Link id="m-handleinteracted" /><code>{"private void HandleInteracted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Runs when a handle is grabbed: if the chest has a detached lock and is locked, rattles the lock and fires `LockJingleJangle`. |
| <Link id="m-jinglejangle" /><code>{"private void JingleJangle()"}</code> | Called each `LateUpdate` once effects are on: when the lid crosses the jangle angle, rattles the lock or fires `CreakEvent`/`ThumpEvent`. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Updates dock elevation for a nearby player, turns child docks (client) and auto docks (server) on or off as the lid opens or closes, and runs `JingleJangle`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the local player events set up by `OnEnable`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws a yellow box the size of `lidGizmoSize` on the lid. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks `PlayerController.LocalPlayerSet` and sets the child and auto docks enabled to match whether the lid is open. |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Hooks the local player's movement to `UpdateDistance`, or falls back to checking every `LateUpdate` if the player is not a `PlayerCharacter`. |
| <Link id="m-updatedistance" /><code>{"private void UpdateDistance("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Client: raises the inner docks along their curves from the player's head distance and lid angle, or lowers them when the player is out of `closeDistance`. |

</details>
