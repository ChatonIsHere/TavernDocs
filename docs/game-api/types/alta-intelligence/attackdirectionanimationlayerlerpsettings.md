---
title: "AttackDirectionAnimationLayerLerpSettings"
description: "Asset that drives an animator layer weight from where the target's weapon is: 1 for a positive direction, 0 otherwise."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionAnimationLayerLerpSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Asset that drives an animator layer weight from where the target's weapon is: 1 for a positive direction, 0 otherwise. Used by `AttackDirectionCore`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AttackDirectionAnimationSettings`](/game-api/types/alta-intelligence/attackdirectionanimationsettings)
- **Nested types** [`LayerAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttackDirectionAnimationLayerLerpSettings()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation { get; }"}</code> | Returns a new `LayerAnimation`. |
