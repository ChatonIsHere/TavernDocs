---
title: "ArrowFlightSettings"
description: "ScriptableObject for how arrows wobble in flight: a deviance curve over time, scaled by speed, arrow weight and flight modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettings

A **class** in `Root.Township`, no namespace.

ScriptableObject for how arrows wobble in flight: a deviance curve over time, scaled by speed, arrow weight and flight modifiers. Also draws a debug flight path.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArrowFlightSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debuggizmosspeed" /><code>{"private float debugGizmosSpeed"}</code> | Arrow speed used for the debug path. |
| <Link id="m-deviancemultiplier" /><code>{"private float devianceMultiplier"}</code> | Base multiplier for deviance. |
| <Link id="m-devianceovertime" /><code>{"private AnimationCurve devianceOverTime"}</code> | Deviance in degrees over normalized flight time. |
| <Link id="m-flightduration" /><code>{"private float flightDuration"}</code> | Flight time the curve is normalized against, at the reference speed. |
| <Link id="m-flightspeed" /><code>{"private float flightSpeed"}</code> | Reference speed. Faster arrows move through the curve faster. |
| <Link id="m-israndomdeviationamount" /><code>{"private bool isRandomDeviationAmount"}</code> | When true, each step deviates by a random fraction of the curve value. |
| <Link id="m-numberofiterations" /><code>{"private int numberOfIterations"}</code> | Physics steps simulated for the debug path. |
| <Link id="m-simulategravity" /><code>{"private bool simulateGravity"}</code> | Whether the debug path adds gravity. |
| <Link id="m-simulationlength" /><code>{"private float simulationLength"}</code> | Read-only display of how many seconds the debug path covers. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"internal void DrawGizmos(int randomSeed, Transform arrowTransform, Transform tipTransform)"}</code> | Editor: draws a simulated flight path from the arrow tip for the given seed. |
| <Link id="m-getdeviance" /><code>{"private float GetDeviance(IEnumerable<"}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> modifiers)"}</code> | `devianceMultiplier` times the deviance multiplier of every flight modifier. |
| <Link id="m-getvelocity" /><code>{"internal Vector3 GetVelocity(Vector3 currentVelocity, float flightTime, float flightSpeed, float materialWeightModifier, IEnumerable<"}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> modifiers = null)"}</code> | Returns the next velocity: the current direction turned toward a random rotation by the curve's deviance, at the given speed. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Updates `simulationLength` from the iteration count. |

</details>

## Used in

Members of other types that take, return or hold a `ArrowFlightSettings`:

[`Arrow.arrowSettings`](/game-api/types/global-a-b/arrow#m-arrowsettings), [`Arrow.ArrowSettings`](/game-api/types/global-a-b/arrow#m-arrowsettings-2).
