---
title: "PickupDockSettings"
description: "Asset with the rules and feel of a PickupDock: which items it accepts, stacking, physics while docked, crafting limits, hover animation, haptics and sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockSettings

A **class** in `Root.Township`, `Alta.Inventory`.

Asset with the rules and feel of a `PickupDock`: which items it accepts, stacking, physics while docked, crafting limits, hover animation, haptics and sounds. Shared by many docks.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupDockSettings.Create`](/game-api/types/alta-items/pickupdocksettings-create)
- **Nested types** [`Create`](/game-api/types/alta-items/pickupdocksettings-create)
- **Documented in** [Docks](/game-api/items/docks#pickupdocksettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDockSettings()"}</code> |

## Fields

<details>
<summary>42 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowadditionaldocks" /><code>{"private bool allowAdditionalDocks"}</code> | Backing field for `AllowAdditionalDocks`. |
| <Link id="m-allowcontainerinteraction" /><code>{"private bool allowContainerInteraction"}</code> | Backing field for `AllowContainerInteraction`. |
| <Link id="m-allowphysicaljoints" /><code>{"private bool allowPhysicalJoints"}</code> | Backing field for `AllowPhysicalJoints`. |
| <Link id="m-allowscrafting" /><code>{"private bool allowsCrafting"}</code> | Backing field for `AllowsCrafting`. |
| <Link id="m-dockedscalemultiplier" /><code>{"private float dockedScaleMultiplier"}</code> | Backing field for `DockedScaleMultiplier`. |
| <Link id="m-excludedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> excludedTags"}</code> | Backing field for `ExcludedTags`. |
| <Link id="m-hapticonhover" /><code>{"private float hapticOnHover"}</code> | Backing field for `HapticOnHover`. |
| <Link id="m-hapticpassthrough" /><code>{"private AnimationCurve hapticPassThrough"}</code> | Backing field for `HapticPassThrough`. |
| <Link id="m-haveinteractormemory" /><code>{"private bool haveInteractorMemory"}</code> | Backing field for `HaveInteractorMemory`. |
| <Link id="m-hoveroff" /><code>{"private AnimationCurve hoverOff"}</code> | Backing field for `HoverOff`. |
| <Link id="m-hoveron" /><code>{"private AnimationCurve hoverOn"}</code> | Backing field for `HoverOn`. |
| <Link id="m-includeditems" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> includedItems"}</code> | Backing field for `IncludedItems`. |
| <Link id="m-includedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> includedTags"}</code> | Backing field for `IncludedTags`. |
| <Link id="m-isacceptingtransientpickups" /><code>{"private bool isAcceptingTransientPickups"}</code> | Backing field for `IsAcceptingTransientPickups`. |
| <Link id="m-isactiveinequipmentmode" /><code>{"private bool isActiveInEquipmentMode"}</code> | Backing field for `IsActiveInEquipmentMode`. |
| <Link id="m-isallowingcrafteditems" /><code>{"private bool isAllowingCraftedItems"}</code> | Backing field for `IsAllowingCraftedItems`. |
| <Link id="m-isallowingcumbersomeitems" /><code>{"private bool isAllowingCumbersomeItems"}</code> | Backing field for `IsAllowingCumbersomeItems`. |
| <Link id="m-isallowingfirefromtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> isAllowingFireFromTags"}</code> | Items with any of these tags may keep burning while docked. Read by `IsAllowingFireForPickup`. |
| <Link id="m-isallowingglowingitems" /><code>{"private bool isAllowingGlowingItems"}</code> | Backing field for `IsAllowingGlowingItems`. |
| <Link id="m-isallowingsubdocking" /><code>{"private bool isAllowingSubDocking"}</code> | Backing field for `IsAllowingSubDocking`. |
| <Link id="m-isdockingautomatic" /><code>{"private bool isDockingAutomatic"}</code> | Backing field for `IsDockingAutomatic`. |
| <Link id="m-isgrabbable" /><code>{"private bool isGrabbable"}</code> | Backing field for `IsGrabbable`. |
| <Link id="m-ishanddockingallowed" /><code>{"private bool isHandDockingAllowed"}</code> | Backing field for `IsHandDockingAllowed`. |
| <Link id="m-islengthbasedpositioning" /><code>{"private bool isLengthBasedPositioning"}</code> | Backing field for `IsLengthBasedPositioning`. |
| <Link id="m-ismultistackingallowed" /><code>{"private bool isMultiStackingAllowed"}</code> | Backing field for `IsMultiStackingAllowed`. |
| <Link id="m-isphysicaltriggersonly" /><code>{"private bool isPhysicalTriggersOnly"}</code> | Backing field for `IsPhysicalTriggersOnly`. |
| <Link id="m-isplayingaddedtosound" /><code>{"private bool isPlayingAddedToSound"}</code> | Backing field for `IsPlayingAddedToSound`. |
| <Link id="m-isplayinghoveroversound" /><code>{"private bool isPlayingHoverOverSound"}</code> | Backing field for `IsPlayingHoverOverSound`. |
| <Link id="m-isplayingremovedfromsound" /><code>{"private bool isPlayingRemovedFromSound"}</code> | Backing field for `IsPlayingRemovedFromSound`. |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | Backing field for `IsSnapping`. True by default; the tooltip says scaling into place is never used. |
| <Link id="m-isstackingdisabled" /><code>{"private bool isStackingDisabled"}</code> | Backing field for `IsStackingDisabled`. |
| <Link id="m-isstackingenforced" /><code>{"private bool isStackingEnforced"}</code> | Backing field for `IsStackingEnforced`. |
| <Link id="m-istintingwithvalue" /><code>{"private bool isTintingWithValue"}</code> | Backing field for `IsTintingWithValue`. |
| <Link id="m-maintainphysicallayers" /><code>{"private LayerMask maintainPhysicalLayers"}</code> | Backing field for `MaintainPhysicalLayers`: colliders on these layers stay on while docked. |
| <Link id="m-maxcontainedstacks" /><code>{"private int maxContainedStacks"}</code> | Backing field for `MaxContainedStacks`. 1 by default. |
| <Link id="m-maximumcraftingsize" /><code>{"private int maximumCraftingSize"}</code> | Backing field for `MaximumCraftingSize`. -1 by default. |
| <Link id="m-minimumcraftingsize" /><code>{"private int minimumCraftingSize"}</code> | Backing field for `MinimumCraftingSize`. -1 by default. |
| <Link id="m-physicaltags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> physicalTags"}</code> | Items with any of these tags stay physical (colliders on) while docked. Read by `IsPhysical`. |
| <Link id="m-scaleduration" /><code>{"private float scaleDuration"}</code> | Backing field for `ScaleDuration`. |
| <Link id="m-scalingtags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> scalingTags"}</code> | Backing field for `ScalingTags`. |
| <Link id="m-subdockpriority" /><code>{"private int subDockPriority"}</code> | Backing field for `SubDockPriority`. |
| <Link id="m-visualsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{" visualSettings"}</code> | Backing field for `VisualSettings`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowadditionaldocks-2" /><code>{"bool AllowAdditionalDocks { get; }"}</code> | When false, additional owned docks on a pickup in this dock turn off their pickup range. |
| <Link id="m-allowcontainerinteraction-2" /><code>{"bool AllowContainerInteraction { get; }"}</code> | Whether a container (such as a bag) docked here can still be opened and used. |
| <Link id="m-allowphysicaljoints-2" /><code>{"bool AllowPhysicalJoints { get; }"}</code> | Whether physical items can be held in place with stabilising joints. |
| <Link id="m-allowscrafting-2" /><code>{"bool AllowsCrafting { get; }"}</code> | Whether a pickup docked here can be crafted with. Undocked pickups always can. |
| <Link id="m-dockedscalemultiplier-2" /><code>{"float DockedScaleMultiplier { get; }"}</code> | Extra scale applied to pickups that shrink into this dock. |
| <Link id="m-excludedtags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> ExcludedTags { get; }"}</code> | Items with any of these tags are refused, unless listed in `IncludedItems`. |
| <Link id="m-hapticonhover-2" /><code>{"float HapticOnHover { get; }"}</code> | Strength of the controller pulse when hovering over the dock (0 for none). |
| <Link id="m-hapticpassthrough-2" /><code>{"AnimationCurve HapticPassThrough { get; }"}</code> | Haptic curve played when a hand passes through the dock. |
| <Link id="m-haveinteractormemory-2" /><code>{"bool HaveInteractorMemory { get; }"}</code> | Remembers where each hand grabbed a docked item, so grabbing it again uses the same grip (if the player's setting allows it). |
| <Link id="m-hoveroff-2" /><code>{"AnimationCurve HoverOff { get; }"}</code> | Scale curve for when a hand stops hovering. |
| <Link id="m-hoveron-2" /><code>{"AnimationCurve HoverOn { get; }"}</code> | Scale curve for when a hand starts hovering. |
| <Link id="m-includeditems-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> IncludedItems { get; }"}</code> | Items always accepted, whatever their tags. |
| <Link id="m-includedtags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> IncludedTags { get; }"}</code> | Items with any of these tags are accepted, unless they also have an excluded tag. |
| <Link id="m-isacceptingtransientpickups-2" /><code>{"bool IsAcceptingTransientPickups { get; }"}</code> | Whether transient pickups can dock here, including from automatic dock areas. |
| <Link id="m-isactiveinequipmentmode-2" /><code>{"bool IsActiveInEquipmentMode { get; }"}</code> | Whether the dock is active in equipment mode. Not read anywhere in this build. |
| <Link id="m-isallowingcrafteditems-2" /><code>{"bool IsAllowingCraftedItems { get; }"}</code> | Whether crafted items can dock here. |
| <Link id="m-isallowingcumbersomeitems-2" /><code>{"bool IsAllowingCumbersomeItems { get; }"}</code> | Whether cumbersome items are allowed. Not read anywhere in this build. |
| <Link id="m-isallowingglowingitems-2" /><code>{"bool IsAllowingGlowingItems { get; }"}</code> | Keeps the lights of shrunken items on while docked. |
| <Link id="m-isallowingsubdocking-2" /><code>{"bool IsAllowingSubDocking { get; }"}</code> | Lets a wrong item go into a dock on the already docked pickup instead, picking by `SubDockPriority`. |
| <Link id="m-isdockingautomatic-2" /><code>{"bool IsDockingAutomatic { get; }"}</code> | Docks a held item as soon as the local player's hand moves it over the dock. |
| <Link id="m-isgrabbable-2" /><code>{"bool IsGrabbable { get; }"}</code> | Whether hands can interact with the dock at all. |
| <Link id="m-ishanddockingallowed-2" /><code>{"bool IsHandDockingAllowed { get; }"}</code> | When false, items can only be docked by code or physics, not by a hand. |
| <Link id="m-islengthbasedpositioning-2" /><code>{"bool IsLengthBasedPositioning { get; }"}</code> | Scales the docked position offset by the pickup's store scale modifier when not shrinking. |
| <Link id="m-ismultistackingallowed-2" /><code>{"bool IsMultiStackingAllowed { get; }"}</code> | Allows different item types in the dock at once. Otherwise only more of the same stackable item. |
| <Link id="m-isphysicaltriggersonly-2" /><code>{"bool IsPhysicalTriggersOnly { get; }"}</code> | Physical docked items keep their colliders only as triggers. |
| <Link id="m-isplayingaddedtosound-2" /><code>{"bool IsPlayingAddedToSound { get; }"}</code> | Plays the sound when an item is docked. |
| <Link id="m-isplayinghoveroversound-2" /><code>{"bool IsPlayingHoverOverSound { get; }"}</code> | Plays the sound when hovering an item over the dock. |
| <Link id="m-isplayingremovedfromsound-2" /><code>{"bool IsPlayingRemovedFromSound { get; }"}</code> | Plays the sound when an item is taken out. |
| <Link id="m-issnapping-2" /><code>{"bool IsSnapping { get; }"}</code> | Snap items straight into place instead of scaling in. The tooltip says scaling is never used because it causes problems. |
| <Link id="m-isstackingdisabled-2" /><code>{"bool IsStackingDisabled { get; }"}</code> | Stops stacking more of the same item, and treats pouches as normal items. |
| <Link id="m-isstackingenforced-2" /><code>{"bool IsStackingEnforced { get; }"}</code> | Refuses items that are not stackable. |
| <Link id="m-istintingwithvalue-2" /><code>{"bool IsTintingWithValue { get; }"}</code> | Tints the dock visuals with the docked item's current value. |
| <Link id="m-maintainphysicallayers-2" /><code>{"LayerMask MaintainPhysicalLayers { get; }"}</code> | Layers of colliders that stay on while docked. |
| <Link id="m-maxcontainedstacks-2" /><code>{"int MaxContainedStacks { get; }"}</code> | How many full stacks the dock holds. -1 for no limit. |
| <Link id="m-maximumcraftingsize-2" /><code>{"int MaximumCraftingSize { get; }"}</code> | Largest item or crafting part size accepted. -1 for no limit. |
| <Link id="m-minimumcraftingsize-2" /><code>{"int MinimumCraftingSize { get; }"}</code> | Smallest item or crafting part size accepted. -1 for no limit. |
| <Link id="m-scaleduration-2" /><code>{"float ScaleDuration { get; }"}</code> | Seconds to scale in and out when scaling instead of snapping. |
| <Link id="m-scalingtags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> ScalingTags { get; }"}</code> | Items with these tags shrink into the dock (like a pouch or inventory slot). |
| <Link id="m-subdockpriority-2" /><code>{"int SubDockPriority { get; }"}</code> | Priority used to choose between sub-docks when sub-docking. |
| <Link id="m-visualsettings-2" /><code><Link to="/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{" VisualSettings { get; }"}</code> | Optional visual settings that change the dock's look with what it holds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isallowingfireforpickup" /><code>{"bool IsAllowingFireForPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | True when the pickup has one of the tags allowed to keep burning while docked here. |
| <Link id="m-isphysical" /><code>{"bool IsPhysical("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | True when the item has one of the tags that keep it physical (colliders on) while docked. |

## Used in

Members of other types that take, return or hold a `PickupDockSettings`:

[`QuickDrawTrigger.validDocks`](/game-api/types/alta-crafting/quickdrawtrigger#m-validdocks), [`QuickDrawTrigger.ValidDocks`](/game-api/types/alta-crafting/quickdrawtrigger#m-validdocks-2), [`Item.GetPositioning`](/game-api/types/alta-items/item#m-getpositioning), [`Item.CustomDockPositioning.CustomDockPositioning`](/game-api/types/alta-items/item-customdockpositioning#m-ctor), [`Item.CustomDockPositioning.dockType`](/game-api/types/alta-items/item-customdockpositioning#m-docktype), [`Item.CustomDockPositioning.Type`](/game-api/types/alta-items/item-customdockpositioning#m-type), [`PickupDock.settings`](/game-api/types/alta-items/pickupdock#m-settings), [`PickupDock.Settings`](/game-api/types/alta-items/pickupdock#m-settings-2), [`IRespawnShrineSettings.ResourceType`](/game-api/types/game-other-namespaces/irespawnshrinesettings#m-resourcetype), [`RespawnShrineData.resourceType`](/game-api/types/game-other-namespaces/respawnshrinedata#m-resourcetype), [`RespawnShrineData.ResourceType`](/game-api/types/game-other-namespaces/respawnshrinedata#m-resourcetype-2), [`RespawnShrineFuelDisplay.SpawnFuelItem`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-spawnfuelitem), [`RespawnShrineFuelDisplay.UpdateDisplay`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-updatedisplay), [`CommonPrefabs.pouchDockSettings`](/game-api/types/global-c-d/commonprefabs#m-pouchdocksettings), [`CommonPrefabs.PouchDockSettings`](/game-api/types/global-c-d/commonprefabs#m-pouchdocksettings-2), [`DockObjectTask.possibleDocks`](/game-api/types/global-c-d/dockobjecttask#m-possibledocks), [`DockObjectTask.targetDocksHash`](/game-api/types/global-c-d/dockobjecttask#m-targetdockshash), [`DockObjectTaskArgument.DockObjectTaskArgument`](/game-api/types/global-c-d/dockobjecttaskargument#m-ctor), [`DockObjectTaskArgument.DockSettings`](/game-api/types/global-c-d/dockobjecttaskargument#m-docksettings), [`GrabPoint.enabledFromDocks`](/game-api/types/global-e-h/grabpoint#m-enabledfromdocks), [`GrabPoint.EnabledFromDocks`](/game-api/types/global-e-h/grabpoint#m-enabledfromdocks-2), [`PickupDockedFilter.onlyFor`](/game-api/types/global-p/pickupdockedfilter#m-onlyfor), [`StorageStatParameters.pickupDockSettings`](/game-api/types/global-s/storagestatparameters#m-pickupdocksettings), [`StorageStatParameters.WeightMultiplierDockSettings`](/game-api/types/global-s/storagestatparameters#m-weightmultiplierdocksettings).
