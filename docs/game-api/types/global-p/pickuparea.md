---
title: "PickupArea"
description: "Tracks the pickups inside a trigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupArea

A **class** in `Root.Township`, no namespace.

Tracks the pickups inside a trigger.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupArea()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-added" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" added"}</code> |
| <Link id="m-allowedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> allowedTags"}</code> |
| <Link id="m-contained" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> contained"}</code> |
| <Link id="m-isallowingcrafted" /><code>{"private bool isAllowingCrafted"}</code> |
| <Link id="m-removed" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" removed"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-added-2" /><code><Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" Added { get; }"}</code> |
| <Link id="m-contained-2" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> Contained { get; }"}</code> |
| <Link id="m-removed-2" /><code><Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" Removed { get; }"}</code> |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PickupArea`:

[`Fire.fuelArea`](/game-api/types/alta-stats-effects/fire#m-fuelarea), [`Book.pickupArea`](/game-api/types/alta-items/book#m-pickuparea), [`Pinboard.pickupArea`](/game-api/types/alta-items/pinboard#m-pickuparea).
