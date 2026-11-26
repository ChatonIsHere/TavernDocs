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
| <Link id="m-ctor" /><code>{"HandGestureController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Static profiling timer for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Static profiling timer for `Serialize`. |

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collisionscontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handcollisionscontroller">{"HandCollisionsController"}</Link>{" collisionsController"}</code> | `HandCollisionsController` on the same object, if any. |
| <Link id="m-currentgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" currentGesture"}</code> | Gesture now being shown. |
| <Link id="m-gesturemap" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gesturemap">{"GestureMap"}</Link>{" gestureMap"}</code> | Map from thumbstick direction to gesture, plus the idle gesture. |
| <Link id="m-gestureparameterid" /><code>{"private int gestureParameterID"}</code> | Animator hash for the `Gesture` parameter. |
| <Link id="m-grabparameterid" /><code>{"private int grabParameterID"}</code> | Animator hash for the `Grab` parameter. |
| <Link id="m-gripaxis" /><code>{"private float gripAxis"}</code> | Current grip amount, 0 to 1, from input or the network. |
| <Link id="m-gripaxisnetworkingsections" /><code>{"private const int GripAxisNetworkingSections"}</code> | Grip is split into 32 steps; a change of step triggers a network write. |
| <Link id="m-gripnetworkingbits" /><code>{"private static int GripNetworkingBits"}</code> | Bits used per grip or finger value (5, from the 32 steps). |
| <Link id="m-gripsectionsize" /><code>{"private const float GripSectionSize"}</code> | Size of one grip step (1/32). |
| <Link id="m-hascollisioncontroller" /><code>{"private bool hasCollisionController"}</code> | Whether `collisionsController` was found. |
| <Link id="m-isfreegesturemode" /><code>{"private bool isFreeGestureMode"}</code> | True when free gesture mode is on in settings and the controller reports a skeleton. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs failures in `PerformGradualGrip`. |
| <Link id="m-maxnumberofgestures" /><code>{"private const int MaxNumberOfGestures"}</code> | Highest gesture index sent over the network (15). |
| <Link id="m-previousgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" previousGesture"}</code> | Last gesture sent, to detect changes. |
| <Link id="m-previousgripsection" /><code>{"private int previousGripSection"}</code> | Last grip step sent, to detect changes. |
| <Link id="m-skeletoninput" /><code>{"private float[] skeletonInput"}</code> | Curl values for the five fingers in free gesture mode. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridegesture" /><code><Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" OverrideGesture { get; set; }"}</code> | Gesture forced on the hand, bypassing input; `NoGesture` means no override. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | Fixed bit budget of 32 for this component's network data. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Shared timer for profiling `PrepareForWrite`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Shared timer for profiling `Serialize`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | Enables the component once the controller is ready. |
| <Link id="m-performgesture" /><code>{"void PerformGesture("}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture, bool isUpdatingCollisions = true)"}</code> | Sets the animator gesture on clients and updates hand colliders for the gesture if it changed. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Finds the collisions controller, caches animator parameter IDs, sets the idle gesture and disables itself until initialized. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" GetCurrentGesture()"}</code> | Returns the gesture mapped to the thumbstick direction while the gesture action is held, otherwise idle. |
| <Link id="m-handleremotegesture" /><code>{"private void HandleRemoteGesture()"}</code> | Remote hands: plays the received gesture, or applies the received grip amount. |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | Empty. |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | Empty. |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Empty. |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Empty. |
| <Link id="m-performgradualgrip" /><code>{"private void PerformGradualGrip(float gripAxis)"}</code> | Applies the idle gesture and sets colliders from the grip amount, or turns them off while holding something or dead. |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Returns true when the gesture or grip step changed, or on a full write. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the gesture index, free mode flag, and either five finger values or the grip amount. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Each frame: applies `OverrideGesture` if set, otherwise local input or remote state. |
| <Link id="m-updateanimatorenabled" /><code>{"private void UpdateAnimatorEnabled(bool isEnabled)"}</code> | Turns the hand animator on or off if it isn't already. |
| <Link id="m-updatelocalgesture" /><code>{"private void UpdateLocalGesture()"}</code> | Local hand: uses finger tracking in free gesture mode, otherwise a thumbstick gesture or the grip axis. |

</details>

## Used in

Members of other types that take, return or hold a `HandGestureController`:

[`Hand.gestureController`](/mod/game-api/types/alta-player/hand#m-gesturecontroller), [`Hand.GestureController`](/mod/game-api/types/alta-player/hand#m-gesturecontroller-2).
