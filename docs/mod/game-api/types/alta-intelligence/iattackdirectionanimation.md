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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`AttackDirectionAnimationBoolSettings.BoolAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation), [`AttackDirectionAnimationFloatSettings.FloatAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation), [`AttackDirectionAnimationLayerLerpSettings.LayerAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation), [`EmptyAttackDirectionAnimation`](/mod/game-api/types/alta-intelligence/emptyattackdirectionanimation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Resets the parameter to off.</span> |
| <Link id="m-setdirection" /><code>{"void SetDirection(int direction)"}</code> | <span className="api-desc">Sets the target direction value.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | <span className="api-desc">Binds to the named parameter on a network animator.</span> |
| <Link id="m-update" /><code>{"void Update(float lerp)"}</code> | <span className="api-desc">Moves the parameter toward its target, by the given lerp amount.</span> |

## Used in

Members of other types that take, return or hold a `IAttackDirectionAnimation`:

<div className="api-used-in">

[`AttackDirectionAnimationBoolSettings.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationboolsettings#m-getanimation), [`AttackDirectionAnimationFloatSettings.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings#m-getanimation), [`AttackDirectionAnimationLayerLerpSettings.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings#m-getanimation), [`AttackDirectionAnimationSettings.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getanimation), [`AttackDirectionAnimationSettings.GetNewAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getnewanimation), [`AttackDirectionCore.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCore.layer`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-layer), [`AttackDirectionCore.side`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-side), [`AttackDirectionCore.up`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-up).

</div>
