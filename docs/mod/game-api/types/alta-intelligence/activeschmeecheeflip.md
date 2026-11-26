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
| <Link id="m-ctor" /><code>{"ActiveSchmeecheeFlip()"}</code> | Creates an `ActiveSchmeecheeFlip` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> | Time the next step runs. |
| <Link id="m-step" /><code>{"private int step"}</code> | Which step of the flip comes next. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Step 0 cancels if upright or pops; step 1 adds the flip force and torque; then finishes. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Resets the step and waits a random head-flip time. |
