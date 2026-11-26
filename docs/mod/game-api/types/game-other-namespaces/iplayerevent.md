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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IEventBusEventData`](/mod/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Derived types** [`ForceCompleteTutorialStepEvent`](/mod/game-api/types/game-other-namespaces/forcecompletetutorialstepevent), [`ItemCraftedEvent`](/mod/game-api/types/game-other-namespaces/itemcraftedevent), [`ItemForgedEvent`](/mod/game-api/types/game-other-namespaces/itemforgedevent), [`PlayerGrabbedPrefabEvent`](/mod/game-api/types/game-other-namespaces/playergrabbedprefabevent), [`PlayerInPositionEvent`](/mod/game-api/types/game-other-namespaces/playerinpositionevent), [`PrefabInPositionEvent`](/mod/game-api/types/game-other-namespaces/prefabinpositionevent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | The player who caused the event. |

## Used in

Members of other types that take, return or hold a `IPlayerEvent`:

[`TownshipEventMicroTutorialExtensions.IsRelevant`](/mod/game-api/types/game-other-namespaces/townshipeventmicrotutorialextensions#m-isrelevant), [`PlayerEventBuffer.eventBuffer`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-eventbuffer), [`PlayerEventBuffer.OnPlayerEvent`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-onplayerevent), [`PlayerEventBuffer.passthroughHandler`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-passthroughhandler), [`PlayerEventBuffer.SwitchToPassthrough`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-switchtopassthrough), [`ServerStepInstance.OnForceComplete`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-onforcecomplete), [`ServerStepInstance.ProcessPlayerEvent`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-processplayerevent), [`ItemCraftedStep.IsCompletedByEvent`](/mod/game-api/types/game-other-namespaces/itemcraftedstep#m-iscompletedbyevent), [`ItemForgedStep.IsCompletedByEvent`](/mod/game-api/types/game-other-namespaces/itemforgedstep#m-iscompletedbyevent), [`MicroTutorialStep.IsCompletedByEvent`](/mod/game-api/types/game-other-namespaces/microtutorialstep#m-iscompletedbyevent), [`PlayerGrabbedPrefab.IsCompletedByEvent`](/mod/game-api/types/game-other-namespaces/playergrabbedprefab#m-iscompletedbyevent), [`PlayerInPositionStep.IsCompletedByEvent`](/mod/game-api/types/game-other-namespaces/playerinpositionstep#m-iscompletedbyevent), [`PrefabInPositionStep.IsCompletedByEvent`](/mod/game-api/types/game-other-namespaces/prefabinpositionstep#m-iscompletedbyevent).
