---
title: "QuestMarker"
description: "class QuestMarker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestMarker

A **class** in `Root.Township`, `Features.Gameplay.Progression.QuestMarkers`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuestMarker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distanceheightcurvesquared" /><code>{"private AnimationCurve distanceHeightCurveSquared"}</code> |  |
| <Link id="m-distancescalingcurvesquared" /><code>{"private AnimationCurve distanceScalingCurveSquared"}</code> |  |
| <Link id="m-distancesqr" /><code>{"private float distanceSqr"}</code> |  |
| <Link id="m-height" /><code>{"private float height"}</code> |  |
| <Link id="m-heighttarget" /><code>{"private float heightTarget"}</code> |  |
| <Link id="m-interpolationspeed" /><code>{"private float interpolationSpeed"}</code> |  |
| <Link id="m-lookdirection" /><code>{"private Vector3 lookDirection"}</code> |  |
| <Link id="m-markerlocalposition" /><code>{"private Vector3 markerLocalPosition"}</code> |  |
| <Link id="m-markerposition" /><code>{"private Vector3 markerPosition"}</code> |  |
| <Link id="m-markertransform" /><code>{"private Transform markerTransform"}</code> |  |
| <Link id="m-ratelimiter" /><code>{"private "}<Link to="/game-api/types/assembly-other/ratelimiter">{"RateLimiter"}</Link>{" rateLimiter"}</code> |  |
| <Link id="m-scale" /><code>{"private float scale"}</code> |  |
| <Link id="m-scaletarget" /><code>{"private float scaleTarget"}</code> |  |
| <Link id="m-targettickspersecond" /><code>{"private int targetTicksPerSecond"}</code> |  |
| <Link id="m-visibilityconditions" /><code>{"private Object[] visibilityConditions"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemarker" /><code>{"void UpdateMarker(Vector3 newPlayerHeadPosition)"}</code> |  |
| <Link id="m-allconditionsmet" /><code>{"private void AllConditionsMet(bool areAllConditionsMet)"}</code> |  |
| <Link id="m-areallconditionsmet" /><code>{"private bool AreAllConditionsMet()"}</code> |  |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged()"}</code> |  |
| <Link id="m-listenforconditionchanges" /><code>{"private void ListenForConditionChanges()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-stoplisteningforcompletionchanges" /><code>{"private void StopListeningForCompletionChanges()"}</code> |  |
| <Link id="m-updatelookposition" /><code>{"private void UpdateLookPosition(Vector3 newPlayerHeadPosition)"}</code> |  |
| <Link id="m-updatemarkerheight" /><code>{"private void UpdateMarkerHeight()"}</code> |  |
| <Link id="m-updatemarkerscale" /><code>{"private void UpdateMarkerScale()"}</code> |  |
| <Link id="m-updatemarkeryrotationtolookatplayer" /><code>{"private void UpdateMarkerYRotationToLookAtPlayer()"}</code> |  |

## Used in

Members of other types that take, return or hold a `QuestMarker`:

[`QuestMarkerDataUpdater.activeMarkers`](/game-api/types/global-q-r/questmarkerdataupdater#m-activemarkers), [`QuestMarkerDataUpdater.AddMarker`](/game-api/types/global-q-r/questmarkerdataupdater#m-addmarker), [`QuestMarkerDataUpdater.RemoveMarker`](/game-api/types/global-q-r/questmarkerdataupdater#m-removemarker).
