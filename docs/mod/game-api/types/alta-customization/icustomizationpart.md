---
title: "ICustomizationPart"
description: "One visual piece of a cosmetic that attaches to character models (third person body, first person hands and so on) in given slots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationPart

An **interface** in `Root.Township`, `Alta.Customization`.

One visual piece of a cosmetic that attaches to character models (third person body, first person hands and so on) in given slots.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CosmeticMeshPartBase<T>`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t), [`CustomizationVisualPart`](/mod/game-api/types/alta-customization/customizationvisualpart), [`ICosmeticMeshPartBase`](/mod/game-api/types/alta-customization/icosmeticmeshpartbase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary" /><code>{"bool IsPrimary { get; }"}</code> | Whether this is the main part of the visual. |
| <Link id="m-partindex" /><code>{"int PartIndex { get; }"}</code> | Index of this part within its visual. |
| <Link id="m-slots" /><code>{"int[] Slots { get; }"}</code> | The customization slots this part takes up. |
| <Link id="m-visual" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; set; }"}</code> | The cosmetic visual this part belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changearguments" /><code>{"void ChangeArguments(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Reapplies new arguments (colours and so on) on each handler. |
| <Link id="m-hide" /><code>{"void Hide(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handler)"}</code> | Detaches the part from each handler. |
| <Link id="m-postrandomize" /><code>{"Task PostRandomize("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | Called after the outfit was randomized, so the part can adjust itself. |
| <Link id="m-show" /><code>{"void Show(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Attaches the part to each handler with the given arguments. |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Re-checks whether the part should show on a handler after it switches between first and third person. |

## Used in

Members of other types that take, return or hold a `ICustomizationPart`:

[`CustomizationSlotEntry.CustomizationSlotEntry`](/mod/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationSlotEntry.Part`](/mod/game-api/types/alta-customization/customizationslotentry#m-part), [`CustomizationVisual.Parts`](/mod/game-api/types/alta-customization/customizationvisual#m-parts-2), [`CustomizationWrapper.IsPrimary`](/mod/game-api/types/alta-customization/customizationwrapper#m-isprimary), [`ICustomizationVisual.Parts`](/mod/game-api/types/alta-customization/icustomizationvisual#m-parts).
