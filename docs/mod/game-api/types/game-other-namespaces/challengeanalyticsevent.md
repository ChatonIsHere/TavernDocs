---
title: "ChallengeAnalyticsEvent"
description: "Analytics event for challenge progress (start, exit, respawn, checkpoint, complete), with the unlock, orbs collected and checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChallengeAnalyticsEvent

A **class** in `Root.Township`, `ATT.Analytics`.

Analytics event for challenge progress (start, exit, respawn, checkpoint, complete), with the unlock, orbs collected and checkpoint.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`TownshipAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/townshipanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`. |
| <Link id="m-ctor-2" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, int numberOfOrbs)"}</code> | Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`. |
| <Link id="m-ctor-3" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, int numberOfOrbs, int checkpointIndex)"}</code> | Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`. |
| <Link id="m-ctor-4" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, int numberOfOrbs, string recentCheckpointName)"}</code> | Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-challengecheckpoint" /><code>{"const string ChallengeCheckpoint"}</code> | Event name for reaching a checkpoint. |
| <Link id="m-challengecomplete" /><code>{"const string ChallengeComplete"}</code> | Event name for completing a challenge. |
| <Link id="m-challengeexit" /><code>{"const string ChallengeExit"}</code> | Event name for leaving a challenge. |
| <Link id="m-challengerespawn" /><code>{"const string ChallengeRespawn"}</code> | Event name for respawning during a challenge. |
| <Link id="m-challengestart" /><code>{"const string ChallengeStart"}</code> | Event name for starting a challenge. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpointgatekey" /><code>{"private const string CheckpointGateKey"}</code> | Property key for the most recent checkpoint gate's name. |
| <Link id="m-checkpointkey" /><code>{"private const string CheckpointKey"}</code> | Property key for the checkpoint index. |
| <Link id="m-orbskey" /><code>{"private const string OrbsKey"}</code> | Property key for the number of orbs collected. |
| <Link id="m-unlockkey" /><code>{"private const string UnlockKey"}</code> | Property key for the player unlock's name, or "NULL". |

</details>
