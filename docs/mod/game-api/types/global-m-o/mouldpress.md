---
title: "MouldPress"
description: "Lever-driven press that stamps a pattern item into a blank mould."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldPress

A **class** in `Root.Township`, the global namespace.

Lever-driven press that stamps a pattern item into a blank mould. The press moves on every side; only the server applies the pattern.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldPress()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmaxthreshold" /><code>{"private float addMaxThreshold"}</code> | Lever value below which a pattern item can be docked. |
| <Link id="m-downheight" /><code>{"private float downHeight"}</code> | Local Y of the press head when fully down. |
| <Link id="m-invalidpress" /><code>{"private Transform invalidPress"}</code> | Where the pattern item is undocked to when the mould already has a definition. |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | Lever that drives the press. |
| <Link id="m-mouldoutputdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" mouldOutputDock"}</code> | Dock holding the mould. |
| <Link id="m-press" /><code>{"private Transform press"}</code> | Press head transform that moves with the lever. |
| <Link id="m-presscurve" /><code>{"private AnimationCurve pressCurve"}</code> | Curve from lever value to press position. |
| <Link id="m-pressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | Event fired after the server applies a pattern. |
| <Link id="m-pressminthreshold" /><code>{"private float pressMinThreshold"}</code> | Lever value above which the press applies the pattern. |
| <Link id="m-upheight" /><code>{"private float upHeight"}</code> | Local Y of the press head when fully up. |
| <Link id="m-weaponpartdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" weaponPartDock"}</code> | Dock holding the pattern item. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Adds a filter to the weapon part dock. |
| <Link id="m-setmould" /><code>{"void SetMould("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" input, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" output)"}</code> | Sets a blank mould's definition from the docked pattern item and destroys the item; if the mould already has one, undocks the item instead. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever's value change. |
| <Link id="m-inputfilter" /><code>{"private void InputFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Only lets an item dock in the weapon part dock while the lever is below `addMaxThreshold`. |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | Moves the press head with the lever; server: past `pressMinThreshold` with both docks filled, calls `SetMould` and fires `pressed`. |

</details>
