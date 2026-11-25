---
title: "PickupDockSettings"
description: "Alta.Inventory.PickupDockSettings is a ScriptableObject asset that many docks share."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockSettings

A **class** in `Root.Township`, `Alta.Inventory`.

`Alta.Inventory.PickupDockSettings` is a `ScriptableObject` asset that many docks share.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupDockSettings.Create`](/game-api/types/alta-items/pickupdocksettings-create)
- **Nested types** [`Create`](/game-api/types/alta-items/pickupdocksettings-create)
- **Documented in** [Docks](/game-api/items/docks#pickupdocksettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allowadditionaldocks" /><code>{"private bool allowAdditionalDocks"}</code> |  |
| <Link id="m-allowcontainerinteraction" /><code>{"private bool allowContainerInteraction"}</code> |  |
| <Link id="m-allowphysicaljoints" /><code>{"private bool allowPhysicalJoints"}</code> |  |
| <Link id="m-allowscrafting" /><code>{"private bool allowsCrafting"}</code> |  |
| <Link id="m-dockedscalemultiplier" /><code>{"private float dockedScaleMultiplier"}</code> |  |
| <Link id="m-excludedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> excludedTags"}</code> |  |
| <Link id="m-hapticonhover" /><code>{"private float hapticOnHover"}</code> |  |
| <Link id="m-hapticpassthrough" /><code>{"private AnimationCurve hapticPassThrough"}</code> |  |
| <Link id="m-haveinteractormemory" /><code>{"private bool haveInteractorMemory"}</code> |  |
| <Link id="m-hoveroff" /><code>{"private AnimationCurve hoverOff"}</code> |  |
| <Link id="m-hoveron" /><code>{"private AnimationCurve hoverOn"}</code> |  |
| <Link id="m-includeditems" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> includedItems"}</code> |  |
| <Link id="m-includedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> includedTags"}</code> |  |
| <Link id="m-isacceptingtransientpickups" /><code>{"private bool isAcceptingTransientPickups"}</code> |  |
| <Link id="m-isactiveinequipmentmode" /><code>{"private bool isActiveInEquipmentMode"}</code> |  |
| <Link id="m-isallowingcrafteditems" /><code>{"private bool isAllowingCraftedItems"}</code> |  |
| <Link id="m-isallowingcumbersomeitems" /><code>{"private bool isAllowingCumbersomeItems"}</code> |  |
| <Link id="m-isallowingfirefromtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> isAllowingFireFromTags"}</code> |  |
| <Link id="m-isallowingglowingitems" /><code>{"private bool isAllowingGlowingItems"}</code> |  |
| <Link id="m-isallowingsubdocking" /><code>{"private bool isAllowingSubDocking"}</code> |  |
| <Link id="m-isdockingautomatic" /><code>{"private bool isDockingAutomatic"}</code> |  |
| <Link id="m-isgrabbable" /><code>{"private bool isGrabbable"}</code> |  |
| <Link id="m-ishanddockingallowed" /><code>{"private bool isHandDockingAllowed"}</code> |  |
| <Link id="m-islengthbasedpositioning" /><code>{"private bool isLengthBasedPositioning"}</code> |  |
| <Link id="m-ismultistackingallowed" /><code>{"private bool isMultiStackingAllowed"}</code> |  |
| <Link id="m-isphysicaltriggersonly" /><code>{"private bool isPhysicalTriggersOnly"}</code> |  |
| <Link id="m-isplayingaddedtosound" /><code>{"private bool isPlayingAddedToSound"}</code> |  |
| <Link id="m-isplayinghoveroversound" /><code>{"private bool isPlayingHoverOverSound"}</code> |  |
| <Link id="m-isplayingremovedfromsound" /><code>{"private bool isPlayingRemovedFromSound"}</code> |  |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> |  |
| <Link id="m-isstackingdisabled" /><code>{"private bool isStackingDisabled"}</code> |  |
| <Link id="m-isstackingenforced" /><code>{"private bool isStackingEnforced"}</code> |  |
| <Link id="m-istintingwithvalue" /><code>{"private bool isTintingWithValue"}</code> |  |
| <Link id="m-maintainphysicallayers" /><code>{"private LayerMask maintainPhysicalLayers"}</code> |  |
| <Link id="m-maxcontainedstacks" /><code>{"private int maxContainedStacks"}</code> |  |
| <Link id="m-maximumcraftingsize" /><code>{"private int maximumCraftingSize"}</code> |  |
| <Link id="m-minimumcraftingsize" /><code>{"private int minimumCraftingSize"}</code> |  |
| <Link id="m-physicaltags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> physicalTags"}</code> |  |
| <Link id="m-scaleduration" /><code>{"private float scaleDuration"}</code> |  |
| <Link id="m-scalingtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> scalingTags"}</code> |  |
| <Link id="m-subdockpriority" /><code>{"private int subDockPriority"}</code> |  |
| <Link id="m-visualsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{" visualSettings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowadditionaldocks-2" /><code>{"bool AllowAdditionalDocks { get; }"}</code> |  |
| <Link id="m-allowcontainerinteraction-2" /><code>{"bool AllowContainerInteraction { get; }"}</code> |  |
| <Link id="m-allowphysicaljoints-2" /><code>{"bool AllowPhysicalJoints { get; }"}</code> |  |
| <Link id="m-allowscrafting-2" /><code>{"bool AllowsCrafting { get; }"}</code> |  |
| <Link id="m-dockedscalemultiplier-2" /><code>{"float DockedScaleMultiplier { get; }"}</code> |  |
| <Link id="m-excludedtags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> ExcludedTags { get; }"}</code> |  |
| <Link id="m-hapticonhover-2" /><code>{"float HapticOnHover { get; }"}</code> |  |
| <Link id="m-hapticpassthrough-2" /><code>{"AnimationCurve HapticPassThrough { get; }"}</code> |  |
| <Link id="m-haveinteractormemory-2" /><code>{"bool HaveInteractorMemory { get; }"}</code> |  |
| <Link id="m-hoveroff-2" /><code>{"AnimationCurve HoverOff { get; }"}</code> |  |
| <Link id="m-hoveron-2" /><code>{"AnimationCurve HoverOn { get; }"}</code> |  |
| <Link id="m-includeditems-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> IncludedItems { get; }"}</code> |  |
| <Link id="m-includedtags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> IncludedTags { get; }"}</code> |  |
| <Link id="m-isacceptingtransientpickups-2" /><code>{"bool IsAcceptingTransientPickups { get; }"}</code> |  |
| <Link id="m-isactiveinequipmentmode-2" /><code>{"bool IsActiveInEquipmentMode { get; }"}</code> |  |
| <Link id="m-isallowingcrafteditems-2" /><code>{"bool IsAllowingCraftedItems { get; }"}</code> |  |
| <Link id="m-isallowingcumbersomeitems-2" /><code>{"bool IsAllowingCumbersomeItems { get; }"}</code> |  |
| <Link id="m-isallowingglowingitems-2" /><code>{"bool IsAllowingGlowingItems { get; }"}</code> |  |
| <Link id="m-isallowingsubdocking-2" /><code>{"bool IsAllowingSubDocking { get; }"}</code> |  |
| <Link id="m-isdockingautomatic-2" /><code>{"bool IsDockingAutomatic { get; }"}</code> |  |
| <Link id="m-isgrabbable-2" /><code>{"bool IsGrabbable { get; }"}</code> |  |
| <Link id="m-ishanddockingallowed-2" /><code>{"bool IsHandDockingAllowed { get; }"}</code> |  |
| <Link id="m-islengthbasedpositioning-2" /><code>{"bool IsLengthBasedPositioning { get; }"}</code> |  |
| <Link id="m-ismultistackingallowed-2" /><code>{"bool IsMultiStackingAllowed { get; }"}</code> |  |
| <Link id="m-isphysicaltriggersonly-2" /><code>{"bool IsPhysicalTriggersOnly { get; }"}</code> |  |
| <Link id="m-isplayingaddedtosound-2" /><code>{"bool IsPlayingAddedToSound { get; }"}</code> |  |
| <Link id="m-isplayinghoveroversound-2" /><code>{"bool IsPlayingHoverOverSound { get; }"}</code> |  |
| <Link id="m-isplayingremovedfromsound-2" /><code>{"bool IsPlayingRemovedFromSound { get; }"}</code> |  |
| <Link id="m-issnapping-2" /><code>{"bool IsSnapping { get; }"}</code> |  |
| <Link id="m-isstackingdisabled-2" /><code>{"bool IsStackingDisabled { get; }"}</code> |  |
| <Link id="m-isstackingenforced-2" /><code>{"bool IsStackingEnforced { get; }"}</code> |  |
| <Link id="m-istintingwithvalue-2" /><code>{"bool IsTintingWithValue { get; }"}</code> |  |
| <Link id="m-maintainphysicallayers-2" /><code>{"LayerMask MaintainPhysicalLayers { get; }"}</code> |  |
| <Link id="m-maxcontainedstacks-2" /><code>{"int MaxContainedStacks { get; }"}</code> |  |
| <Link id="m-maximumcraftingsize-2" /><code>{"int MaximumCraftingSize { get; }"}</code> |  |
| <Link id="m-minimumcraftingsize-2" /><code>{"int MinimumCraftingSize { get; }"}</code> |  |
| <Link id="m-scaleduration-2" /><code>{"float ScaleDuration { get; }"}</code> |  |
| <Link id="m-scalingtags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> ScalingTags { get; }"}</code> |  |
| <Link id="m-subdockpriority-2" /><code>{"int SubDockPriority { get; }"}</code> |  |
| <Link id="m-visualsettings-2" /><code><Link to="/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{" VisualSettings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isallowingfireforpickup" /><code>{"bool IsAllowingFireForPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-isphysical" /><code>{"bool IsPhysical("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupDockSettings`:

