---
title: "IAttackDirectionAnimation"
description: "One animator parameter (bool, float or layer weight) that shows which way a creature is about to attack."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAttackDirectionAnimation

An **interface** in `Root.Township`, `Alta.Intelligence`.

One animator parameter (bool, float or layer weight) that shows which way a creature is about to attack. `AttackDirectionCore` drives three of them: layer, side and up.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`AttackDirectionAnimationBoolSettings.BoolAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation), [`AttackDirectionAnimationFloatSettings.FloatAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation), [`AttackDirectionAnimationLayerLerpSettings.LayerAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation), [`EmptyAttackDirectionAnimation`](/game-api/types/alta-intelligence/emptyattackdirectionanimation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Resets the parameter to off. |
| <Link id="m-setdirection" /><code>{"void SetDirection(int direction)"}</code> | Sets the target direction value. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | Binds to the named parameter on a network animator. |
| <Link id="m-update" /><code>{"void Update(float lerp)"}</code> | Moves the parameter toward its target, by the given lerp amount. |

## Used in

Members of other types that take, return or hold a `IAttackDirectionAnimation`:

[`AttackDirectionAnimationBoolSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings#m-getanimation), [`AttackDirectionAnimationFloatSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings#m-getanimation), [`AttackDirectionAnimationLayerLerpSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings#m-getanimation), [`AttackDirectionAnimationSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getanimation), [`AttackDirectionAnimationSettings.GetNewAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getnewanimation), [`AttackDirectionCore.GetAnimation`](/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCore.layer`](/game-api/types/alta-intelligence/attackdirectioncore#m-layer), [`AttackDirectionCore.side`](/game-api/types/alta-intelligence/attackdirectioncore#m-side), [`AttackDirectionCore.up`](/game-api/types/alta-intelligence/attackdirectioncore#m-up).
