---
title: "CullingGroupHandler"
description: "class CullingGroupHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingGroupHandler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CullingGroupHandler()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-culling" /><code>{"private CullingGroup culling"}</code> |
| <Link id="m-events" /><code>{"private Dictionary<int, Action<CullingGroupEvent>> events"}</code> |
| <Link id="m-handler" /><code>{"private static "}<Link to="/game-api/types/global-c-d/cullinggrouphandler">{"CullingGroupHandler"}</Link>{" handler"}</code> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> |
| <Link id="m-spherecount" /><code>{"private int sphereCount"}</code> |
| <Link id="m-spheres" /><code>{"private BoundingSphere[] spheres"}</code> |
| <Link id="m-usage" /><code>{"private bool[] usage"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-deregistersphere" /><code>{"static void DeregisterSphere(ref int index)"}</code> |
| <Link id="m-registersphere" /><code>{"static int RegisterSphere(Vector3 center, float radius, Action<CullingGroupEvent> callback)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-registersphereinternal" /><code>{"private int RegisterSphereInternal(Vector3 center, float radius, Action<CullingGroupEvent> callback)"}</code> |
| <Link id="m-setupculling" /><code>{"private void SetupCulling("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-setupspheres" /><code>{"private void SetupSpheres()"}</code> |
| <Link id="m-updatestates" /><code>{"private void UpdateStates(CullingGroupEvent sphere)"}</code> |

</details>
