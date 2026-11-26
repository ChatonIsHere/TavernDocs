---
title: "Item"
description: "The item asset behind a pickup: tags, weight, stacking, dock placement, sounds, loot value and extra ItemComponents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Item

A **class** in `Root.Township`, `Alta.Inventory`.

The item asset behind a pickup: tags, weight, stacking, dock placement, sounds, loot value and extra `ItemComponent`s. A hashed value loaded from `Items/Items`; a pickup reaches it through `Pickup.Item`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<Item>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`IPageBasis`](/mod/game-api/types/alta-items/ipagebasis)
- **Derived types** [`Item`](/mod/game-api/types/alta-items/item), [`Item.Create`](/mod/game-api/types/alta-items/item-create), [`EdiblePageProvider`](/mod/game-api/types/global-e-h/ediblepageprovider), [`IngredientPageProvider`](/mod/game-api/types/global-i-l/ingredientpageprovider)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/item-create), [`CustomDockPositioning`](/mod/game-api/types/alta-items/item-customdockpositioning), [`DockPositioning`](/mod/game-api/types/alta-items/item-dockpositioning)
- **Attributes** `HashedPath`, `TypeConverter`
- **Documented in** [Items and materials](/mod/game-api/items/items-and-materials#item), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>31 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> components"}</code> | Backing list for `Components`. `GetComponent` returns the first entry matching the type and physical material. |
| <Link id="m-custompositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-customdockpositioning">{"Item.CustomDockPositioning"}</Link>{"[] customPositions"}</code> | Per dock type positions used by `GetPositioning`; an entry with no dock settings is the fallback. |
| <Link id="m-custompositionswhencrafted" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-customdockpositioning">{"Item.CustomDockPositioning"}</Link>{"[] customPositionsWhenCrafted"}</code> | Like `customPositions`, but checked first when the item is a crafted assembly. |
| <Link id="m-destroywhendocked" /><code>{"private bool destroyWhenDocked"}</code> | Backing field for `IsDestroyWhenDocked`. |
| <Link id="m-dockedstacksize" /><code>{"private int dockedStackSize"}</code> | Backing field for `DockedStackSize`: how many fit in one stack (30 by default). Docks multiply it by their max stacks. |
| <Link id="m-glyph" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> | Backing field for `Glyph`, the item's symbol used on pages. |
| <Link id="m-isassistgrabblocked" /><code>{"private bool isAssistGrabBlocked"}</code> | Backing field for `IsAssistGrabBlocked`. When true, grab assist never picks this item. |
| <Link id="m-isdisabledonsimpleserver" /><code>{"private bool isDisabledOnSimpleServer"}</code> | Backing field for `IsDisabledOnSimpleServer`. Progress commands skip such items on simple servers. |
| <Link id="m-isoverridingdefaultshrunkenscale" /><code>{"private bool isOverridingDefaultShrunkenScale"}</code> | Backing field for `IsOverridingDefaultShrunkenScale`. |
| <Link id="m-isoverridingdefaultvisualscale" /><code>{"private bool isOverridingDefaultVisualScale"}</code> | Backing field for `IsOverridingDefaultVisualScale`. |
| <Link id="m-isplayingsound" /><code>{"private bool isPlayingSound"}</code> | Backing field for `IsPlayingSound`. |
| <Link id="m-isscalingongrab" /><code>{"private bool isScalingOnGrab"}</code> | Backing field for `IsScalingOnGrab`, read by `PickupInteractionScaler` and `Pickup`. |
| <Link id="m-issnappingtohand" /><code>{"private bool isSnappingToHand"}</code> | Backing field for `IsSnappingToHand`. Read by `Pickup` when deciding how a grab moves the item to the hand. |
| <Link id="m-isstackable" /><code>{"private bool isStackable"}</code> | Backing field for `IsStackable`. |
| <Link id="m-isstackablewhencrafted" /><code>{"private bool isStackableWhenCrafted"}</code> | Backing field for `IsStackableWhenCrafted`. Docks check it for crafted items. |
| <Link id="m-isusingshrunkenvisual" /><code>{"private bool isUsingShrunkenVisual"}</code> | Backing field for `IsUsingShrunkenVisual` (true by default). |
| <Link id="m-lastcalculatedscale" /><code>{"private float lastCalculatedScale"}</code> | Read-only inspector value written through `CalculatedScale` by `PickupInteractionScaler`. |
| <Link id="m-lootcategory" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/category">{"Category"}</Link>{" lootCategory"}</code> | Backing field for `LootCategory`, the loot category used for weighted loot picks. |
| <Link id="m-lootvalue" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" lootValue"}</code> | Backing field for `LootValue`. |
| <Link id="m-normalpositioning" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" normalPositioning"}</code> | Dock position and rotation used when no custom entry matches and the dock doesn't scale items. |
| <Link id="m-overrideletgosoundeffecttype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideLetGoSoundEffectType"}</code> | Backing field for `OverrideLetGoSoundEffectType`; `None` means the default sound. |
| <Link id="m-overridepickupsoundeffecttype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overridePickUpSoundEffectType"}</code> | Backing field for `OverridePickUpSoundEffectType`; `None` means the default sound. |
| <Link id="m-overridescaleinsidevisual" /><code>{"private float overrideScaleInsideVisual"}</code> | Backing field for `OverrideScaleInsideVisual`. |
| <Link id="m-overrideshrunkenscale" /><code>{"private float overrideShrunkenScale"}</code> | Backing field for `OverrideShrunkenScale`. |
| <Link id="m-prefabhash" /><code>{"private uint prefabHash"}</code> | Network prefab hash behind `Prefab`. A zero hash logs a warning when read. |
| <Link id="m-scaledpositioning" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" scaledPositioning"}</code> | Dock position and rotation used when no custom entry matches and the dock scales items down. |
| <Link id="m-shrunkenvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrunkenVisual"}</code> | Backing field for `ShrunkenVisual`. |
| <Link id="m-size" /><code>{"private int size"}</code> | Backing field for `Size` and `HasSize`. Negative means no size; docks compare it to their min and max crafting size. |
| <Link id="m-storescale" /><code>{"private Vector3 storeScale"}</code> | Backing field for `StoreScale`: the item's scale in a scaling dock (half size by default). |
| <Link id="m-tags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> tags"}</code> | Backing field for `Tags`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight` (1 by default). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedscale" /><code>{"float CalculatedScale { set; }"}</code> | Write-only: stores the last calculated scale on the asset, shown read-only in the inspector. |
| <Link id="m-components-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> Components { get; }"}</code> | The extra `ItemComponent` data blocks on this item. |
| <Link id="m-dockedstacksize-2" /><code>{"int DockedStackSize { get; }"}</code> | How many of this item make one stack in a dock (default 30). Docks multiply it by their max stacks. |
| <Link id="m-glyph-2" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | The symbol shown for this item on book pages. |
| <Link id="m-hassize" /><code>{"bool HasSize { get; }"}</code> | True if the asset's size is not negative. |
| <Link id="m-isassistgrabblocked-2" /><code>{"bool IsAssistGrabBlocked { get; }"}</code> | When true, grab assist will not pull this item to the hand. |
| <Link id="m-isdestroywhendocked" /><code>{"bool IsDestroyWhenDocked { get; }"}</code> | Asset flag; nothing reads it in this build. |
| <Link id="m-isdisabledonsimpleserver-2" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | Hides the item from progress console commands on a simple server. |
| <Link id="m-isoverridingdefaultshrunkenscale-2" /><code>{"bool IsOverridingDefaultShrunkenScale { get; }"}</code> | Whether `OverrideShrunkenScale` replaces the default shrunken scale. |
| <Link id="m-isoverridingdefaultvisualscale-2" /><code>{"bool IsOverridingDefaultVisualScale { get; }"}</code> | Whether `OverrideScaleInsideVisual` replaces the default scale inside the shrunken visual. |
| <Link id="m-isplayingsound-2" /><code>{"bool IsPlayingSound { get; }"}</code> | Whether picking up and letting go of this item plays a sound. |
| <Link id="m-isscalingongrab-2" /><code>{"bool IsScalingOnGrab { get; }"}</code> | Whether the item shrinks or grows when grabbed (used by `PickupInteractionScaler`). |
| <Link id="m-issnappingtohand-2" /><code>{"bool IsSnappingToHand { get; }"}</code> | Whether the item snaps into the hand when grabbed, for example out of a dock. |
| <Link id="m-isstackable-2" /><code>{"bool IsStackable { get; }"}</code> | Whether more than one of this item can share a dock. |
| <Link id="m-isstackablewhencrafted-2" /><code>{"bool IsStackableWhenCrafted { get; }"}</code> | Whether the item can still stack in a dock once it is part of a crafted object. |
| <Link id="m-isusingshrunkenvisual-2" /><code>{"bool IsUsingShrunkenVisual { get; }"}</code> | Whether the shrunken visual is used when the item is scaled down. |
| <Link id="m-lootcategory-2" /><code><Link to="/mod/game-api/types/alta-world-generation/category">{"Category"}</Link>{" LootCategory { get; }"}</code> | The loot category this item belongs to. |
| <Link id="m-lootvalue-2" /><code><Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" { get; }"}</code> | The item's loot value. Crafting also uses it to pick the most valuable part. |
| <Link id="m-overrideletgosoundeffecttype-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideLetGoSoundEffectType { get; }"}</code> | Sound played on letting go, or `None` for the default. |
| <Link id="m-overridepickupsoundeffecttype-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverridePickUpSoundEffectType { get; }"}</code> | Sound played on pick up, or `None` for the default. |
| <Link id="m-overridescaleinsidevisual-2" /><code>{"float OverrideScaleInsideVisual { get; }"}</code> | Scale of the item inside the shrunken visual, when overriding the default. |
| <Link id="m-overrideshrunkenscale-2" /><code>{"float OverrideShrunkenScale { get; }"}</code> | Shrunken scale to use when overriding the default. |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; set; }"}</code> | The network prefab for this item, looked up by stored hash. Logs a warning if no prefab is set. |
| <Link id="m-shrunkenvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenVisual { get; }"}</code> | Pooled visual shown around the item when it is shrunk. |
| <Link id="m-size-2" /><code>{"int Size { get; }"}</code> | The item's crafting size (never below 0). Crafting parts start with it. |
| <Link id="m-storescale-2" /><code>{"Vector3 StoreScale { get; }"}</code> | Scale applied when the item is stored scaled down in a dock (default half size). |
| <Link id="m-tags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> Tags { get; }"}</code> | The pickup tags on this item. Docks use them to include, exclude or scale items. |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Base weight of the item. `Pickup.RawWeight` uses it, then the material's multiplier applies. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Builds a book page for this item using the edible or ingredient page provider. |
| <Link id="m-getbyprefabhash" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" GetByPrefabHash(uint hash)"}</code> | Finds the item used by a prefab, through the prefab's common pickup. Null if there is none. |
| <Link id="m-getcomponent" /><code>{"T GetComponent<T>("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> | Gets the first item component of a type that matches the given material (or any), initialised for this item. |
| <Link id="m-getcomponent-2" /><code><Link to="/mod/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{" GetComponent(Type type, "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> | Gets the first item component of a type that matches the given material (or any), initialised for this item. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | Returns the item's hash, for the page system. |
| <Link id="m-getpositioning" /><code><Link to="/mod/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" GetPositioning("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" settings, bool isScaling, bool isCrafted)"}</code> | Picks where and how the item sits in a dock: crafted custom, custom per dock type, then scaled or normal default. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Returns the page provider to use, the edible one unless the ingredient one was asked for. Logs other values. |

## Used in

Members of other types that take, return or hold a `Item`:

[`Smelter.CheckMould`](/mod/game-api/types/alta-crafting/smelter#m-checkmould), [`Smelter.Consume`](/mod/game-api/types/alta-crafting/smelter#m-consume), [`Smelter.FindRecipe`](/mod/game-api/types/alta-crafting/smelter#m-findrecipe), [`Smelter.GetInput`](/mod/game-api/types/alta-crafting/smelter#m-getinput), [`Smelter.mouldResult`](/mod/game-api/types/alta-crafting/smelter#m-mouldresult), [`SmelterSaveData.currentItem`](/mod/game-api/types/alta-crafting/smeltersavedata#m-currentitem), [`BuilderDock.wedgeItem`](/mod/game-api/types/alta-crafting/builderdock#m-wedgeitem), [`RepairBoxModule.SpawnBox`](/mod/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`HashedItemInfo.op_Implicit`](/mod/game-api/types/alta-console/hashediteminfo#m-op-implicit-3), [`CookingPot.IsCookable`](/mod/game-api/types/alta-crafting/cookingpot#m-iscookable), [`FruitNinja.itemsToSpawn`](/mod/game-api/types/alta-crafting/fruitninja#m-itemstospawn), [`FruitNinja.SpawnItem`](/mod/game-api/types/alta-crafting/fruitninja#m-spawnitem), [`StewManagerSaveData.garnishes`](/mod/game-api/types/alta-crafting/stewmanagersavedata#m-garnishes), [`StewManagerSaveData.ingredients`](/mod/game-api/types/alta-crafting/stewmanagersavedata#m-ingredients), [`GenericCraftingPieceDefinition.source`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-source), [`MainMenuShopInterface.talemItem`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-talemitem), [`Fire.FuelConsumptionState.fuels`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`Fire.FuelConsumptionState.tracked`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-tracked), [`ResourceDropChance.resourceDefinition`](/mod/game-api/types/alta-items/resourcedropchance#m-resourcedefinition), [`BoundsDockPositioning.Position`](/mod/game-api/types/alta-items/boundsdockpositioning#m-position), [`DockPositioning.BeginInvoke`](/mod/game-api/types/alta-items/dockpositioning#m-begininvoke), [`DockPositioning.Invoke`](/mod/game-api/types/alta-items/dockpositioning#m-invoke), [`ItemCount.item`](/mod/game-api/types/alta-items/itemcount#m-item), [`ItemCount.Item`](/mod/game-api/types/alta-items/itemcount#m-item-2), [`ItemSet.items`](/mod/game-api/types/alta-items/itemset#m-items), [`ItemSet.Items`](/mod/game-api/types/alta-items/itemset#m-items-2), [`PickupDock.CheckAllowed`](/mod/game-api/types/alta-items/pickupdock#m-checkallowed-3), [`PickupDock.dockedType`](/mod/game-api/types/alta-items/pickupdock#m-dockedtype), [`PickupDock.GetPositioning`](/mod/game-api/types/alta-items/pickupdock#m-getpositioning), [`PickupDock.MoveToDock`](/mod/game-api/types/alta-items/pickupdock#m-movetodock), [`PickupDockSaveData.dockedType`](/mod/game-api/types/alta-items/pickupdocksavedata#m-dockedtype), [`PickupDockSaveDataOld.dockedType`](/mod/game-api/types/alta-items/pickupdocksavedataold#m-dockedtype), [`PickupDockSettings.includedItems`](/mod/game-api/types/alta-items/pickupdocksettings#m-includeditems), [`PickupDockSettings.IncludedItems`](/mod/game-api/types/alta-items/pickupdocksettings#m-includeditems-2), [`PickupDockSettings.IsPhysical`](/mod/game-api/types/alta-items/pickupdocksettings#m-isphysical), [`PickupEventStreamLogger.GetItemHash`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-getitemhash), [`PickupEventStreamLogger.GetItemName`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-getitemname), [`StorageData.item`](/mod/game-api/types/alta-items/storagedata#m-item), [`LootHelper.Spawn`](/mod/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`LootTable.GetLoot`](/mod/game-api/types/alta-world-generation/loottable#m-getloot), [`LootTable.Entry.item`](/mod/game-api/types/alta-world-generation/loottable-entry#m-item), [`LootTable.Entry.Item`](/mod/game-api/types/alta-world-generation/loottable-entry#m-item-2), [`BlockingCharge.validItems`](/mod/game-api/types/global-a-b/blockingcharge#m-validitems), [`CoinPress.outputItem`](/mod/game-api/types/global-c-d/coinpress#m-outputitem), [`CommonPrefabs.duplicatePageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem), [`CommonPrefabs.DuplicatePageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem-2), [`CommonPrefabs.pageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pageitem), [`CommonPrefabs.PageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pageitem-2), [`CommonPrefabs.pouchItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pouchitem), [`CommonPrefabs.PouchItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pouchitem-2), [`DockByDefault.item`](/mod/game-api/types/global-c-d/dockbydefault#m-item), [`DockObjectTask.targetItems`](/mod/game-api/types/global-c-d/dockobjecttask#m-targetitems), [`EdiblePageProvider.GeneratePage`](/mod/game-api/types/global-e-h/ediblepageprovider#m-generatepage), [`EdiblePageProvider.testItem`](/mod/game-api/types/global-e-h/ediblepageprovider#m-testitem), [`Fuel.burning`](/mod/game-api/types/global-e-h/fuel#m-burning), [`Fuel.BurningItem`](/mod/game-api/types/global-e-h/fuel#m-burningitem), [`Gatherer.trainingPouchItem`](/mod/game-api/types/global-e-h/gatherer#m-trainingpouchitem), [`Gatherer.validItems`](/mod/game-api/types/global-e-h/gatherer#m-validitems), [`IItemComponent.Initialize`](/mod/game-api/types/global-i-l/iitemcomponent#m-initialize), [`IngredientPageProvider.CheckIfCookable`](/mod/game-api/types/global-i-l/ingredientpageprovider#m-checkifcookable) and 30 more.
