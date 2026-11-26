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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`AttackDirectionAnimationFloatSettings`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings)
- **Inherits or implements** [`IAttackDirectionAnimation`](/game-api/types/alta-intelligence/iattackdirectionanimation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FloatAnimation()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedproperty" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" animatedProperty"}</code> | The networked animator float being driven. |
| <Link id="m-target" /><code>{"private float target"}</code> | Value the float is easing toward. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | Does nothing. |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | Sets the target value to (direction + 1) / 2, so -1, 0 and 1 map to 0, 0.5 and 1. |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | Looks up the named float on the creature's `NetworkAnimator` and starts the target at its current value. |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | Lerps the float toward the target by the given amount. |

</details>
