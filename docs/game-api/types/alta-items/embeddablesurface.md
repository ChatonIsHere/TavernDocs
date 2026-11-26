---
title: "EmbeddableSurface"
description: "Lets tools stick into a surface: a hard enough hit wedges the tool in with a spring joint until it is pulled out past breakDistance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableSurface

A **class** in `Root.Township`, `Alta.Impact`.

Lets tools stick into a surface: a hard enough hit wedges the tool in with a spring joint until it is pulled out past `breakDistance`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableSurface()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakdistance" /><code>{"private float breakDistance"}</code> | How far the tool must be pulled back before it comes free. |
| <Link id="m-damper" /><code>{"private float damper"}</code> | Damper on the joint's spring. |
| <Link id="m-detector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | The impact detector on this object. |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> | Lowest health damage that makes the tool stick. |
| <Link id="m-spring" /><code>{"private AnimationCurve spring"}</code> | Joint spring strength by distance pulled out. |
| <Link id="m-wedgedistance" /><code>{"private float wedgeDistance"}</code> | How far the tool is pushed in along the hit direction. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkbreak" /><code>{"private IEnumerator CheckBreak("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impact, ConfigurableJoint joint, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | Coroutine that adjusts the joint spring as the tool is pulled and removes the joint once pulled out past `breakDistance`. |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" rawImpact)"}</code> | On a hit above `minimumDamage`, snaps the tool in slightly and joins it to what it struck. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the detector's `Hit` event. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the detector's `Hit` event. |

</details>
