---
title: "HandGestureController"
description: "class HandGestureController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGestureController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGestureController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-collisionscontroller" /><code>{"private "}<Link to="/game-api/types/global-e-h/handcollisionscontroller">{"HandCollisionsController"}</Link>{" collisionsController"}</code> |  |
| <Link id="m-currentgesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" currentGesture"}</code> |  |
| <Link id="m-gesturemap" /><code>{"private "}<Link to="/game-api/types/global-e-h/gesturemap">{"GestureMap"}</Link>{" gestureMap"}</code> |  |
| <Link id="m-gestureparameterid" /><code>{"private int gestureParameterID"}</code> |  |
| <Link id="m-grabparameterid" /><code>{"private int grabParameterID"}</code> |  |
| <Link id="m-gripaxis" /><code>{"private float gripAxis"}</code> |  |
| <Link id="m-gripaxisnetworkingsections" /><code>{"private const int GripAxisNetworkingSections"}</code> |  |
| <Link id="m-gripnetworkingbits" /><code>{"private static int GripNetworkingBits"}</code> |  |
| <Link id="m-gripsectionsize" /><code>{"private const float GripSectionSize"}</code> |  |
| <Link id="m-hascollisioncontroller" /><code>{"private bool hasCollisionController"}</code> |  |
| <Link id="m-isfreegesturemode" /><code>{"private bool isFreeGestureMode"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxnumberofgestures" /><code>{"private const int MaxNumberOfGestures"}</code> |  |
| <Link id="m-previousgesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" previousGesture"}</code> |  |
| <Link id="m-previousgripsection" /><code>{"private int previousGripSection"}</code> |  |
| <Link id="m-skeletoninput" /><code>{"private float[] skeletonInput"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridegesture" /><code><Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" OverrideGesture { get; set; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> |  |
| <Link id="m-performgesture" /><code>{"void PerformGesture("}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture, bool isUpdatingCollisions = true)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-getcurrentgesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" GetCurrentGesture()"}</code> |  |
| <Link id="m-handleremotegesture" /><code>{"private void HandleRemoteGesture()"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |  |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-performgradualgrip" /><code>{"private void PerformGradualGrip(float gripAxis)"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updateanimatorenabled" /><code>{"private void UpdateAnimatorEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-updatelocalgesture" /><code>{"private void UpdateLocalGesture()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandGestureController`:

[`Hand.gestureController`](/game-api/types/alta-player/hand#m-gesturecontroller), [`Hand.GestureController`](/game-api/types/alta-player/hand#m-gesturecontroller-2).
