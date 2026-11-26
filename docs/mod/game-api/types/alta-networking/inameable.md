---
title: "INameable"
description: "Something with a display name for debug GUI."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INameable

An **interface** in `Root.Township`, `Alta.Networking.Animation`.

Something with a display name for debug GUI. Implemented by `AnimatedValue<T>`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`AnimatedValue<T>`](/mod/game-api/types/alta-networking/animatedvalue-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-guiname" /><code>{"string GUIName { get; }"}</code> | <span className="api-desc">Name to show in debug GUI; for animated values it is the name plus the current value.</span> |
