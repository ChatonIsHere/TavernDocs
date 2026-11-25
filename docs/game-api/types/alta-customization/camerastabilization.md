---
title: "CameraStabilization"
description: "class CameraStabilization in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraStabilization

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CameraStabilization()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-angularstabilizationstrength" /><code>{"private float angularStabilizationStrength"}</code> |
| <Link id="m-currentposition" /><code>{"private Vector3 currentPosition"}</code> |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> |
| <Link id="m-handcount" /><code>{"private int handCount"}</code> |
| <Link id="m-linearstabilizationstrength" /><code>{"private float linearStabilizationStrength"}</code> |
| <Link id="m-offsets" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", Vector3> offsets"}</code> |
| <Link id="m-stabilization" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" stabilization"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-endstabilization" /><code>{"private void EndStabilization("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-lerppositionandrotation" /><code>{"private void LerpPositionAndRotation(Vector3 position, Quaternion rotation)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onlocomotionmoved" /><code>{"private void OnLocomotionMoved("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-stabilization-2" /><code>{"private void Stabilization()"}</code> |
| <Link id="m-startstabilization" /><code>{"private void StartStabilization("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |

</details>
