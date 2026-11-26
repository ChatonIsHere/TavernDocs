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
| <Link id="m-ctor" /><code>{"BoolAnimation()"}</code> | <span className="api-desc">Creates an `AttackDirectionAnimationBoolSettings.BoolAnimation` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedproperty" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" animatedProperty"}</code> | <span className="api-desc">The networked animator bool being driven.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | <span className="api-desc">Sets the bool to true when the direction is above 0, false otherwise.</span> |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | <span className="api-desc">Looks up the named bool on the creature's `NetworkAnimator`.</span> |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | <span className="api-desc">Does nothing; the bool is set straight away.</span> |

</details>
