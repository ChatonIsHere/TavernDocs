---
title: "PickupArea"
description: "A trigger that tracks which pickups with any of the allowed tags are inside it and raises events as they come and go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupArea

A **class** in `Root.Township`, the global namespace.

A trigger that tracks which pickups with any of the allowed tags are inside it and raises events as they come and go.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-added" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" added"}</code> | <span className="api-desc">Backing field for `Added`.</span> |
| <Link id="m-allowedtags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> allowedTags"}</code> | <span className="api-desc">Pickup tags that count. A pickup needs at least one.</span> |
| <Link id="m-contained" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> contained"}</code> | <span className="api-desc">Backing field for `Contained`.</span> |
| <Link id="m-isallowingcrafted" /><code>{"private bool isAllowingCrafted"}</code> | <span className="api-desc">Whether crafted pickups count.</span> |
| <Link id="m-removed" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" removed"}</code> | <span className="api-desc">Backing field for `Removed`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-added-2" /><code><Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" Added { get; }"}</code> | <span className="api-desc">Event raised when an allowed pickup enters.</span> |
| <Link id="m-contained-2" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> Contained { get; }"}</code> | <span className="api-desc">The allowed pickups inside right now.</span> |
| <Link id="m-removed-2" /><code><Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" Removed { get; }"}</code> | <span className="api-desc">Event raised when a pickup leaves, is destroyed, or the area is disabled.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Private: removes a contained pickup when it is destroyed and raises `Removed`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Private: raises `Removed` for every contained pickup and clears the set.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Private: adds a pickup that has an allowed tag and is not being destroyed. Crafted ones only if `isAllowingCrafted`.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Private: removes a pickup that leaves and raises `Removed`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupArea`:

<div className="api-used-in">

[`Fire.fuelArea`](/mod/game-api/types/alta-stats-effects/fire#m-fuelarea), [`Book.pickupArea`](/mod/game-api/types/alta-items/book#m-pickuparea), [`Pinboard.pickupArea`](/mod/game-api/types/alta-items/pinboard#m-pickuparea).

</div>
