---
title: "CosmeticCustomizationManager"
description: "Runs the cosmetic customization room: attaches a player's cosmetics to the dummy, wires up the editable slots and handles undo, redo, randomize and exit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticCustomizationManager

A **class** in `Root.Township`, `Alta.Customization`.

Runs the cosmetic customization room: attaches a player's cosmetics to the dummy, wires up the editable slots and handles undo, redo, randomize and exit. Client side, a component in the customization room.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticCustomizationManager()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cacheredopossible" /><code>{"private bool cacheRedoPossible"}</code> | Last redo state sent to `redoPossibleChanged`. |
| <Link id="m-cacheundopossible" /><code>{"private bool cacheUndoPossible"}</code> | Last undo state sent to `undoPossibleChanged`. |
| <Link id="m-categoryscroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" categoryScroller"}</code> | Scroller of cosmetic categories, shown on initialize. |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> | Backing field for `CustomizationHandler`, attached to the player's customization manager. |
| <Link id="m-detachableparts" /><code>{"private GameObject[] detachableParts"}</code> | Objects destroyed with this manager. |
| <Link id="m-editableslots" /><code>{"private "}<Link to="/game-api/types/alta-customization/editablecosmeticslot">{"EditableCosmeticSlot"}</Link>{"[] editableSlots"}</code> | Cosmetic slots activated with the player's cosmetics on initialize. |
| <Link id="m-israndomizing" /><code>{"private bool isRandomizing"}</code> | Stops `Randomize` running twice at once. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-originaldata" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" originalData"}</code> | Cosmetics as they were when customizing started; `DefaultToOriginal` restores them. |
| <Link id="m-owned" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned"}</code> | Backing field for `Owned`. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player being customized, kept to unhook input on destroy. |
| <Link id="m-redopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" redoPossibleChanged"}</code> | Unity event raised with whether redo is now possible. |
| <Link id="m-undopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" undoPossibleChanged"}</code> | Unity event raised with whether undo is now possible. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationhandler-2" /><code><Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" CustomizationHandler { get; }"}</code> | The `PlayerCustomizationHandler` (the character dummy) shown in the room. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; private set; }"}</code> | The player's customization manager currently attached to the room. |
| <Link id="m-owned-2" /><code><Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" Owned { get; }"}</code> | The ownership manager used to decide which items can be picked or randomized. |
| <Link id="m-session" /><code><Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" Session { get; private set; }"}</code> | The addressable loading session used for cosmetic assets while the room is open. Disposed on destroy. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-endbuttonpressed" /><code>{"event Action EndButtonPressed"}</code> | Raised when the player chooses to leave the room, by button or debug input. |
| <Link id="m-oninitialized" /><code>{"event Action OnInitialized"}</code> | Raised once the room has finished attaching to a customization manager. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-defaulttooriginal" /><code>{"async void DefaultToOriginal()"}</code> | Reloads the cosmetics the player had when the room was opened, undoing all changes. |
| <Link id="m-exitcustomizationroom" /><code>{"void ExitCustomizationRoom("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | Raises `EndButtonPressed`. Does not unload anything itself. |
| <Link id="m-exitcustomizationroom-2" /><code>{"void ExitCustomizationRoom()"}</code> | Raises `EndButtonPressed`. Does not unload anything itself. |
| <Link id="m-getmoredata" /><code>{"static uint[] GetMoreData(uint[] oldData, ref uint wordIndex)"}</code> | Returns a pooled `uint` buffer twice the size of the old one (128 if none), copying the old data across and releasing it. |
| <Link id="m-initializeforplayer" /><code>{"async void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned)"}</code> | Attaches a player's cosmetics to the dummy and activates the slots. The `Player` overload also randomizes an empty outfit. |
| <Link id="m-initializeforplayer-2" /><code>{"async Task InitializeForPlayer("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned)"}</code> | Attaches a player's cosmetics to the dummy and activates the slots. The `Player` overload also randomizes an empty outfit. |
| <Link id="m-isusingonlyowneditems" /><code>{"bool IsUsingOnlyOwnedItems()"}</code> | True if every equipped cosmetic item is in the player's purchased list. |
| <Link id="m-randomize" /><code>{"async void Randomize()"}</code> | Randomizes the outfit using only owned items. Ignored while a randomize is already running. |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | Redoes the last undone cosmetic change and updates the undo and redo button events. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Undoes the last cosmetic change and updates the undo and redo button events. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the cosmetics session, destroys the handler and detachable parts, and unhooks the debug inputs. |
| <Link id="m-onitempushed" /><code>{"private void OnItemPushed()"}</code> | Called when the cosmetic history gets a new entry; refreshes the undo and redo state. |
| <Link id="m-randomize-2" /><code>{"private void Randomize("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | Randomizes the outfit using only owned items. Ignored while a randomize is already running. |
| <Link id="m-startsession" /><code>{"private async Task StartSession("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | Starts an addressable session on the player's cosmetics if one isn't running. |
| <Link id="m-updatecache" /><code>{"private void UpdateCache()"}</code> | Fires `undoPossibleChanged` and `redoPossibleChanged` when the history's undo or redo state changes. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticCustomizationManager`:

[`CategoryScrollManager.customizationManager`](/game-api/types/alta-customization/categoryscrollmanager#m-customizationmanager), [`CategoryScrollManager.CustomizationManager`](/game-api/types/alta-customization/categoryscrollmanager#m-customizationmanager-2), [`CosmeticPresetsManager.customizationManager`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-customizationmanager), [`MainMenuCustomizationInterface.customizationInterface`](/game-api/types/alta-customization/mainmenucustomizationinterface#m-customizationinterface), [`MainMenuShopInterface.customizationManager`](/game-api/types/alta-customization/mainmenushopinterface#m-customizationmanager), [`ScrollManager.customizationManager`](/game-api/types/alta-customization/scrollmanager#m-customizationmanager), [`ScrollManager.CustomizationManager`](/game-api/types/alta-customization/scrollmanager#m-customizationmanager-2), [`CustomizationState.customizationRoom`](/game-api/types/alta-player/customizationstate#m-customizationroom), [`CustomizationStateSettings.customizationRoomPrefab`](/game-api/types/game-other-namespaces/customizationstatesettings#m-customizationroomprefab), [`CustomizationStateSettings.CustomizationRoomPrefab`](/game-api/types/game-other-namespaces/customizationstatesettings#m-customizationroomprefab-2), [`PaintBrush.manager`](/game-api/types/global-p/paintbrush#m-manager).
