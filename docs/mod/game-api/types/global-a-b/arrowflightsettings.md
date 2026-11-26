---
title: "ArrowFlightSettings"
description: "ScriptableObject for how arrows wobble in flight: a deviance curve over time, scaled by speed, arrow weight and flight modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettings

A **class** in `Root.Township`, the global namespace.

ScriptableObject for how arrows wobble in flight: a deviance curve over time, scaled by speed, arrow weight and flight modifiers. Also draws a debug flight path.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArrowFlightSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debuggizmosspeed" /><code>{"private float debugGizmosSpeed"}</code> | <span className="api-desc">Arrow speed used for the debug path.</span> |
| <Link id="m-deviancemultiplier" /><code>{"private float devianceMultiplier"}</code> | <span className="api-desc">Base multiplier for deviance.</span> |
| <Link id="m-devianceovertime" /><code>{"private AnimationCurve devianceOverTime"}</code> | <span className="api-desc">Deviance in degrees over normalized flight time.</span> |
| <Link id="m-flightduration" /><code>{"private float flightDuration"}</code> | <span className="api-desc">Flight time the curve is normalized against, at the reference speed.</span> |
| <Link id="m-flightspeed" /><code>{"private float flightSpeed"}</code> | <span className="api-desc">Reference speed. Faster arrows move through the curve faster.</span> |
| <Link id="m-israndomdeviationamount" /><code>{"private bool isRandomDeviationAmount"}</code> | <span className="api-desc">When true, each step deviates by a random fraction of the curve value.</span> |
| <Link id="m-numberofiterations" /><code>{"private int numberOfIterations"}</code> | <span className="api-desc">Physics steps simulated for the debug path.</span> |
| <Link id="m-simulategravity" /><code>{"private bool simulateGravity"}</code> | <span className="api-desc">Whether the debug path adds gravity.</span> |
| <Link id="m-simulationlength" /><code>{"private float simulationLength"}</code> | <span className="api-desc">Read-only display of how many seconds the debug path covers.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"internal void DrawGizmos(int randomSeed, Transform arrowTransform, Transform tipTransform)"}</code> | <span className="api-desc">Editor: draws a simulated flight path from the arrow tip for the given seed.</span> |
| <Link id="m-getdeviance" /><code>{"private float GetDeviance(IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> modifiers)"}</code> | <span className="api-desc">`devianceMultiplier` times the deviance multiplier of every flight modifier.</span> |
| <Link id="m-getvelocity" /><code>{"internal Vector3 GetVelocity(Vector3 currentVelocity, float flightTime, float flightSpeed, float materialWeightModifier, IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> modifiers = null)"}</code> | <span className="api-desc">Returns the next velocity: the current direction turned toward a random rotation by the curve's deviance, at the given speed.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Updates `simulationLength` from the iteration count.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ArrowFlightSettings`:

<div className="api-used-in">

[`Arrow.arrowSettings`](/mod/game-api/types/global-a-b/arrow#m-arrowsettings), [`Arrow.ArrowSettings`](/mod/game-api/types/global-a-b/arrow#m-arrowsettings-2).

</div>
