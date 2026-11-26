---
title: "VisibleNetworkRigidbody"
description: "class VisibleNetworkRigidbody in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibleNetworkRigidbody

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ComponentGroup<NetworkRigidbody>`](/game-api/types/global-c-d/componentgroup-t), [`IUpdateOnMove`](/game-api/types/global-i-l/iupdateonmove)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VisibleNetworkRigidbody()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-culling" /><code>{"private CullingGroup culling"}</code> |
| <Link id="m-spheres" /><code>{"private BoundingSphere[] spheres"}</code> |
| <Link id="m-visibilitycenter" /><code>{"private Vector3 visibilityCenter"}</code> |
| <Link id="m-visibilityradius" /><code>{"private float visibilityRadius"}</code> |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" current)"}</code> |
| <Link id="m-moved" /><code>{"private void IUpdateOnMove.Moved()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> |

</details>
