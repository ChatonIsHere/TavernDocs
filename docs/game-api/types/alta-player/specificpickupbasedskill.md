---
title: "SpecificPickupBasedSkill"
description: "abstract class SpecificPickupBasedSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificPickupBasedSkill

An **abstract class** in `Root.Township`, `Alta.Progression.Skills`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`BowDrawSkill`](/game-api/types/alta-player/bowdrawskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpecificPickupBasedSkill()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-validitemstags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> validItemsTags"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
