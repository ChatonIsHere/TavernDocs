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
| <Link id="m-ctor" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | <span className="api-desc">Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`.</span> |
| <Link id="m-ctor-2" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, int numberOfOrbs)"}</code> | <span className="api-desc">Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`.</span> |
| <Link id="m-ctor-3" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, int numberOfOrbs, int checkpointIndex)"}</code> | <span className="api-desc">Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`.</span> |
| <Link id="m-ctor-4" /><code>{"ChallengeAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, int numberOfOrbs, string recentCheckpointName)"}</code> | <span className="api-desc">Creates a `ChallengeAnalyticsEvent` from `eventName`, `unlock`, `numberOfOrbs` and `recentCheckpointName`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-challengecheckpoint" /><code>{"const string ChallengeCheckpoint"}</code> | <span className="api-desc">Event name for reaching a checkpoint.</span> |
| <Link id="m-challengecomplete" /><code>{"const string ChallengeComplete"}</code> | <span className="api-desc">Event name for completing a challenge.</span> |
| <Link id="m-challengeexit" /><code>{"const string ChallengeExit"}</code> | <span className="api-desc">Event name for leaving a challenge.</span> |
| <Link id="m-challengerespawn" /><code>{"const string ChallengeRespawn"}</code> | <span className="api-desc">Event name for respawning during a challenge.</span> |
| <Link id="m-challengestart" /><code>{"const string ChallengeStart"}</code> | <span className="api-desc">Event name for starting a challenge.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpointgatekey" /><code>{"private const string CheckpointGateKey"}</code> | <span className="api-desc">Property key for the most recent checkpoint gate's name.</span> |
| <Link id="m-checkpointkey" /><code>{"private const string CheckpointKey"}</code> | <span className="api-desc">Property key for the checkpoint index.</span> |
| <Link id="m-orbskey" /><code>{"private const string OrbsKey"}</code> | <span className="api-desc">Property key for the number of orbs collected.</span> |
| <Link id="m-unlockkey" /><code>{"private const string UnlockKey"}</code> | <span className="api-desc">Property key for the player unlock's name, or "NULL".</span> |

</details>
