---
title: "IAiHook"
description: "A component that adds effects to the ActionComponent on the same GameObject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAiHook

An **interface** in `Root.Township`, `Alta.Intelligence`.

A component that adds effects to the `ActionComponent` on the same GameObject. `ActionComponent` finds these and initializes them the first time the action is used.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`AiHook<T>`](/mod/game-api/types/alta-intelligence/aihook-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Called once, on first use of the action. Hooks subscribe to the action's `Used` event here.</span> |
