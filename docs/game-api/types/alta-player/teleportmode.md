---
title: "TeleportMode"
description: "enum TeleportMode in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportMode

An **enum** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-feet" /><code>{"Feet = 1"}</code> |  |
| <Link id="m-head" /><code>{"Head = 2"}</code> |  |
| <Link id="m-roomcenter" /><code>{"RoomCenter = 0"}</code> |  |

## Used in

Members of other types that take, return or hold a `TeleportMode`:

[`LocomotionController.GetTeleportTarget`](/game-api/types/global-i-l/locomotioncontroller#m-getteleporttarget), [`LocomotionController.MoveTo`](/game-api/types/global-i-l/locomotioncontroller#m-moveto-2), [`LocomotionController.TeleportArgument.Mode`](/game-api/types/global-i-l/locomotioncontroller-teleportargument#m-mode), [`LocomotionController.TeleportArgument.TeleportArgument`](/game-api/types/global-i-l/locomotioncontroller-teleportargument#m-ctor-2), [`PlayerLocomotionController.TeleportTo`](/game-api/types/global-p/playerlocomotioncontroller#m-teleportto), [`TeleportationPoint.teleportMode`](/game-api/types/global-t-x/teleportationpoint#m-teleportmode), [`TeleportationPointSaveData.mode`](/game-api/types/global-t-x/teleportationpointsavedata#m-mode).
