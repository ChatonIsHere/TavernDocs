---
title: "CustomizationVisualPart"
description: "Base component for a cosmetic visual part."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisualPart

An **abstract class** in `Root.Township`, `Alta.Customization`.

Base component for a cosmetic visual part. Handles show, hide and argument changes across handlers, skipping first-person handlers if the part isn't shown in first person.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CustomizationVisualPart<TArguments>`](/game-api/types/alta-customization/customizationvisualpart-targuments)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CustomizationVisualPart()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary" /><code>{"private bool isPrimary"}</code> | Backing field for `IsPrimary`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; attach, detach and argument errors per handler are logged and swallowed. |
| <Link id="m-priority" /><code>{"private int priority"}</code> | Backing field for `Priority`. |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" slots"}</code> | Backing slot set for `Slots`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary-2" /><code>{"bool IsPrimary { get; }"}</code> | Whether this is the main part of the visual. |
| <Link id="m-partid" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; }"}</code> | Id for packing: the visual definition's hash plus the part index. |
| <Link id="m-partindex" /><code>{"int PartIndex { get; set; }"}</code> | Index of this part within its visual. |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | Priority set on the part, probably to settle slot clashes. |
| <Link id="m-slots-2" /><code>{"int[] Slots { get; }"}</code> | Slot ids from the part's slot set. |
| <Link id="m-visual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; set; }"}</code> | The cosmetic visual this part belongs to. |
| <Link id="m-isshowninfirstperson" /><code>{"protected virtual bool IsShownInFirstPerson { get; }"}</code> | Whether the part shows on first-person handlers. True by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changearguments" /><code>{"void ChangeArguments(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Applies new arguments per handler, logging errors instead of throwing. |
| <Link id="m-createdefaultarguments" /><code>{"abstract "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" CreateDefaultArguments()"}</code> | Subclass: a fresh copy of the part's default arguments. |
| <Link id="m-hide" /><code>{"void Hide(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | Detaches from each handler, logging errors instead of throwing. |
| <Link id="m-postrandomize" /><code>{"virtual async Task PostRandomize("}<Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | Called after randomizing. Does nothing by default. |
| <Link id="m-show" /><code>{"void Show(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Attaches to each handler, logging errors instead of throwing. |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | For parts hidden in first person: detaches from first-person handlers and attaches to others. |
| <Link id="m-attach" /><code>{"protected abstract void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Subclass: attaches the part to one handler. |
| <Link id="m-changearguments-2" /><code>{"protected abstract void ChangeArguments("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Applies new arguments per handler, logging errors instead of throwing. |
| <Link id="m-detach" /><code>{"protected abstract void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Subclass: removes the part from one handler. |

## Used in

Members of other types that take, return or hold a `CustomizationVisualPart`:

[`CosmeticMeshPartBase<T>.copyColorFrom`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-copycolorfrom), [`CustomizationVisual.parts`](/game-api/types/alta-customization/customizationvisual#m-parts).
