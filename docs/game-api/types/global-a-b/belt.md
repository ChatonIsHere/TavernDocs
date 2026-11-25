---
title: "Belt"
description: "A drive belt between pulleys in mechanisms. Not the player's belt."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Belt

A **class** in `Root.Township`, no namespace.

A drive belt between pulleys in mechanisms. Not the player's belt.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`Turnable`](/game-api/types/global-t-x/turnable)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Belt()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-exterior" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> exterior"}</code> |  |
| <Link id="m-offset" /><code>{"private float offset"}</code> |  |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> |  |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offset-2" /><code>{"float Offset { get; }"}</code> |  |
| <Link id="m-rotation-2" /><code>{"float Rotation { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-rotated" /><code>{"event Action Rotated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-branchupdate" /><code>{"override void BranchUpdate("}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" from, ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped = false)"}</code> |  |
| <Link id="m-branchtoconnected" /><code>{"protected override void BranchToConnected(ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped)"}</code> |  |
| <Link id="m-evaluateexterior" /><code>{"private bool EvaluateExterior()"}</code> |  |
| <Link id="m-rotate" /><code>{"protected override void Rotate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Belt`:

[`BeltVisual.Belt`](/game-api/types/global-a-b/beltvisual#m-belt).
