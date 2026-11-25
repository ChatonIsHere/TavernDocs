---
title: "CosmeticPresetsManager"
description: "class CosmeticPresetsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetsManager

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetsManager()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basehandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" baseHandler"}</code> |
| <Link id="m-beganusingfromstore" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" beganUsingFromStore"}</code> |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> |
| <Link id="m-handlerprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handlerPrefab"}</code> |
| <Link id="m-isdestroyed" /><code>{"private bool isDestroyed"}</code> |
| <Link id="m-isusingonlyowneditems" /><code>{"private bool isUsingOnlyOwnedItems"}</code> |
| <Link id="m-latesttrophy" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" latestTrophy"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-newpresetsposition" /><code>{"private Transform newPresetsPosition"}</code> |
| <Link id="m-requestpresetfromstore" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" requestPresetFromStore"}</code> |
| <Link id="m-rotatingslot" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticrotatingslot">{"CosmeticRotatingSlot"}</Link>{" rotatingSlot"}</code> |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetslot">{"CosmeticPresetSlot"}</Link>{"[] slots"}</code> |
| <Link id="m-stopedusingfromstore" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" stopedUsingFromStore"}</code> |
| <Link id="m-trophyprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophyPrefab"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checkstorageusage" /><code>{"void CheckStorageUsage()"}</code> |
| <Link id="m-getcurrentpreset" /><code>{"async void GetCurrentPreset()"}</code> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checksavepresetifempty" /><code>{"private async void CheckSavePresetIfEmpty()"}</code> |
| <Link id="m-checkstorageusage-2" /><code>{"private void CheckStorageUsage(uint definition)"}</code> |
| <Link id="m-getnewtrophy" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" GetNewTrophy()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-setupwithmanager" /><code>{"private void SetupWithManager("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetsManager`:

[`MainMenuShopInterface.presetsManager`](/game-api/types/alta-customization/mainmenushopinterface#m-presetsmanager).
