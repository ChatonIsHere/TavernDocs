---
title: "AnimateScaleOverTime"
description: "Script animation that loops a transform's scale along a curve, added per axis on top of a base scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimateScaleOverTime

A **class** in `Root.Township`, no namespace.

Script animation that loops a transform's scale along a curve, added per axis on top of a base scale.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`TransformScriptAnimation`](/game-api/types/global-t-x/transformscriptanimation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimateScaleOverTime()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> | How fast the curve is played. 1 means one curve unit per second. |
| <Link id="m-basescale" /><code>{"private Vector3 baseScale"}</code> | Scale the curve offsets from. |
| <Link id="m-componentwiseimpact" /><code>{"private Vector3 componentWiseImpact"}</code> | Per-axis multiplier for the curve value. |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | Looped curve time, kept between 0 and 1. |
| <Link id="m-scaleanimation" /><code>{"private AnimationCurve scaleAnimation"}</code> | Curve of the scale offset over one loop. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlengthofanimationinseconds" /><code>{"override float GetLengthOfAnimationInSeconds()"}</code> | Time of the curve's last key divided by `animationSpeed`. |
| <Link id="m-resetstate" /><code>{"override void ResetState()"}</code> | Restores the base scale. |
| <Link id="m-updateanimation" /><code>{"protected override void UpdateAnimation()"}</code> | Advances the looped time and sets the scale to base plus impact times the curve value. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupbasescale" /><code>{"private bool SetupBaseScale()"}</code> | Editor button handler: copies the transform's current scale into `baseScale`. |

</details>

## Used in

Members of other types that take, return or hold a `AnimateScaleOverTime`:

[`DiscreteStatBarVisual.animator`](/game-api/types/alta-stats-effects/discretestatbarvisual#m-animator), [`ReviveOrb.scaleAnimation`](/game-api/types/game-other-namespaces/reviveorb#m-scaleanimation).
