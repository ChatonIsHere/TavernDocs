---
title: "ClimbingHandlerAnalytics"
description: "Editor-only climbing telemetry: records jump-off speeds and stamina used per climb for the local player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHandlerAnalytics

A **class** in `Root.Township`, `Features.Climbing`.

Editor-only climbing telemetry: records jump-off speeds and stamina used per climb for the local player. Sending to the API is stubbed out; Ctrl+U writes the records to CSV files in the data folder.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested types** [`StaminaTracker`](/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingHandlerAnalytics()"}</code> | Creates a `ClimbingHandlerAnalytics` with default values. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | The injected analytics service. Not used in this build. |
| <Link id="m-climbingendtimer" /><code>{"private float climbingEndTimer"}</code> | Real time at which the grace period after letting go runs out, or 0. |
| <Link id="m-climbingmovementtrack" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" climbingMovementTrack"}</code> | Handle of the registered per-frame tracking method while a climb is recorded. |
| <Link id="m-graceperiodforcontinuingclimbing" /><code>{"private const float gracePeriodForContinuingClimbing"}</code> | 0.5 seconds of not climbing before a climb record is finished. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> | The local player's climbing handler being tracked. |
| <Link id="m-jumpvelocityrecords" /><code>{"private List<float> jumpVelocityRecords"}</code> | Recorded jump-off speeds. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Locomotion position on the last tick. |
| <Link id="m-minimumrecordstosendtoapi" /><code>{"private const int minimumRecordsToSendToAPI"}</code> | 10, the record count meant to trigger a send. |
| <Link id="m-minimumvelocitytorecordsquared" /><code>{"private const float minimumVelocityToRecordSquared"}</code> | Squared speed below which a let-go is not recorded as a jump. |
| <Link id="m-staminatrackerlefthand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker">{"ClimbingHandlerAnalytics.StaminaTracker"}</Link>{" staminaTrackerLeftHand"}</code> | Tracks stamina used by the left hand this climb. |
| <Link id="m-staminatrackerrighthand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker">{"ClimbingHandlerAnalytics.StaminaTracker"}</Link>{" staminaTrackerRightHand"}</code> | Tracks stamina used by the right hand this climb. |
| <Link id="m-staminausagerecords" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/staminausagerecord">{"StaminaUsageRecord"}</Link>{"> staminaUsageRecords"}</code> | Recorded climbs with distance and stamina used. |
| <Link id="m-travelleddistance" /><code>{"private float travelledDistance"}</code> | Distance climbed. Never reset between climbs in this code. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service from VContainer. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforcurrentplayer" /><code>{"private async void CheckForCurrentPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" currentPlayer)"}</code> | When the current player changes to a `PlayerCharacter` with a `Climber`, sets up tracking on its climbing handler. |
| <Link id="m-checkgraceperiodforfinishclimbing" /><code>{"private bool CheckGracePeriodForFinishClimbing()"}</code> | Returns true until 0.5 seconds after climbing stops, so short let-gos do not end the climb record. |
| <Link id="m-finishclimbingtrack" /><code>{"private void FinishClimbingTrack()"}</code> | Stops tracking and stores the climb's distance and per-hand stamina used. |
| <Link id="m-handstartedclimbing" /><code>{"private void HandStartedClimbing()"}</code> | Starts per-climb tracking of stamina and position when the first hand grabs. |
| <Link id="m-handstoppedclimbing" /><code>{"private void HandStoppedClimbing()"}</code> | When both hands have let go, records the jump-off speed if it is above the minimum. |
| <Link id="m-printlocal" /><code>{"private void PrintLocal(Key key)"}</code> | On Ctrl+U, writes the jump and stamina records to two CSV files in `Application.dataPath`. |
| <Link id="m-sendanalyticseventiffull" /><code>{"private void SendAnalyticsEventIfFull()"}</code> | Meant to send once there are 10 records; its body is empty in this build. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler)"}</code> | Hooks both hands' climbing start and stop events and registers the Ctrl+U dump key. |
| <Link id="m-tickpositiontracking" /><code>{"private void TickPositionTracking()"}</code> | Adds the distance moved since last frame to `travelledDistance`. |
| <Link id="m-trackclimbingmovement" /><code>{"private void TrackClimbingMovement()"}</code> | Per-frame update during a climb: ticks stamina and distance, or ends the record after the grace period. |

</details>
