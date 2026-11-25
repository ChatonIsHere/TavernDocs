---
title: "ICustomizationPart"
description: "interface ICustomizationPart in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationPart

An **interface** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CosmeticMeshPartBase<T>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t), [`CustomizationVisualPart`](/game-api/types/alta-customization/customizationvisualpart), [`ICosmeticMeshPartBase`](/game-api/types/alta-customization/icosmeticmeshpartbase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary" /><code>{"bool IsPrimary { get; }"}</code> |  |
| <Link id="m-partindex" /><code>{"int PartIndex { get; }"}</code> |  |
| <Link id="m-slots" /><code>{"int[] Slots { get; }"}</code> |  |
| <Link id="m-visual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changearguments" /><code>{"void ChangeArguments(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-hide" /><code>{"void Hide(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handler)"}</code> |  |
| <Link id="m-postrandomize" /><code>{"Task PostRandomize("}<Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> |  |
| <Link id="m-show" /><code>{"void Show(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ICustomizationPart`:

[`CustomizationSlotEntry.CustomizationSlotEntry`](/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationSlotEntry.Part`](/game-api/types/alta-customization/customizationslotentry#m-part), [`CustomizationVisual.Parts`](/game-api/types/alta-customization/customizationvisual#m-parts-2), [`CustomizationWrapper.IsPrimary`](/game-api/types/alta-customization/customizationwrapper#m-isprimary), [`ICustomizationVisual.Parts`](/game-api/types/alta-customization/icustomizationvisual#m-parts).
