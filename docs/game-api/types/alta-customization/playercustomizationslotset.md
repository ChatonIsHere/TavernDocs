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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCustomizationSlotSet()"}</code> | Creates a `PlayerCustomizationSlotSet` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-slots" /><code>{"private int[] slots"}</code> | Backing field for `Slots`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-slots-2" /><code>{"int[] Slots { get; }"}</code> | The slot numbers. |

## Used in

Members of other types that take, return or hold a `PlayerCustomizationSlotSet`:

[`CustomizationVisual.additionalPrimary`](/game-api/types/alta-customization/customizationvisual#m-additionalprimary), [`CustomizationVisual.disableSlots`](/game-api/types/alta-customization/customizationvisual#m-disableslots), [`CustomizationVisualPart.slots`](/game-api/types/alta-customization/customizationvisualpart#m-slots), [`EditableSlot.slots`](/game-api/types/alta-customization/editableslot#m-slots).
