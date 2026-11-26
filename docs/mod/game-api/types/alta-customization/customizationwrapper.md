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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`IHasHistory`](/mod/game-api/types/global-i-l/ihashistory), [`ICustomizationWrapper`](/mod/game-api/types/alta-customization/icustomizationwrapper)
- **Derived types** [`PlayerCosmeticWrapper`](/mod/game-api/types/alta-customization/playercosmeticwrapper), [`PlayerEquipmentWrapper`](/mod/game-api/types/alta-customization/playerequipmentwrapper)
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationWrapper("}<Link to="/mod/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" manager)"}</code> | <span className="api-desc">Creates a `CustomizationWrapper` from `manager`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-visualmanager" /><code>{"protected "}<Link to="/mod/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" visualManager"}</code> | <span className="api-desc">The visual manager that dresses the character.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentload" /><code>{"private CancellationTokenSource currentLoad"}</code> | <span className="api-desc">Cancellation token of the load in progress, if any.</span> |
| <Link id="m-historymanager" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager-t">{"IHistoryManager"}</Link>{"<"}<Link to="/mod/game-api/types/alta-customization/customizationhistoryaction">{"CustomizationHistoryAction"}</Link>{"> historyManager"}</code> | <span className="api-desc">Backing field for `History` and `HistoryManager`.</span> |
| <Link id="m-historysize" /><code>{"private const int HistorySize"}</code> | <span className="api-desc">Undo history length: 50.</span> |
| <Link id="m-isgroupaction" /><code>{"private bool isGroupAction"}</code> | <span className="api-desc">True between `StartGroupAction` and `EndGroupAction`; history pushes wait until the group ends.</span> |
| <Link id="m-isvisible" /><code>{"private readonly bool isVisible"}</code> | <span className="api-desc">Always true in this build; when false, items would be tracked without registering visuals.</span> |
| <Link id="m-items" /><code>{"private readonly HashSet<uint> items"}</code> | <span className="api-desc">Hashes of the customization items currently worn.</span> |
| <Link id="m-laststate" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" lastState"}</code> | <span className="api-desc">The last outfit snapshot pushed to history, used as the undo point for the next change.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-packingcount" /><code>{"private int packingCount"}</code> | <span className="api-desc">Number of handlers still packing cosmetics after `ApplyStreamItems`.</span> |
| <Link id="m-primarycache" /><code>{"private readonly Dictionary<uint, IEnumerable<int>> primaryCache"}</code> | <span className="api-desc">Primary slots each worn item takes, keyed by item hash, so removal can free them.</span> |
| <Link id="m-tracked" /><code>{"private readonly Dictionary<int, uint> tracked"}</code> | <span className="api-desc">Which item hash fills each primary slot.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"Dictionary<uint, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[]> Arguments { get; }"}</code> | <span className="api-desc">Arguments for each worn item, by hash.</span> |
| <Link id="m-history" /><code><Link to="/mod/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | <span className="api-desc">Undo history of up to 50 changes.</span> |
| <Link id="m-items-2" /><code>{"IEnumerable<uint> Items { get; }"}</code> | <span className="api-desc">Hashes of the worn items.</span> |
| <Link id="m-lastadded" /><code>{"uint LastAdded { get; private set; }"}</code> | <span className="api-desc">Hash of the item added last.</span> |
| <Link id="m-overrideset" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> OverrideSet { get; set; }"}</code> | <span className="api-desc">Definitions to swap for others, such as a trophy body in place of the standard body.</span> |
| <Link id="m-session" /><code><Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" Session { get; private set; }"}</code> | <span className="api-desc">The addressable session used to load cosmetic assets.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-historymanager-2" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager-t">{"IHistoryManager"}</Link>{"<"}<Link to="/mod/game-api/types/alta-customization/customizationhistoryaction">{"CustomizationHistoryAction"}</Link>{"> HistoryManager { get; }"}</code> | <span className="api-desc">Typed undo history, created on first use with room for 50 steps.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event Action<uint> ItemAdded"}</code> | <span className="api-desc">Raised with the hash when an item is added.</span> |
| <Link id="m-itemremoved" /><code>{"event Action<uint> ItemRemoved"}</code> | <span className="api-desc">Raised with the hash when an item is removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"async Task<bool> Add(uint item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Wears an item, removing items that share its slots. Uses default arguments if none are given.</span> |
| <Link id="m-add-2" /><code>{"bool Add("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Wears an item, removing items that share its slots. Uses default arguments if none are given.</span> |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item)"}</code> | <span className="api-desc">Reapplies an item's stored arguments to the visuals. The item must be worn.</span> |
| <Link id="m-applystreamitems" /><code>{"void ApplyStreamItems(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> items)"}</code> | <span className="api-desc">Replaces everything with a list of items and arguments, as one history step. On a headless server it only records them.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Removes every item and clears the visuals.</span> |
| <Link id="m-endgroupaction" /><code>{"void EndGroupAction()"}</code> | <span className="api-desc">Ends a group of changes and records them as one history step.</span> |
| <Link id="m-getarguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] GetArguments(uint hash)"}</code> | <span className="api-desc">Arguments for a worn item, or null.</span> |
| <Link id="m-getconflicts" /><code>{"virtual IEnumerable<uint> GetConflicts("}<Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" item) (iterator)"}</code> | <span className="api-desc">Worn items that use any of the given visual's slots.</span> |
| <Link id="m-getitem" /><code>{"abstract Task<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> | <span className="api-desc">Loads the definition for an item hash.</span> |
| <Link id="m-getslot" /><code>{"uint GetSlot(int slot)"}</code> | <span className="api-desc">Hash of the item in a slot, or 0.</span> |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int slot)"}</code> | <span className="api-desc">Asks the visual manager whether a slot is disabled.</span> |
| <Link id="m-isunblocked" /><code>{"virtual bool IsUnblocked("}<Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" item)"}</code> | <span className="api-desc">True if none of the visual's slots are taken.</span> |
| <Link id="m-remove" /><code>{"virtual uint Remove(int slot, out "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, bool isPushingHistory)"}</code> | <span className="api-desc">Removes an item by hash, or whatever is in a slot, and returns its arguments.</span> |
| <Link id="m-remove-2" /><code>{"virtual void Remove(uint item, out "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, bool isPushingHistory)"}</code> | <span className="api-desc">Removes an item by hash, or whatever is in a slot, and returns its arguments.</span> |
| <Link id="m-startgroupaction" /><code>{"void StartGroupAction()"}</code> | <span className="api-desc">Starts a group of changes that go into history as one step.</span> |
| <Link id="m-startsession" /><code>{"async Task StartSession("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session)"}</code> | <span className="api-desc">Starts an asset loading session and loads all worn items.</span> |
| <Link id="m-stopsession" /><code>{"void StopSession("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session)"}</code> | <span className="api-desc">Ends the given session if it is the current one.</span> |
| <Link id="m-isprimary" /><code>{"protected virtual bool IsPrimary("}<Link to="/mod/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" part)"}</code> | <span className="api-desc">Whether a part counts as primary. True by default.</span> |
| <Link id="m-onitemadded" /><code>{"protected virtual void OnItemAdded(uint itemDefinition)"}</code> | <span className="api-desc">Raises `ItemAdded`. Subclasses can override it.</span> |
| <Link id="m-onitemremoved" /><code>{"protected virtual void OnItemRemoved(uint itemDefinition)"}</code> | <span className="api-desc">Raises `ItemRemoved`. Subclasses can override it.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcleanmemory" /><code>{"private void CheckCleanMemory()"}</code> | <span className="api-desc">Counts down as each handler's cosmetic packer finishes after `ApplyStreamItems`, then unhooks itself.</span> |
| <Link id="m-deregisterinternal" /><code>{"private void DeregisterInternal(uint item)"}</code> | <span className="api-desc">Removes an item's visual from the visual manager. Logs an error if the item's definition isn't already cached.</span> |
| <Link id="m-finishload" /><code>{"private void Alta.Customization.ICustomizationWrapper.FinishLoad(CancellationTokenSource source)"}</code> | <span className="api-desc">Clears the current load token if it matches the one passed.</span> |
| <Link id="m-pushstatetohistory" /><code>{"private void PushStateToHistory()"}</code> | <span className="api-desc">Snapshots the outfit as a `CosmeticPresetData` and pushes an undo step from the last snapshot, unless a group action is running.</span> |
| <Link id="m-startload" /><code>{"private CancellationTokenSource Alta.Customization.ICustomizationWrapper.StartLoad()"}</code> | <span className="api-desc">Cancels any running load and returns a new cancellation token for the next one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationWrapper`:

<div className="api-used-in">

[`CosmeticPresetData.AsyncRequest`](/mod/game-api/types/alta-customization/cosmeticpresetdata#m-asyncrequest), [`CosmeticPresetData.Request`](/mod/game-api/types/alta-customization/cosmeticpresetdata#m-request), [`CustomizationHistoryAction.CustomizationHistoryAction`](/mod/game-api/types/alta-customization/customizationhistoryaction#m-ctor), [`CustomizationHistoryAction.target`](/mod/game-api/types/alta-customization/customizationhistoryaction#m-target), [`EditableSlot.Activate`](/mod/game-api/types/alta-customization/editableslot#m-activate), [`EditableSlot.activeWrapper`](/mod/game-api/types/alta-customization/editableslot#m-activewrapper).

</div>
