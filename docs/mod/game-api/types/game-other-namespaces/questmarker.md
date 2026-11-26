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
| <Link id="m-ctor" /><code>{"QuestMarker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distanceheightcurvesquared" /><code>{"private AnimationCurve distanceHeightCurveSquared"}</code> | <span className="api-desc">Curve from squared flat distance to marker height.</span> |
| <Link id="m-distancescalingcurvesquared" /><code>{"private AnimationCurve distanceScalingCurveSquared"}</code> | <span className="api-desc">Curve from squared flat distance to marker scale.</span> |
| <Link id="m-distancesqr" /><code>{"private float distanceSqr"}</code> | <span className="api-desc">Last squared flat distance to the player.</span> |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Current eased height.</span> |
| <Link id="m-heighttarget" /><code>{"private float heightTarget"}</code> | <span className="api-desc">Height the marker eases toward.</span> |
| <Link id="m-interpolationspeed" /><code>{"private float interpolationSpeed"}</code> | <span className="api-desc">How fast scale and height ease toward their targets.</span> |
| <Link id="m-lookdirection" /><code>{"private Vector3 lookDirection"}</code> | <span className="api-desc">Flat direction from the marker to the player's head.</span> |
| <Link id="m-markerlocalposition" /><code>{"private Vector3 markerLocalPosition"}</code> | <span className="api-desc">Cached local position of the marker transform.</span> |
| <Link id="m-markerposition" /><code>{"private Vector3 markerPosition"}</code> | <span className="api-desc">Cached world position of the marker transform.</span> |
| <Link id="m-markertransform" /><code>{"private Transform markerTransform"}</code> | <span className="api-desc">The marker object that is shown, scaled and raised.</span> |
| <Link id="m-ratelimiter" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ratelimiter">{"RateLimiter"}</Link>{" rateLimiter"}</code> | <span className="api-desc">Limits how often target scale and height are recalculated.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Current eased scale.</span> |
| <Link id="m-scaletarget" /><code>{"private float scaleTarget"}</code> | <span className="api-desc">Scale the marker eases toward.</span> |
| <Link id="m-targettickspersecond" /><code>{"private int targetTicksPerSecond"}</code> | <span className="api-desc">Target recalculations per second (0 for unlimited).</span> |
| <Link id="m-visibilityconditions" /><code>{"private Object[] visibilityConditions"}</code> | <span className="api-desc">`IGameCondition` objects that must all be met for the marker to show.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemarker" /><code>{"void UpdateMarker(Vector3 newPlayerHeadPosition)"}</code> | <span className="api-desc">Called with the player's head position: recalculates targets when not rate limited, then eases scale and height and turns to face the player.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allconditionsmet" /><code>{"private void AllConditionsMet(bool areAllConditionsMet)"}</code> | <span className="api-desc">Shows or hides the marker object.</span> |
| <Link id="m-areallconditionsmet" /><code>{"private bool AreAllConditionsMet()"}</code> | <span className="api-desc">True if every visibility condition is met.</span> |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged()"}</code> | <span className="api-desc">Rechecks the conditions when one changes.</span> |
| <Link id="m-listenforconditionchanges" /><code>{"private void ListenForConditionChanges()"}</code> | <span className="api-desc">Subscribes to every condition's change callback.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unregisters from `QuestMarkerDataUpdater` and stops listening to conditions.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the height range and the near and far distance spheres.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Client: registers with `QuestMarkerDataUpdater`, listens to conditions and sets initial visibility. Skipped on a headless server.</span> |
| <Link id="m-stoplisteningforcompletionchanges" /><code>{"private void StopListeningForCompletionChanges()"}</code> | <span className="api-desc">Unsubscribes from every condition's change callback.</span> |
| <Link id="m-updatelookposition" /><code>{"private void UpdateLookPosition(Vector3 newPlayerHeadPosition)"}</code> | <span className="api-desc">Sets the flat direction from the marker to the player's head.</span> |
| <Link id="m-updatemarkerheight" /><code>{"private void UpdateMarkerHeight()"}</code> | <span className="api-desc">Eases the marker's local height toward the target.</span> |
| <Link id="m-updatemarkerscale" /><code>{"private void UpdateMarkerScale()"}</code> | <span className="api-desc">Eases the marker's scale toward the target.</span> |
| <Link id="m-updatemarkeryrotationtolookatplayer" /><code>{"private void UpdateMarkerYRotationToLookAtPlayer()"}</code> | <span className="api-desc">Turns this object on the Y axis to face the player.</span> |

</details>

## Used in

Members of other types that take, return or hold a `QuestMarker`:

<div className="api-used-in">

[`QuestMarkerDataUpdater.activeMarkers`](/mod/game-api/types/global-q-r/questmarkerdataupdater#m-activemarkers), [`QuestMarkerDataUpdater.AddMarker`](/mod/game-api/types/global-q-r/questmarkerdataupdater#m-addmarker), [`QuestMarkerDataUpdater.RemoveMarker`](/mod/game-api/types/global-q-r/questmarkerdataupdater#m-removemarker).

</div>
