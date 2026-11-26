---
title: "NumericalWidget"
description: "Debug widget that shows a number and builds up and down buttons for each digit, firing events when the value changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NumericalWidget

A **class** in `Root.Township`, the global namespace.

Debug widget that shows a number and builds up and down buttons for each digit, firing events when the value changes.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`DebugWidget`](/mod/game-api/types/global-c-d/debugwidget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NumericalWidget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" buttonPrefab"}</code> | <span className="api-desc">Button prefab used for each digit.</span> |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">The current value.</span> |
| <Link id="m-decimalplaces" /><code>{"private int decimalPlaces"}</code> | <span className="api-desc">Number of digits after the point.</span> |
| <Link id="m-ispercentage" /><code>{"private bool isPercentage"}</code> | <span className="api-desc">If true, events get the value divided by 100.</span> |
| <Link id="m-max" /><code>{"private float max"}</code> | <span className="api-desc">Highest value; also sets how many whole digits get buttons.</span> |
| <Link id="m-min" /><code>{"private float min"}</code> | <span className="api-desc">Lowest value.</span> |
| <Link id="m-minussignal" /><code>{"private Renderer minusSignal"}</code> | <span className="api-desc">Renderer shown when the value is negative.</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Event fired with the new value.</span> |
| <Link id="m-onvaluechangedint" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChangedInt"}</code> | <span className="api-desc">Event fired with the new value cast to an int.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">Text that shows the value.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"private string Format { get; }"}</code> | <span className="api-desc">Number format with enough digits for `max` and the set decimal places.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getplacesabovezero" /><code>{"private int GetPlacesAboveZero()"}</code> | <span className="api-desc">Number of digits in the whole part of `max`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Shows the value and creates a pair of up and down buttons for each digit.</span> |
| <Link id="m-updatetext" /><code>{"private void UpdateText()"}</code> | <span className="api-desc">Shows the absolute value and turns on the minus sign if negative.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue(float newValue)"}</code> | <span className="api-desc">Clamps and sets a new value, updates the text and fires both events (divided by 100 if a percentage).</span> |

</details>
