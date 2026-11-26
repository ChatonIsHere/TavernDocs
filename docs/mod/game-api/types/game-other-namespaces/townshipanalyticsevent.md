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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AnalyticsEvent`](/mod/game-api/types/assembly-other/analyticsevent)
- **Derived types** [`AreaTriggerAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/areatriggeranalyticsevent), [`ChallengeAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/challengeanalyticsevent), [`UserSettingsAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/usersettingsanalyticsevent), [`MicroTutorialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/microtutorialanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TownshipAnalyticsEvent(string name, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player = null)"}</code> | Creates a `TownshipAnalyticsEvent` from `name` and `player`. |
