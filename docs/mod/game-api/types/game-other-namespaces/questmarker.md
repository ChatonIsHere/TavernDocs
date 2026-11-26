---
title: "QuestMarker"
description: "A floating quest marker that shows while all its game conditions are met and scales, rises and turns to face the player by distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestMarker

A **class** in `Root.Township`, `Features.Gameplay.Progression.QuestMarkers`.

A floating quest marker that shows while all its game conditions are met and scales, rises and turns to face the player by distance. Client only; updated by `QuestMarkerDataUpdater`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuestMarker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distanceheightcurvesquared" /><code>{"private AnimationCurve distanceHeightCurveSquared"}</code> | Curve from squared flat distance to marker height. |
| <Link id="m-distancescalingcurvesquared" /><code>{"private AnimationCurve distanceScalingCurveSquared"}</code> | Curve from squared flat distance to marker scale. |
| <Link id="m-distancesqr" /><code>{"private float distanceSqr"}</code> | Last squared flat distance to the player. |
| <Link id="m-height" /><code>{"private float height"}</code> | Current eased height. |
| <Link id="m-heighttarget" /><code>{"private float heightTarget"}</code> | Height the marker eases toward. |
| <Link id="m-interpolationspeed" /><code>{"private float interpolationSpeed"}</code> | How fast scale and height ease toward their targets. |
| <Link id="m-lookdirection" /><code>{"private Vector3 lookDirection"}</code> | Flat direction from the marker to the player's head. |
| <Link id="m-markerlocalposition" /><code>{"private Vector3 markerLocalPosition"}</code> | Cached local position of the marker transform. |
| <Link id="m-markerposition" /><code>{"private Vector3 markerPosition"}</code> | Cached world position of the marker transform. |
| <Link id="m-markertransform" /><code>{"private Transform markerTransform"}</code> | The marker object that is shown, scaled and raised. |
| <Link id="m-ratelimiter" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ratelimiter">{"RateLimiter"}</Link>{" rateLimiter"}</code> | Limits how often target scale and height are recalculated. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Current eased scale. |
| <Link id="m-scaletarget" /><code>{"private float scaleTarget"}</code> | Scale the marker eases toward. |
| <Link id="m-targettickspersecond" /><code>{"private int targetTicksPerSecond"}</code> | Target recalculations per second (0 for unlimited). |
| <Link id="m-visibilityconditions" /><code>{"private Object[] visibilityConditions"}</code> | `IGameCondition` objects that must all be met for the marker to show. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemarker" /><code>{"void UpdateMarker(Vector3 newPlayerHeadPosition)"}</code> | Called with the player's head position: recalculates targets when not rate limited, then eases scale and height and turns to face the player. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allconditionsmet" /><code>{"private void AllConditionsMet(bool areAllConditionsMet)"}</code> | Shows or hides the marker object. |
| <Link id="m-areallconditionsmet" /><code>{"private bool AreAllConditionsMet()"}</code> | True if every visibility condition is met. |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged()"}</code> | Rechecks the conditions when one changes. |
| <Link id="m-listenforconditionchanges" /><code>{"private void ListenForConditionChanges()"}</code> | Subscribes to every condition's change callback. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unregisters from `QuestMarkerDataUpdater` and stops listening to conditions. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the height range and the near and far distance spheres. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: registers with `QuestMarkerDataUpdater`, listens to conditions and sets initial visibility. Skipped on a headless server. |
| <Link id="m-stoplisteningforcompletionchanges" /><code>{"private void StopListeningForCompletionChanges()"}</code> | Unsubscribes from every condition's change callback. |
| <Link id="m-updatelookposition" /><code>{"private void UpdateLookPosition(Vector3 newPlayerHeadPosition)"}</code> | Sets the flat direction from the marker to the player's head. |
| <Link id="m-updatemarkerheight" /><code>{"private void UpdateMarkerHeight()"}</code> | Eases the marker's local height toward the target. |
| <Link id="m-updatemarkerscale" /><code>{"private void UpdateMarkerScale()"}</code> | Eases the marker's scale toward the target. |
| <Link id="m-updatemarkeryrotationtolookatplayer" /><code>{"private void UpdateMarkerYRotationToLookAtPlayer()"}</code> | Turns this object on the Y axis to face the player. |

</details>

## Used in

Members of other types that take, return or hold a `QuestMarker`:

[`QuestMarkerDataUpdater.activeMarkers`](/mod/game-api/types/global-q-r/questmarkerdataupdater#m-activemarkers), [`QuestMarkerDataUpdater.AddMarker`](/mod/game-api/types/global-q-r/questmarkerdataupdater#m-addmarker), [`QuestMarkerDataUpdater.RemoveMarker`](/mod/game-api/types/global-q-r/questmarkerdataupdater#m-removemarker).
