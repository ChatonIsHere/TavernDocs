---
title: "Effect"
description: "abstract class Effect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Effect

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`DurationEffect<T>`](/game-api/types/alta-stats-effects/durationeffect-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Effect()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-cooldown" /><code>{"virtual float Cooldown { get; }"}</code> |
| <Link id="m-handler" /><code><Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" Handler { get; private set; }"}</code> |
| <Link id="m-isduration" /><code>{"virtual bool IsDuration { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-apply" /><code>{"virtual void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |
