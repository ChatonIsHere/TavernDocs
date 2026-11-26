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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AttackDirectionAnimationSettings`](/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings)
- **Nested types** [`FloatAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionAnimationFloatSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> | <span className="api-desc">Returns a new `FloatAnimation`.</span> |
