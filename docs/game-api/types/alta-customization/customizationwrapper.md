---
title: "CustomizationWrapper"
description: "The set of cosmetics a character is wearing, by item hash, with their arguments (such as colours)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationWrapper

An **abstract class** in `Root.Township`, `Alta.Customization`.

The set of cosmetics a character is wearing, by item hash, with their arguments (such as colours). Adding an item removes anything in the same slots; changes go to an undo history and to a visual manager that dresses the character.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`IHasHistory`](/game-api/types/global-i-l/ihashistory), [`ICustomizationWrapper`](/game-api/types/alta-customization/icustomizationwrapper)
- **Derived types** [`PlayerCosmeticWrapper`](/game-api/types/alta-customization/playercosmeticwrapper), [`PlayerEquipmentWrapper`](/game-api/types/alta-customization/playerequipmentwrapper)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationWrapper("}<Link to="/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" manager)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentload" /><code>{"private CancellationTokenSource currentLoad"}</code> |  |
| <Link id="m-historymanager" /><code>{"private "}<Link to="/game-api/types/global-i-l/ihistorymanager-t">{"IHistoryManager"}</Link>{"<"}<Link to="/game-api/types/alta-customization/customizationhistoryaction">{"CustomizationHistoryAction"}</Link>{"> historyManager"}</code> |  |
| <Link id="m-historysize" /><code>{"private const int HistorySize"}</code> |  |
| <Link id="m-isgroupaction" /><code>{"private bool isGroupAction"}</code> |  |
| <Link id="m-isvisible" /><code>{"private readonly bool isVisible"}</code> |  |
| <Link id="m-items" /><code>{"private readonly HashSet<uint> items"}</code> |  |
| <Link id="m-laststate" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" lastState"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-packingcount" /><code>{"private int packingCount"}</code> |  |
| <Link id="m-primarycache" /><code>{"private readonly Dictionary<uint, IEnumerable<int>> primaryCache"}</code> |  |
| <Link id="m-tracked" /><code>{"private readonly Dictionary<int, uint> tracked"}</code> |  |
| <Link id="m-visualmanager" /><code>{"protected "}<Link to="/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" visualManager"}</code> | The visual manager that dresses the character. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[]> Arguments { get; }"}</code> | Arguments for each worn item, by hash. |
| <Link id="m-history" /><code><Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | Undo history of up to 50 changes. |
| <Link id="m-items-2" /><code>{"IEnumerable<uint> Items { get; }"}</code> | Hashes of the worn items. |
| <Link id="m-lastadded" /><code>{"uint LastAdded { get; private set; }"}</code> | Hash of the item added last. |
| <Link id="m-overrideset" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{", "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> OverrideSet { get; set; }"}</code> | Definitions to swap for others, such as a trophy body in place of the standard body. |
| <Link id="m-session" /><code><Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" Session { get; private set; }"}</code> | The addressable session used to load cosmetic assets. |
| <Link id="m-historymanager-2" /><code>{"private "}<Link to="/game-api/types/global-i-l/ihistorymanager-t">{"IHistoryManager"}</Link>{"<"}<Link to="/game-api/types/alta-customization/customizationhistoryaction">{"CustomizationHistoryAction"}</Link>{"> HistoryManager { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event Action<uint> ItemAdded"}</code> | Raised with the hash when an item is added. |
| <Link id="m-itemremoved" /><code>{"event Action<uint> ItemRemoved"}</code> | Raised with the hash when an item is removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"async Task<bool> Add(uint item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Wears an item, removing items that share its slots. Uses default arguments if none are given. |
| <Link id="m-add-2" /><code>{"bool Add("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Wears an item, removing items that share its slots. Uses default arguments if none are given. |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item)"}</code> | Reapplies an item's stored arguments to the visuals. The item must be worn. |
| <Link id="m-applystreamitems" /><code>{"void ApplyStreamItems(IEnumerable<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> items)"}</code> | Replaces everything with a list of items and arguments, as one history step. On a headless server it only records them. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes every item and clears the visuals. |
| <Link id="m-endgroupaction" /><code>{"void EndGroupAction()"}</code> | Ends a group of changes and records them as one history step. |
| <Link id="m-getarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] GetArguments(uint hash)"}</code> | Arguments for a worn item, or null. |
| <Link id="m-getconflicts" /><code>{"virtual IEnumerable<uint> GetConflicts("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" item) (iterator)"}</code> | Worn items that use any of the given visual's slots. |
| <Link id="m-getitem" /><code>{"abstract Task<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> | Loads the definition for an item hash. |
| <Link id="m-getslot" /><code>{"uint GetSlot(int slot)"}</code> | Hash of the item in a slot, or 0. |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int slot)"}</code> | Asks the visual manager whether a slot is disabled. |
| <Link id="m-isunblocked" /><code>{"virtual bool IsUnblocked("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" item)"}</code> | True if none of the visual's slots are taken. |
| <Link id="m-remove" /><code>{"virtual uint Remove(int slot, out "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, bool isPushingHistory)"}</code> | Removes an item by hash, or whatever is in a slot, and returns its arguments. |
| <Link id="m-remove-2" /><code>{"virtual void Remove(uint item, out "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, bool isPushingHistory)"}</code> | Removes an item by hash, or whatever is in a slot, and returns its arguments. |
| <Link id="m-startgroupaction" /><code>{"void StartGroupAction()"}</code> | Starts a group of changes that go into history as one step. |
| <Link id="m-startsession" /><code>{"async Task StartSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session)"}</code> | Starts an asset loading session and loads all worn items. |
| <Link id="m-stopsession" /><code>{"void StopSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session)"}</code> | Ends the given session if it is the current one. |
| <Link id="m-checkcleanmemory" /><code>{"private void CheckCleanMemory()"}</code> |  |
| <Link id="m-deregisterinternal" /><code>{"private void DeregisterInternal(uint item)"}</code> |  |
| <Link id="m-finishload" /><code>{"private void Alta.Customization.ICustomizationWrapper.FinishLoad(CancellationTokenSource source)"}</code> |  |
| <Link id="m-isprimary" /><code>{"protected virtual bool IsPrimary("}<Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" part)"}</code> | Whether a part counts as primary. True by default. |
| <Link id="m-onitemadded" /><code>{"protected virtual void OnItemAdded(uint itemDefinition)"}</code> | Raises `ItemAdded`. Subclasses can override it. |
| <Link id="m-onitemremoved" /><code>{"protected virtual void OnItemRemoved(uint itemDefinition)"}</code> | Raises `ItemRemoved`. Subclasses can override it. |
| <Link id="m-pushstatetohistory" /><code>{"private void PushStateToHistory()"}</code> |  |
| <Link id="m-startload" /><code>{"private CancellationTokenSource Alta.Customization.ICustomizationWrapper.StartLoad()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationWrapper`:

[`CosmeticPresetData.AsyncRequest`](/game-api/types/alta-customization/cosmeticpresetdata#m-asyncrequest), [`CosmeticPresetData.Request`](/game-api/types/alta-customization/cosmeticpresetdata#m-request), [`CustomizationHistoryAction.CustomizationHistoryAction`](/game-api/types/alta-customization/customizationhistoryaction#m-ctor), [`CustomizationHistoryAction.target`](/game-api/types/alta-customization/customizationhistoryaction#m-target), [`EditableSlot.Activate`](/game-api/types/alta-customization/editableslot#m-activate), [`EditableSlot.activeWrapper`](/game-api/types/alta-customization/editableslot#m-activewrapper).
