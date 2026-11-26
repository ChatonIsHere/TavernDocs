---
title: "CoinPress"
description: "A lever press that turns input items into coins."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoinPress

A **class** in `Root.Township`, no namespace.

A lever press that turns input items into coins. When the lever is pulled down fully, the server takes items from the input dock and adds output to the output dock.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CoinPress()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmaxthreshold" /><code>{"private float addMaxThreshold"}</code> | Lever value under which items can be added to the input dock. |
| <Link id="m-downheight" /><code>{"private float downHeight"}</code> | Local height of the press when fully down. |
| <Link id="m-inputdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock"}</code> | Dock that takes the item to be pressed. |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | The lever that drives the press. |
| <Link id="m-output" /><code>{"private int output"}</code> | How many output items one press makes (5 by default). |
| <Link id="m-outputdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" outputDock"}</code> | Dock the made items go into. Spawns a new stack there or adds to the existing one. |
| <Link id="m-outputitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" outputItem"}</code> | The item the press makes. |
| <Link id="m-press" /><code>{"private Transform press"}</code> | Transform of the press head that moves with the lever. |
| <Link id="m-presscurve" /><code>{"private AnimationCurve pressCurve"}</code> | Curve from lever value to press height. |
| <Link id="m-pressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | Event raised on the server after each press. |
| <Link id="m-pressminthreshold" /><code>{"private float pressMinThreshold"}</code> | Lever value above which a press happens. |
| <Link id="m-requiredinput" /><code>{"private int requiredInput"}</code> | How many input items one press uses. |
| <Link id="m-upheight" /><code>{"private float upHeight"}</code> | Local height of the press when fully up. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Adds the input dock filter. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever's `ValueChanged`. |
| <Link id="m-inputfilter" /><code>{"private void InputFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Only allows docking into the input while the lever is near the top (below `addMaxThreshold`). |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | Moves the press with the lever. Server: when the lever passes `pressMinThreshold` with enough input, destroys `requiredInput` items and adds `output` items. |

</details>
