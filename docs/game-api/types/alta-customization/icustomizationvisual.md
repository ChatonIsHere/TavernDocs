---
title: "ICustomizationVisual"
description: "The visual for a cosmetic or equipment item: its parts and which customization slots it fills or disables."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationVisual

An **interface** in `Root.Township`, `Alta.Customization`.

The visual for a cosmetic or equipment item: its parts and which customization slots it fills or disables. Used by `CustomizationVisualManager`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CustomizationVisual`](/game-api/types/alta-customization/customizationvisual)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; set; }"}</code> | The cosmetic or equipment definition this visual belongs to. |
| <Link id="m-disableslots" /><code>{"IEnumerable<int> DisableSlots { get; }"}</code> | Slots this item hides while worn. |
| <Link id="m-parts" /><code><Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{"[] Parts { get; }"}</code> | The visual's parts, each with its own slots and arguments. |
| <Link id="m-primaryslots" /><code>{"IEnumerable<int> PrimarySlots { get; }"}</code> | Slots the item as a whole sits in. |

## Used in

Members of other types that take, return or hold a `ICustomizationVisual`:

[`CustomizationSlot.EvaluateNewVisible`](/game-api/types/alta-customization/customizationslot#m-evaluatenewvisible), [`CustomizationSlotEntry.CustomizationSlotEntry`](/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationSlotEntry.Visual`](/game-api/types/alta-customization/customizationslotentry#m-visual), [`CustomizationVisualPart.Visual`](/game-api/types/alta-customization/customizationvisualpart#m-visual), [`CustomizationWrapper.GetConflicts`](/game-api/types/alta-customization/customizationwrapper#m-getconflicts), [`CustomizationWrapper.IsUnblocked`](/game-api/types/alta-customization/customizationwrapper#m-isunblocked), [`ICustomizationDefinition.GetVisual`](/game-api/types/alta-customization/icustomizationdefinition#m-getvisual), [`ICustomizationPart.Visual`](/game-api/types/alta-customization/icustomizationpart#m-visual), [`PlayerCosmeticDefinition.GetVisual`](/game-api/types/alta-customization/playercosmeticdefinition#m-getvisual), [`PlayerEquipmentDefinition.GetVisual`](/game-api/types/alta-customization/playerequipmentdefinition#m-getvisual).
