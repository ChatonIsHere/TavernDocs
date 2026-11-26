---
title: "DialSetting"
description: "A grabbable dial that maps its angle to a number between a min and max, shows it on a TextRenderer, and raises ValueChanged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DialSetting

A **class** in `Root.Township`, the global namespace.

A grabbable dial that maps its angle to a number between a min and max, shows it on a `TextRenderer`, and raises `ValueChanged`. Local to whoever turns it; nothing is synced here.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DialSetting()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Transform center"}</code> | <span className="api-desc">Pivot the angle is measured around and where the handle snaps back to.</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Current dial angle in degrees.</span> |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">Backing field for `Value`.</span> |
| <Link id="m-dial" /><code>{"private Transform dial"}</code> | <span className="api-desc">Transform rotated to show the angle.</span> |
| <Link id="m-format" /><code>{"private string format"}</code> | <span className="api-desc">Number format for the text, `F1` by default.</span> |
| <Link id="m-grab" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" grab"}</code> | <span className="api-desc">The pickup the player grabs to turn the dial.</span> |
| <Link id="m-iswholenumbers" /><code>{"private bool isWholeNumbers"}</code> | <span className="api-desc">Whether to round the value to whole numbers.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Angle for `maxValue` (150 by default).</span> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | <span className="api-desc">Value at `maxAngle`.</span> |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | <span className="api-desc">Angle for `minValue` (-150 by default).</span> |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | <span className="api-desc">Value at `minAngle`.</span> |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | <span className="api-desc">Selector position relative to the centre.</span> |
| <Link id="m-range" /><code>{"private float range"}</code> | <span className="api-desc">Total angle range.</span> |
| <Link id="m-selector" /><code>{"private Transform selector"}</code> | <span className="api-desc">Point whose angle around the centre sets the value.</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Text that shows the value.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The late update registration while held.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; }"}</code> | <span className="api-desc">The dial's current value.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-c-d/dialsetting">{"DialSetting"}</Link>{", float, float> ValueChanged"}</code> | <span className="api-desc">Raised with the dial, old value and new value each update while held, even if unchanged.</span> |

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampdial" /><code>{"private void ClampDial()"}</code> | <span className="api-desc">Rotates the dial to the current angle and snaps the grab handle back to the centre.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Recomputes the angle range.</span> |
| <Link id="m-onvaluechanged" /><code>{"private void OnValueChanged(float oldValue, float newValue)"}</code> | <span className="api-desc">Raises `ValueChanged` with old and new values.</span> |
| <Link id="m-resetgrab" /><code>{"private void ResetGrab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, stops updating and puts the handle back at the centre, kinematic.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Works out the angle range from `minAngle` and `maxAngle`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the grab's interaction events and sets up the range.</span> |
| <Link id="m-startupdating" /><code>{"private void StartUpdating("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On grab, starts updating the dial every late update.</span> |
| <Link id="m-updatedial" /><code>{"private void UpdateDial()"}</code> | <span className="api-desc">Updates the value and then the dial.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | <span className="api-desc">Reads the selector's angle around the centre, clamps it, maps it to a value, rounds if needed and updates the text.</span> |

</details>
