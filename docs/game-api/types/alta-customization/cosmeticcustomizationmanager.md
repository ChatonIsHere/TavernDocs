---
title: "CosmeticCustomizationManager"
description: "Runs the customization room for the local player: randomize, undo, redo, exit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticCustomizationManager

A **class** in `Root.Township`, `Alta.Customization`.

Runs the customization room for the local player: randomize, undo, redo, exit.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticCustomizationManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cacheredopossible" /><code>{"private bool cacheRedoPossible"}</code> |  |
| <Link id="m-cacheundopossible" /><code>{"private bool cacheUndoPossible"}</code> |  |
| <Link id="m-categoryscroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" categoryScroller"}</code> |  |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> |  |
| <Link id="m-detachableparts" /><code>{"private GameObject[] detachableParts"}</code> |  |
| <Link id="m-editableslots" /><code>{"private "}<Link to="/game-api/types/alta-customization/editablecosmeticslot">{"EditableCosmeticSlot"}</Link>{"[] editableSlots"}</code> |  |
| <Link id="m-israndomizing" /><code>{"private bool isRandomizing"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-originaldata" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" originalData"}</code> |  |
| <Link id="m-owned" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |  |
| <Link id="m-redopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" redoPossibleChanged"}</code> |  |
| <Link id="m-undopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" undoPossibleChanged"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationhandler-2" /><code><Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" CustomizationHandler { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; private set; }"}</code> |  |
| <Link id="m-owned-2" /><code><Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" Owned { get; }"}</code> |  |
| <Link id="m-session" /><code><Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" Session { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-endbuttonpressed" /><code>{"event Action EndButtonPressed"}</code> |  |
| <Link id="m-oninitialized" /><code>{"event Action OnInitialized"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-defaulttooriginal" /><code>{"async void DefaultToOriginal()"}</code> |  |
| <Link id="m-exitcustomizationroom" /><code>{"void ExitCustomizationRoom("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |
| <Link id="m-exitcustomizationroom-2" /><code>{"void ExitCustomizationRoom()"}</code> |  |
| <Link id="m-getmoredata" /><code>{"static uint[] GetMoreData(uint[] oldData, ref uint wordIndex)"}</code> |  |
| <Link id="m-initializeforplayer" /><code>{"async void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned)"}</code> |  |
| <Link id="m-initializeforplayer-2" /><code>{"async Task InitializeForPlayer("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned)"}</code> |  |
| <Link id="m-isusingonlyowneditems" /><code>{"bool IsUsingOnlyOwnedItems()"}</code> |  |
| <Link id="m-randomize" /><code>{"async void Randomize()"}</code> |  |
| <Link id="m-redo" /><code>{"void Redo()"}</code> |  |
| <Link id="m-undo" /><code>{"void Undo()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onitempushed" /><code>{"private void OnItemPushed()"}</code> |  |
| <Link id="m-randomize-2" /><code>{"private void Randomize("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |
| <Link id="m-startsession" /><code>{"private async Task StartSession("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-updatecache" /><code>{"private void UpdateCache()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CosmeticCustomizationManager`:

[`CategoryScrollManager.customizationManager`](/game-api/types/alta-customization/categoryscrollmanager#m-customizationmanager), [`CategoryScrollManager.CustomizationManager`](/game-api/types/alta-customization/categoryscrollmanager#m-customizationmanager-2), [`CosmeticPresetsManager.customizationManager`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-customizationmanager), [`MainMenuCustomizationInterface.customizationInterface`](/game-api/types/alta-customization/mainmenucustomizationinterface#m-customizationinterface), [`MainMenuShopInterface.customizationManager`](/game-api/types/alta-customization/mainmenushopinterface#m-customizationmanager), [`ScrollManager.customizationManager`](/game-api/types/alta-customization/scrollmanager#m-customizationmanager), [`ScrollManager.CustomizationManager`](/game-api/types/alta-customization/scrollmanager#m-customizationmanager-2), [`CustomizationState.customizationRoom`](/game-api/types/alta-player/customizationstate#m-customizationroom), [`CustomizationStateSettings.customizationRoomPrefab`](/game-api/types/game-other-namespaces/customizationstatesettings#m-customizationroomprefab), [`CustomizationStateSettings.CustomizationRoomPrefab`](/game-api/types/game-other-namespaces/customizationstatesettings#m-customizationroomprefab-2), [`PaintBrush.manager`](/game-api/types/global-p/paintbrush#m-manager).
