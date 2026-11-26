---
title: "PlayerCustomizationSlotSet"
description: "A list of customization slot numbers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCustomizationSlotSet

A **class** in `Root.Township`, `Alta.Customization`.

A list of customization slot numbers. `EditableSlot` uses one to know which slots it edits.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCustomizationSlotSet()"}</code> | <span className="api-desc">Creates a `PlayerCustomizationSlotSet` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-slots" /><code>{"private int[] slots"}</code> | <span className="api-desc">Backing field for `Slots`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-slots-2" /><code>{"int[] Slots { get; }"}</code> | <span className="api-desc">The slot numbers.</span> |

## Used in

Members of other types that take, return or hold a `PlayerCustomizationSlotSet`:

<div className="api-used-in">

[`CustomizationVisual.additionalPrimary`](/mod/game-api/types/alta-customization/customizationvisual#m-additionalprimary), [`CustomizationVisual.disableSlots`](/mod/game-api/types/alta-customization/customizationvisual#m-disableslots), [`CustomizationVisualPart.slots`](/mod/game-api/types/alta-customization/customizationvisualpart#m-slots), [`EditableSlot.slots`](/mod/game-api/types/alta-customization/editableslot#m-slots).

</div>
