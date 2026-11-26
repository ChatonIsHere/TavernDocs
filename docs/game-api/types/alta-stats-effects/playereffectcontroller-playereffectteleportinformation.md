---
title: "PlayerEffectController.PlayerEffectTeleportInformation"
description: "Network payload for a potion or effect teleport: where to show the teleport effect and the teleport type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectController.PlayerEffectTeleportInformation

A **private struct** in `Root.Township`, `Alta.Alchemy`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Network payload for a potion or effect teleport: where to show the teleport effect and the teleport type. Private to `PlayerEffectController`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`PlayerEffectController`](/game-api/types/alta-stats-effects/playereffectcontroller)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-teleporteffectposition" /><code>{"Vector3 teleportEffectPosition"}</code> | Where the effect plays. When the server sends it to the owner, this is also where the player is teleported. |
| <Link id="m-teleporttype" /><code><Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType"}</code> | Kind of teleport, sent as an int and passed on to `PlayerRepositioned`. |

## Used in

Members of other types that take, return or hold a `PlayerEffectTeleportInformation`:

[`PlayerEffectController.NetworkTeleport`](/game-api/types/alta-stats-effects/playereffectcontroller#m-networkteleport), [`PlayerEffectController.remoteTeleportEffect`](/game-api/types/alta-stats-effects/playereffectcontroller#m-remoteteleporteffect).
