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
| <Link id="m-isprimary" /><code>{"bool IsPrimary { get; }"}</code> | <span className="api-desc">Whether this is the main part of the visual.</span> |
| <Link id="m-partindex" /><code>{"int PartIndex { get; }"}</code> | <span className="api-desc">Index of this part within its visual.</span> |
| <Link id="m-slots" /><code>{"int[] Slots { get; }"}</code> | <span className="api-desc">The customization slots this part takes up.</span> |
| <Link id="m-visual" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; set; }"}</code> | <span className="api-desc">The cosmetic visual this part belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changearguments" /><code>{"void ChangeArguments(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Reapplies new arguments (colours and so on) on each handler.</span> |
| <Link id="m-hide" /><code>{"void Hide(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handler)"}</code> | <span className="api-desc">Detaches the part from each handler.</span> |
| <Link id="m-postrandomize" /><code>{"Task PostRandomize("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | <span className="api-desc">Called after the outfit was randomized, so the part can adjust itself.</span> |
| <Link id="m-show" /><code>{"void Show(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Attaches the part to each handler with the given arguments.</span> |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Re-checks whether the part should show on a handler after it switches between first and third person.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationPart`:

<div className="api-used-in">

[`CustomizationSlotEntry.CustomizationSlotEntry`](/mod/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationSlotEntry.Part`](/mod/game-api/types/alta-customization/customizationslotentry#m-part), [`CustomizationVisual.Parts`](/mod/game-api/types/alta-customization/customizationvisual#m-parts-2), [`CustomizationWrapper.IsPrimary`](/mod/game-api/types/alta-customization/customizationwrapper#m-isprimary), [`ICustomizationVisual.Parts`](/mod/game-api/types/alta-customization/icustomizationvisual#m-parts).

</div>
