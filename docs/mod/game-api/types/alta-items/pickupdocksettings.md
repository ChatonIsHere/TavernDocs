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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupDockSettings.Create`](/mod/game-api/types/alta-items/pickupdocksettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/pickupdocksettings-create)
- **Documented in** [Docks](/mod/game-api/items/docks#pickupdocksettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>42 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowadditionaldocks" /><code>{"private bool allowAdditionalDocks"}</code> | <span className="api-desc">Backing field for `AllowAdditionalDocks`.</span> |
| <Link id="m-allowcontainerinteraction" /><code>{"private bool allowContainerInteraction"}</code> | <span className="api-desc">Backing field for `AllowContainerInteraction`.</span> |
| <Link id="m-allowphysicaljoints" /><code>{"private bool allowPhysicalJoints"}</code> | <span className="api-desc">Backing field for `AllowPhysicalJoints`.</span> |
| <Link id="m-allowscrafting" /><code>{"private bool allowsCrafting"}</code> | <span className="api-desc">Backing field for `AllowsCrafting`.</span> |
| <Link id="m-dockedscalemultiplier" /><code>{"private float dockedScaleMultiplier"}</code> | <span className="api-desc">Backing field for `DockedScaleMultiplier`.</span> |
| <Link id="m-excludedtags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> excludedTags"}</code> | <span className="api-desc">Backing field for `ExcludedTags`.</span> |
| <Link id="m-hapticonhover" /><code>{"private float hapticOnHover"}</code> | <span className="api-desc">Backing field for `HapticOnHover`.</span> |
| <Link id="m-hapticpassthrough" /><code>{"private AnimationCurve hapticPassThrough"}</code> | <span className="api-desc">Backing field for `HapticPassThrough`.</span> |
| <Link id="m-haveinteractormemory" /><code>{"private bool haveInteractorMemory"}</code> | <span className="api-desc">Backing field for `HaveInteractorMemory`.</span> |
| <Link id="m-hoveroff" /><code>{"private AnimationCurve hoverOff"}</code> | <span className="api-desc">Backing field for `HoverOff`.</span> |
| <Link id="m-hoveron" /><code>{"private AnimationCurve hoverOn"}</code> | <span className="api-desc">Backing field for `HoverOn`.</span> |
| <Link id="m-includeditems" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"> includedItems"}</code> | <span className="api-desc">Backing field for `IncludedItems`.</span> |
| <Link id="m-includedtags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> includedTags"}</code> | <span className="api-desc">Backing field for `IncludedTags`.</span> |
| <Link id="m-isacceptingtransientpickups" /><code>{"private bool isAcceptingTransientPickups"}</code> | <span className="api-desc">Backing field for `IsAcceptingTransientPickups`.</span> |
| <Link id="m-isactiveinequipmentmode" /><code>{"private bool isActiveInEquipmentMode"}</code> | <span className="api-desc">Backing field for `IsActiveInEquipmentMode`.</span> |
| <Link id="m-isallowingcrafteditems" /><code>{"private bool isAllowingCraftedItems"}</code> | <span className="api-desc">Backing field for `IsAllowingCraftedItems`.</span> |
| <Link id="m-isallowingcumbersomeitems" /><code>{"private bool isAllowingCumbersomeItems"}</code> | <span className="api-desc">Backing field for `IsAllowingCumbersomeItems`.</span> |
| <Link id="m-isallowingfirefromtags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> isAllowingFireFromTags"}</code> | <span className="api-desc">Items with any of these tags may keep burning while docked. Read by `IsAllowingFireForPickup`.</span> |
| <Link id="m-isallowingglowingitems" /><code>{"private bool isAllowingGlowingItems"}</code> | <span className="api-desc">Backing field for `IsAllowingGlowingItems`.</span> |
| <Link id="m-isallowingsubdocking" /><code>{"private bool isAllowingSubDocking"}</code> | <span className="api-desc">Backing field for `IsAllowingSubDocking`.</span> |
| <Link id="m-isdockingautomatic" /><code>{"private bool isDockingAutomatic"}</code> | <span className="api-desc">Backing field for `IsDockingAutomatic`.</span> |
| <Link id="m-isgrabbable" /><code>{"private bool isGrabbable"}</code> | <span className="api-desc">Backing field for `IsGrabbable`.</span> |
| <Link id="m-ishanddockingallowed" /><code>{"private bool isHandDockingAllowed"}</code> | <span className="api-desc">Backing field for `IsHandDockingAllowed`.</span> |
| <Link id="m-islengthbasedpositioning" /><code>{"private bool isLengthBasedPositioning"}</code> | <span className="api-desc">Backing field for `IsLengthBasedPositioning`.</span> |
| <Link id="m-ismultistackingallowed" /><code>{"private bool isMultiStackingAllowed"}</code> | <span className="api-desc">Backing field for `IsMultiStackingAllowed`.</span> |
| <Link id="m-isphysicaltriggersonly" /><code>{"private bool isPhysicalTriggersOnly"}</code> | <span className="api-desc">Backing field for `IsPhysicalTriggersOnly`.</span> |
| <Link id="m-isplayingaddedtosound" /><code>{"private bool isPlayingAddedToSound"}</code> | <span className="api-desc">Backing field for `IsPlayingAddedToSound`.</span> |
| <Link id="m-isplayinghoveroversound" /><code>{"private bool isPlayingHoverOverSound"}</code> | <span className="api-desc">Backing field for `IsPlayingHoverOverSound`.</span> |
| <Link id="m-isplayingremovedfromsound" /><code>{"private bool isPlayingRemovedFromSound"}</code> | <span className="api-desc">Backing field for `IsPlayingRemovedFromSound`.</span> |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | <span className="api-desc">Backing field for `IsSnapping`. True by default; the tooltip says scaling into place is never used.</span> |
| <Link id="m-isstackingdisabled" /><code>{"private bool isStackingDisabled"}</code> | <span className="api-desc">Backing field for `IsStackingDisabled`.</span> |
| <Link id="m-isstackingenforced" /><code>{"private bool isStackingEnforced"}</code> | <span className="api-desc">Backing field for `IsStackingEnforced`.</span> |
| <Link id="m-istintingwithvalue" /><code>{"private bool isTintingWithValue"}</code> | <span className="api-desc">Backing field for `IsTintingWithValue`.</span> |
| <Link id="m-maintainphysicallayers" /><code>{"private LayerMask maintainPhysicalLayers"}</code> | <span className="api-desc">Backing field for `MaintainPhysicalLayers`: colliders on these layers stay on while docked.</span> |
| <Link id="m-maxcontainedstacks" /><code>{"private int maxContainedStacks"}</code> | <span className="api-desc">Backing field for `MaxContainedStacks`. 1 by default.</span> |
| <Link id="m-maximumcraftingsize" /><code>{"private int maximumCraftingSize"}</code> | <span className="api-desc">Backing field for `MaximumCraftingSize`. -1 by default.</span> |
| <Link id="m-minimumcraftingsize" /><code>{"private int minimumCraftingSize"}</code> | <span className="api-desc">Backing field for `MinimumCraftingSize`. -1 by default.</span> |
| <Link id="m-physicaltags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> physicalTags"}</code> | <span className="api-desc">Items with any of these tags stay physical (colliders on) while docked. Read by `IsPhysical`.</span> |
| <Link id="m-scaleduration" /><code>{"private float scaleDuration"}</code> | <span className="api-desc">Backing field for `ScaleDuration`.</span> |
| <Link id="m-scalingtags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> scalingTags"}</code> | <span className="api-desc">Backing field for `ScalingTags`.</span> |
| <Link id="m-subdockpriority" /><code>{"private int subDockPriority"}</code> | <span className="api-desc">Backing field for `SubDockPriority`.</span> |
| <Link id="m-visualsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{" visualSettings"}</code> | <span className="api-desc">Backing field for `VisualSettings`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowadditionaldocks-2" /><code>{"bool AllowAdditionalDocks { get; }"}</code> | <span className="api-desc">When false, additional owned docks on a pickup in this dock turn off their pickup range.</span> |
| <Link id="m-allowcontainerinteraction-2" /><code>{"bool AllowContainerInteraction { get; }"}</code> | <span className="api-desc">Whether a container (such as a bag) docked here can still be opened and used.</span> |
| <Link id="m-allowphysicaljoints-2" /><code>{"bool AllowPhysicalJoints { get; }"}</code> | <span className="api-desc">Whether physical items can be held in place with stabilising joints.</span> |
| <Link id="m-allowscrafting-2" /><code>{"bool AllowsCrafting { get; }"}</code> | <span className="api-desc">Whether a pickup docked here can be crafted with. Undocked pickups always can.</span> |
| <Link id="m-dockedscalemultiplier-2" /><code>{"float DockedScaleMultiplier { get; }"}</code> | <span className="api-desc">Extra scale applied to pickups that shrink into this dock.</span> |
| <Link id="m-excludedtags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> ExcludedTags { get; }"}</code> | <span className="api-desc">Items with any of these tags are refused, unless listed in `IncludedItems`.</span> |
| <Link id="m-hapticonhover-2" /><code>{"float HapticOnHover { get; }"}</code> | <span className="api-desc">Strength of the controller pulse when hovering over the dock (0 for none).</span> |
| <Link id="m-hapticpassthrough-2" /><code>{"AnimationCurve HapticPassThrough { get; }"}</code> | <span className="api-desc">Haptic curve played when a hand passes through the dock.</span> |
| <Link id="m-haveinteractormemory-2" /><code>{"bool HaveInteractorMemory { get; }"}</code> | <span className="api-desc">Remembers where each hand grabbed a docked item, so grabbing it again uses the same grip (if the player's setting allows it).</span> |
| <Link id="m-hoveroff-2" /><code>{"AnimationCurve HoverOff { get; }"}</code> | <span className="api-desc">Scale curve for when a hand stops hovering.</span> |
| <Link id="m-hoveron-2" /><code>{"AnimationCurve HoverOn { get; }"}</code> | <span className="api-desc">Scale curve for when a hand starts hovering.</span> |
| <Link id="m-includeditems-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"> IncludedItems { get; }"}</code> | <span className="api-desc">Items always accepted, whatever their tags.</span> |
| <Link id="m-includedtags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> IncludedTags { get; }"}</code> | <span className="api-desc">Items with any of these tags are accepted, unless they also have an excluded tag.</span> |
| <Link id="m-isacceptingtransientpickups-2" /><code>{"bool IsAcceptingTransientPickups { get; }"}</code> | <span className="api-desc">Whether transient pickups can dock here, including from automatic dock areas.</span> |
| <Link id="m-isactiveinequipmentmode-2" /><code>{"bool IsActiveInEquipmentMode { get; }"}</code> | <span className="api-desc">Whether the dock is active in equipment mode. Not read anywhere in this build.</span> |
| <Link id="m-isallowingcrafteditems-2" /><code>{"bool IsAllowingCraftedItems { get; }"}</code> | <span className="api-desc">Whether crafted items can dock here.</span> |
| <Link id="m-isallowingcumbersomeitems-2" /><code>{"bool IsAllowingCumbersomeItems { get; }"}</code> | <span className="api-desc">Whether cumbersome items are allowed. Not read anywhere in this build.</span> |
| <Link id="m-isallowingglowingitems-2" /><code>{"bool IsAllowingGlowingItems { get; }"}</code> | <span className="api-desc">Keeps the lights of shrunken items on while docked.</span> |
| <Link id="m-isallowingsubdocking-2" /><code>{"bool IsAllowingSubDocking { get; }"}</code> | <span className="api-desc">Lets a wrong item go into a dock on the already docked pickup instead, picking by `SubDockPriority`.</span> |
| <Link id="m-isdockingautomatic-2" /><code>{"bool IsDockingAutomatic { get; }"}</code> | <span className="api-desc">Docks a held item as soon as the local player's hand moves it over the dock.</span> |
| <Link id="m-isgrabbable-2" /><code>{"bool IsGrabbable { get; }"}</code> | <span className="api-desc">Whether hands can interact with the dock at all.</span> |
| <Link id="m-ishanddockingallowed-2" /><code>{"bool IsHandDockingAllowed { get; }"}</code> | <span className="api-desc">When false, items can only be docked by code or physics, not by a hand.</span> |
| <Link id="m-islengthbasedpositioning-2" /><code>{"bool IsLengthBasedPositioning { get; }"}</code> | <span className="api-desc">Scales the docked position offset by the pickup's store scale modifier when not shrinking.</span> |
| <Link id="m-ismultistackingallowed-2" /><code>{"bool IsMultiStackingAllowed { get; }"}</code> | <span className="api-desc">Allows different item types in the dock at once. Otherwise only more of the same stackable item.</span> |
| <Link id="m-isphysicaltriggersonly-2" /><code>{"bool IsPhysicalTriggersOnly { get; }"}</code> | <span className="api-desc">Physical docked items keep their colliders only as triggers.</span> |
| <Link id="m-isplayingaddedtosound-2" /><code>{"bool IsPlayingAddedToSound { get; }"}</code> | <span className="api-desc">Plays the sound when an item is docked.</span> |
| <Link id="m-isplayinghoveroversound-2" /><code>{"bool IsPlayingHoverOverSound { get; }"}</code> | <span className="api-desc">Plays the sound when hovering an item over the dock.</span> |
| <Link id="m-isplayingremovedfromsound-2" /><code>{"bool IsPlayingRemovedFromSound { get; }"}</code> | <span className="api-desc">Plays the sound when an item is taken out.</span> |
| <Link id="m-issnapping-2" /><code>{"bool IsSnapping { get; }"}</code> | <span className="api-desc">Snap items straight into place instead of scaling in. The tooltip says scaling is never used because it causes problems.</span> |
| <Link id="m-isstackingdisabled-2" /><code>{"bool IsStackingDisabled { get; }"}</code> | <span className="api-desc">Stops stacking more of the same item, and treats pouches as normal items.</span> |
| <Link id="m-isstackingenforced-2" /><code>{"bool IsStackingEnforced { get; }"}</code> | <span className="api-desc">Refuses items that are not stackable.</span> |
| <Link id="m-istintingwithvalue-2" /><code>{"bool IsTintingWithValue { get; }"}</code> | <span className="api-desc">Tints the dock visuals with the docked item's current value.</span> |
| <Link id="m-maintainphysicallayers-2" /><code>{"LayerMask MaintainPhysicalLayers { get; }"}</code> | <span className="api-desc">Layers of colliders that stay on while docked.</span> |
| <Link id="m-maxcontainedstacks-2" /><code>{"int MaxContainedStacks { get; }"}</code> | <span className="api-desc">How many full stacks the dock holds. -1 for no limit.</span> |
| <Link id="m-maximumcraftingsize-2" /><code>{"int MaximumCraftingSize { get; }"}</code> | <span className="api-desc">Largest item or crafting part size accepted. -1 for no limit.</span> |
| <Link id="m-minimumcraftingsize-2" /><code>{"int MinimumCraftingSize { get; }"}</code> | <span className="api-desc">Smallest item or crafting part size accepted. -1 for no limit.</span> |
| <Link id="m-scaleduration-2" /><code>{"float ScaleDuration { get; }"}</code> | <span className="api-desc">Seconds to scale in and out when scaling instead of snapping.</span> |
| <Link id="m-scalingtags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> ScalingTags { get; }"}</code> | <span className="api-desc">Items with these tags shrink into the dock (like a pouch or inventory slot).</span> |
| <Link id="m-subdockpriority-2" /><code>{"int SubDockPriority { get; }"}</code> | <span className="api-desc">Priority used to choose between sub-docks when sub-docking.</span> |
| <Link id="m-visualsettings-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{" VisualSettings { get; }"}</code> | <span className="api-desc">Optional visual settings that change the dock's look with what it holds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isallowingfireforpickup" /><code>{"bool IsAllowingFireForPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">True when the pickup has one of the tags allowed to keep burning while docked here.</span> |
| <Link id="m-isphysical" /><code>{"bool IsPhysical("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">True when the item has one of the tags that keep it physical (colliders on) while docked.</span> |

## Used in

Members of other types that take, return or hold a `PickupDockSettings`:

<div className="api-used-in">

[`QuickDrawTrigger.validDocks`](/mod/game-api/types/alta-crafting/quickdrawtrigger#m-validdocks), [`QuickDrawTrigger.ValidDocks`](/mod/game-api/types/alta-crafting/quickdrawtrigger#m-validdocks-2), [`Item.GetPositioning`](/mod/game-api/types/alta-items/item#m-getpositioning), [`Item.CustomDockPositioning.CustomDockPositioning`](/mod/game-api/types/alta-items/item-customdockpositioning#m-ctor), [`Item.CustomDockPositioning.dockType`](/mod/game-api/types/alta-items/item-customdockpositioning#m-docktype), [`Item.CustomDockPositioning.Type`](/mod/game-api/types/alta-items/item-customdockpositioning#m-type), [`PickupDock.settings`](/mod/game-api/types/alta-items/pickupdock#m-settings), [`PickupDock.Settings`](/mod/game-api/types/alta-items/pickupdock#m-settings-2), [`IRespawnShrineSettings.ResourceType`](/mod/game-api/types/game-other-namespaces/irespawnshrinesettings#m-resourcetype), [`RespawnShrineData.resourceType`](/mod/game-api/types/game-other-namespaces/respawnshrinedata#m-resourcetype), [`RespawnShrineData.ResourceType`](/mod/game-api/types/game-other-namespaces/respawnshrinedata#m-resourcetype-2), [`RespawnShrineFuelDisplay.SpawnFuelItem`](/mod/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-spawnfuelitem), [`RespawnShrineFuelDisplay.UpdateDisplay`](/mod/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-updatedisplay), [`CommonPrefabs.pouchDockSettings`](/mod/game-api/types/global-c-d/commonprefabs#m-pouchdocksettings), [`CommonPrefabs.PouchDockSettings`](/mod/game-api/types/global-c-d/commonprefabs#m-pouchdocksettings-2), [`DockObjectTask.possibleDocks`](/mod/game-api/types/global-c-d/dockobjecttask#m-possibledocks), [`DockObjectTask.targetDocksHash`](/mod/game-api/types/global-c-d/dockobjecttask#m-targetdockshash), [`DockObjectTaskArgument.DockObjectTaskArgument`](/mod/game-api/types/global-c-d/dockobjecttaskargument#m-ctor), [`DockObjectTaskArgument.DockSettings`](/mod/game-api/types/global-c-d/dockobjecttaskargument#m-docksettings), [`GrabPoint.enabledFromDocks`](/mod/game-api/types/global-e-h/grabpoint#m-enabledfromdocks), [`GrabPoint.EnabledFromDocks`](/mod/game-api/types/global-e-h/grabpoint#m-enabledfromdocks-2), [`PickupDockedFilter.onlyFor`](/mod/game-api/types/global-p/pickupdockedfilter#m-onlyfor), [`StorageStatParameters.pickupDockSettings`](/mod/game-api/types/global-s/storagestatparameters#m-pickupdocksettings), [`StorageStatParameters.WeightMultiplierDockSettings`](/mod/game-api/types/global-s/storagestatparameters#m-weightmultiplierdocksettings).

</div>
