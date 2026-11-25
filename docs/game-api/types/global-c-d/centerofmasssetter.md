---
title: "CenterOfMassSetter"
description: "class CenterOfMassSetter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CenterOfMassSetter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CenterOfMassSetter()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> |
| <Link id="m-centerofmass" /><code>{"private Vector3 centerOfMass"}</code> |
| <Link id="m-isfixingtensor" /><code>{"private bool isFixingTensor"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-centerofmass-2" /><code>{"Vector3 CenterOfMass { get; set; }"}</code> |
| <Link id="m-istemporary" /><code>{"bool IsTemporary { get; set; }"}</code> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-isdestroying" /><code>{"private bool IsDestroying { get; set; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setdestroy" /><code>{"void SetDestroy()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-delaydestroy" /><code>{"private IEnumerator DelayDestroy() (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CenterOfMassSetter`:

[`Hand.AverageCenterOfMass`](/game-api/types/alta-player/hand#m-averagecenterofmass), [`TelescopicPickup.centerOfMass`](/game-api/types/global-t-x/telescopicpickup#m-centerofmass).
