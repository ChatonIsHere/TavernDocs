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
| <Link id="m-ctor" /><code>{"HandHoverPoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" activated"}</code> | <span className="api-desc">Player event invoked on activation.</span> |
| <Link id="m-activationvalue" /><code>{"private float activationValue"}</code> | <span className="api-desc">Seconds of charging at full closeness needed to activate. Defaults to 3.</span> |
| <Link id="m-attractinghandtouchcolor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorlerp">{"ColorLerp"}</Link>{" attractingHandTouchColor"}</code> | <span className="api-desc">Colour lerp pulsed by the attracting effect.</span> |
| <Link id="m-attractingroutine" /><code>{"private Coroutine attractingRoutine"}</code> | <span className="api-desc">Running `AttractingRoutine`, or null.</span> |
| <Link id="m-autohoverradius" /><code>{"private float autoHoverRadius"}</code> | <span className="api-desc">Distance from the point at which a nearby hand starts the interaction by itself.</span> |
| <Link id="m-colormax" /><code>{"private float colorMax"}</code> | <span className="api-desc">Top of the attracting colour pulse.</span> |
| <Link id="m-colormin" /><code>{"private float colorMin"}</code> | <span className="api-desc">Bottom of the attracting colour pulse.</span> |
| <Link id="m-current" /><code>{"private static readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{"> current"}</code> | <span className="api-desc">Static map of the hover point each player is using, for `isUniquePerPlayer`.</span> |
| <Link id="m-currenthand" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/hand">{"Hand"}</Link>{" currentHand"}</code> | <span className="api-desc">Hand of the current or last interactor.</span> |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> | <span className="api-desc">Interactor holding the point, or null.</span> |
| <Link id="m-currentstrength" /><code>{"private float currentStrength"}</code> | <span className="api-desc">Charge, 0 to 1; activates above 1 on the server.</span> |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" deactivated"}</code> | <span className="api-desc">Player event invoked on reset.</span> |
| <Link id="m-decaypersecond" /><code>{"private float decayPerSecond"}</code> | <span className="api-desc">How fast strength drops once the hand leaves.</span> |
| <Link id="m-frequency" /><code>{"private float frequency"}</code> | <span className="api-desc">Speed of the attracting colour pulse.</span> |
| <Link id="m-gesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture"}</code> | <span className="api-desc">Hand gesture forced while hovering.</span> |
| <Link id="m-handglyph" /><code>{"private GameObject handGlyph"}</code> | <span className="api-desc">Serialized glyph object not used by this class.</span> |
| <Link id="m-handtouchvfxcontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/handtouchvfxcontroller">{"HandTouchVfxController"}</Link>{" handTouchVfxController"}</code> | <span className="api-desc">Plays the activating and completed effects.</span> |
| <Link id="m-hascontentcheck" /><code>{"private Func<bool> hasContentCheck"}</code> | <span className="api-desc">Check behind `IsConditionMet`.</span> |
| <Link id="m-hoverradius" /><code>{"private float hoverRadius"}</code> | <span className="api-desc">Distance at which charging is weakest; beyond it the interaction stops.</span> |
| <Link id="m-idealradius" /><code>{"private float idealRadius"}</code> | <span className="api-desc">Distance at which charging is fastest.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The `Interactable` on this object.</span> |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> | <span className="api-desc">True once activated, until deactivated.</span> |
| <Link id="m-isuniqueperplayer" /><code>{"private bool isUniquePerPlayer"}</code> | <span className="api-desc">If true (default), a player can only use one such point at a time.</span> |
| <Link id="m-previousstrength" /><code>{"private float previousStrength"}</code> | <span className="api-desc">Strength last frame, to detect starting and stopping.</span> |
| <Link id="m-strengthchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" strengthChanged"}</code> | <span className="api-desc">Float event invoked with the strength as it changes.</span> |
| <Link id="m-syncactivated" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncActivated"}</code> | <span className="api-desc">Method sync for the activated flag.</span> |
| <Link id="m-syncall" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAll"}</code> | <span className="api-desc">Method sync for the full state, sent to joining players.</span> |
| <Link id="m-targethoverpoint" /><code>{"private Transform targetHoverPoint"}</code> | <span className="api-desc">Where the hand is pulled to and distances are measured from.</span> |
| <Link id="m-trackedinteractors" /><code>{"private readonly Dictionary<Collider, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> trackedInteractors"}</code> | <span className="api-desc">Local hand triggers inside the area, by collider.</span> |
| <Link id="m-trackhand" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackHand"}</code> | <span className="api-desc">Handle of the `TrackHand` update.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | <span className="api-desc">`IGameCondition` callback, invoked when the point activates.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-activated-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Activated"}</code> | <span className="api-desc">Event raised with the player when the point activates.</span> |
| <Link id="m-deactivated-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Deactivated"}</code> | <span className="api-desc">Event raised with the player when the point is reset.</span> |
| <Link id="m-strengthchanged-2" /><code>{"event Action<float> StrengthChanged"}</code> | <span className="api-desc">Event raised with the charge strength as it changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deactivate" /><code>{"void Deactivate("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Resets the point so it can be charged again and raises `Deactivated`. The server syncs this to the chunk.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the syncs and starts the attracting effect.</span> |
| <Link id="m-initializeattractingcheck" /><code>{"void InitializeAttractingCheck(Func<bool> hasContentCheck)"}</code> | <span className="api-desc">Sets the check used by `IsConditionMet`.</span> |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | <span className="api-desc">Runs the check given to `InitializeAttractingCheck`; false if none was set.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends strength and activation state to a joining player.</span> |

<details className="api-private">
<summary>20 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | <span className="api-desc">Sets full strength, stops the hand's interaction and plays the completed effect. The server syncs it, reports a hand-touch task and watches for the player leaving.</span> |
| <Link id="m-adjusthandpull" /><code>{"private void AdjustHandPull(float strength)"}</code> | <span className="api-desc">Pulls the hand's IK target from where it was towards the hover point by a strength.</span> |
| <Link id="m-attractingroutine-2" /><code>{"private IEnumerator AttractingRoutine() (iterator)"}</code> | <span className="api-desc">Client coroutine that pulses the attracting colour between `colorMin` and `colorMax`.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the interactable's filter, start and end events; starts disabled.</span> |
| <Link id="m-beginhandpull" /><code>{"private void BeginHandPull()"}</code> | <span className="api-desc">Sets the hover gesture and frees the hand's IK target so it can be pulled.</span> |
| <Link id="m-checkinteractdistance" /><code>{"private bool CheckInteractDistance(float distanceSquared)"}</code> | <span className="api-desc">Stops the interaction if the hand moves further than `hoverRadius` (not in local tests). Returns true if it stopped.</span> |
| <Link id="m-deactivate-2" /><code>{"private void Deactivate()"}</code> | <span className="api-desc">Resets the point so it can be charged again and raises `Deactivated`. The server syncs this to the chunk.</span> |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the holding interactor lets go, clears it and releases the hand.</span> |
| <Link id="m-endhandpull" /><code>{"private void EndHandPull()"}</code> | <span className="api-desc">Clears the gesture override and detaches the hand.</span> |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks interaction while activated or held, while a local hand already has over half strength, or when the player is downed.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">While held, charges strength by closeness and pulls the hand (server activates above 1). Otherwise decays strength.</span> |
| <Link id="m-loseplayer" /><code>{"private void LosePlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Deactivates when the activating player's entity is destroyed.</span> |
| <Link id="m-onlyallowoneinteractionperplayer" /><code>{"private void OnlyAllowOneInteractionPerPlayer()"}</code> | <span className="api-desc">With `isUniquePerPlayer`, deactivates or stops the player's other hover point so only one is in use.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Starts tracking a local hand trigger entering the area so it can auto-start the interaction.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Stops tracking a hand; removes the update when none are left.</span> |
| <Link id="m-setattractingstate" /><code>{"private void SetAttractingState(bool on)"}</code> | <span className="api-desc">Client: starts the attracting colour pulse.</span> |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Takes the first interactor that starts, begins the hand pull and enables charging.</span> |
| <Link id="m-syncactivated-2" /><code>{"private void SyncActivated("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> | <span className="api-desc">Syncs the activated flag; clients activate or deactivate to match.</span> |
| <Link id="m-syncall-2" /><code>{"private void SyncAll("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs strength and activation for joining players.</span> |
| <Link id="m-trackhand-2" /><code>{"private void TrackHand()"}</code> | <span className="api-desc">Late update: when a tracked hand's grip gets within `autoHoverRadius`, starts the interaction for it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandHoverPoint`:

<div className="api-used-in">

[`MapBoard.handHoverPoint`](/mod/game-api/types/alta-world/mapboard#m-handhoverpoint), [`PlayerUnlockStation.handHover`](/mod/game-api/types/global-p/playerunlockstation#m-handhover).

</div>
