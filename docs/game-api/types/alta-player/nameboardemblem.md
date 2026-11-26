---
title: "NameBoardEmblem"
description: "Pooled emblem (the member status shield) shown on a NameBoard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NameBoardEmblem

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Pooled emblem (the member status shield) shown on a `NameBoard`. Subclasses can animate their close.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`AnimatedEmblem`](/game-api/types/alta-player/animatedemblem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoardEmblem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"virtual void Close(Action callBack)"}</code> | Plays the emblem's close and then calls the callback. The base version calls it straight away. |

## Used in

Members of other types that take, return or hold a `NameBoardEmblem`:

[`NameBoard.activeEmblem`](/game-api/types/alta-player/nameboard#m-activeemblem).
