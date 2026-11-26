---
title: "HandGestureController"
description: "Hand extension that drives the hand animator from grip and gesture input and syncs it to other players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGestureController

A **class** in `Root.Township`, the global namespace.

Hand extension that drives the hand animator from grip and gesture input and syncs it to other players. It handles preset gestures, a gradual grip, and free finger tracking when the controller has a skeleton.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGestureController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Static profiling timer for `PrepareForWrite`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Static profiling timer for `Serialize`.</span> |

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collisionscontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handcollisionscontroller">{"HandCollisionsController"}</Link>{" collisionsController"}</code> | <span className="api-desc">`HandCollisionsController` on the same object, if any.</span> |
| <Link id="m-currentgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" currentGesture"}</code> | <span className="api-desc">Gesture now being shown.</span> |
| <Link id="m-gesturemap" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gesturemap">{"GestureMap"}</Link>{" gestureMap"}</code> | <span className="api-desc">Map from thumbstick direction to gesture, plus the idle gesture.</span> |
| <Link id="m-gestureparameterid" /><code>{"private int gestureParameterID"}</code> | <span className="api-desc">Animator hash for the `Gesture` parameter.</span> |
| <Link id="m-grabparameterid" /><code>{"private int grabParameterID"}</code> | <span className="api-desc">Animator hash for the `Grab` parameter.</span> |
| <Link id="m-gripaxis" /><code>{"private float gripAxis"}</code> | <span className="api-desc">Current grip amount, 0 to 1, from input or the network.</span> |
| <Link id="m-gripaxisnetworkingsections" /><code>{"private const int GripAxisNetworkingSections"}</code> | <span className="api-desc">Grip is split into 32 steps; a change of step triggers a network write.</span> |
| <Link id="m-gripnetworkingbits" /><code>{"private static int GripNetworkingBits"}</code> | <span className="api-desc">Bits used per grip or finger value (5, from the 32 steps).</span> |
| <Link id="m-gripsectionsize" /><code>{"private const float GripSectionSize"}</code> | <span className="api-desc">Size of one grip step (1/32).</span> |
| <Link id="m-hascollisioncontroller" /><code>{"private bool hasCollisionController"}</code> | <span className="api-desc">Whether `collisionsController` was found.</span> |
| <Link id="m-isfreegesturemode" /><code>{"private bool isFreeGestureMode"}</code> | <span className="api-desc">True when free gesture mode is on in settings and the controller reports a skeleton.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs failures in `PerformGradualGrip`.</span> |
| <Link id="m-maxnumberofgestures" /><code>{"private const int MaxNumberOfGestures"}</code> | <span className="api-desc">Highest gesture index sent over the network (15).</span> |
| <Link id="m-previousgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" previousGesture"}</code> | <span className="api-desc">Last gesture sent, to detect changes.</span> |
| <Link id="m-previousgripsection" /><code>{"private int previousGripSection"}</code> | <span className="api-desc">Last grip step sent, to detect changes.</span> |
| <Link id="m-skeletoninput" /><code>{"private float[] skeletonInput"}</code> | <span className="api-desc">Curl values for the five fingers in free gesture mode.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridegesture" /><code><Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" OverrideGesture { get; set; }"}</code> | <span className="api-desc">Gesture forced on the hand, bypassing input; `NoGesture` means no override.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Fixed bit budget of 32 for this component's network data.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared timer for profiling `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Shared timer for profiling `Serialize`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | <span className="api-desc">Enables the component once the controller is ready.</span> |
| <Link id="m-performgesture" /><code>{"void PerformGesture("}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture, bool isUpdatingCollisions = true)"}</code> | <span className="api-desc">Sets the animator gesture on clients and updates hand colliders for the gesture if it changed.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Finds the collisions controller, caches animator parameter IDs, sets the idle gesture and disables itself until initialized.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" GetCurrentGesture()"}</code> | <span className="api-desc">Returns the gesture mapped to the thumbstick direction while the gesture action is held, otherwise idle.</span> |
| <Link id="m-handleremotegesture" /><code>{"private void HandleRemoteGesture()"}</code> | <span className="api-desc">Remote hands: plays the received gesture, or applies the received grip amount.</span> |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-performgradualgrip" /><code>{"private void PerformGradualGrip(float gripAxis)"}</code> | <span className="api-desc">Applies the idle gesture and sets colliders from the grip amount, or turns them off while holding something or dead.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Returns true when the gesture or grip step changed, or on a full write.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the gesture index, free mode flag, and either five finger values or the grip amount.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Each frame: applies `OverrideGesture` if set, otherwise local input or remote state.</span> |
| <Link id="m-updateanimatorenabled" /><code>{"private void UpdateAnimatorEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns the hand animator on or off if it isn't already.</span> |
| <Link id="m-updatelocalgesture" /><code>{"private void UpdateLocalGesture()"}</code> | <span className="api-desc">Local hand: uses finger tracking in free gesture mode, otherwise a thumbstick gesture or the grip axis.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandGestureController`:

<div className="api-used-in">

[`Hand.gestureController`](/mod/game-api/types/alta-player/hand#m-gesturecontroller), [`Hand.GestureController`](/mod/game-api/types/alta-player/hand#m-gesturecontroller-2).

</div>
