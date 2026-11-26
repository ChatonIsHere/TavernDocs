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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationPart`](/mod/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CustomizationVisualPart<TArguments>`](/mod/game-api/types/alta-customization/customizationvisualpart-targuments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomizationVisualPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary" /><code>{"private bool isPrimary"}</code> | <span className="api-desc">Backing field for `IsPrimary`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; attach, detach and argument errors per handler are logged and swallowed.</span> |
| <Link id="m-priority" /><code>{"private int priority"}</code> | <span className="api-desc">Backing field for `Priority`.</span> |
| <Link id="m-slots" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" slots"}</code> | <span className="api-desc">Backing slot set for `Slots`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprimary-2" /><code>{"bool IsPrimary { get; }"}</code> | <span className="api-desc">Whether this is the main part of the visual.</span> |
| <Link id="m-partid" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; }"}</code> | <span className="api-desc">Id for packing: the visual definition's hash plus the part index.</span> |
| <Link id="m-partindex" /><code>{"int PartIndex { get; set; }"}</code> | <span className="api-desc">Index of this part within its visual.</span> |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | <span className="api-desc">Priority set on the part, probably to settle slot clashes.</span> |
| <Link id="m-slots-2" /><code>{"int[] Slots { get; }"}</code> | <span className="api-desc">Slot ids from the part's slot set.</span> |
| <Link id="m-visual" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; set; }"}</code> | <span className="api-desc">The cosmetic visual this part belongs to.</span> |
| <Link id="m-isshowninfirstperson" /><code>{"protected virtual bool IsShownInFirstPerson { get; }"}</code> | <span className="api-desc">Whether the part shows on first-person handlers. True by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changearguments" /><code>{"void ChangeArguments(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Applies new arguments per handler, logging errors instead of throwing.</span> |
| <Link id="m-createdefaultarguments" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" CreateDefaultArguments()"}</code> | <span className="api-desc">Subclass: a fresh copy of the part's default arguments.</span> |
| <Link id="m-hide" /><code>{"void Hide(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | <span className="api-desc">Detaches from each handler, logging errors instead of throwing.</span> |
| <Link id="m-postrandomize" /><code>{"virtual async Task PostRandomize("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | <span className="api-desc">Called after randomizing. Does nothing by default.</span> |
| <Link id="m-show" /><code>{"void Show(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Attaches to each handler, logging errors instead of throwing.</span> |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">For parts hidden in first person: detaches from first-person handlers and attaches to others.</span> |
| <Link id="m-attach" /><code>{"protected abstract void Attach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Subclass: attaches the part to one handler.</span> |
| <Link id="m-changearguments-2" /><code>{"protected abstract void ChangeArguments("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Applies new arguments per handler, logging errors instead of throwing.</span> |
| <Link id="m-detach" /><code>{"protected abstract void Detach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Subclass: removes the part from one handler.</span> |

## Used in

Members of other types that take, return or hold a `CustomizationVisualPart`:

<div className="api-used-in">

[`CosmeticMeshPartBase<T>.copyColorFrom`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-copycolorfrom), [`CustomizationVisual.parts`](/mod/game-api/types/alta-customization/customizationvisual#m-parts).

</div>
