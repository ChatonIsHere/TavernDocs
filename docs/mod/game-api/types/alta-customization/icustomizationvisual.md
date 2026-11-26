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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CustomizationVisual`](/mod/game-api/types/alta-customization/customizationvisual)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">The cosmetic or equipment definition this visual belongs to.</span> |
| <Link id="m-disableslots" /><code>{"IEnumerable<int> DisableSlots { get; }"}</code> | <span className="api-desc">Slots this item hides while worn.</span> |
| <Link id="m-parts" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{"[] Parts { get; }"}</code> | <span className="api-desc">The visual's parts, each with its own slots and arguments.</span> |
| <Link id="m-primaryslots" /><code>{"IEnumerable<int> PrimarySlots { get; }"}</code> | <span className="api-desc">Slots the item as a whole sits in.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationVisual`:

<div className="api-used-in">

[`CustomizationSlot.EvaluateNewVisible`](/mod/game-api/types/alta-customization/customizationslot#m-evaluatenewvisible), [`CustomizationSlotEntry.CustomizationSlotEntry`](/mod/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationSlotEntry.Visual`](/mod/game-api/types/alta-customization/customizationslotentry#m-visual), [`CustomizationVisualPart.Visual`](/mod/game-api/types/alta-customization/customizationvisualpart#m-visual), [`CustomizationWrapper.GetConflicts`](/mod/game-api/types/alta-customization/customizationwrapper#m-getconflicts), [`CustomizationWrapper.IsUnblocked`](/mod/game-api/types/alta-customization/customizationwrapper#m-isunblocked), [`ICustomizationDefinition.GetVisual`](/mod/game-api/types/alta-customization/icustomizationdefinition#m-getvisual), [`ICustomizationPart.Visual`](/mod/game-api/types/alta-customization/icustomizationpart#m-visual), [`PlayerCosmeticDefinition.GetVisual`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-getvisual), [`PlayerEquipmentDefinition.GetVisual`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-getvisual).

</div>
