---
title: "CustomizationVisualPart"
description: "abstract class CustomizationVisualPart in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisualPart

An **abstract class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CustomizationVisualPart<TArguments>`](/game-api/types/alta-customization/customizationvisualpart-targuments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomizationVisualPart()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary" /><code>{"private bool isPrimary"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-priority" /><code>{"private int priority"}</code> |  |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" slots"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary-2" /><code>{"bool IsPrimary { get; }"}</code> |  |
| <Link id="m-partid" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; }"}</code> |  |
| <Link id="m-partindex" /><code>{"int PartIndex { get; set; }"}</code> |  |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> |  |
| <Link id="m-slots-2" /><code>{"int[] Slots { get; }"}</code> |  |
| <Link id="m-visual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; set; }"}</code> |  |
| <Link id="m-isshowninfirstperson" /><code>{"protected virtual bool IsShownInFirstPerson { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changearguments" /><code>{"void ChangeArguments(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-createdefaultarguments" /><code>{"abstract "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" CreateDefaultArguments()"}</code> |  |
| <Link id="m-hide" /><code>{"void Hide(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> |  |
| <Link id="m-postrandomize" /><code>{"virtual async Task PostRandomize("}<Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> |  |
| <Link id="m-show" /><code>{"void Show(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-attach" /><code>{"protected abstract void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-changearguments-2" /><code>{"protected abstract void ChangeArguments("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-detach" /><code>{"protected abstract void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationVisualPart`:

[`CosmeticMeshPartBase<T>.copyColorFrom`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-copycolorfrom), [`CustomizationVisual.parts`](/game-api/types/alta-customization/customizationvisual#m-parts).
