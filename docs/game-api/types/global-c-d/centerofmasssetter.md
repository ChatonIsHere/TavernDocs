---
title: "CenterOfMassSetter"
description: "Sets a rigidbody's centre of mass and keeps its inertia tensor sane."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CenterOfMassSetter

A **class** in `Root.Township`, no namespace.

Sets a rigidbody's centre of mass and keeps its inertia tensor sane. `Hand` adds a temporary one to held pickups and removes it once they're let go.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CenterOfMassSetter()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | Cached rigidbody behind `Rigidbody`. |
| <Link id="m-centerofmass" /><code>{"private Vector3 centerOfMass"}</code> | Serialized local centre of mass. |
| <Link id="m-isfixingtensor" /><code>{"private bool isFixingTensor"}</code> | Whether setting the centre of mass also repairs the inertia tensor. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for inertia tensor errors. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-centerofmass-2" /><code>{"Vector3 CenterOfMass { get; set; }"}</code> | The rigidbody's centre of mass. Setting it also fixes NaN or infinite inertia tensors and raises the Y tensor if `isFixingTensor` is on. |
| <Link id="m-istemporary" /><code>{"bool IsTemporary { get; set; }"}</code> | Marks a setter that `Hand` added at runtime, so it is removed when the pickup is released. |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The rigidbody on this object. If there is none, the component destroys itself. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroying" /><code>{"private bool IsDestroying { get; set; }"}</code> | True after `SetDestroy` until the component goes or `CenterOfMass` is set again. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setdestroy" /><code>{"void SetDestroy()"}</code> | Schedules this component for removal at end of frame, or removes it at once if inactive. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Applies the serialized centre of mass, then resets the rigidbody's centre of mass and inertia tensor. |
| <Link id="m-delaydestroy" /><code>{"private IEnumerator DelayDestroy() (iterator)"}</code> | Destroys this component at end of frame unless it was given a new centre of mass meanwhile. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Resets the rigidbody's centre of mass and inertia tensor to Unity's defaults. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws a sphere at the centre of mass. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Applies the serialized centre of mass in the editor. |

</details>

## Used in

Members of other types that take, return or hold a `CenterOfMassSetter`:

[`Hand.AverageCenterOfMass`](/game-api/types/alta-player/hand#m-averagecenterofmass), [`TelescopicPickup.centerOfMass`](/game-api/types/global-t-x/telescopicpickup#m-centerofmass).
