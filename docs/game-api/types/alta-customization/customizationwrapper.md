---
title: "CustomizationWrapper"
description: "Base of both wrappers. IEnumerable<uint> Items, Arguments, Task<bool> Add(uint item, CustomizationArguments arguments), undo history."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationWrapper

An **abstract class** in `Root.Township`, `Alta.Customization`.

Base of both wrappers. `IEnumerable<uint> Items`, `Arguments`, `Task<bool> Add(uint item, CustomizationArguments[] arguments)`, undo history.

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
| <Link id="m-visualmanager" /><code>{"protected "}<Link to="/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" visualManager"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[]> Arguments { get; }"}</code> |  |
| <Link id="m-history" /><code><Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> |  |
| <Link id="m-items-2" /><code>{"IEnumerable<uint> Items { get; }"}</code> |  |
| <Link id="m-lastadded" /><code>{"uint LastAdded { get; private set; }"}</code> |  |
| <Link id="m-overrideset" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{", "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> OverrideSet { get; set; }"}</code> |  |
| <Link id="m-session" /><code><Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" Session { get; private set; }"}</code> |  |
| <Link id="m-historymanager-2" /><code>{"private "}<Link to="/game-api/types/global-i-l/ihistorymanager-t">{"IHistoryManager"}</Link>{"<"}<Link to="/game-api/types/alta-customization/customizationhistoryaction">{"CustomizationHistoryAction"}</Link>{"> HistoryManager { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event Action<uint> ItemAdded"}</code> |  |
| <Link id="m-itemremoved" /><code>{"event Action<uint> ItemRemoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"async Task<bool> Add(uint item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-add-2" /><code>{"bool Add("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-applyarguments" /><code>{"void ApplyArguments(uint item)"}</code> |  |
| <Link id="m-applystreamitems" /><code>{"void ApplyStreamItems(IEnumerable<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> items)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-endgroupaction" /><code>{"void EndGroupAction()"}</code> |  |
| <Link id="m-getarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] GetArguments(uint hash)"}</code> |  |
| <Link id="m-getconflicts" /><code>{"virtual IEnumerable<uint> GetConflicts("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" item) (iterator)"}</code> |  |
| <Link id="m-getitem" /><code>{"abstract Task<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> |  |
| <Link id="m-getslot" /><code>{"uint GetSlot(int slot)"}</code> |  |
| <Link id="m-isslotdisabled" /><code>{"bool IsSlotDisabled(int slot)"}</code> |  |
| <Link id="m-isunblocked" /><code>{"virtual bool IsUnblocked("}<Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" item)"}</code> |  |
| <Link id="m-remove" /><code>{"virtual uint Remove(int slot, out "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, bool isPushingHistory)"}</code> |  |
| <Link id="m-remove-2" /><code>{"virtual void Remove(uint item, out "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, bool isPushingHistory)"}</code> |  |
| <Link id="m-startgroupaction" /><code>{"void StartGroupAction()"}</code> |  |
| <Link id="m-startsession" /><code>{"async Task StartSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session)"}</code> |  |
| <Link id="m-stopsession" /><code>{"void StopSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session)"}</code> |  |
| <Link id="m-checkcleanmemory" /><code>{"private void CheckCleanMemory()"}</code> |  |
| <Link id="m-deregisterinternal" /><code>{"private void DeregisterInternal(uint item)"}</code> |  |
| <Link id="m-finishload" /><code>{"private void Alta.Customization.ICustomizationWrapper.FinishLoad(CancellationTokenSource source)"}</code> |  |
| <Link id="m-isprimary" /><code>{"protected virtual bool IsPrimary("}<Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{" part)"}</code> |  |
| <Link id="m-onitemadded" /><code>{"protected virtual void OnItemAdded(uint itemDefinition)"}</code> |  |
| <Link id="m-onitemremoved" /><code>{"protected virtual void OnItemRemoved(uint itemDefinition)"}</code> |  |
| <Link id="m-pushstatetohistory" /><code>{"private void PushStateToHistory()"}</code> |  |
| <Link id="m-startload" /><code>{"private CancellationTokenSource Alta.Customization.ICustomizationWrapper.StartLoad()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationWrapper`:

[`CosmeticPresetData.AsyncRequest`](/game-api/types/alta-customization/cosmeticpresetdata#m-asyncrequest), [`CosmeticPresetData.Request`](/game-api/types/alta-customization/cosmeticpresetdata#m-request), [`CustomizationHistoryAction.CustomizationHistoryAction`](/game-api/types/alta-customization/customizationhistoryaction#m-ctor), [`CustomizationHistoryAction.target`](/game-api/types/alta-customization/customizationhistoryaction#m-target), [`EditableSlot.Activate`](/game-api/types/alta-customization/editableslot#m-activate), [`EditableSlot.activeWrapper`](/game-api/types/alta-customization/editableslot#m-activewrapper).
