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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AttackDirectionAnimationSettings`](/game-api/types/alta-intelligence/attackdirectionanimationsettings)
- **Nested types** [`BoolAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionAnimationBoolSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> | Returns a new `BoolAnimation`. |
