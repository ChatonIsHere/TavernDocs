---
title: "AiHook"
description: "Non-generic version of AiHook<T> bound to ActionComponent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

Non-generic version of `AiHook<T>` bound to `ActionComponent`. An AI hook listens for its action being used and gets a callback when that use finishes or is cancelled.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook<ActionComponent>`](/mod/game-api/types/alta-intelligence/aihook-t)
- **Derived types** [`AnimatedBoolAiHook`](/mod/game-api/types/alta-intelligence/animatedboolaihook), [`AnimatedFloatAiHook`](/mod/game-api/types/alta-intelligence/animatedfloataihook), [`AnimatedFloatTransitionAiHook`](/mod/game-api/types/alta-intelligence/animatedfloattransitionaihook), [`AnimatedLayerAiHook`](/mod/game-api/types/alta-intelligence/animatedlayeraihook), [`AnimatedTriggerAiHook`](/mod/game-api/types/alta-intelligence/animatedtriggeraihook), [`AttackDirectionReactAIHook`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook), [`EventChannelAiHook`](/mod/game-api/types/alta-intelligence/eventchannelaihook), [`EventChannelTimedAiHook`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook), [`StatChangeHook`](/mod/game-api/types/alta-intelligence/statchangehook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AiHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |
