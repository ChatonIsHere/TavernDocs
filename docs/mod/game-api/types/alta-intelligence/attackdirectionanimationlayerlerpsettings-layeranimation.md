---
title: "AttackDirectionAnimationLayerLerpSettings.LayerAnimation"
description: "Per-creature driver made by AttackDirectionAnimationLayerLerpSettings: sets a networked animator layer weight, which lerps on its own."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationLayerLerpSettings.LayerAnimation

A **class** in `Root.Township`, `Alta.Intelligence`.

Per-creature driver made by `AttackDirectionAnimationLayerLerpSettings`: sets a networked animator layer weight, which lerps on its own.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`AttackDirectionAnimationLayerLerpSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings)
- **Inherits or implements** [`IAttackDirectionAnimation`](/mod/game-api/types/alta-intelligence/iattackdirectionanimation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LayerAnimation()"}</code> | Creates an `AttackDirectionAnimationLayerLerpSettings.LayerAnimation` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedproperty" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{" animatedProperty"}</code> | The networked animator layer weight being driven. |
| <Link id="m-target" /><code>{"private float target"}</code> | Weight the layer should go to. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | Sets the target and layer weight to 0, logging "Error here" if the weight is still above 0 and not lerping. |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | Sets the target weight to the direction, clamped to at least 0. |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | Looks up the named layer weight on the creature's `NetworkAnimator` and starts the target at its current value. |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | Sets the layer weight to the target. The lerp amount is ignored because the property lerps itself. |

</details>
