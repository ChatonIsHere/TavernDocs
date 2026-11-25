---
title: "CustomizationVisualManager"
description: "class CustomizationVisualManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisualManager

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ICustomizationVisualManager`](/game-api/types/alta-customization/icustomizationvisualmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationVisualManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers"}</code> |  |
| <Link id="m-hiddenslots" /><code>{"private readonly HashSet<int> hiddenSlots"}</code> |  |
| <Link id="m-items" /><code>{"private readonly Dictionary<uint, List<"}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{">> items"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-slots" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-customization/customizationslot">{"CustomizationSlot"}</Link>{"> slots"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handlers-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> Handlers { get; }"}</code> |  |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-attach" /><code>{"void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> |  |
| <Link id="m-detach" /><code>{"void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int key)"}</code> |  |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-getoraddslot" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationslot">{"CustomizationSlot"}</Link>{" GetOrAddSlot(int key)"}</code> |  |
