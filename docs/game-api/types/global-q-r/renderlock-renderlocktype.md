---
title: "RenderLock.RenderLockType"
description: "Reasons rendering is held back, used as bit flags in RenderLock: no player controller spawned yet, or faded to black."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderLock.RenderLockType

An **enum** in `Root.Township`, no namespace.

Reasons rendering is held back, used as bit flags in `RenderLock`: no player controller spawned yet, or faded to black.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RenderLock`](/game-api/types/global-q-r/renderlock)

## Values

| Member |
| --- |
| <Link id="m-fadedtoblack" /><code>{"FadedToBlack = 2"}</code> |
| <Link id="m-playercontrollernotspawned" /><code>{"PlayerControllerNotSpawned = 1"}</code> |

## Used in

Members of other types that take, return or hold a `RenderLockType`:

[`RenderLock.currentLocks`](/game-api/types/global-q-r/renderlock#m-currentlocks), [`RenderLock.Lock`](/game-api/types/global-q-r/renderlock#m-lock), [`RenderLock.Unlock`](/game-api/types/global-q-r/renderlock#m-unlock).
