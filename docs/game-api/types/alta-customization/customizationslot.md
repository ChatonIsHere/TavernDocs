---
title: "CustomizationSlot"
description: "One body slot in a character's customisation, tracking which cosmetic parts are in it and which one is visible."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationSlot

A **class** in `Root.Township`, `Alta.Customization`.

One body slot in a character's customisation, tracking which cosmetic parts are in it and which one is visible. Other entries in the slot are marked impeded (shown in their reduced form). Created by `CustomizationVisualManager`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationSlot(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | Creates a `CustomizationSlot` from `handlers`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablecount" /><code>{"private int disableCount"}</code> | Number of outstanding `Disable` calls. |
| <Link id="m-entries" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{"> entries"}</code> | Every entry in the slot, oldest first. |
| <Link id="m-handlers" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers"}</code> | Customisation handlers (for example the character dummy) that entries are applied to. |
| <Link id="m-isvisibleprimary" /><code>{"private bool isVisiblePrimary"}</code> | Whether the visible visual is a primary for this slot, which makes new visuals impeded instead. |
| <Link id="m-visible" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{"> visible"}</code> | Entries currently shown unimpeded, all from the same visual. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"bool IsDisabled { get; }"}</code> | True while at least one `Disable` is not matched by `Undisable`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{" entry)"}</code> | Adds a part to the slot. If another visual already shows there, the new or old entries become impeded depending on which is primary. |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Adds a disabler to the slot and to every entry in it. Calls stack. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{" entry)"}</code> | Removes a part and picks a new visible visual if it was the shown one. |
| <Link id="m-undisable" /><code>{"void Undisable()"}</code> | Removes one disabler; when none are left, the entries are re-enabled. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatenewvisible" /><code>{"private void EvaluateNewVisible("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" oldVisual)"}</code> | After the visible entry is removed, makes the most recent other visual's entries visible and un-impedes them. |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationSlot`:

[`CustomizationVisualManager.GetOrAddSlot`](/game-api/types/alta-customization/customizationvisualmanager#m-getoraddslot), [`CustomizationVisualManager.slots`](/game-api/types/alta-customization/customizationvisualmanager#m-slots).
