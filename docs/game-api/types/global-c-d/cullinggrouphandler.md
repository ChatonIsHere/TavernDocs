---
title: "CullingGroupHandler"
description: "Client: one hidden shared Unity CullingGroup on the local player's camera that other scripts register bounding spheres with to get visibility callbacks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingGroupHandler

A **class** in `Root.Township`, no namespace.

Client: one hidden shared Unity `CullingGroup` on the local player's camera that other scripts register bounding spheres with to get visibility callbacks. Created on first `RegisterSphere`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CullingGroupHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-culling" /><code>{"private CullingGroup culling"}</code> | The Unity `CullingGroup`, bound to the local player's camera. |
| <Link id="m-events" /><code>{"private Dictionary<int, Action<CullingGroupEvent>> events"}</code> | Callback for each registered sphere index. |
| <Link id="m-handler" /><code>{"private static "}<Link to="/game-api/types/global-c-d/cullinggrouphandler">{"CullingGroupHandler"}</Link>{" handler"}</code> | The single shared instance. |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | Unused flag. |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> | Next free slot to use for a new sphere. |
| <Link id="m-spherecount" /><code>{"private int sphereCount"}</code> | How many array slots the culling group checks (one past the highest used slot). |
| <Link id="m-spheres" /><code>{"private BoundingSphere[] spheres"}</code> | Bounding spheres; starts at 16 and doubles when full. |
| <Link id="m-usage" /><code>{"private bool[] usage"}</code> | Which sphere slots are in use. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistersphere" /><code>{"static void DeregisterSphere(ref int index)"}</code> | Removes a sphere by index, shrinks the active count if it was last, and sets the caller's index to -1. |
| <Link id="m-registersphere" /><code>{"static int RegisterSphere(Vector3 center, float radius, Action<CullingGroupEvent> callback)"}</code> | Registers a sphere and callback, creating the handler if needed; returns the index to pass to `DeregisterSphere`. Used by `StorageOrganizer` and `SphereVisibilityCheck`. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears the singleton, disposes the culling group and unsubscribes from `PlayerController.LocalPlayerSet`. |
| <Link id="m-registersphereinternal" /><code>{"private int RegisterSphereInternal(Vector3 center, float radius, Action<CullingGroupEvent> callback)"}</code> | Stores the sphere in the next free slot, doubles the arrays when full, and updates the culling group. |
| <Link id="m-setupculling" /><code>{"private void SetupCulling("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Creates a new culling group on the given player's camera. Runs again whenever the local player is set. |
| <Link id="m-setupspheres" /><code>{"private void SetupSpheres()"}</code> | Pushes the sphere array and count to the culling group. |
| <Link id="m-updatestates" /><code>{"private void UpdateStates(CullingGroupEvent sphere)"}</code> | Culling group callback: forwards the event to the callback registered for that sphere index. |

</details>
