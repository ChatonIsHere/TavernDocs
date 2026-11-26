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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticCustomizationManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cacheredopossible" /><code>{"private bool cacheRedoPossible"}</code> | <span className="api-desc">Last redo state sent to `redoPossibleChanged`.</span> |
| <Link id="m-cacheundopossible" /><code>{"private bool cacheUndoPossible"}</code> | <span className="api-desc">Last undo state sent to `undoPossibleChanged`.</span> |
| <Link id="m-categoryscroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" categoryScroller"}</code> | <span className="api-desc">Scroller of cosmetic categories, shown on initialize.</span> |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> | <span className="api-desc">Backing field for `CustomizationHandler`, attached to the player's customization manager.</span> |
| <Link id="m-detachableparts" /><code>{"private GameObject[] detachableParts"}</code> | <span className="api-desc">Objects destroyed with this manager.</span> |
| <Link id="m-editableslots" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/editablecosmeticslot">{"EditableCosmeticSlot"}</Link>{"[] editableSlots"}</code> | <span className="api-desc">Cosmetic slots activated with the player's cosmetics on initialize.</span> |
| <Link id="m-israndomizing" /><code>{"private bool isRandomizing"}</code> | <span className="api-desc">Stops `Randomize` running twice at once.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-originaldata" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" originalData"}</code> | <span className="api-desc">Cosmetics as they were when customizing started; `DefaultToOriginal` restores them.</span> |
| <Link id="m-owned" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned"}</code> | <span className="api-desc">Backing field for `Owned`.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The player being customized, kept to unhook input on destroy.</span> |
| <Link id="m-redopossiblechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" redoPossibleChanged"}</code> | <span className="api-desc">Unity event raised with whether redo is now possible.</span> |
| <Link id="m-undopossiblechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" undoPossibleChanged"}</code> | <span className="api-desc">Unity event raised with whether undo is now possible.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationhandler-2" /><code><Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" CustomizationHandler { get; }"}</code> | <span className="api-desc">The `PlayerCustomizationHandler` (the character dummy) shown in the room.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The player's customization manager currently attached to the room.</span> |
| <Link id="m-owned-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" Owned { get; }"}</code> | <span className="api-desc">The ownership manager used to decide which items can be picked or randomized.</span> |
| <Link id="m-session" /><code><Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" Session { get; private set; }"}</code> | <span className="api-desc">The addressable loading session used for cosmetic assets while the room is open. Disposed on destroy.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-endbuttonpressed" /><code>{"event Action EndButtonPressed"}</code> | <span className="api-desc">Raised when the player chooses to leave the room, by button or debug input.</span> |
| <Link id="m-oninitialized" /><code>{"event Action OnInitialized"}</code> | <span className="api-desc">Raised once the room has finished attaching to a customization manager.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-defaulttooriginal" /><code>{"async void DefaultToOriginal()"}</code> | <span className="api-desc">Reloads the cosmetics the player had when the room was opened, undoing all changes.</span> |
| <Link id="m-exitcustomizationroom" /><code>{"void ExitCustomizationRoom("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | <span className="api-desc">Raises `EndButtonPressed`. Does not unload anything itself.</span> |
| <Link id="m-exitcustomizationroom-2" /><code>{"void ExitCustomizationRoom()"}</code> | <span className="api-desc">Raises `EndButtonPressed`. Does not unload anything itself.</span> |
| <Link id="m-getmoredata" /><code>{"static uint[] GetMoreData(uint[] oldData, ref uint wordIndex)"}</code> | <span className="api-desc">Returns a pooled `uint` buffer twice the size of the old one (128 if none), copying the old data across and releasing it.</span> |
| <Link id="m-initializeforplayer" /><code>{"async void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned)"}</code> | <span className="api-desc">Attaches a player's cosmetics to the dummy and activates the slots. The `Player` overload also randomizes an empty outfit.</span> |
| <Link id="m-initializeforplayer-2" /><code>{"async Task InitializeForPlayer("}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{" owned)"}</code> | <span className="api-desc">Attaches a player's cosmetics to the dummy and activates the slots. The `Player` overload also randomizes an empty outfit.</span> |
| <Link id="m-isusingonlyowneditems" /><code>{"bool IsUsingOnlyOwnedItems()"}</code> | <span className="api-desc">True if every equipped cosmetic item is in the player's purchased list.</span> |
| <Link id="m-randomize" /><code>{"async void Randomize()"}</code> | <span className="api-desc">Randomizes the outfit using only owned items. Ignored while a randomize is already running.</span> |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | <span className="api-desc">Redoes the last undone cosmetic change and updates the undo and redo button events.</span> |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | <span className="api-desc">Undoes the last cosmetic change and updates the undo and redo button events.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the cosmetics session, destroys the handler and detachable parts, and unhooks the debug inputs.</span> |
| <Link id="m-onitempushed" /><code>{"private void OnItemPushed()"}</code> | <span className="api-desc">Called when the cosmetic history gets a new entry; refreshes the undo and redo state.</span> |
| <Link id="m-randomize-2" /><code>{"private void Randomize("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | <span className="api-desc">Randomizes the outfit using only owned items. Ignored while a randomize is already running.</span> |
| <Link id="m-startsession" /><code>{"private async Task StartSession("}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | <span className="api-desc">Starts an addressable session on the player's cosmetics if one isn't running.</span> |
| <Link id="m-updatecache" /><code>{"private void UpdateCache()"}</code> | <span className="api-desc">Fires `undoPossibleChanged` and `redoPossibleChanged` when the history's undo or redo state changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticCustomizationManager`:

<div className="api-used-in">

[`CategoryScrollManager.customizationManager`](/mod/game-api/types/alta-customization/categoryscrollmanager#m-customizationmanager), [`CategoryScrollManager.CustomizationManager`](/mod/game-api/types/alta-customization/categoryscrollmanager#m-customizationmanager-2), [`CosmeticPresetsManager.customizationManager`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-customizationmanager), [`MainMenuCustomizationInterface.customizationInterface`](/mod/game-api/types/alta-customization/mainmenucustomizationinterface#m-customizationinterface), [`MainMenuShopInterface.customizationManager`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-customizationmanager), [`ScrollManager.customizationManager`](/mod/game-api/types/alta-customization/scrollmanager#m-customizationmanager), [`ScrollManager.CustomizationManager`](/mod/game-api/types/alta-customization/scrollmanager#m-customizationmanager-2), [`CustomizationState.customizationRoom`](/mod/game-api/types/alta-player/customizationstate#m-customizationroom), [`CustomizationStateSettings.customizationRoomPrefab`](/mod/game-api/types/game-other-namespaces/customizationstatesettings#m-customizationroomprefab), [`CustomizationStateSettings.CustomizationRoomPrefab`](/mod/game-api/types/game-other-namespaces/customizationstatesettings#m-customizationroomprefab-2), [`PaintBrush.manager`](/mod/game-api/types/global-p/paintbrush#m-manager).

</div>
