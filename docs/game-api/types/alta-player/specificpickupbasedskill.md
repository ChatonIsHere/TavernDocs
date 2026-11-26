---
title: "SpecificPickupBasedSkill"
description: "Base for pickup skills that only work with items carrying one of a set of pickup tags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificPickupBasedSkill

An **abstract class** in `Root.Township`, `Alta.Progression.Skills`.

Base for pickup skills that only work with items carrying one of a set of pickup tags.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`BowDrawSkill`](/game-api/types/alta-player/bowdrawskill)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SpecificPickupBasedSkill()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-validitemstags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> validItemsTags"}</code> | Pickup tags this skill applies to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held pickup has an item with at least one of the valid tags. |
