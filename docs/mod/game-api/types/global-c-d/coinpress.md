---
title: "CoinPress"
description: "A lever press that turns input items into coins."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoinPress

A **class** in `Root.Township`, the global namespace.

A lever press that turns input items into coins. When the lever is pulled down fully, the server takes items from the input dock and adds output to the output dock.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CoinPress()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmaxthreshold" /><code>{"private float addMaxThreshold"}</code> | <span className="api-desc">Lever value under which items can be added to the input dock.</span> |
| <Link id="m-downheight" /><code>{"private float downHeight"}</code> | <span className="api-desc">Local height of the press when fully down.</span> |
| <Link id="m-inputdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock"}</code> | <span className="api-desc">Dock that takes the item to be pressed.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | <span className="api-desc">The lever that drives the press.</span> |
| <Link id="m-output" /><code>{"private int output"}</code> | <span className="api-desc">How many output items one press makes (5 by default).</span> |
| <Link id="m-outputdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" outputDock"}</code> | <span className="api-desc">Dock the made items go into. Spawns a new stack there or adds to the existing one.</span> |
| <Link id="m-outputitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" outputItem"}</code> | <span className="api-desc">The item the press makes.</span> |
| <Link id="m-press" /><code>{"private Transform press"}</code> | <span className="api-desc">Transform of the press head that moves with the lever.</span> |
| <Link id="m-presscurve" /><code>{"private AnimationCurve pressCurve"}</code> | <span className="api-desc">Curve from lever value to press height.</span> |
| <Link id="m-pressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | <span className="api-desc">Event raised on the server after each press.</span> |
| <Link id="m-pressminthreshold" /><code>{"private float pressMinThreshold"}</code> | <span className="api-desc">Lever value above which a press happens.</span> |
| <Link id="m-requiredinput" /><code>{"private int requiredInput"}</code> | <span className="api-desc">How many input items one press uses.</span> |
| <Link id="m-upheight" /><code>{"private float upHeight"}</code> | <span className="api-desc">Local height of the press when fully up.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Adds the input dock filter.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever's `ValueChanged`.</span> |
| <Link id="m-inputfilter" /><code>{"private void InputFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Only allows docking into the input while the lever is near the top (below `addMaxThreshold`).</span> |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | <span className="api-desc">Moves the press with the lever. Server: when the lever passes `pressMinThreshold` with enough input, destroys `requiredInput` items and adds `output` items.</span> |

</details>
