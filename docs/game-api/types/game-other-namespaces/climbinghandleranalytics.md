---
title: "ClimbingHandlerAnalytics"
description: "class ClimbingHandlerAnalytics in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHandlerAnalytics

A **class** in `Root.Township`, `Features.Climbing`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested types** [`StaminaTracker`](/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingHandlerAnalytics()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-climbingendtimer" /><code>{"private float climbingEndTimer"}</code> |
| <Link id="m-climbingmovementtrack" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" climbingMovementTrack"}</code> |
| <Link id="m-graceperiodforcontinuingclimbing" /><code>{"private const float gracePeriodForContinuingClimbing"}</code> |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> |
| <Link id="m-jumpvelocityrecords" /><code>{"private List<float> jumpVelocityRecords"}</code> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |
| <Link id="m-minimumrecordstosendtoapi" /><code>{"private const int minimumRecordsToSendToAPI"}</code> |
| <Link id="m-minimumvelocitytorecordsquared" /><code>{"private const float minimumVelocityToRecordSquared"}</code> |
| <Link id="m-staminatrackerlefthand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker">{"ClimbingHandlerAnalytics.StaminaTracker"}</Link>{" staminaTrackerLeftHand"}</code> |
| <Link id="m-staminatrackerrighthand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker">{"ClimbingHandlerAnalytics.StaminaTracker"}</Link>{" staminaTrackerRightHand"}</code> |
| <Link id="m-staminausagerecords" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/staminausagerecord">{"StaminaUsageRecord"}</Link>{"> staminaUsageRecords"}</code> |
| <Link id="m-travelleddistance" /><code>{"private float travelledDistance"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforcurrentplayer" /><code>{"private async void CheckForCurrentPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" currentPlayer)"}</code> |
| <Link id="m-checkgraceperiodforfinishclimbing" /><code>{"private bool CheckGracePeriodForFinishClimbing()"}</code> |
| <Link id="m-finishclimbingtrack" /><code>{"private void FinishClimbingTrack()"}</code> |
| <Link id="m-handstartedclimbing" /><code>{"private void HandStartedClimbing()"}</code> |
| <Link id="m-handstoppedclimbing" /><code>{"private void HandStoppedClimbing()"}</code> |
| <Link id="m-printlocal" /><code>{"private void PrintLocal(Key key)"}</code> |
| <Link id="m-sendanalyticseventiffull" /><code>{"private void SendAnalyticsEventIfFull()"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler)"}</code> |
| <Link id="m-tickpositiontracking" /><code>{"private void TickPositionTracking()"}</code> |
| <Link id="m-trackclimbingmovement" /><code>{"private void TrackClimbingMovement()"}</code> |

</details>
