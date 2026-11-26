---
title: "Belt"
description: "A pulley belt in the mechanical power system: a Turnable that wraps the outside of its connected pulleys and flips spin direction for pulleys inside it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Belt

A **class** in `Root.Township`, the global namespace.

A pulley belt in the mechanical power system: a `Turnable` that wraps the outside of its connected pulleys and flips spin direction for pulleys inside it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`Turnable`](/mod/game-api/types/global-t-x/turnable)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Belt()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exterior" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> exterior"}</code> | Connected turnables the belt wraps around the outside of. Set in the editor by `EvaluateExterior`. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Backing field for `Offset`. |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> | Backing field for `Rotation`. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Serialized speed multiplier. Not read anywhere in this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offset-2" /><code>{"float Offset { get; }"}</code> | Belt offset passed to the exterior calculation. |
| <Link id="m-rotation-2" /><code>{"float Rotation { get; }"}</code> | How far the belt has turned so far. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-rotated" /><code>{"event Action Rotated"}</code> | Raised each frame the belt's rotation changes, probably so visuals can scroll the belt. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-branchupdate" /><code>{"override void BranchUpdate("}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" from, ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped = false)"}</code> | Flips direction when the update comes from a turnable not on the exterior, then runs the base update. |
| <Link id="m-branchtoconnected" /><code>{"protected override void BranchToConnected(ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped)"}</code> | Passes the torque update to each connected turnable, flipped when that turnable is on the belt's exterior. |
| <Link id="m-rotate" /><code>{"protected override void Rotate()"}</code> | Advances `rotation` from the current speed and fires `Rotated`, when the belt is moving. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateexterior" /><code>{"private bool EvaluateExterior()"}</code> | Editor helper: recalculates which connected pulleys the belt wraps around the outside of. Returns true if that changed. |

</details>

## Used in

Members of other types that take, return or hold a `Belt`:

[`BeltVisual.Belt`](/mod/game-api/types/global-a-b/beltvisual#m-belt).
