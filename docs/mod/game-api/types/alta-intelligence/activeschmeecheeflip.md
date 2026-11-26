---
title: "ActiveSchmeecheeFlip"
description: "Schmeechee action that flips it back over when upside down: a pop animation, then an impulse and spin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSchmeecheeFlip

A **class** in `Root.Township`, `Alta.Intelligence`.

Schmeechee action that flips it back over when upside down: a pop animation, then an impulse and spin.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Schmeechee, SchmeecheeFlipSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSchmeecheeFlip()"}</code> | <span className="api-desc">Creates an `ActiveSchmeecheeFlip` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> | <span className="api-desc">Time the next step runs.</span> |
| <Link id="m-step" /><code>{"private int step"}</code> | <span className="api-desc">Which step of the flip comes next.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Step 0 cancels if upright or pops; step 1 adds the flip force and torque; then finishes.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Resets the step and waits a random head-flip time.</span> |
