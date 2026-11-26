---
title: "ClimbingTowerAnalyticEventType"
description: "Kinds of analytics event the climbing tower reports: falls, entering and leaving, checkpoints, and logging in or out in spirit mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerAnalyticEventType

An **enum** in `Root.Township`, `Features.Analytics.ClimbingTower`.

Kinds of analytics event the climbing tower reports: falls, entering and leaving, checkpoints, and logging in or out in spirit mode.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Values

| Member |
| --- |
| <Link id="m-onplayercheckpointobtained" /><code>{"OnPlayerCheckpointObtained = 3"}</code> |
| <Link id="m-onplayerenteredtower" /><code>{"OnPlayerEnteredTower = 1"}</code> |
| <Link id="m-onplayerexitedtower" /><code>{"OnPlayerExitedTower = 2"}</code> |
| <Link id="m-onplayerfell" /><code>{"OnPlayerFell = 0"}</code> |
| <Link id="m-onplayerloggedinwithspiritmode" /><code>{"OnPlayerLoggedInWithSpiritMode = 4"}</code> |
| <Link id="m-onplayerloggedoutwithspiritmode" /><code>{"OnPlayerLoggedOutWithSpiritMode = 5"}</code> |

## Used in

Members of other types that take, return or hold a `ClimbingTowerAnalyticEventType`:

[`TowerAnalyticsReporter.ReportTowerAnalyticEvent`](/game-api/types/game-other-namespaces/toweranalyticsreporter#m-reporttoweranalyticevent).
