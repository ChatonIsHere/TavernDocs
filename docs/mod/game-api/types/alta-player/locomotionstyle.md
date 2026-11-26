---
title: "LocomotionStyle"
description: "How a teleport or rotation is shown to the player: instantly, as a lerp, or with a fade."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionStyle

An **enum** in `Root.Township`, `Alta.Character`.

How a teleport or rotation is shown to the player: instantly, as a lerp, or with a fade.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Values

| Member |
| --- |
| <Link id="m-fade" /><code>{"Fade = 2"}</code> |
| <Link id="m-instant" /><code>{"Instant = 0"}</code> |
| <Link id="m-lerp" /><code>{"Lerp = 1"}</code> |

## Used in

Members of other types that take, return or hold a `LocomotionStyle`:

[`PlayerCharacter.teleportStyle`](/mod/game-api/types/alta-player/playercharacter#m-teleportstyle), [`PlayerCharacter.TeleportStyle`](/mod/game-api/types/alta-player/playercharacter#m-teleportstyle-2), [`LocomotionController.RotateAroundPlayer`](/mod/game-api/types/global-i-l/locomotioncontroller#m-rotatearoundplayer-2), [`LocomotionController.RotateTo`](/mod/game-api/types/global-i-l/locomotioncontroller#m-rotateto-2), [`LocomotionController.teleportStyle`](/mod/game-api/types/global-i-l/locomotioncontroller#m-teleportstyle), [`PlayerLocomotionController.RotateAroundPlayer`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-rotatearoundplayer), [`PlayerLocomotionController.style`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-style), [`PlayerLocomotionController.TeleportTo`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-teleportto-2).
