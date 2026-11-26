---
title: "SmoothRotationMode"
description: "Smooth turn setting for swipe pads: Relative turns from swipe movement, Centered uses the thumbstick path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothRotationMode

An **enum** in `Root.Township`, the global namespace.

Smooth turn setting for swipe pads: `Relative` turns from swipe movement, `Centered` uses the thumbstick path. Read by `RoomRotator`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-centered" /><code>{"Centered = 0"}</code> |
| <Link id="m-relative" /><code>{"Relative = 1"}</code> |

## Used in

Members of other types that take, return or hold a `SmoothRotationMode`:

[`GameSettings.IsSmoothRotationOnSwipe`](/mod/game-api/types/alta-utilities/gamesettings#m-issmoothrotationonswipe).
