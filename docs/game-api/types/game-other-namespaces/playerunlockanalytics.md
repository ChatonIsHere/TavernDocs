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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockAnalytics("}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager, "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-recentcheckpointname" /><code>{"static string RecentCheckpointName"}</code> | Name of the last challenge checkpoint passed, set by `SetChallengeCheckpointTriggerEvent` and cleared after a respawn event. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service the events go to. |
| <Link id="m-unlockmanager" /><code>{"private readonly "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | The player's unlock manager, used for the current unlock and orb count. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cansendchallengeevent" /><code>{"private bool CanSendChallengeEvent("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | True when the player is the local player and the state is `SpiritState`. |
| <Link id="m-cansendchallengerespawnevent" /><code>{"private bool CanSendChallengeRespawnEvent("}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType)"}</code> | True for a challenge reposition teleport while the player is in the challenge. |
| <Link id="m-sendchallengeexitevent" /><code>{"private void SendChallengeExitEvent("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Sends "Exited Challenge" when the spirit state ends. |
| <Link id="m-sendchallengerespawnevent" /><code>{"private void SendChallengeRespawnEvent("}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType)"}</code> | Sends "Respawned during Challenge" with the last checkpoint name. |
| <Link id="m-sendchallengestartevent" /><code>{"private void SendChallengeStartEvent("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Sends "Started Challenge" when the spirit state starts. |
| <Link id="m-setuprespawnevent" /><code>{"private void SetupRespawnEvent("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Hooks the controller's `PlayerEffectController.PlayerRepositioned` to send respawn events. |

</details>
