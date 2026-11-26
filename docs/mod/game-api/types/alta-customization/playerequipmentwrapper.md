---
title: "PlayerEquipmentWrapper"
description: "A CustomizationWrapper for a player's equipment, looking items up as PlayerEquipmentDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEquipmentWrapper

A **class** in `Root.Township`, `Alta.Customization`.

A `CustomizationWrapper` for a player's equipment, looking items up as `PlayerEquipmentDefinition`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationWrapper`](/mod/game-api/types/alta-customization/customizationwrapper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEquipmentWrapper("}<Link to="/mod/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" manager)"}</code> | Creates a `PlayerEquipmentWrapper` from `manager`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getitem" /><code>{"override async Task<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> | Looks up the `PlayerEquipmentDefinition` with the given hash. |
| <Link id="m-onitemadded" /><code>{"protected override void OnItemAdded(uint itemDefinition)"}</code> | Runs the base behaviour. The extra handler loop does nothing. |
| <Link id="m-onitemremoved" /><code>{"protected override void OnItemRemoved(uint itemDefinition)"}</code> | Runs the base behaviour. The extra handler loop does nothing. |

## Used in

Members of other types that take, return or hold a `PlayerEquipmentWrapper`:

[`PlayerCharacterCustomizationManager.Equipment`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-equipment).
