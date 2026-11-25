---
title: "TowerAnalyticsReporter"
description: "class TowerAnalyticsReporter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TowerAnalyticsReporter

A **class** in `Root.Township`, `Features.Analytics.ClimbingTower`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TowerAnalyticsReporter()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/toweranalyticsreporter">{"TowerAnalyticsReporter"}</Link>{" instance"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/toweranalyticsreporter">{"TowerAnalyticsReporter"}</Link>{" Instance { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-reporttoweranalyticevent" /><code>{"void ReportTowerAnalyticEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/climbingtoweranalyticeventtype">{"ClimbingTowerAnalyticEventType"}</Link>{" eventType, Vector3? reportedPosition = null)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-postreport" /><code>{"private void PostReport(string eventType, int playerId)"}</code> |
| <Link id="m-registerserverhandlerevent" /><code>{"private void RegisterServerHandlerEvent()"}</code> |
| <Link id="m-reportplayerloggedinwithspiritmode" /><code>{"private void ReportPlayerLoggedInWithSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-reportplayerloggedoutwithspiritmode" /><code>{"private void ReportPlayerLoggedOutWithSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

</details>
