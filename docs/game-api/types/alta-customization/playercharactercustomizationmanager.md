---
title: "PlayerCharacterCustomizationManager"
description: "A player's cosmetics and equipment visuals, shared by every handler (body or dummy) attached to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCharacterCustomizationManager

A **class** in `Root.Township`, `Alta.Customization`.

A player's cosmetics and equipment visuals, shared by every handler (body or dummy) attached to it. Reached through `player.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCharacterCustomizationManager()"}</code> | Creates a `PlayerCharacterCustomizationManager` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internalmanager" /><code>{"private readonly "}<Link to="/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" internalManager"}</code> | The `CustomizationVisualManager` that the cosmetic and equipment wrappers and the attached handlers work through. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmetics" /><code><Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" Cosmetics { get; private set; }"}</code> | The player's cosmetic items and their history. |
| <Link id="m-equipment" /><code><Link to="/game-api/types/alta-customization/playerequipmentwrapper">{"PlayerEquipmentWrapper"}</Link>{" Equipment { get; private set; }"}</code> | The equipment worn on the character. |
| <Link id="m-handlers" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{"> Handlers { get; }"}</code> | The handlers attached now. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"void Attach("}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler)"}</code> | Attaches a customization handler so it shows these cosmetics and equipment. Refuses destroyed handlers. |
| <Link id="m-detach" /><code>{"void Detach("}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler)"}</code> | Detaches a handler so it stops following this manager. |
| <Link id="m-updatefirstperson" /><code>{"void UpdateFirstPerson("}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler)"}</code> | Refreshes a handler's first-person visuals. |

## Used in

Members of other types that take, return or hold a `PlayerCharacterCustomizationManager`:

[`CharacterDummy.Manager`](/game-api/types/alta-player/characterdummy#m-manager), [`CosmeticCustomizationManager.InitializeForPlayer`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-initializeforplayer-2), [`CosmeticCustomizationManager.Manager`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-manager), [`CosmeticCustomizationManager.StartSession`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-startsession), [`CosmeticOwnershipManager.CosmeticOwnershipManager`](/game-api/types/alta-customization/cosmeticownershipmanager#m-ctor), [`CosmeticOwnershipManager.LoadFor`](/game-api/types/alta-customization/cosmeticownershipmanager#m-loadfor-2), [`CosmeticOwnershipManager.manager`](/game-api/types/alta-customization/cosmeticownershipmanager#m-manager), [`CosmeticPresetsManager.SetupWithManager`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-setupwithmanager), [`CosmeticPresetTrophy.Manager`](/game-api/types/alta-customization/cosmeticpresettrophy#m-manager), [`ICustomizationHandler.Manager`](/game-api/types/alta-customization/icustomizationhandler#m-manager), [`ICustomizationHandler.SetManager`](/game-api/types/alta-customization/icustomizationhandler#m-setmanager), [`PlayerCustomizationHandler.Manager`](/game-api/types/alta-customization/playercustomizationhandler#m-manager), [`PlayerCustomizationHandler.onManagerUpdated`](/game-api/types/alta-customization/playercustomizationhandler#m-onmanagerupdated), [`PlayerCustomizationHandler.SetManager`](/game-api/types/alta-customization/playercustomizationhandler#m-setmanager), [`ShopInterface.manager`](/game-api/types/alta-customization/shopinterface#m-manager), [`PlayerLikeSpectralGhost.manager`](/game-api/types/alta-intelligence/playerlikespectralghost#m-manager), [`IPlayer.Customization`](/game-api/types/alta-networking/iplayer#m-customization), [`LocalPlayerAdvertisingTrophy.localManager`](/game-api/types/global-i-l/localplayeradvertisingtrophy#m-localmanager), [`ModellingCharacter.manager`](/game-api/types/global-m-o/modellingcharacter#m-manager), [`Player.Customization`](/game-api/types/global-p/player#m-customization).
