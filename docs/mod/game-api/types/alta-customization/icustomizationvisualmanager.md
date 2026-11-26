---
title: "ICustomizationVisualManager"
description: "Keeps track of which cosmetics and equipment are worn and shows them on every attached character (handler)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationVisualManager

An **interface** in `Root.Township`, `Alta.Customization`.

Keeps track of which cosmetics and equipment are worn and shows them on every attached character (handler). `CustomizationVisualManager` is the implementation.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CustomizationVisualManager`](/mod/game-api/types/alta-customization/customizationvisualmanager)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> Handlers { get; }"}</code> | <span className="api-desc">The attached characters.</span> |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> | <span className="api-desc">While true, attaching a handler leaves its cosmetic packer paused.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Changes the arguments of an item already registered, by its hash.</span> |
| <Link id="m-attach" /><code>{"void Attach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Adds a character to show items on and shows everything already registered.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Forgets all slots and items and clears each handler's cosmetic packer inputs.</span> |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | <span className="api-desc">Removes an item, hiding its parts and re-enabling the slots it disabled.</span> |
| <Link id="m-detach" /><code>{"void Detach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Removes a character and hides items on it.</span> |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int slot)"}</code> | <span className="api-desc">True if a worn item disables this slot.</span> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Adds an item with one argument set per part, filling and disabling its slots. Ignored if already registered.</span> |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Updates every item's first person look for one handler.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationVisualManager`:

<div className="api-used-in">

[`CustomizationWrapper.CustomizationWrapper`](/mod/game-api/types/alta-customization/customizationwrapper#m-ctor), [`CustomizationWrapper.visualManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-visualmanager), [`PlayerCharacterCustomizationManager.internalManager`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-internalmanager), [`PlayerCosmeticWrapper.PlayerCosmeticWrapper`](/mod/game-api/types/alta-customization/playercosmeticwrapper#m-ctor), [`PlayerEquipmentWrapper.PlayerEquipmentWrapper`](/mod/game-api/types/alta-customization/playerequipmentwrapper#m-ctor).

</div>
