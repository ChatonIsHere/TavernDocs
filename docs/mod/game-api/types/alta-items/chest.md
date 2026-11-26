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
| <Link id="m-ctor" /><code>{"Chest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglecostoelevation" /><code>{"private AnimationCurve angleCosToElevation"}</code> | <span className="api-desc">Curve from lid angle (as a dot product) to dock elevation.</span> |
| <Link id="m-autodocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/automaticdockarea">{"AutomaticDockArea"}</Link>{"[] autoDocks"}</code> | <span className="api-desc">Automatic dock areas the server enables only while the lid is open.</span> |
| <Link id="m-chesthandles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] chestHandles"}</code> | <span className="api-desc">Lid handle pickups whose grab can rattle a locked chest.</span> |
| <Link id="m-childdocks" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{"[] childDocks"}</code> | <span className="api-desc">Nearby-player scalers the client enables only while the lid is open.</span> |
| <Link id="m-closedistance" /><code>{"private float closeDistance"}</code> | <span className="api-desc">Head distance within which the inner docks start to rise.</span> |
| <Link id="m-creakevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" creakEvent"}</code> | <span className="api-desc">Backing field for `CreakEvent`.</span> |
| <Link id="m-currentplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" currentPlayer"}</code> | <span className="api-desc">The local `PlayerCharacter` whose movement this chest is listening to.</span> |
| <Link id="m-distancesqrdtoelevation" /><code>{"private AnimationCurve distanceSqrdToElevation"}</code> | <span className="api-desc">Curve from squared head distance to dock elevation.</span> |
| <Link id="m-docksanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curveelevation">{"CurveElevation"}</Link>{"[] docksAnimation"}</code> | <span className="api-desc">Curve elevations that move the inner docks up as the player leans in.</span> |
| <Link id="m-isplayerclose" /><code>{"private bool isPlayerClose"}</code> | <span className="api-desc">True while the local player is within `closeDistance`, so `LateUpdate` keeps updating elevation.</span> |
| <Link id="m-isplayingeffects" /><code>{"private bool isPlayingEffects"}</code> | <span className="api-desc">Set by `DelayEffects` after 3 seconds; until then no lid sounds play.</span> |
| <Link id="m-isrunningonlateupdate" /><code>{"private bool isRunningOnLateUpdate"}</code> | <span className="api-desc">True when there is no `PlayerCharacter` to listen to, so distance is checked every frame.</span> |
| <Link id="m-issaveloading" /><code>{"private bool isSaveLoading"}</code> | <span className="api-desc">Skips the unlock pop force when true. Nothing in this class sets it.</span> |
| <Link id="m-janglesensitivity" /><code>{"private float jangleSensitivity"}</code> | <span className="api-desc">Dot product threshold of lid angle that counts as lifted, for the jangle and creak sounds.</span> |
| <Link id="m-jinglejangletorque" /><code>{"private Vector3 jingleJangleTorque"}</code> | <span className="api-desc">Torque applied to the lock when it rattles.</span> |
| <Link id="m-justjangled" /><code>{"private bool justJangled"}</code> | <span className="api-desc">Whether the lid is currently past the jangle angle, so each crossing only plays once.</span> |
| <Link id="m-laststatus" /><code>{"private bool lastStatus"}</code> | <span className="api-desc">Last seen open state of the lid, used to detect opening and closing.</span> |
| <Link id="m-lidgizmosize" /><code>{"private Vector3 lidGizmoSize"}</code> | <span className="api-desc">Size of the editor gizmo box drawn on the lid.</span> |
| <Link id="m-lidrigidbody" /><code>{"private Rigidbody lidRigidbody"}</code> | <span className="api-desc">Lid rigidbody that gets the pop force on unlock.</span> |
| <Link id="m-lidtransform" /><code>{"private Transform lidTransform"}</code> | <span className="api-desc">Cached transform of the lid joint.</span> |
| <Link id="m-lockjinglejangle" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockitemevent">{"LockItemEvent"}</Link>{" lockJingleJangle"}</code> | <span className="api-desc">Backing field for `LockJingleJangle`.</span> |
| <Link id="m-popforce" /><code>{"private Vector3 popForce"}</code> | <span className="api-desc">Impulse applied to the lid at the lock position when the chest unlocks.</span> |
| <Link id="m-thumpevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" thumpEvent"}</code> | <span className="api-desc">Backing field for `ThumpEvent`.</span> |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> | <span className="api-desc">The chest's up direction cached in `Awake`, compared with the lid's to get its angle.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-creakevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" CreakEvent { get; }"}</code> | <span className="api-desc">Event fired when an unlocked lid is lifted past the jangle angle.</span> |
| <Link id="m-lockjinglejangle-2" /><code><Link to="/mod/game-api/types/alta-items/lockitemevent">{"LockItemEvent"}</Link>{" LockJingleJangle { get; }"}</code> | <span className="api-desc">Event fired with the lock when someone tugs a locked chest's lid.</span> |
| <Link id="m-thumpevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockableevent">{"LockableEvent"}</Link>{" ThumpEvent { get; }"}</code> | <span className="api-desc">Event fired when an unlocked lid falls back shut past the jangle angle.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Runs the base setup, then starts `DelayEffects` unless the build is headless.</span> |
| <Link id="m-setlocked" /><code>{"override void SetLocked(bool isLocked)"}</code> | <span className="api-desc">Locks or unlocks the lid; on unlock (outside save loading) also kicks the lid open with `popForce`.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Resets the dock animations, hooks the chest handles' grab event to `HandleInteracted`, and caches the lid transform.</span> |
| <Link id="m-delayeffects" /><code>{"private IEnumerator DelayEffects() (iterator)"}</code> | <span className="api-desc">Coroutine started by `Initialize` on non-headless builds: waits 3 seconds, then turns on lid sound effects.</span> |
| <Link id="m-handleinteracted" /><code>{"private void HandleInteracted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Runs when a handle is grabbed: if the chest has a detached lock and is locked, rattles the lock and fires `LockJingleJangle`.</span> |
| <Link id="m-jinglejangle" /><code>{"private void JingleJangle()"}</code> | <span className="api-desc">Called each `LateUpdate` once effects are on: when the lid crosses the jangle angle, rattles the lock or fires `CreakEvent`/`ThumpEvent`.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Updates dock elevation for a nearby player, turns child docks (client) and auto docks (server) on or off as the lid opens or closes, and runs `JingleJangle`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the local player events set up by `OnEnable`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws a yellow box the size of `lidGizmoSize` on the lid.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks `PlayerController.LocalPlayerSet` and sets the child and auto docks enabled to match whether the lid is open.</span> |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Hooks the local player's movement to `UpdateDistance`, or falls back to checking every `LateUpdate` if the player is not a `PlayerCharacter`.</span> |
| <Link id="m-updatedistance" /><code>{"private void UpdateDistance("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Client: raises the inner docks along their curves from the player's head distance and lid angle, or lowers them when the player is out of `closeDistance`.</span> |

</details>
