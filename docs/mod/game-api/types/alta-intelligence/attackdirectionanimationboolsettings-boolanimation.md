---
title: "AttackDirectionAnimationBoolSettings.BoolAnimation"
description: "Per-creature driver made by AttackDirectionAnimationBoolSettings: sets a networked animator bool from the attack direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationBoolSettings.BoolAnimation

A **class** in `Root.Township`, `Alta.Intelligence`.

Per-creature driver made by `AttackDirectionAnimationBoolSettings`: sets a networked animator bool from the attack direction.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`AttackDirectionAnimationBoolSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationboolsettings)
- **Inherits or implements** [`IAttackDirectionAnimation`](/mod/game-api/types/alta-intelligence/iattackdirectionanimation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoolAnimation()"}</code> | Creates an `AttackDirectionAnimationBoolSettings.BoolAnimation` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedproperty" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" animatedProperty"}</code> | The networked animator bool being driven. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | Does nothing. |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | Sets the bool to true when the direction is above 0, false otherwise. |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | Looks up the named bool on the creature's `NetworkAnimator`. |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | Does nothing; the bool is set straight away. |

</details>
