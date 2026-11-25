---
title: "CoinPress"
description: "A lever press that turns what's in its input dock into its outputItem."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoinPress

A **class** in `Root.Township`, no namespace.

A lever press that turns what's in its input dock into its `outputItem`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CoinPress()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-addmaxthreshold" /><code>{"private float addMaxThreshold"}</code> |
| <Link id="m-downheight" /><code>{"private float downHeight"}</code> |
| <Link id="m-inputdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock"}</code> |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> |
| <Link id="m-output" /><code>{"private int output"}</code> |
| <Link id="m-outputdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" outputDock"}</code> |
| <Link id="m-outputitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" outputItem"}</code> |
| <Link id="m-press" /><code>{"private Transform press"}</code> |
| <Link id="m-presscurve" /><code>{"private AnimationCurve pressCurve"}</code> |
| <Link id="m-pressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> |
| <Link id="m-pressminthreshold" /><code>{"private float pressMinThreshold"}</code> |
| <Link id="m-requiredinput" /><code>{"private int requiredInput"}</code> |
| <Link id="m-upheight" /><code>{"private float upHeight"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-inputfilter" /><code>{"private void InputFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> |

</details>
