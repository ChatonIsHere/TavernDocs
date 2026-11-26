---
title: "PlayerUnlockAnalytics"
description: "Sends challenge analytics (start, exit, respawn) for a player's unlock challenge."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockAnalytics

A **class** in `Root.Township`, `ATT.Progression`.

Sends challenge analytics (start, exit, respawn) for a player's unlock challenge. Created with a `PlayerUnlockManager`; only sends for the local player in `SpiritState`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockAnalytics("}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager, "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-recentcheckpointname" /><code>{"static string RecentCheckpointName"}</code> | <span className="api-desc">Name of the last challenge checkpoint passed, set by `SetChallengeCheckpointTriggerEvent` and cleared after a respawn event.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service the events go to.</span> |
| <Link id="m-unlockmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | <span className="api-desc">The player's unlock manager, used for the current unlock and orb count.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cansendchallengeevent" /><code>{"private bool CanSendChallengeEvent("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">True when the player is the local player and the state is `SpiritState`.</span> |
| <Link id="m-cansendchallengerespawnevent" /><code>{"private bool CanSendChallengeRespawnEvent("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType)"}</code> | <span className="api-desc">True for a challenge reposition teleport while the player is in the challenge.</span> |
| <Link id="m-sendchallengeexitevent" /><code>{"private void SendChallengeExitEvent("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Sends "Exited Challenge" when the spirit state ends.</span> |
| <Link id="m-sendchallengerespawnevent" /><code>{"private void SendChallengeRespawnEvent("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType)"}</code> | <span className="api-desc">Sends "Respawned during Challenge" with the last checkpoint name.</span> |
| <Link id="m-sendchallengestartevent" /><code>{"private void SendChallengeStartEvent("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Sends "Started Challenge" when the spirit state starts.</span> |
| <Link id="m-setuprespawnevent" /><code>{"private void SetupRespawnEvent("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Hooks the controller's `PlayerEffectController.PlayerRepositioned` to send respawn events.</span> |

</details>
