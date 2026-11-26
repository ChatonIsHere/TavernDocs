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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableSurface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakdistance" /><code>{"private float breakDistance"}</code> | <span className="api-desc">How far the tool must be pulled back before it comes free.</span> |
| <Link id="m-damper" /><code>{"private float damper"}</code> | <span className="api-desc">Damper on the joint's spring.</span> |
| <Link id="m-detector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | <span className="api-desc">The impact detector on this object.</span> |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> | <span className="api-desc">Lowest health damage that makes the tool stick.</span> |
| <Link id="m-spring" /><code>{"private AnimationCurve spring"}</code> | <span className="api-desc">Joint spring strength by distance pulled out.</span> |
| <Link id="m-wedgedistance" /><code>{"private float wedgeDistance"}</code> | <span className="api-desc">How far the tool is pushed in along the hit direction.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkbreak" /><code>{"private IEnumerator CheckBreak("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impact, ConfigurableJoint joint, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | <span className="api-desc">Coroutine that adjusts the joint spring as the tool is pulled and removes the joint once pulled out past `breakDistance`.</span> |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" rawImpact)"}</code> | <span className="api-desc">On a hit above `minimumDamage`, snaps the tool in slightly and joins it to what it struck.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the detector's `Hit` event.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the detector's `Hit` event.</span> |

</details>
