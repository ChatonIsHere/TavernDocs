---
title: "AnimateScaleOverTime"
description: "Script animation that loops a transform's scale along a curve, added per axis on top of a base scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimateScaleOverTime

A **class** in `Root.Township`, the global namespace.

Script animation that loops a transform's scale along a curve, added per axis on top of a base scale.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`TransformScriptAnimation`](/mod/game-api/types/global-t-x/transformscriptanimation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimateScaleOverTime()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> | <span className="api-desc">How fast the curve is played. 1 means one curve unit per second.</span> |
| <Link id="m-basescale" /><code>{"private Vector3 baseScale"}</code> | <span className="api-desc">Scale the curve offsets from.</span> |
| <Link id="m-componentwiseimpact" /><code>{"private Vector3 componentWiseImpact"}</code> | <span className="api-desc">Per-axis multiplier for the curve value.</span> |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | <span className="api-desc">Looped curve time, kept between 0 and 1.</span> |
| <Link id="m-scaleanimation" /><code>{"private AnimationCurve scaleAnimation"}</code> | <span className="api-desc">Curve of the scale offset over one loop.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlengthofanimationinseconds" /><code>{"override float GetLengthOfAnimationInSeconds()"}</code> | <span className="api-desc">Time of the curve's last key divided by `animationSpeed`.</span> |
| <Link id="m-resetstate" /><code>{"override void ResetState()"}</code> | <span className="api-desc">Restores the base scale.</span> |
| <Link id="m-updateanimation" /><code>{"protected override void UpdateAnimation()"}</code> | <span className="api-desc">Advances the looped time and sets the scale to base plus impact times the curve value.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupbasescale" /><code>{"private bool SetupBaseScale()"}</code> | <span className="api-desc">Editor button handler: copies the transform's current scale into `baseScale`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AnimateScaleOverTime`:

<div className="api-used-in">

[`DiscreteStatBarVisual.animator`](/mod/game-api/types/alta-stats-effects/discretestatbarvisual#m-animator), [`ReviveOrb.scaleAnimation`](/mod/game-api/types/game-other-namespaces/reviveorb#m-scaleanimation).

</div>
