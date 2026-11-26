---
title: "TowerAnalyticsReporter"
description: "Obsolete climbing tower analytics reporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TowerAnalyticsReporter

A **class** in `Root.Township`, `Features.Analytics.ClimbingTower`.

Obsolete climbing tower analytics reporter. Its bodies are stubbed out in this build: `Awake` is empty, so `Instance` is never set, and `ReportTowerAnalyticEvent` does nothing.

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

| Member | What it is |
| --- | --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> | Property bag sent with each report. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/toweranalyticsreporter">{"TowerAnalyticsReporter"}</Link>{" instance"}</code> | Backing field for `Instance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/toweranalyticsreporter">{"TowerAnalyticsReporter"}</Link>{" Instance { get; }"}</code> | The singleton. Always null in this build because `Awake` never sets it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reporttoweranalyticevent" /><code>{"void ReportTowerAnalyticEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/climbingtoweranalyticeventtype">{"ClimbingTowerAnalyticEventType"}</Link>{" eventType, Vector3? reportedPosition = null)"}</code> | Empty in this build. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Empty, so the singleton is never assigned. |
| <Link id="m-postreport" /><code>{"private void PostReport(string eventType, int playerId)"}</code> | Posts a generic analytics event with `eventData` for a player through the old API client. Nothing calls it. |
| <Link id="m-registerserverhandlerevent" /><code>{"private void RegisterServerHandlerEvent()"}</code> | Empty. |
| <Link id="m-reportplayerloggedinwithspiritmode" /><code>{"private void ReportPlayerLoggedInWithSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Reports a logged-in-with-spirit-mode event if the player has a current unlock. Not hooked up. |
| <Link id="m-reportplayerloggedoutwithspiritmode" /><code>{"private void ReportPlayerLoggedOutWithSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Reports a logged-out-with-spirit-mode event if the player has a current unlock. Not hooked up. |

</details>
