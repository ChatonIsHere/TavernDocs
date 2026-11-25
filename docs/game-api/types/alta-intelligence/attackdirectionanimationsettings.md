---
title: "AttackDirectionAnimationSettings"
description: "abstract class AttackDirectionAnimationSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationSettings

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AttackDirectionAnimationBoolSettings`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings), [`AttackDirectionAnimationFloatSettings`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings), [`AttackDirectionAnimationLayerLerpSettings`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AttackDirectionAnimationSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-parametername" /><code>{"private string parameterName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parametername-2" /><code>{"string ParameterName { get; }"}</code> |  |
| <Link id="m-getanimation" /><code>{"protected abstract "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewanimation" /><code><Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetNewAnimation("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AttackDirectionAnimationSettings`:

[`AttackDirectionCore.GetAnimation`](/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCoreSettings.layer`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-layer), [`AttackDirectionCoreSettings.Layer`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-layer-2), [`AttackDirectionCoreSettings.side`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-side), [`AttackDirectionCoreSettings.Side`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-side-2), [`AttackDirectionCoreSettings.up`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-up), [`AttackDirectionCoreSettings.Up`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-up-2).
