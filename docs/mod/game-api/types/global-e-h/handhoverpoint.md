---
title: "HandHoverPoint"
description: "A spot the player holds a hand over until it charges up and activates (the hand-touch points on stations and glyphs)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandHoverPoint

A **class** in `Root.Township`, the global namespace.

A spot the player holds a hand over until it charges up and activates (the hand-touch points on stations and glyphs). Charging runs on both sides; the server decides activation and syncs it. Also an `IGameCondition`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/mod/game-api/types/game-other-namespaces/igamecondition)
- **Attributes** `RequireComponent`
- **Documented in** [Grab points and hand-touch points](/mod/game-api/items/grab-points#handhoverpoint), [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandHoverPoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" activated"}</code> | Player event invoked on activation. |
| <Link id="m-activationvalue" /><code>{"private float activationValue"}</code> | Seconds of charging at full closeness needed to activate. Defaults to 3. |
| <Link id="m-attractinghandtouchcolor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorlerp">{"ColorLerp"}</Link>{" attractingHandTouchColor"}</code> | Colour lerp pulsed by the attracting effect. |
| <Link id="m-attractingroutine" /><code>{"private Coroutine attractingRoutine"}</code> | Running `AttractingRoutine`, or null. |
| <Link id="m-autohoverradius" /><code>{"private float autoHoverRadius"}</code> | Distance from the point at which a nearby hand starts the interaction by itself. |
| <Link id="m-colormax" /><code>{"private float colorMax"}</code> | Top of the attracting colour pulse. |
| <Link id="m-colormin" /><code>{"private float colorMin"}</code> | Bottom of the attracting colour pulse. |
| <Link id="m-current" /><code>{"private static readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{"> current"}</code> | Static map of the hover point each player is using, for `isUniquePerPlayer`. |
| <Link id="m-currenthand" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/hand">{"Hand"}</Link>{" currentHand"}</code> | Hand of the current or last interactor. |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> | Interactor holding the point, or null. |
| <Link id="m-currentstrength" /><code>{"private float currentStrength"}</code> | Charge, 0 to 1; activates above 1 on the server. |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" deactivated"}</code> | Player event invoked on reset. |
| <Link id="m-decaypersecond" /><code>{"private float decayPerSecond"}</code> | How fast strength drops once the hand leaves. |
| <Link id="m-frequency" /><code>{"private float frequency"}</code> | Speed of the attracting colour pulse. |
| <Link id="m-gesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture"}</code> | Hand gesture forced while hovering. |
| <Link id="m-handglyph" /><code>{"private GameObject handGlyph"}</code> | Serialized glyph object not used by this class. |
| <Link id="m-handtouchvfxcontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/handtouchvfxcontroller">{"HandTouchVfxController"}</Link>{" handTouchVfxController"}</code> | Plays the activating and completed effects. |
| <Link id="m-hascontentcheck" /><code>{"private Func<bool> hasContentCheck"}</code> | Check behind `IsConditionMet`. |
| <Link id="m-hoverradius" /><code>{"private float hoverRadius"}</code> | Distance at which charging is weakest; beyond it the interaction stops. |
| <Link id="m-idealradius" /><code>{"private float idealRadius"}</code> | Distance at which charging is fastest. |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The `Interactable` on this object. |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> | True once activated, until deactivated. |
| <Link id="m-isuniqueperplayer" /><code>{"private bool isUniquePerPlayer"}</code> | If true (default), a player can only use one such point at a time. |
| <Link id="m-previousstrength" /><code>{"private float previousStrength"}</code> | Strength last frame, to detect starting and stopping. |
| <Link id="m-strengthchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" strengthChanged"}</code> | Float event invoked with the strength as it changes. |
| <Link id="m-syncactivated" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncActivated"}</code> | Method sync for the activated flag. |
| <Link id="m-syncall" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAll"}</code> | Method sync for the full state, sent to joining players. |
| <Link id="m-targethoverpoint" /><code>{"private Transform targetHoverPoint"}</code> | Where the hand is pulled to and distances are measured from. |
| <Link id="m-trackedinteractors" /><code>{"private readonly Dictionary<Collider, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> trackedInteractors"}</code> | Local hand triggers inside the area, by collider. |
| <Link id="m-trackhand" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackHand"}</code> | Handle of the `TrackHand` update. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | `IGameCondition` callback, invoked when the point activates. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-activated-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Activated"}</code> | Event raised with the player when the point activates. |
| <Link id="m-deactivated-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Deactivated"}</code> | Event raised with the player when the point is reset. |
| <Link id="m-strengthchanged-2" /><code>{"event Action<float> StrengthChanged"}</code> | Event raised with the charge strength as it changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deactivate" /><code>{"void Deactivate("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Resets the point so it can be charged again and raises `Deactivated`. The server syncs this to the chunk. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the syncs and starts the attracting effect. |
| <Link id="m-initializeattractingcheck" /><code>{"void InitializeAttractingCheck(Func<bool> hasContentCheck)"}</code> | Sets the check used by `IsConditionMet`. |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | Runs the check given to `InitializeAttractingCheck`; false if none was set. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends strength and activation state to a joining player. |

<details>
<summary>20 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | Sets full strength, stops the hand's interaction and plays the completed effect. The server syncs it, reports a hand-touch task and watches for the player leaving. |
| <Link id="m-adjusthandpull" /><code>{"private void AdjustHandPull(float strength)"}</code> | Pulls the hand's IK target from where it was towards the hover point by a strength. |
| <Link id="m-attractingroutine-2" /><code>{"private IEnumerator AttractingRoutine() (iterator)"}</code> | Client coroutine that pulses the attracting colour between `colorMin` and `colorMax`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the interactable's filter, start and end events; starts disabled. |
| <Link id="m-beginhandpull" /><code>{"private void BeginHandPull()"}</code> | Sets the hover gesture and frees the hand's IK target so it can be pulled. |
| <Link id="m-checkinteractdistance" /><code>{"private bool CheckInteractDistance(float distanceSquared)"}</code> | Stops the interaction if the hand moves further than `hoverRadius` (not in local tests). Returns true if it stopped. |
| <Link id="m-deactivate-2" /><code>{"private void Deactivate()"}</code> | Resets the point so it can be charged again and raises `Deactivated`. The server syncs this to the chunk. |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the holding interactor lets go, clears it and releases the hand. |
| <Link id="m-endhandpull" /><code>{"private void EndHandPull()"}</code> | Clears the gesture override and detaches the hand. |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks interaction while activated or held, while a local hand already has over half strength, or when the player is downed. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | While held, charges strength by closeness and pulls the hand (server activates above 1). Otherwise decays strength. |
| <Link id="m-loseplayer" /><code>{"private void LosePlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Deactivates when the activating player's entity is destroyed. |
| <Link id="m-onlyallowoneinteractionperplayer" /><code>{"private void OnlyAllowOneInteractionPerPlayer()"}</code> | With `isUniquePerPlayer`, deactivates or stops the player's other hover point so only one is in use. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Starts tracking a local hand trigger entering the area so it can auto-start the interaction. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Stops tracking a hand; removes the update when none are left. |
| <Link id="m-setattractingstate" /><code>{"private void SetAttractingState(bool on)"}</code> | Client: starts the attracting colour pulse. |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Takes the first interactor that starts, begins the hand pull and enables charging. |
| <Link id="m-syncactivated-2" /><code>{"private void SyncActivated("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> | Syncs the activated flag; clients activate or deactivate to match. |
| <Link id="m-syncall-2" /><code>{"private void SyncAll("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs strength and activation for joining players. |
| <Link id="m-trackhand-2" /><code>{"private void TrackHand()"}</code> | Late update: when a tracked hand's grip gets within `autoHoverRadius`, starts the interaction for it. |

</details>

## Used in

Members of other types that take, return or hold a `HandHoverPoint`:

[`MapBoard.handHoverPoint`](/mod/game-api/types/alta-world/mapboard#m-handhoverpoint), [`PlayerUnlockStation.handHover`](/mod/game-api/types/global-p/playerunlockstation#m-handhover).
