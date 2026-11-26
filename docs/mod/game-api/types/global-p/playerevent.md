---
title: "PlayerEvent"
description: "Serializable AltaEvent with an IPlayer argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEvent

A **class** in `Root.Township`, the global namespace.

Serializable `AltaEvent` with an `IPlayer` argument. Runs inspector-wired listeners and C# `Invoked` handlers.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`AltaEvent<IPlayer, PlayerUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEvent()"}</code> | <span className="api-desc">Creates a `PlayerEvent` with default values.</span> |

## Used in

Members of other types that take, return or hold a `PlayerEvent`:

<div className="api-used-in">

[`ImpactHitThresholdTrigger.onEffectivelyHitByPlayer`](/mod/game-api/types/alta-items/impacthitthresholdtrigger#m-oneffectivelyhitbyplayer), [`PullAway.onPulled`](/mod/game-api/types/alta-items/pullaway#m-onpulled), [`GetInteractionPlayer.interactionEnded`](/mod/game-api/types/global-e-h/getinteractionplayer#m-interactionended), [`GetInteractionPlayer.interactionStarted`](/mod/game-api/types/global-e-h/getinteractionplayer#m-interactionstarted), [`HandHoverPoint.activated`](/mod/game-api/types/global-e-h/handhoverpoint#m-activated), [`HandHoverPoint.deactivated`](/mod/game-api/types/global-e-h/handhoverpoint#m-deactivated), [`NearbyPlayerTracker.enteredRadius`](/mod/game-api/types/global-m-o/nearbyplayertracker#m-enteredradius), [`NearbyPlayerTracker.leftRadius`](/mod/game-api/types/global-m-o/nearbyplayertracker#m-leftradius), [`NearbyPlayerTracker.stoppedTracking`](/mod/game-api/types/global-m-o/nearbyplayertracker#m-stoppedtracking), [`ServerAchievementEvent.onComplete`](/mod/game-api/types/global-s/serverachievementevent#m-oncomplete).

</div>
