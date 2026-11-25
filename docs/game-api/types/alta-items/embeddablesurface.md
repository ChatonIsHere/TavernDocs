---
title: "EmbeddableSurface"
description: "class EmbeddableSurface in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableSurface

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableSurface()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-breakdistance" /><code>{"private float breakDistance"}</code> |  |
| <Link id="m-damper" /><code>{"private float damper"}</code> |  |
| <Link id="m-detector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> |  |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> |  |
| <Link id="m-spring" /><code>{"private AnimationCurve spring"}</code> |  |
| <Link id="m-wedgedistance" /><code>{"private float wedgeDistance"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkbreak" /><code>{"private IEnumerator CheckBreak("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impact, ConfigurableJoint joint, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> |  |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" rawImpact)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
