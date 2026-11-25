---
title: "AnimateScaleOverTime"
description: "class AnimateScaleOverTime in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimateScaleOverTime

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`TransformScriptAnimation`](/game-api/types/global-t-x/transformscriptanimation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimateScaleOverTime()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> |
| <Link id="m-basescale" /><code>{"private Vector3 baseScale"}</code> |
| <Link id="m-componentwiseimpact" /><code>{"private Vector3 componentWiseImpact"}</code> |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> |
| <Link id="m-scaleanimation" /><code>{"private AnimationCurve scaleAnimation"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getlengthofanimationinseconds" /><code>{"override float GetLengthOfAnimationInSeconds()"}</code> |
| <Link id="m-resetstate" /><code>{"override void ResetState()"}</code> |
| <Link id="m-updateanimation" /><code>{"protected override void UpdateAnimation()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-setupbasescale" /><code>{"private bool SetupBaseScale()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AnimateScaleOverTime`:

[`DiscreteStatBarVisual.animator`](/game-api/types/alta-stats-effects/discretestatbarvisual#m-animator), [`ReviveOrb.scaleAnimation`](/game-api/types/game-other-namespaces/reviveorb#m-scaleanimation).
