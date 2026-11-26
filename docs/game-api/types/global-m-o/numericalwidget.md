---
title: "NumericalWidget"
description: "Debug widget that shows a number and builds up and down buttons for each digit, firing events when the value changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NumericalWidget

A **class** in `Root.Township`, no namespace.

Debug widget that shows a number and builds up and down buttons for each digit, firing events when the value changes.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`DebugWidget`](/game-api/types/global-c-d/debugwidget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NumericalWidget()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" buttonPrefab"}</code> | Button prefab used for each digit. |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | The current value. |
| <Link id="m-decimalplaces" /><code>{"private int decimalPlaces"}</code> | Number of digits after the point. |
| <Link id="m-ispercentage" /><code>{"private bool isPercentage"}</code> | If true, events get the value divided by 100. |
| <Link id="m-max" /><code>{"private float max"}</code> | Highest value; also sets how many whole digits get buttons. |
| <Link id="m-min" /><code>{"private float min"}</code> | Lowest value. |
| <Link id="m-minussignal" /><code>{"private Renderer minusSignal"}</code> | Renderer shown when the value is negative. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" onValueChanged"}</code> | Event fired with the new value. |
| <Link id="m-onvaluechangedint" /><code>{"private "}<Link to="/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChangedInt"}</code> | Event fired with the new value cast to an int. |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | Text that shows the value. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"private string Format { get; }"}</code> | Number format with enough digits for `max` and the set decimal places. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getplacesabovezero" /><code>{"private int GetPlacesAboveZero()"}</code> | Number of digits in the whole part of `max`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Shows the value and creates a pair of up and down buttons for each digit. |
| <Link id="m-updatetext" /><code>{"private void UpdateText()"}</code> | Shows the absolute value and turns on the minus sign if negative. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue(float newValue)"}</code> | Clamps and sets a new value, updates the text and fires both events (divided by 100 if a percentage). |

</details>