[`QuickDrawTrigger.validDocks`](/game-api/types/alta-crafting/quickdrawtrigger#m-validdocks), [`QuickDrawTrigger.ValidDocks`](/game-api/types/alta-crafting/quickdrawtrigger#m-validdocks-2), [`Item.GetPositioning`](/game-api/types/alta-items/item#m-getpositioning), [`Item.CustomDockPositioning.CustomDockPositioning`](/game-api/types/alta-items/item-customdockpositioning#m-ctor), [`Item.CustomDockPositioning.dockType`](/game-api/types/alta-items/item-customdockpositioning#m-docktype), [`Item.CustomDockPositioning.Type`](/game-api/types/alta-items/item-customdockpositioning#m-type), [`PickupDock.settings`](/game-api/types/alta-items/pickupdock#m-settings), [`PickupDock.Settings`](/game-api/types/alta-items/pickupdock#m-settings-2), [`IRespawnShrineSettings.ResourceType`](/game-api/types/game-other-namespaces/irespawnshrinesettings#m-resourcetype), [`RespawnShrineData.resourceType`](/game-api/types/game-other-namespaces/respawnshrinedata#m-resourcetype), [`RespawnShrineData.ResourceType`](/game-api/types/game-other-namespaces/respawnshrinedata#m-resourcetype-2), [`RespawnShrineFuelDisplay.SpawnFuelItem`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-spawnfuelitem), [`RespawnShrineFuelDisplay.UpdateDisplay`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-updatedisplay), [`CommonPrefabs.pouchDockSettings`](/game-api/types/global-c-d/commonprefabs#m-pouchdocksettings), [`CommonPrefabs.PouchDockSettings`](/game-api/types/global-c-d/commonprefabs#m-pouchdocksettings-2), [`DockObjectTask.possibleDocks`](/game-api/types/global-c-d/dockobjecttask#m-possibledocks), [`DockObjectTask.targetDocksHash`](/game-api/types/global-c-d/dockobjecttask#m-targetdockshash), [`DockObjectTaskArgument.DockObjectTaskArgument`](/game-api/types/global-c-d/dockobjecttaskargument#m-ctor), [`DockObjectTaskArgument.DockSettings`](/game-api/types/global-c-d/dockobjecttaskargument#m-docksettings), [`GrabPoint.enabledFromDocks`](/game-api/types/global-e-h/grabpoint#m-enabledfromdocks), [`GrabPoint.EnabledFromDocks`](/game-api/types/global-e-h/grabpoint#m-enabledfromdocks-2), [`PickupDockedFilter.onlyFor`](/game-api/types/global-p/pickupdockedfilter#m-onlyfor), [`StorageStatParameters.pickupDockSettings`](/game-api/types/global-s/storagestatparameters#m-pickupdocksettings), [`StorageStatParameters.WeightMultiplierDockSettings`](/game-api/types/global-s/storagestatparameters#m-weightmultiplierdocksettings).
