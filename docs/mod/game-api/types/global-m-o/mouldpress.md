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
| <Link id="m-ctor" /><code>{"MouldPress()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmaxthreshold" /><code>{"private float addMaxThreshold"}</code> | <span className="api-desc">Lever value below which a pattern item can be docked.</span> |
| <Link id="m-downheight" /><code>{"private float downHeight"}</code> | <span className="api-desc">Local Y of the press head when fully down.</span> |
| <Link id="m-invalidpress" /><code>{"private Transform invalidPress"}</code> | <span className="api-desc">Where the pattern item is undocked to when the mould already has a definition.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | <span className="api-desc">Lever that drives the press.</span> |
| <Link id="m-mouldoutputdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" mouldOutputDock"}</code> | <span className="api-desc">Dock holding the mould.</span> |
| <Link id="m-press" /><code>{"private Transform press"}</code> | <span className="api-desc">Press head transform that moves with the lever.</span> |
| <Link id="m-presscurve" /><code>{"private AnimationCurve pressCurve"}</code> | <span className="api-desc">Curve from lever value to press position.</span> |
| <Link id="m-pressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | <span className="api-desc">Event fired after the server applies a pattern.</span> |
| <Link id="m-pressminthreshold" /><code>{"private float pressMinThreshold"}</code> | <span className="api-desc">Lever value above which the press applies the pattern.</span> |
| <Link id="m-upheight" /><code>{"private float upHeight"}</code> | <span className="api-desc">Local Y of the press head when fully up.</span> |
| <Link id="m-weaponpartdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" weaponPartDock"}</code> | <span className="api-desc">Dock holding the pattern item.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Adds a filter to the weapon part dock.</span> |
| <Link id="m-setmould" /><code>{"void SetMould("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" input, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" output)"}</code> | <span className="api-desc">Sets a blank mould's definition from the docked pattern item and destroys the item; if the mould already has one, undocks the item instead.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever's value change.</span> |
| <Link id="m-inputfilter" /><code>{"private void InputFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Only lets an item dock in the weapon part dock while the lever is below `addMaxThreshold`.</span> |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | <span className="api-desc">Moves the press head with the lever; server: past `pressMinThreshold` with both docks filled, calls `SetMould` and fires `pressed`.</span> |

</details>
