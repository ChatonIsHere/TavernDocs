---
title: "MovementHeatPoint"
description: "A HeatPoint whose cooling to ambient depends on how hard it is shaken, using a HandShakeOffDetector score."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovementHeatPoint

A **class** in `Root.Township`, `Alta.Heat`.

A `HeatPoint` whose cooling to ambient depends on how hard it is shaken, using a `HandShakeOffDetector` score.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovementHeatPoint()"}</code> | Creates a `MovementHeatPoint` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-followtoconductivity" /><code>{"private AnimationCurve followToConductivity"}</code> | Maps shake score to how strongly the point conducts to ambient. |
| <Link id="m-shakeoff" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" shakeOff"}</code> | The detector that scores how hard the hand is shaking. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conducttoambient" /><code>{"override void ConductToAmbient(float weight = 1)"}</code> | Conducts to ambient with weight scaled by `followToConductivity` of the shake score. |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | Releases the shake detector. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Requests the shake detector. |

</details>
