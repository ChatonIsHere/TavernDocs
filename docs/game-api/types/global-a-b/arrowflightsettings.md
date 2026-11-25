---
title: "ArrowFlightSettings"
description: "class ArrowFlightSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArrowFlightSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-debuggizmosspeed" /><code>{"private float debugGizmosSpeed"}</code> |  |
| <Link id="m-deviancemultiplier" /><code>{"private float devianceMultiplier"}</code> |  |
| <Link id="m-devianceovertime" /><code>{"private AnimationCurve devianceOverTime"}</code> |  |
| <Link id="m-flightduration" /><code>{"private float flightDuration"}</code> |  |
| <Link id="m-flightspeed" /><code>{"private float flightSpeed"}</code> |  |
| <Link id="m-israndomdeviationamount" /><code>{"private bool isRandomDeviationAmount"}</code> |  |
| <Link id="m-numberofiterations" /><code>{"private int numberOfIterations"}</code> |  |
| <Link id="m-simulategravity" /><code>{"private bool simulateGravity"}</code> |  |
| <Link id="m-simulationlength" /><code>{"private float simulationLength"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"internal void DrawGizmos(int randomSeed, Transform arrowTransform, Transform tipTransform)"}</code> |  |
| <Link id="m-getdeviance" /><code>{"private float GetDeviance(IEnumerable<"}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> modifiers)"}</code> |  |
| <Link id="m-getvelocity" /><code>{"internal Vector3 GetVelocity(Vector3 currentVelocity, float flightTime, float flightSpeed, float materialWeightModifier, IEnumerable<"}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> modifiers = null)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ArrowFlightSettings`:

[`Arrow.arrowSettings`](/game-api/types/global-a-b/arrow#m-arrowsettings), [`Arrow.ArrowSettings`](/game-api/types/global-a-b/arrow#m-arrowsettings-2).
