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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested types** [`StaminaTracker`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingHandlerAnalytics()"}</code> | <span className="api-desc">Creates a `ClimbingHandlerAnalytics` with default values.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">The injected analytics service. Not used in this build.</span> |
| <Link id="m-climbingendtimer" /><code>{"private float climbingEndTimer"}</code> | <span className="api-desc">Real time at which the grace period after letting go runs out, or 0.</span> |
| <Link id="m-climbingmovementtrack" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" climbingMovementTrack"}</code> | <span className="api-desc">Handle of the registered per-frame tracking method while a climb is recorded.</span> |
| <Link id="m-graceperiodforcontinuingclimbing" /><code>{"private const float gracePeriodForContinuingClimbing"}</code> | <span className="api-desc">0.5 seconds of not climbing before a climb record is finished.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> | <span className="api-desc">The local player's climbing handler being tracked.</span> |
| <Link id="m-jumpvelocityrecords" /><code>{"private List<float> jumpVelocityRecords"}</code> | <span className="api-desc">Recorded jump-off speeds.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Locomotion position on the last tick.</span> |
| <Link id="m-minimumrecordstosendtoapi" /><code>{"private const int minimumRecordsToSendToAPI"}</code> | <span className="api-desc">10, the record count meant to trigger a send.</span> |
| <Link id="m-minimumvelocitytorecordsquared" /><code>{"private const float minimumVelocityToRecordSquared"}</code> | <span className="api-desc">Squared speed below which a let-go is not recorded as a jump.</span> |
| <Link id="m-staminatrackerlefthand" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker">{"ClimbingHandlerAnalytics.StaminaTracker"}</Link>{" staminaTrackerLeftHand"}</code> | <span className="api-desc">Tracks stamina used by the left hand this climb.</span> |
| <Link id="m-staminatrackerrighthand" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandleranalytics-staminatracker">{"ClimbingHandlerAnalytics.StaminaTracker"}</Link>{" staminaTrackerRightHand"}</code> | <span className="api-desc">Tracks stamina used by the right hand this climb.</span> |
| <Link id="m-staminausagerecords" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/staminausagerecord">{"StaminaUsageRecord"}</Link>{"> staminaUsageRecords"}</code> | <span className="api-desc">Recorded climbs with distance and stamina used.</span> |
| <Link id="m-travelleddistance" /><code>{"private float travelledDistance"}</code> | <span className="api-desc">Distance climbed. Never reset between climbs in this code.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Receives the analytics service from VContainer.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforcurrentplayer" /><code>{"private async void CheckForCurrentPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" currentPlayer)"}</code> | <span className="api-desc">When the current player changes to a `PlayerCharacter` with a `Climber`, sets up tracking on its climbing handler.</span> |
| <Link id="m-checkgraceperiodforfinishclimbing" /><code>{"private bool CheckGracePeriodForFinishClimbing()"}</code> | <span className="api-desc">Returns true until 0.5 seconds after climbing stops, so short let-gos do not end the climb record.</span> |
| <Link id="m-finishclimbingtrack" /><code>{"private void FinishClimbingTrack()"}</code> | <span className="api-desc">Stops tracking and stores the climb's distance and per-hand stamina used.</span> |
| <Link id="m-handstartedclimbing" /><code>{"private void HandStartedClimbing()"}</code> | <span className="api-desc">Starts per-climb tracking of stamina and position when the first hand grabs.</span> |
| <Link id="m-handstoppedclimbing" /><code>{"private void HandStoppedClimbing()"}</code> | <span className="api-desc">When both hands have let go, records the jump-off speed if it is above the minimum.</span> |
| <Link id="m-printlocal" /><code>{"private void PrintLocal(Key key)"}</code> | <span className="api-desc">On Ctrl+U, writes the jump and stamina records to two CSV files in `Application.dataPath`.</span> |
| <Link id="m-sendanalyticseventiffull" /><code>{"private void SendAnalyticsEventIfFull()"}</code> | <span className="api-desc">Meant to send once there are 10 records; its body is empty in this build.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Hooks both hands' climbing start and stop events and registers the Ctrl+U dump key.</span> |
| <Link id="m-tickpositiontracking" /><code>{"private void TickPositionTracking()"}</code> | <span className="api-desc">Adds the distance moved since last frame to `travelledDistance`.</span> |
| <Link id="m-trackclimbingmovement" /><code>{"private void TrackClimbingMovement()"}</code> | <span className="api-desc">Per-frame update during a climb: ticks stamina and distance, or ends the record after the grace period.</span> |

</details>
