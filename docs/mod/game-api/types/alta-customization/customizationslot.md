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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationSlot(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> | <span className="api-desc">Creates a `CustomizationSlot` from `handlers`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablecount" /><code>{"private int disableCount"}</code> | <span className="api-desc">Number of outstanding `Disable` calls.</span> |
| <Link id="m-entries" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{"> entries"}</code> | <span className="api-desc">Every entry in the slot, oldest first.</span> |
| <Link id="m-handlers" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers"}</code> | <span className="api-desc">Customisation handlers (for example the character dummy) that entries are applied to.</span> |
| <Link id="m-isvisibleprimary" /><code>{"private bool isVisiblePrimary"}</code> | <span className="api-desc">Whether the visible visual is a primary for this slot, which makes new visuals impeded instead.</span> |
| <Link id="m-visible" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{"> visible"}</code> | <span className="api-desc">Entries currently shown unimpeded, all from the same visual.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"bool IsDisabled { get; }"}</code> | <span className="api-desc">True while at least one `Disable` is not matched by `Undisable`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{" entry)"}</code> | <span className="api-desc">Adds a part to the slot. If another visual already shows there, the new or old entries become impeded depending on which is primary.</span> |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Adds a disabler to the slot and to every entry in it. Calls stack.</span> |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{" entry)"}</code> | <span className="api-desc">Removes a part and picks a new visible visual if it was the shown one.</span> |
| <Link id="m-undisable" /><code>{"void Undisable()"}</code> | <span className="api-desc">Removes one disabler; when none are left, the entries are re-enabled.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatenewvisible" /><code>{"private void EvaluateNewVisible("}<Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" oldVisual)"}</code> | <span className="api-desc">After the visible entry is removed, makes the most recent other visual's entries visible and un-impedes them.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationSlot`:

<div className="api-used-in">

[`CustomizationVisualManager.GetOrAddSlot`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-getoraddslot), [`CustomizationVisualManager.slots`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-slots).

</div>
