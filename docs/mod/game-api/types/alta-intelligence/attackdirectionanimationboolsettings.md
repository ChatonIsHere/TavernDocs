---
title: "AttackDirectionAnimationBoolSettings"
description: "Asset that drives an animator bool from where the target's weapon is: true when the direction is positive."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationBoolSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Asset that drives an animator bool from where the target's weapon is: true when the direction is positive. Used by `AttackDirectionCore` for attack-direction reactions.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AttackDirectionAnimationSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings)
- **Nested types** [`BoolAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionAnimationBoolSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> | <span className="api-desc">Returns a new `BoolAnimation`.</span> |
