---
title: "CustomizationSlotEntry"
description: "class CustomizationSlotEntry in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationSlotEntry

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationSlotEntry("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" visual, "}<Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" part, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-haspart" /><code>{"private bool hasPart"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" Arguments { get; private set; }"}</code> |  |
| <Link id="m-disablercount" /><code>{"int DisablerCount { get; private set; }"}</code> |  |
| <Link id="m-impedercount" /><code>{"int ImpederCount { get; set; }"}</code> |  |
| <Link id="m-isprimary" /><code>{"bool IsPrimary { get; }"}</code> |  |
| <Link id="m-part" /><code><Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" Part { get; }"}</code> |  |
| <Link id="m-visual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" Visual { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> |  |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-modifydisablers" /><code>{"void ModifyDisablers(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers, bool isAdding)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> |  |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-updateimpeded" /><code>{"void UpdateImpeded(IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationSlotEntry`:

[`CustomizationSlot.Add`](/game-api/types/alta-customization/customizationslot#m-add), [`CustomizationSlot.entries`](/game-api/types/alta-customization/customizationslot#m-entries), [`CustomizationSlot.Remove`](/game-api/types/alta-customization/customizationslot#m-remove), [`CustomizationSlot.visible`](/game-api/types/alta-customization/customizationslot#m-visible), [`CustomizationVisualManager.items`](/game-api/types/alta-customization/customizationvisualmanager#m-items).
