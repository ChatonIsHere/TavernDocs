---
title: "EffectHandler.TeleportType"
description: "Why a player is being teleported by EffectHandler.Teleport: default, a potion, or being moved back to a challenge checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectHandler.TeleportType

An **enum** in `Root.Township`, `Alta.Alchemy`.

Why a player is being teleported by `EffectHandler.Teleport`: default, a potion, or being moved back to a challenge checkpoint.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`EffectHandler`](/mod/game-api/types/alta-stats-effects/effecthandler)

## Values

| Member |
| --- |
| <Link id="m-challengereposition" /><code>{"ChallengeReposition = 2"}</code> |
| <Link id="m-default" /><code>{"Default = 0"}</code> |
| <Link id="m-potion" /><code>{"Potion = 1"}</code> |

## Used in

Members of other types that take, return or hold a `TeleportType`:

<div className="api-used-in">

[`EffectHandler.Teleport`](/mod/game-api/types/alta-stats-effects/effecthandler#m-teleport), [`PlayerEffectController.PlayerRepositioned`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-playerrepositioned), [`PlayerEffectController.Teleport`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-teleport), [`PlayerEffectController.PlayerEffectTeleportInformation.teleportType`](/mod/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation#m-teleporttype), [`PlayerUnlockAnalytics.CanSendChallengeRespawnEvent`](/mod/game-api/types/game-other-namespaces/playerunlockanalytics#m-cansendchallengerespawnevent), [`PlayerUnlockAnalytics.SendChallengeRespawnEvent`](/mod/game-api/types/game-other-namespaces/playerunlockanalytics#m-sendchallengerespawnevent).

</div>
