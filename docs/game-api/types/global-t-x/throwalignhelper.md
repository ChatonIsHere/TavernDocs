---
title: "ThrowAlignHelper"
description: "Throwable pickup behaviour that adds torque on throw to turn a chosen local axis towards the throw direction, so things like spears fly point first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrowAlignHelper

A **class** in `Root.Township`, no namespace.

Throwable pickup behaviour that adds torque on throw to turn a chosen local axis towards the throw direction, so things like spears fly point first.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ThrowablePickup`](/game-api/types/global-t-x/throwablepickup)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ThrowAlignHelper()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-throwalignto" /><code>{"private Vector3 throwAlignTo"}</code> | Local axis that should point along the throw. |
| <Link id="m-torque" /><code>{"private Vector3 torque"}</code> | Current blended torque. |
| <Link id="m-torquelerp" /><code>{"private float torqueLerp"}</code> | How fast the torque blends towards the target, scaled by throw strength. |
| <Link id="m-torquemultiplier" /><code>{"private float torqueMultiplier"}</code> | Scale on the applied torque. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetvalues" /><code>{"protected override void ResetValues()"}</code> | Clears the stored torque. |
| <Link id="m-throwbehaviour" /><code>{"protected override void ThrowBehaviour(Vector3 velocity, float throwMagnitude)"}</code> | Works out the torque needed to turn `throwAlignTo` onto the velocity, blends it by throw strength and applies it as an impulse. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the align axis as a blue line. |

</details>
