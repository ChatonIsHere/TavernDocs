---
title: "CameraStabilization"
description: "Smooths the hand camera's movement while it is held, by lerping it towards its handles and following the player's locomotion."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraStabilization

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Smooths the hand camera's movement while it is held, by lerping it towards its handles and following the player's locomotion. A component next to the `HandCamera`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraStabilization()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularstabilizationstrength" /><code>{"private float angularStabilizationStrength"}</code> | <span className="api-desc">How much of the previous rotation is kept each frame (0 to 1). Higher is smoother but laggier.</span> |
| <Link id="m-currentposition" /><code>{"private Vector3 currentPosition"}</code> | <span className="api-desc">The smoothed camera position.</span> |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> | <span className="api-desc">The smoothed camera rotation.</span> |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | <span className="api-desc">The camera this smooths; its handles drive the target pose.</span> |
| <Link id="m-handcount" /><code>{"private int handCount"}</code> | <span className="api-desc">How many hands are holding the camera's handles.</span> |
| <Link id="m-linearstabilizationstrength" /><code>{"private float linearStabilizationStrength"}</code> | <span className="api-desc">How much of the previous position is kept each frame (0 to 1). Higher is smoother but laggier.</span> |
| <Link id="m-offsets" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", Vector3> offsets"}</code> | <span className="api-desc">Each handle's offset to the camera, in the handle's local space, taken in `Awake`.</span> |
| <Link id="m-stabilization" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" stabilization"}</code> | <span className="api-desc">The registered update method while the camera is held, or null.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The camera's transform, which this moves.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared late-update module that runs `Stabilization`.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks each camera handle's grab and release events and records each handle's offset to the camera.</span> |
| <Link id="m-endstabilization" /><code>{"private void EndStabilization("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Called when a handle is let go. Stops smoothing once no hands hold the camera, and resets the handle back in place as kinematic.</span> |
| <Link id="m-lerppositionandrotation" /><code>{"private void LerpPositionAndRotation(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Moves the camera part of the way from its current pose to the target pose, using the two strength values.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the smoothing update if it is still registered.</span> |
| <Link id="m-onlocomotionmoved" /><code>{"private void OnLocomotionMoved("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Shifts (and on snap turns, rotates) the smoothed pose with the holder's locomotion so the camera does not lag behind a teleport or turn.</span> |
| <Link id="m-stabilization-2" /><code>{"private void Stabilization()"}</code> | <span className="api-desc">Per-frame update while held: aims at the midpoint of both handles, or the one held handle plus its offset, then lerps there.</span> |
| <Link id="m-startstabilization" /><code>{"private void StartStabilization("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Called on a handle grab. On the first hand, stores the current pose, starts the update and subscribes to the holder's locomotion.</span> |

</details>
