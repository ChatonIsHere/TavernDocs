---
title: "StatUpgradeEffect"
description: "class StatUpgradeEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatUpgradeEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatUpgradeEffect()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-color" /><code>{"private Color color"}</code> |
| <Link id="m-expansioncurve" /><code>{"private AnimationCurve expansionCurve"}</code> |
| <Link id="m-expansionradius" /><code>{"private float expansionRadius"}</code> |
| <Link id="m-offsetcurve" /><code>{"private AnimationCurve offsetCurve"}</code> |
| <Link id="m-onorbfinished" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onOrbFinished"}</code> |
| <Link id="m-originspeed" /><code>{"private float originSpeed"}</code> |
| <Link id="m-particlegap" /><code>{"private float particleGap"}</code> |
| <Link id="m-renderupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" renderUpdate"}</code> |
| <Link id="m-speedprogress" /><code>{"private float speedProgress"}</code> |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> |
| <Link id="m-stepincrease" /><code>{"private int stepIncrease"}</code> |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> |
| <Link id="m-systemrenderer" /><code>{"private ParticleSystemRenderer systemRenderer"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-targetspeed" /><code>{"private float targetSpeed"}</code> |
| <Link id="m-trailmaterial" /><code>{"private Material trailMaterial"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-set" /><code>{"void Set(Transform target, Vector3 originPosition, float duration, Color color)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation(float expansionDuration, Vector3 originPosition) (iterator)"}</code> |
| <Link id="m-updatecolor" /><code>{"private void UpdateColor()"}</code> |

</details>
