---
title: "AttackDirectionAnimationFloatSettings.FloatAnimation"
description: "Per-creature driver made by AttackDirectionAnimationFloatSettings: eases a networked animator float toward a value set by the attack direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationFloatSettings.FloatAnimation

A **class** in `Root.Township`, `Alta.Intelligence`.

Per-creature driver made by `AttackDirectionAnimationFloatSettings`: eases a networked animator float toward a value set by the attack direction.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`AttackDirectionAnimationFloatSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings)
- **Inherits or implements** [`IAttackDirectionAnimation`](/mod/game-api/types/alta-intelligence/iattackdirectionanimation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatAnimation()"}</code> | <span className="api-desc">Creates an `AttackDirectionAnimationFloatSettings.FloatAnimation` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedproperty" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" animatedProperty"}</code> | <span className="api-desc">The networked animator float being driven.</span> |
| <Link id="m-target" /><code>{"private float target"}</code> | <span className="api-desc">Value the float is easing toward.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | <span className="api-desc">Sets the target value to (direction + 1) / 2, so -1, 0 and 1 map to 0, 0.5 and 1.</span> |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | <span className="api-desc">Looks up the named float on the creature's `NetworkAnimator` and starts the target at its current value.</span> |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | <span className="api-desc">Lerps the float toward the target by the given amount.</span> |

</details>
