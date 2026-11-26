---
title: "AltaCoroutineHandler"
description: "Internal singleton behaviour that AltaCoroutine runs its coroutines on when no target object is given."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaCoroutineHandler

A **internal class** in `Alta.Coroutines`, `Alta.Utilities`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal singleton behaviour that `AltaCoroutine` runs its coroutines on when no target object is given.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`SingletonBehaviour<AltaCoroutineHandler>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`AltaCoroutineHandler`](/mod/game-api/types/assembly-other/altacoroutinehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaCoroutineHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Used in

Members of other types that take, return or hold a `AltaCoroutineHandler`:

[`AltaCoroutine.AltaCoroutineHandler`](/mod/game-api/types/assembly-other/altacoroutine#m-altacoroutinehandler).
