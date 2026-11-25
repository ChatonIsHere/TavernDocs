---
title: "TownshipAnalyticsEvent"
description: "Base for the game's analytics events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TownshipAnalyticsEvent

A **class** in `Root.Township`, `ATT.Analytics`.

Base for the game's analytics events. Adds the player's ID if given and server info to every event.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent)
- **Derived types** [`AreaTriggerAnalyticsEvent`](/game-api/types/game-other-namespaces/areatriggeranalyticsevent), [`ChallengeAnalyticsEvent`](/game-api/types/game-other-namespaces/challengeanalyticsevent), [`UserSettingsAnalyticsEvent`](/game-api/types/game-other-namespaces/usersettingsanalyticsevent), [`MicroTutorialAnalyticsEvent`](/game-api/types/game-other-namespaces/microtutorialanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TownshipAnalyticsEvent(string name, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player = null)"}</code> |  |
