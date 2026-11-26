---
title: "AttackDirectionAnimationFloatSettings"
description: "Asset that drives an animator float from where the target's weapon is, easing it toward 0, 0.5 or 1 for directions -1, 0 and 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationFloatSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Asset that drives an animator float from where the target's weapon is, easing it toward 0, 0.5 or 1 for directions -1, 0 and 1. Used by `AttackDirectionCore`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AttackDirectionAnimationSettings`](/game-api/types/alta-intelligence/attackdirectionanimationsettings)
- **Nested types** [`FloatAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttackDirectionAnimationFloatSettings()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> | Returns a new `FloatAnimation`. |
