---
title: "CustomizationSlot"
description: "class CustomizationSlot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationSlot

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationSlot(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-disablecount" /><code>{"private int disableCount"}</code> |  |
| <Link id="m-entries" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{"> entries"}</code> |  |
| <Link id="m-handlers" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers"}</code> |  |
| <Link id="m-isvisibleprimary" /><code>{"private bool isVisiblePrimary"}</code> |  |
| <Link id="m-visible" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{"> visible"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"bool IsDisabled { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{" entry)"}</code> |  |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{" entry)"}</code> |  |
| <Link id="m-undisable" /><code>{"void Undisable()"}</code> |  |
| <Link id="m-evaluatenewvisible" /><code>{"private void EvaluateNewVisible("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" oldVisual)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationSlot`:

[`CustomizationVisualManager.GetOrAddSlot`](/game-api/types/alta-customization/customizationvisualmanager#m-getoraddslot), [`CustomizationVisualManager.slots`](/game-api/types/alta-customization/customizationvisualmanager#m-slots).
