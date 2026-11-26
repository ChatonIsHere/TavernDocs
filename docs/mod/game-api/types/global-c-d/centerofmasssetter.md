---
title: "CenterOfMassSetter"
description: "Sets a rigidbody's centre of mass and keeps its inertia tensor sane."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CenterOfMassSetter

A **class** in `Root.Township`, the global namespace.

Sets a rigidbody's centre of mass and keeps its inertia tensor sane. `Hand` adds a temporary one to held pickups and removes it once they're let go.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CenterOfMassSetter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | <span className="api-desc">Cached rigidbody behind `Rigidbody`.</span> |
| <Link id="m-centerofmass" /><code>{"private Vector3 centerOfMass"}</code> | <span className="api-desc">Serialized local centre of mass.</span> |
| <Link id="m-isfixingtensor" /><code>{"private bool isFixingTensor"}</code> | <span className="api-desc">Whether setting the centre of mass also repairs the inertia tensor.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for inertia tensor errors.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-centerofmass-2" /><code>{"Vector3 CenterOfMass { get; set; }"}</code> | <span className="api-desc">The rigidbody's centre of mass. Setting it also fixes NaN or infinite inertia tensors and raises the Y tensor if `isFixingTensor` is on.</span> |
| <Link id="m-istemporary" /><code>{"bool IsTemporary { get; set; }"}</code> | <span className="api-desc">Marks a setter that `Hand` added at runtime, so it is removed when the pickup is released.</span> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The rigidbody on this object. If there is none, the component destroys itself.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroying" /><code>{"private bool IsDestroying { get; set; }"}</code> | <span className="api-desc">True after `SetDestroy` until the component goes or `CenterOfMass` is set again.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setdestroy" /><code>{"void SetDestroy()"}</code> | <span className="api-desc">Schedules this component for removal at end of frame, or removes it at once if inactive.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Applies the serialized centre of mass, then resets the rigidbody's centre of mass and inertia tensor.</span> |
| <Link id="m-delaydestroy" /><code>{"private IEnumerator DelayDestroy() (iterator)"}</code> | <span className="api-desc">Destroys this component at end of frame unless it was given a new centre of mass meanwhile.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Resets the rigidbody's centre of mass and inertia tensor to Unity's defaults.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws a sphere at the centre of mass.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Applies the serialized centre of mass in the editor.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CenterOfMassSetter`:

<div className="api-used-in">

[`Hand.AverageCenterOfMass`](/mod/game-api/types/alta-player/hand#m-averagecenterofmass), [`TelescopicPickup.centerOfMass`](/mod/game-api/types/global-t-x/telescopicpickup#m-centerofmass).

</div>
