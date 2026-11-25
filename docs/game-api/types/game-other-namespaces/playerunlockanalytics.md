---
title: "PlayerUnlockAnalytics"
description: "class PlayerUnlockAnalytics in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockAnalytics

A **class** in `Root.Township`, `ATT.Progression`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockAnalytics("}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager, "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-recentcheckpointname" /><code>{"static string RecentCheckpointName"}</code> |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-unlockmanager" /><code>{"private readonly "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cansendchallengeevent" /><code>{"private bool CanSendChallengeEvent("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |
| <Link id="m-cansendchallengerespawnevent" /><code>{"private bool CanSendChallengeRespawnEvent("}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType)"}</code> |
| <Link id="m-sendchallengeexitevent" /><code>{"private void SendChallengeExitEvent("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |
| <Link id="m-sendchallengerespawnevent" /><code>{"private void SendChallengeRespawnEvent("}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType)"}</code> |
| <Link id="m-sendchallengestartevent" /><code>{"private void SendChallengeStartEvent("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |
| <Link id="m-setuprespawnevent" /><code>{"private void SetupRespawnEvent("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |

</details>
