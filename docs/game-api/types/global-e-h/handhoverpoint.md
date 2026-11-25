---
title: "HandHoverPoint"
description: "Needs an Interactable on the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandHoverPoint

A **class** in `Root.Township`, no namespace.

Needs an `Interactable` on the same object. The hand tracking runs on the server and on the hovering player's client; the server decides activation.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition)
- **Attributes** `RequireComponent`
- **Documented in** [Grab points and hand-touch points](/game-api/items/grab-points#handhoverpoint), [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandHoverPoint()"}</code> |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" activated"}</code> |
| <Link id="m-activationvalue" /><code>{"private float activationValue"}</code> |
| <Link id="m-attractinghandtouchcolor" /><code>{"private "}<Link to="/game-api/types/global-c-d/colorlerp">{"ColorLerp"}</Link>{" attractingHandTouchColor"}</code> |
| <Link id="m-attractingroutine" /><code>{"private Coroutine attractingRoutine"}</code> |
| <Link id="m-autohoverradius" /><code>{"private float autoHoverRadius"}</code> |
| <Link id="m-colormax" /><code>{"private float colorMax"}</code> |
| <Link id="m-colormin" /><code>{"private float colorMin"}</code> |
| <Link id="m-current" /><code>{"private static readonly Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{"> current"}</code> |
| <Link id="m-currenthand" /><code>{"private "}<Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" currentHand"}</code> |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> |
| <Link id="m-currentstrength" /><code>{"private float currentStrength"}</code> |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" deactivated"}</code> |
| <Link id="m-decaypersecond" /><code>{"private float decayPerSecond"}</code> |
| <Link id="m-frequency" /><code>{"private float frequency"}</code> |
| <Link id="m-gesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture"}</code> |
| <Link id="m-handglyph" /><code>{"private GameObject handGlyph"}</code> |
| <Link id="m-handtouchvfxcontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/handtouchvfxcontroller">{"HandTouchVfxController"}</Link>{" handTouchVfxController"}</code> |
| <Link id="m-hascontentcheck" /><code>{"private Func<bool> hasContentCheck"}</code> |
| <Link id="m-hoverradius" /><code>{"private float hoverRadius"}</code> |
| <Link id="m-idealradius" /><code>{"private float idealRadius"}</code> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> |
| <Link id="m-isuniqueperplayer" /><code>{"private bool isUniquePerPlayer"}</code> |
| <Link id="m-previousstrength" /><code>{"private float previousStrength"}</code> |
| <Link id="m-strengthchanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" strengthChanged"}</code> |
| <Link id="m-syncactivated" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncActivated"}</code> |
| <Link id="m-syncall" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAll"}</code> |
| <Link id="m-targethoverpoint" /><code>{"private Transform targetHoverPoint"}</code> |
| <Link id="m-trackedinteractors" /><code>{"private readonly Dictionary<Collider, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> trackedInteractors"}</code> |
| <Link id="m-trackhand" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackHand"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-activated-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Activated"}</code> |
| <Link id="m-deactivated-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Deactivated"}</code> |
| <Link id="m-strengthchanged-2" /><code>{"event Action<float> StrengthChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-deactivate" /><code>{"void Deactivate("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeattractingcheck" /><code>{"void InitializeAttractingCheck(Func<bool> hasContentCheck)"}</code> |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>20 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> |
| <Link id="m-adjusthandpull" /><code>{"private void AdjustHandPull(float strength)"}</code> |
| <Link id="m-attractingroutine-2" /><code>{"private IEnumerator AttractingRoutine() (iterator)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-beginhandpull" /><code>{"private void BeginHandPull()"}</code> |
| <Link id="m-checkinteractdistance" /><code>{"private bool CheckInteractDistance(float distanceSquared)"}</code> |
| <Link id="m-deactivate-2" /><code>{"private void Deactivate()"}</code> |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-endhandpull" /><code>{"private void EndHandPull()"}</code> |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-loseplayer" /><code>{"private void LosePlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-onlyallowoneinteractionperplayer" /><code>{"private void OnlyAllowOneInteractionPerPlayer()"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-setattractingstate" /><code>{"private void SetAttractingState(bool on)"}</code> |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncactivated-2" /><code>{"private void SyncActivated("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> |
| <Link id="m-syncall-2" /><code>{"private void SyncAll("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-trackhand-2" /><code>{"private void TrackHand()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `HandHoverPoint`:

[`MapBoard.handHoverPoint`](/game-api/types/alta-world/mapboard#m-handhoverpoint), [`PlayerUnlockStation.handHover`](/game-api/types/global-p/playerunlockstation#m-handhover).
