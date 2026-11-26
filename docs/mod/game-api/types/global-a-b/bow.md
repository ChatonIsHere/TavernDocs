---
title: "Bow"
description: "Networked bow component on a pickup prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Bow

A **class** in `Root.Township`, the global namespace.

Networked bow component on a pickup prefab. Holds the hand rest points used when drawing, mirroring the right rest to make a left one.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Bow()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ispickup" /><code>{"private bool isPickup"}</code> | Backing field for `IsPickup`. |
| <Link id="m-righthandrest" /><code>{"private Transform rightHandRest"}</code> | Backing field for `RightHandRest`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ispickup-2" /><code>{"bool IsPickup { get; }"}</code> | Serialized flag, true by default. Probably marks whether the bow is held as a normal pickup. |
| <Link id="m-lefthandrest" /><code>{"Transform LeftHandRest { get; private set; }"}</code> | Rest point for a left-handed draw, created at runtime by mirroring `RightHandRest`. |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The entity's common pickup. |
| <Link id="m-righthandrest-2" /><code>{"Transform RightHandRest { get; }"}</code> | Rest point on the bow for a right-handed draw. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates `LeftHandRest` as a mirror of the right hand rest across the local X axis. |

</details>

## Used in

Members of other types that take, return or hold a `Bow`:

[`BowString.bow`](/mod/game-api/types/global-a-b/bowstring#m-bow), [`BowString.Bow`](/mod/game-api/types/global-a-b/bowstring#m-bow-2).
