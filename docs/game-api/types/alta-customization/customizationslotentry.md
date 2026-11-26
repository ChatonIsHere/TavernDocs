---
title: "CustomizationSlotEntry"
description: "One part of a cosmetic or equipment visual placed in a customization slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationSlotEntry

A **class** in `Root.Township`, `Alta.Customization`.

One part of a cosmetic or equipment visual placed in a customization slot. Tracks whether other items cover it (impeded) or a slot disables it (hidden).

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationSlotEntry("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" visual, "}<Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" part, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haspart" /><code>{"private bool hasPart"}</code> | Whether the entry has a part to show; entries without one count as primary and skip show and hide. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" Arguments { get; private set; }"}</code> | The current customization arguments for the part. |
| <Link id="m-disablercount" /><code>{"int DisablerCount { get; private set; }"}</code> | How many disabling slots hide this part. The part shows only when this is 0. |
| <Link id="m-impedercount" /><code>{"int ImpederCount { get; set; }"}</code> | How many other visuals in the slot cover this one. Above 0 sets `IsImpeded` in the arguments. |
| <Link id="m-isprimary" /><code>{"bool IsPrimary { get; }"}</code> | True if the part is primary, or if this entry has no part (the visual itself). |
| <Link id="m-part" /><code><Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" Part { get; }"}</code> | The visual part, or null for the entry that stands for the whole visual. |
| <Link id="m-visual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; }"}</code> | The customization visual this entry is part of. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | Shows the part on the given handlers unless something disables it. |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Stores new arguments (colours and so on) and applies them to the shown part. |
| <Link id="m-modifydisablers" /><code>{"void ModifyDisablers(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, bool isAdding)"}</code> | Adds or removes a disabler, hiding the part on the first and showing it again when the last goes. |
| <Link id="m-remove" /><code>{"void Remove(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | Hides the part on the given handlers. |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Updates how the part looks in first person for one handler. |
| <Link id="m-updateimpeded" /><code>{"void UpdateImpeded(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | Reapplies the arguments after `ImpederCount` changes. |

## Used in

Members of other types that take, return or hold a `CustomizationSlotEntry`:

[`CustomizationSlot.Add`](/game-api/types/alta-customization/customizationslot#m-add), [`CustomizationSlot.entries`](/game-api/types/alta-customization/customizationslot#m-entries), [`CustomizationSlot.Remove`](/game-api/types/alta-customization/customizationslot#m-remove), [`CustomizationSlot.visible`](/game-api/types/alta-customization/customizationslot#m-visible), [`CustomizationVisualManager.items`](/game-api/types/alta-customization/customizationvisualmanager#m-items).
