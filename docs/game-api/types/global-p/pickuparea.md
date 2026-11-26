---
title: "PickupArea"
description: "A trigger that tracks which pickups with any of the allowed tags are inside it and raises events as they come and go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupArea

A **class** in `Root.Township`, no namespace.

A trigger that tracks which pickups with any of the allowed tags are inside it and raises events as they come and go.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-added" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" added"}</code> | Backing field for `Added`. |
| <Link id="m-allowedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> allowedTags"}</code> | Pickup tags that count. A pickup needs at least one. |
| <Link id="m-contained" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> contained"}</code> | Backing field for `Contained`. |
| <Link id="m-isallowingcrafted" /><code>{"private bool isAllowingCrafted"}</code> | Whether crafted pickups count. |
| <Link id="m-removed" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" removed"}</code> | Backing field for `Removed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-added-2" /><code><Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" Added { get; }"}</code> | Event raised when an allowed pickup enters. |
| <Link id="m-contained-2" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> Contained { get; }"}</code> | The allowed pickups inside right now. |
| <Link id="m-removed-2" /><code><Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" Removed { get; }"}</code> | Event raised when a pickup leaves, is destroyed, or the area is disabled. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Private: removes a contained pickup when it is destroyed and raises `Removed`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Private: raises `Removed` for every contained pickup and clears the set. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Private: adds a pickup that has an allowed tag and is not being destroyed. Crafted ones only if `isAllowingCrafted`. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Private: removes a pickup that leaves and raises `Removed`. |

</details>

## Used in

Members of other types that take, return or hold a `PickupArea`:

[`Fire.fuelArea`](/game-api/types/alta-stats-effects/fire#m-fuelarea), [`Book.pickupArea`](/game-api/types/alta-items/book#m-pickuparea), [`Pinboard.pickupArea`](/game-api/types/alta-items/pinboard#m-pickuparea).
