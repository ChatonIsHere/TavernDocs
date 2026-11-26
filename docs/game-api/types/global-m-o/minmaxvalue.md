---
title: "MinMaxValue"
description: "A serializable float range (min and max) for inspector settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MinMaxValue

A **class** in `Root.Township`, no namespace.

A serializable float range (min and max) for inspector settings.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MinMaxValue()"}</code> | Creates a `MinMaxValue` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private float max"}</code> | Top of the range (default 1). |
| <Link id="m-min" /><code>{"private float min"}</code> | Bottom of the range (default 0). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-randomvalue" /><code>{"float RandomValue { get; }"}</code> | A random value between min and max. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"float GetProgress(float progress)"}</code> | Lerps from min to max by the given progress. |

## Used in

Members of other types that take, return or hold a `MinMaxValue`:

[`ControlledRotateAndShake.rotation`](/game-api/types/global-c-d/controlledrotateandshake#m-rotation), [`ControlledRotateAndShake.shake`](/game-api/types/global-c-d/controlledrotateandshake#m-shake), [`ControlledRotateAndShake.shakeDuration`](/game-api/types/global-c-d/controlledrotateandshake#m-shakeduration), [`ControlledRotateAndShake.shakeSpeed`](/game-api/types/global-c-d/controlledrotateandshake#m-shakespeed).
