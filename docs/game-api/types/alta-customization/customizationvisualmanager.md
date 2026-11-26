---
title: "CustomizationVisualManager"
description: "Tracks which cosmetic items are on a character, which slots they fill or disable, and attaches their visual parts to every registered handler (character dummy)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisualManager

A **class** in `Root.Township`, `Alta.Customization`.

Tracks which cosmetic items are on a character, which slots they fill or disable, and attaches their visual parts to every registered handler (character dummy).

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ICustomizationVisualManager`](/game-api/types/alta-customization/icustomizationvisualmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationVisualManager()"}</code> | Creates a `CustomizationVisualManager` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers"}</code> | Backing set for `Handlers`. |
| <Link id="m-hiddenslots" /><code>{"private readonly HashSet<int> hiddenSlots"}</code> | Slot keys marked hidden; only cleared here. |
| <Link id="m-items" /><code>{"private readonly Dictionary<uint, List<"}<Link to="/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{">> items"}</code> | Slot entries per registered item hash. Entry 0 is the item itself, the rest are its parts. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-slots" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-customization/customizationslot">{"CustomizationSlot"}</Link>{"> slots"}</code> | Slots by key. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handlers-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> Handlers { get; }"}</code> | The handlers that show this character's cosmetics. |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> | When true, handlers added by `Attach` keep their packer paused. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Pushes new arguments (colours and so on) for an item's parts to all handlers. |
| <Link id="m-attach" /><code>{"void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Adds a handler and attaches every registered item's parts to it, pausing its packer meanwhile unless `IsPaused`. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Clears every handler's packer inputs and forgets all slots and items. |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | Removes an item: detaches its parts from all handlers and releases its slots. |
| <Link id="m-detach" /><code>{"void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Removes a handler and detaches all item parts from it, unless the handler is already destroyed. |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int key)"}</code> | Whether a slot is disabled by some registered item. |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Adds an item with its arguments: disables its blocked slots, fills its slots and attaches its parts to all handlers. Ignored if already registered. |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Updates first-person visibility of every item part for one handler. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getoraddslot" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationslot">{"CustomizationSlot"}</Link>{" GetOrAddSlot(int key)"}</code> | Returns the slot for a key, creating it if missing. |

</details>
