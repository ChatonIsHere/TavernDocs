---
title: "MinMaxValue"
description: "A serializable float range (min and max) for inspector settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MinMaxValue

A **class** in `Root.Township`, the global namespace.

A serializable float range (min and max) for inspector settings.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MinMaxValue()"}</code> | <span className="api-desc">Creates a `MinMaxValue` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private float max"}</code> | <span className="api-desc">Top of the range (default 1).</span> |
| <Link id="m-min" /><code>{"private float min"}</code> | <span className="api-desc">Bottom of the range (default 0).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-randomvalue" /><code>{"float RandomValue { get; }"}</code> | <span className="api-desc">A random value between min and max.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"float GetProgress(float progress)"}</code> | <span className="api-desc">Lerps from min to max by the given progress.</span> |

## Used in

Members of other types that take, return or hold a `MinMaxValue`:

<div className="api-used-in">

[`ControlledRotateAndShake.rotation`](/mod/game-api/types/global-c-d/controlledrotateandshake#m-rotation), [`ControlledRotateAndShake.shake`](/mod/game-api/types/global-c-d/controlledrotateandshake#m-shake), [`ControlledRotateAndShake.shakeDuration`](/mod/game-api/types/global-c-d/controlledrotateandshake#m-shakeduration), [`ControlledRotateAndShake.shakeSpeed`](/mod/game-api/types/global-c-d/controlledrotateandshake#m-shakespeed).

</div>
