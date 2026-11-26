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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`ICustomizationVisualManager`](/mod/game-api/types/alta-customization/icustomizationvisualmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationVisualManager()"}</code> | <span className="api-desc">Creates a `CustomizationVisualManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"private readonly HashSet<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> handlers"}</code> | <span className="api-desc">Backing set for `Handlers`.</span> |
| <Link id="m-hiddenslots" /><code>{"private readonly HashSet<int> hiddenSlots"}</code> | <span className="api-desc">Slot keys marked hidden; only cleared here.</span> |
| <Link id="m-items" /><code>{"private readonly Dictionary<uint, List<"}<Link to="/mod/game-api/types/alta-customization/customizationslotentry">{"CustomizationSlotEntry"}</Link>{">> items"}</code> | <span className="api-desc">Slot entries per registered item hash. Entry 0 is the item itself, the rest are its parts.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-slots" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/alta-customization/customizationslot">{"CustomizationSlot"}</Link>{"> slots"}</code> | <span className="api-desc">Slots by key.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handlers-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> Handlers { get; }"}</code> | <span className="api-desc">The handlers that show this character's cosmetics.</span> |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> | <span className="api-desc">When true, handlers added by `Attach` keep their packer paused.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Pushes new arguments (colours and so on) for an item's parts to all handlers.</span> |
| <Link id="m-attach" /><code>{"void Attach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Adds a handler and attaches every registered item's parts to it, pausing its packer meanwhile unless `IsPaused`.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Clears every handler's packer inputs and forgets all slots and items.</span> |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | <span className="api-desc">Removes an item: detaches its parts from all handlers and releases its slots.</span> |
| <Link id="m-detach" /><code>{"void Detach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Removes a handler and detaches all item parts from it, unless the handler is already destroyed.</span> |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int key)"}</code> | <span className="api-desc">Whether a slot is disabled by some registered item.</span> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Adds an item with its arguments: disables its blocked slots, fills its slots and attaches its parts to all handlers. Ignored if already registered.</span> |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Updates first-person visibility of every item part for one handler.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getoraddslot" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationslot">{"CustomizationSlot"}</Link>{" GetOrAddSlot(int key)"}</code> | <span className="api-desc">Returns the slot for a key, creating it if missing.</span> |

</details>
