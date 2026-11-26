---
title: "ThrowAlignHelper"
description: "Throwable pickup behaviour that adds torque on throw to turn a chosen local axis towards the throw direction, so things like spears fly point first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrowAlignHelper

A **class** in `Root.Township`, the global namespace.

Throwable pickup behaviour that adds torque on throw to turn a chosen local axis towards the throw direction, so things like spears fly point first.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ThrowablePickup`](/mod/game-api/types/global-t-x/throwablepickup)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThrowAlignHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-throwalignto" /><code>{"private Vector3 throwAlignTo"}</code> | <span className="api-desc">Local axis that should point along the throw.</span> |
| <Link id="m-torque" /><code>{"private Vector3 torque"}</code> | <span className="api-desc">Current blended torque.</span> |
| <Link id="m-torquelerp" /><code>{"private float torqueLerp"}</code> | <span className="api-desc">How fast the torque blends towards the target, scaled by throw strength.</span> |
| <Link id="m-torquemultiplier" /><code>{"private float torqueMultiplier"}</code> | <span className="api-desc">Scale on the applied torque.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetvalues" /><code>{"protected override void ResetValues()"}</code> | <span className="api-desc">Clears the stored torque.</span> |
| <Link id="m-throwbehaviour" /><code>{"protected override void ThrowBehaviour(Vector3 velocity, float throwMagnitude)"}</code> | <span className="api-desc">Works out the torque needed to turn `throwAlignTo` onto the velocity, blends it by throw strength and applies it as an impulse.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the align axis as a blue line.</span> |

</details>
