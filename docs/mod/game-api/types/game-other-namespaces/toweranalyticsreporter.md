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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TowerAnalyticsReporter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> | <span className="api-desc">Property bag sent with each report.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/toweranalyticsreporter">{"TowerAnalyticsReporter"}</Link>{" instance"}</code> | <span className="api-desc">Backing field for `Instance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/toweranalyticsreporter">{"TowerAnalyticsReporter"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The singleton. Always null in this build because `Awake` never sets it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reporttoweranalyticevent" /><code>{"void ReportTowerAnalyticEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/climbingtoweranalyticeventtype">{"ClimbingTowerAnalyticEventType"}</Link>{" eventType, Vector3? reportedPosition = null)"}</code> | <span className="api-desc">Empty in this build.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Empty, so the singleton is never assigned.</span> |
| <Link id="m-postreport" /><code>{"private void PostReport(string eventType, int playerId)"}</code> | <span className="api-desc">Posts a generic analytics event with `eventData` for a player through the old API client. Nothing calls it.</span> |
| <Link id="m-registerserverhandlerevent" /><code>{"private void RegisterServerHandlerEvent()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-reportplayerloggedinwithspiritmode" /><code>{"private void ReportPlayerLoggedInWithSpiritMode("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Reports a logged-in-with-spirit-mode event if the player has a current unlock. Not hooked up.</span> |
| <Link id="m-reportplayerloggedoutwithspiritmode" /><code>{"private void ReportPlayerLoggedOutWithSpiritMode("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Reports a logged-out-with-spirit-mode event if the player has a current unlock. Not hooked up.</span> |

</details>
