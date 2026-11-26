---
title: "DirectionMode"
description: "What smooth locomotion steers by: the head or the controller, and locked variants of each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectionMode

An **enum** in `Root.Township`, the global namespace.

What smooth locomotion steers by: the head or the controller, and locked variants of each. Set separately for touch and press movement in game settings.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Values

| Member |
| --- |
| <Link id="m-controller" /><code>{"Controller = 1"}</code> |
| <Link id="m-head" /><code>{"Head = 0"}</code> |
| <Link id="m-lockedcontroller" /><code>{"LockedController = 3"}</code> |
| <Link id="m-lockedhead" /><code>{"LockedHead = 2"}</code> |

## Used in

Members of other types that take, return or hold a `DirectionMode`:

[`GameSettings.PressLocomotionMode`](/mod/game-api/types/alta-utilities/gamesettings#m-presslocomotionmode), [`GameSettings.TouchLocomotionMode`](/mod/game-api/types/alta-utilities/gamesettings#m-touchlocomotionmode).
