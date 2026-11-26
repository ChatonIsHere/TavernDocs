---
title: "IPlayerEvent"
description: "An event bus event caused by a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerEvent

An **interface** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

An event bus event caused by a player.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IEventBusEventData`](/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Derived types** [`ForceCompleteTutorialStepEvent`](/game-api/types/game-other-namespaces/forcecompletetutorialstepevent), [`ItemCraftedEvent`](/game-api/types/game-other-namespaces/itemcraftedevent), [`ItemForgedEvent`](/game-api/types/game-other-namespaces/itemforgedevent), [`PlayerGrabbedPrefabEvent`](/game-api/types/game-other-namespaces/playergrabbedprefabevent), [`PlayerInPositionEvent`](/game-api/types/game-other-namespaces/playerinpositionevent), [`PrefabInPositionEvent`](/game-api/types/game-other-namespaces/prefabinpositionevent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | The player who caused the event. |

## Used in

Members of other types that take, return or hold a `IPlayerEvent`:

[`TownshipEventMicroTutorialExtensions.IsRelevant`](/game-api/types/game-other-namespaces/townshipeventmicrotutorialextensions#m-isrelevant), [`PlayerEventBuffer.eventBuffer`](/game-api/types/game-other-namespaces/playereventbuffer#m-eventbuffer), [`PlayerEventBuffer.OnPlayerEvent`](/game-api/types/game-other-namespaces/playereventbuffer#m-onplayerevent), [`PlayerEventBuffer.passthroughHandler`](/game-api/types/game-other-namespaces/playereventbuffer#m-passthroughhandler), [`PlayerEventBuffer.SwitchToPassthrough`](/game-api/types/game-other-namespaces/playereventbuffer#m-switchtopassthrough), [`ServerStepInstance.OnForceComplete`](/game-api/types/game-other-namespaces/serverstepinstance#m-onforcecomplete), [`ServerStepInstance.ProcessPlayerEvent`](/game-api/types/game-other-namespaces/serverstepinstance#m-processplayerevent), [`ItemCraftedStep.IsCompletedByEvent`](/game-api/types/game-other-namespaces/itemcraftedstep#m-iscompletedbyevent), [`ItemForgedStep.IsCompletedByEvent`](/game-api/types/game-other-namespaces/itemforgedstep#m-iscompletedbyevent), [`MicroTutorialStep.IsCompletedByEvent`](/game-api/types/game-other-namespaces/microtutorialstep#m-iscompletedbyevent), [`PlayerGrabbedPrefab.IsCompletedByEvent`](/game-api/types/game-other-namespaces/playergrabbedprefab#m-iscompletedbyevent), [`PlayerInPositionStep.IsCompletedByEvent`](/game-api/types/game-other-namespaces/playerinpositionstep#m-iscompletedbyevent), [`PrefabInPositionStep.IsCompletedByEvent`](/game-api/types/game-other-namespaces/prefabinpositionstep#m-iscompletedbyevent).
