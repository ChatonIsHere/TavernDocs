---
title: "CosmeticPresetsManager"
description: "Client: runs the cosmetic preset shelf."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetsManager

A **class** in `Root.Township`, `Alta.Customization`.

Client: runs the cosmetic preset shelf. On login it loads the account's saved presets into trophies on the slots, and it makes new trophies from the current outfit.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetsManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basehandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" baseHandler"}</code> | Customization handler for the player's own outfit. |
| <Link id="m-beganusingfromstore" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" beganUsingFromStore"}</code> | Event raised when the outfit starts using items the player doesn't own. |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | The cosmetic customization manager in the room. |
| <Link id="m-handlerprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handlerPrefab"}</code> | Customization handler prefab. Not used in this class. |
| <Link id="m-isdestroyed" /><code>{"private bool isDestroyed"}</code> | Set in `OnDestroy`. |
| <Link id="m-isusingonlyowneditems" /><code>{"private bool isUsingOnlyOwnedItems"}</code> | Last known state of whether the outfit uses only owned items. |
| <Link id="m-latesttrophy" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" latestTrophy"}</code> | The last trophy made by `GetCurrentPreset`. Burned if a new one is made before it is shelved. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-newpresetsposition" /><code>{"private Transform newPresetsPosition"}</code> | Where new trophies appear. |
| <Link id="m-requestpresetfromstore" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" requestPresetFromStore"}</code> | Event raised when the outfit needs store items before it can become a preset. |
| <Link id="m-rotatingslot" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticrotatingslot">{"CosmeticRotatingSlot"}</Link>{" rotatingSlot"}</code> | A `CosmeticRotatingSlot` reference. Not used in this class. |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetslot">{"CosmeticPresetSlot"}</Link>{"[] slots"}</code> | The preset shelf slots. |
| <Link id="m-stopedusingfromstore" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" stopedUsingFromStore"}</code> | Event raised when the outfit goes back to only owned items. |
| <Link id="m-trophyprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophyPrefab"}</code> | Prefab for preset trophies. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkstorageusage" /><code>{"void CheckStorageUsage()"}</code> | Raises the store events when the outfit switches between only owned items and items from the store. |
| <Link id="m-getcurrentpreset" /><code>{"async void GetCurrentPreset()"}</code> | Makes a new trophy from the current outfit, or asks the player to buy store items first if the outfit uses any. |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Clears the slots, loads the account's presets into trophies, and deletes presets of 4 bytes or less. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Does nothing. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Marks the manager destroyed so a late login result is ignored. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Gives each slot its index and listens for the customization end button. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksavepresetifempty" /><code>{"private async void CheckSavePresetIfEmpty()"}</code> | When the player finishes customizing and no preset is saved, saves the current outfit as preset 0. |
| <Link id="m-checkstorageusage-2" /><code>{"private void CheckStorageUsage(uint definition)"}</code> | Raises the store events when the outfit switches between only owned items and items from the store. |
| <Link id="m-getnewtrophy" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" GetNewTrophy()"}</code> | Spawns a local, non-networked trophy from the prefab. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Destroys every trophy on the shelf and the latest unsaved trophy. |
| <Link id="m-setupwithmanager" /><code>{"private void SetupWithManager("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | Watches the customization manager's cosmetics for changes, or waits until the handler has one. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetsManager`:

[`MainMenuShopInterface.presetsManager`](/game-api/types/alta-customization/mainmenushopinterface#m-presetsmanager).
