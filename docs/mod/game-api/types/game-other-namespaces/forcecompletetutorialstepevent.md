---
title: "ForceCompleteTutorialStepEvent"
description: "Township event bus event that completes a player's current micro tutorial step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForceCompleteTutorialStepEvent

A **class** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

Township event bus event that completes a player's current micro tutorial step. Broadcast by the `next-step` console command.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/mod/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/mod/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForceCompleteTutorialStepEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" sender)"}</code> | <span className="api-desc">Creates a `ForceCompleteTutorialStepEvent` from `sender`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | <span className="api-desc">The player whose step should complete.</span> |
