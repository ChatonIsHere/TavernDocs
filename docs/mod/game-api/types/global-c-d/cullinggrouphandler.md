---
title: "CullingGroupHandler"
description: "Client: one hidden shared Unity CullingGroup on the local player's camera that other scripts register bounding spheres with to get visibility callbacks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingGroupHandler

A **class** in `Root.Township`, the global namespace.

Client: one hidden shared Unity `CullingGroup` on the local player's camera that other scripts register bounding spheres with to get visibility callbacks. Created on first `RegisterSphere`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CullingGroupHandler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-culling" /><code>{"private CullingGroup culling"}</code> | <span className="api-desc">The Unity `CullingGroup`, bound to the local player's camera.</span> |
| <Link id="m-events" /><code>{"private Dictionary<int, Action<CullingGroupEvent>> events"}</code> | <span className="api-desc">Callback for each registered sphere index.</span> |
| <Link id="m-handler" /><code>{"private static "}<Link to="/mod/game-api/types/global-c-d/cullinggrouphandler">{"CullingGroupHandler"}</Link>{" handler"}</code> | <span className="api-desc">The single shared instance.</span> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | <span className="api-desc">Unused flag.</span> |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> | <span className="api-desc">Next free slot to use for a new sphere.</span> |
| <Link id="m-spherecount" /><code>{"private int sphereCount"}</code> | <span className="api-desc">How many array slots the culling group checks (one past the highest used slot).</span> |
| <Link id="m-spheres" /><code>{"private BoundingSphere[] spheres"}</code> | <span className="api-desc">Bounding spheres; starts at 16 and doubles when full.</span> |
| <Link id="m-usage" /><code>{"private bool[] usage"}</code> | <span className="api-desc">Which sphere slots are in use.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistersphere" /><code>{"static void DeregisterSphere(ref int index)"}</code> | <span className="api-desc">Removes a sphere by index, shrinks the active count if it was last, and sets the caller's index to -1.</span> |
| <Link id="m-registersphere" /><code>{"static int RegisterSphere(Vector3 center, float radius, Action<CullingGroupEvent> callback)"}</code> | <span className="api-desc">Registers a sphere and callback, creating the handler if needed; returns the index to pass to `DeregisterSphere`. Used by `StorageOrganizer` and `SphereVisibilityCheck`.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears the singleton, disposes the culling group and unsubscribes from `PlayerController.LocalPlayerSet`.</span> |
| <Link id="m-registersphereinternal" /><code>{"private int RegisterSphereInternal(Vector3 center, float radius, Action<CullingGroupEvent> callback)"}</code> | <span className="api-desc">Stores the sphere in the next free slot, doubles the arrays when full, and updates the culling group.</span> |
| <Link id="m-setupculling" /><code>{"private void SetupCulling("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Creates a new culling group on the given player's camera. Runs again whenever the local player is set.</span> |
| <Link id="m-setupspheres" /><code>{"private void SetupSpheres()"}</code> | <span className="api-desc">Pushes the sphere array and count to the culling group.</span> |
| <Link id="m-updatestates" /><code>{"private void UpdateStates(CullingGroupEvent sphere)"}</code> | <span className="api-desc">Culling group callback: forwards the event to the callback registered for that sphere index.</span> |

</details>
