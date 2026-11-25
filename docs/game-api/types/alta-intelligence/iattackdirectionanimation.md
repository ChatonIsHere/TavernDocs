---
title: "IAttackDirectionAnimation"
description: "interface IAttackDirectionAnimation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAttackDirectionAnimation

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`AttackDirectionAnimationBoolSettings.BoolAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation), [`AttackDirectionAnimationFloatSettings.FloatAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation), [`AttackDirectionAnimationLayerLerpSettings.LayerAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation), [`EmptyAttackDirectionAnimation`](/game-api/types/alta-intelligence/emptyattackdirectionanimation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |  |
| <Link id="m-setdirection" /><code>{"void SetDirection(int direction)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> |  |
| <Link id="m-update" /><code>{"void Update(float lerp)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAttackDirectionAnimation`:

[`AttackDirectionAnimationBoolSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings#m-getanimation), [`AttackDirectionAnimationFloatSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings#m-getanimation), [`AttackDirectionAnimationLayerLerpSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings#m-getanimation), [`AttackDirectionAnimationSettings.GetAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getanimation), [`AttackDirectionAnimationSettings.GetNewAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getnewanimation), [`AttackDirectionCore.GetAnimation`](/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCore.layer`](/game-api/types/alta-intelligence/attackdirectioncore#m-layer), [`AttackDirectionCore.side`](/game-api/types/alta-intelligence/attackdirectioncore#m-side), [`AttackDirectionCore.up`](/game-api/types/alta-intelligence/attackdirectioncore#m-up).
