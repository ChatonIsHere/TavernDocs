---
title: "AttackDirectionAnimationSettings"
description: "Asset that makes an attack direction animation helper for a creature's animator parameter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationSettings

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Asset that makes an attack direction animation helper for a creature's animator parameter.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AttackDirectionAnimationBoolSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationboolsettings), [`AttackDirectionAnimationFloatSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings), [`AttackDirectionAnimationLayerLerpSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AttackDirectionAnimationSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-parametername" /><code>{"private string parameterName"}</code> | <span className="api-desc">Name of the animator parameter the animation drives. Exposed as `ParameterName`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parametername-2" /><code>{"string ParameterName { get; }"}</code> | <span className="api-desc">The animator parameter the helper drives.</span> |
| <Link id="m-getanimation" /><code>{"protected abstract "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> | <span className="api-desc">Subclasses return a new, not yet set up animation helper.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewanimation" /><code><Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetNewAnimation("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator)"}</code> | <span className="api-desc">Makes a helper and sets it up on the given network animator and `ParameterName`.</span> |

## Used in

Members of other types that take, return or hold a `AttackDirectionAnimationSettings`:

<div className="api-used-in">

[`AttackDirectionCore.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCoreSettings.layer`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-layer), [`AttackDirectionCoreSettings.Layer`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-layer-2), [`AttackDirectionCoreSettings.side`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-side), [`AttackDirectionCoreSettings.Side`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-side-2), [`AttackDirectionCoreSettings.up`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-up), [`AttackDirectionCoreSettings.Up`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-up-2).

</div>
