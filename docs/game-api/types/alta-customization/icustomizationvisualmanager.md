---
title: "ICustomizationVisualManager"
description: "interface ICustomizationVisualManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationVisualManager

An **interface** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CustomizationVisualManager`](/game-api/types/alta-customization/customizationvisualmanager)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> Handlers { get; }"}</code> |  |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-attach" /><code>{"void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> |  |
| <Link id="m-detach" /><code>{"void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int slot)"}</code> |  |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ICustomizationVisualManager`:

[`CustomizationWrapper.CustomizationWrapper`](/game-api/types/alta-customization/customizationwrapper#m-ctor), [`CustomizationWrapper.visualManager`](/game-api/types/alta-customization/customizationwrapper#m-visualmanager), [`PlayerCharacterCustomizationManager.internalManager`](/game-api/types/alta-customization/playercharactercustomizationmanager#m-internalmanager), [`PlayerCosmeticWrapper.PlayerCosmeticWrapper`](/game-api/types/alta-customization/playercosmeticwrapper#m-ctor), [`PlayerEquipmentWrapper.PlayerEquipmentWrapper`](/game-api/types/alta-customization/playerequipmentwrapper#m-ctor).
