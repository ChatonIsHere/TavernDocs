---
title: "RenderLock.RenderLockType"
description: "Reasons rendering is held back, used as bit flags in RenderLock: no player controller spawned yet, or faded to black."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderLock.RenderLockType

An **enum** in `Root.Township`, the global namespace.

Reasons rendering is held back, used as bit flags in `RenderLock`: no player controller spawned yet, or faded to black.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RenderLock`](/mod/game-api/types/global-q-r/renderlock)

## Values

| Member |
| --- |
| <Link id="m-fadedtoblack" /><code>{"FadedToBlack = 2"}</code> |
| <Link id="m-playercontrollernotspawned" /><code>{"PlayerControllerNotSpawned = 1"}</code> |

## Used in

Members of other types that take, return or hold a `RenderLockType`:

<div className="api-used-in">

[`RenderLock.currentLocks`](/mod/game-api/types/global-q-r/renderlock#m-currentlocks), [`RenderLock.Lock`](/mod/game-api/types/global-q-r/renderlock#m-lock), [`RenderLock.Unlock`](/mod/game-api/types/global-q-r/renderlock#m-unlock).

</div>
