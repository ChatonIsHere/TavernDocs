---
title: "DialSetting"
description: "A grabbable dial that maps its angle to a number between a min and max, shows it on a TextRenderer, and raises ValueChanged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DialSetting

A **class** in `Root.Township`, no namespace.

A grabbable dial that maps its angle to a number between a min and max, shows it on a `TextRenderer`, and raises `ValueChanged`. Local to whoever turns it; nothing is synced here.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DialSetting()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Transform center"}</code> | Pivot the angle is measured around and where the handle snaps back to. |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Current dial angle in degrees. |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | Backing field for `Value`. |
| <Link id="m-dial" /><code>{"private Transform dial"}</code> | Transform rotated to show the angle. |
| <Link id="m-format" /><code>{"private string format"}</code> | Number format for the text, `F1` by default. |
| <Link id="m-grab" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" grab"}</code> | The pickup the player grabs to turn the dial. |
| <Link id="m-iswholenumbers" /><code>{"private bool isWholeNumbers"}</code> | Whether to round the value to whole numbers. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Angle for `maxValue` (150 by default). |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | Value at `maxAngle`. |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | Angle for `minValue` (-150 by default). |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | Value at `minAngle`. |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | Selector position relative to the centre. |
| <Link id="m-range" /><code>{"private float range"}</code> | Total angle range. |
| <Link id="m-selector" /><code>{"private Transform selector"}</code> | Point whose angle around the centre sets the value. |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Text that shows the value. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The late update registration while held. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; }"}</code> | The dial's current value. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/dialsetting">{"DialSetting"}</Link>{", float, float> ValueChanged"}</code> | Raised with the dial, old value and new value each update while held, even if unchanged. |

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampdial" /><code>{"private void ClampDial()"}</code> | Rotates the dial to the current angle and snaps the grab handle back to the centre. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Recomputes the angle range. |
| <Link id="m-onvaluechanged" /><code>{"private void OnValueChanged(float oldValue, float newValue)"}</code> | Raises `ValueChanged` with old and new values. |
| <Link id="m-resetgrab" /><code>{"private void ResetGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On release, stops updating and puts the handle back at the centre, kinematic. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Works out the angle range from `minAngle` and `maxAngle`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the grab's interaction events and sets up the range. |
| <Link id="m-startupdating" /><code>{"private void StartUpdating("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On grab, starts updating the dial every late update. |
| <Link id="m-updatedial" /><code>{"private void UpdateDial()"}</code> | Updates the value and then the dial. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | Reads the selector's angle around the centre, clamps it, maps it to a value, rounds if needed and updates the text. |

</details>
