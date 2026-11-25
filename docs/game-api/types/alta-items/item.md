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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<Item>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis)
- **Derived types** [`Item`](/game-api/types/alta-items/item), [`Item.Create`](/game-api/types/alta-items/item-create), [`EdiblePageProvider`](/game-api/types/global-e-h/ediblepageprovider), [`IngredientPageProvider`](/game-api/types/global-i-l/ingredientpageprovider)
- **Nested types** [`Create`](/game-api/types/alta-items/item-create), [`CustomDockPositioning`](/game-api/types/alta-items/item-customdockpositioning), [`DockPositioning`](/game-api/types/alta-items/item-dockpositioning)
- **Attributes** `HashedPath`, `TypeConverter`
- **Documented in** [Items and materials](/game-api/items/items-and-materials#item), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> components"}</code> |  |
| <Link id="m-custompositions" /><code>{"private "}<Link to="/game-api/types/alta-items/item-customdockpositioning">{"Item.CustomDockPositioning"}</Link>{"[] customPositions"}</code> |  |
| <Link id="m-custompositionswhencrafted" /><code>{"private "}<Link to="/game-api/types/alta-items/item-customdockpositioning">{"Item.CustomDockPositioning"}</Link>{"[] customPositionsWhenCrafted"}</code> |  |
| <Link id="m-destroywhendocked" /><code>{"private bool destroyWhenDocked"}</code> |  |
| <Link id="m-dockedstacksize" /><code>{"private int dockedStackSize"}</code> |  |
| <Link id="m-glyph" /><code>{"private "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> |  |
| <Link id="m-isassistgrabblocked" /><code>{"private bool isAssistGrabBlocked"}</code> |  |
| <Link id="m-isdisabledonsimpleserver" /><code>{"private bool isDisabledOnSimpleServer"}</code> |  |
| <Link id="m-isoverridingdefaultshrunkenscale" /><code>{"private bool isOverridingDefaultShrunkenScale"}</code> |  |
| <Link id="m-isoverridingdefaultvisualscale" /><code>{"private bool isOverridingDefaultVisualScale"}</code> |  |
| <Link id="m-isplayingsound" /><code>{"private bool isPlayingSound"}</code> |  |
| <Link id="m-isscalingongrab" /><code>{"private bool isScalingOnGrab"}</code> |  |
| <Link id="m-issnappingtohand" /><code>{"private bool isSnappingToHand"}</code> |  |
| <Link id="m-isstackable" /><code>{"private bool isStackable"}</code> |  |
| <Link id="m-isstackablewhencrafted" /><code>{"private bool isStackableWhenCrafted"}</code> |  |
| <Link id="m-isusingshrunkenvisual" /><code>{"private bool isUsingShrunkenVisual"}</code> |  |
| <Link id="m-lastcalculatedscale" /><code>{"private float lastCalculatedScale"}</code> |  |
| <Link id="m-lootcategory" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/category">{"Category"}</Link>{" lootCategory"}</code> |  |
| <Link id="m-lootvalue" /><code>{"private "}<Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" lootValue"}</code> |  |
| <Link id="m-normalpositioning" /><code>{"private "}<Link to="/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" normalPositioning"}</code> |  |
| <Link id="m-overrideletgosoundeffecttype" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideLetGoSoundEffectType"}</code> |  |
| <Link id="m-overridepickupsoundeffecttype" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overridePickUpSoundEffectType"}</code> |  |
| <Link id="m-overridescaleinsidevisual" /><code>{"private float overrideScaleInsideVisual"}</code> |  |
| <Link id="m-overrideshrunkenscale" /><code>{"private float overrideShrunkenScale"}</code> |  |
| <Link id="m-prefabhash" /><code>{"private uint prefabHash"}</code> |  |
| <Link id="m-scaledpositioning" /><code>{"private "}<Link to="/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" scaledPositioning"}</code> |  |
| <Link id="m-shrunkenvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrunkenVisual"}</code> |  |
| <Link id="m-size" /><code>{"private int size"}</code> |  |
| <Link id="m-storescale" /><code>{"private Vector3 storeScale"}</code> |  |
| <Link id="m-tags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> tags"}</code> |  |
| <Link id="m-weight" /><code>{"private float weight"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedscale" /><code>{"float CalculatedScale { set; }"}</code> | Write-only: stores the last calculated scale on the asset, shown read-only in the inspector. |
| <Link id="m-components-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> Components { get; }"}</code> | The extra `ItemComponent` data blocks on this item. |
| <Link id="m-dockedstacksize-2" /><code>{"int DockedStackSize { get; }"}</code> | How many of this item make one stack in a dock (default 30). Docks multiply it by their max stacks. |
| <Link id="m-glyph-2" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | The symbol shown for this item on book pages. |
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
| <Link id="m-lootcategory-2" /><code><Link to="/game-api/types/alta-world-generation/category">{"Category"}</Link>{" LootCategory { get; }"}</code> | The loot category this item belongs to. |
| <Link id="m-lootvalue-2" /><code><Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" "}<Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" { get; }"}</code> | The item's loot value. Crafting also uses it to pick the most valuable part. |
| <Link id="m-overrideletgosoundeffecttype-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideLetGoSoundEffectType { get; }"}</code> | Sound played on letting go, or `None` for the default. |
| <Link id="m-overridepickupsoundeffecttype-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverridePickUpSoundEffectType { get; }"}</code> | Sound played on pick up, or `None` for the default. |
| <Link id="m-overridescaleinsidevisual-2" /><code>{"float OverrideScaleInsideVisual { get; }"}</code> | Scale of the item inside the shrunken visual, when overriding the default. |
| <Link id="m-overrideshrunkenscale-2" /><code>{"float OverrideShrunkenScale { get; }"}</code> | Shrunken scale to use when overriding the default. |
| <Link id="m-prefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; set; }"}</code> | The network prefab for this item, looked up by stored hash. Logs a warning if no prefab is set. |
| <Link id="m-shrunkenvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenVisual { get; }"}</code> | Pooled visual shown around the item when it is shrunk. |
| <Link id="m-size-2" /><code>{"int Size { get; }"}</code> | The item's crafting size (never below 0). Crafting parts start with it. |
| <Link id="m-storescale-2" /><code>{"Vector3 StoreScale { get; }"}</code> | Scale applied when the item is stored scaled down in a dock (default half size). |
| <Link id="m-tags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> Tags { get; }"}</code> | The pickup tags on this item. Docks use them to include, exclude or scale items. |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Base weight of the item. `Pickup.RawWeight` uses it, then the material's multiplier applies. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Builds a book page for this item using the edible or ingredient page provider. |
| <Link id="m-getbyprefabhash" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" GetByPrefabHash(uint hash)"}</code> | Finds the item used by a prefab, through the prefab's common pickup. Null if there is none. |
| <Link id="m-getcomponent" /><code>{"T GetComponent<T>("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> | Gets the first item component of a type that matches the given material (or any), initialised for this item. |
| <Link id="m-getcomponent-2" /><code><Link to="/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{" GetComponent(Type type, "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> | Gets the first item component of a type that matches the given material (or any), initialised for this item. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | Returns the item's hash, for the page system. |
| <Link id="m-getpositioning" /><code><Link to="/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" GetPositioning("}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" settings, bool isScaling, bool isCrafted)"}</code> | Picks where and how the item sits in a dock: crafted custom, custom per dock type, then scaled or normal default. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Returns the page provider to use, the edible one unless the ingredient one was asked for. Logs other values. |

## Used in

Members of other types that take, return or hold a `Item`:

[`Smelter.CheckMould`](/game-api/types/alta-crafting/smelter#m-checkmould), [`Smelter.Consume`](/game-api/types/alta-crafting/smelter#m-consume), [`Smelter.FindRecipe`](/game-api/types/alta-crafting/smelter#m-findrecipe), [`Smelter.GetInput`](/game-api/types/alta-crafting/smelter#m-getinput), [`Smelter.mouldResult`](/game-api/types/alta-crafting/smelter#m-mouldresult), [`SmelterSaveData.currentItem`](/game-api/types/alta-crafting/smeltersavedata#m-currentitem), [`BuilderDock.wedgeItem`](/game-api/types/alta-crafting/builderdock#m-wedgeitem), [`RepairBoxModule.SpawnBox`](/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`HashedItemInfo.op_Implicit`](/game-api/types/alta-console/hashediteminfo#m-op-implicit-3), [`CookingPot.IsCookable`](/game-api/types/alta-crafting/cookingpot#m-iscookable), [`FruitNinja.itemsToSpawn`](/game-api/types/alta-crafting/fruitninja#m-itemstospawn), [`FruitNinja.SpawnItem`](/game-api/types/alta-crafting/fruitninja#m-spawnitem), [`StewManagerSaveData.garnishes`](/game-api/types/alta-crafting/stewmanagersavedata#m-garnishes), [`StewManagerSaveData.ingredients`](/game-api/types/alta-crafting/stewmanagersavedata#m-ingredients), [`GenericCraftingPieceDefinition.source`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-source), [`MainMenuShopInterface.talemItem`](/game-api/types/alta-customization/mainmenushopinterface#m-talemitem), [`Fire.FuelConsumptionState.fuels`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`Fire.FuelConsumptionState.tracked`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-tracked), [`ResourceDropChance.resourceDefinition`](/game-api/types/alta-items/resourcedropchance#m-resourcedefinition), [`BoundsDockPositioning.Position`](/game-api/types/alta-items/boundsdockpositioning#m-position), [`DockPositioning.BeginInvoke`](/game-api/types/alta-items/dockpositioning#m-begininvoke), [`DockPositioning.Invoke`](/game-api/types/alta-items/dockpositioning#m-invoke), [`ItemCount.item`](/game-api/types/alta-items/itemcount#m-item), [`ItemCount.Item`](/game-api/types/alta-items/itemcount#m-item-2), [`ItemSet.items`](/game-api/types/alta-items/itemset#m-items), [`ItemSet.Items`](/game-api/types/alta-items/itemset#m-items-2), [`PickupDock.CheckAllowed`](/game-api/types/alta-items/pickupdock#m-checkallowed-3), [`PickupDock.dockedType`](/game-api/types/alta-items/pickupdock#m-dockedtype), [`PickupDock.GetPositioning`](/game-api/types/alta-items/pickupdock#m-getpositioning), [`PickupDock.MoveToDock`](/game-api/types/alta-items/pickupdock#m-movetodock), [`PickupDockSaveData.dockedType`](/game-api/types/alta-items/pickupdocksavedata#m-dockedtype), [`PickupDockSaveDataOld.dockedType`](/game-api/types/alta-items/pickupdocksavedataold#m-dockedtype), [`PickupDockSettings.includedItems`](/game-api/types/alta-items/pickupdocksettings#m-includeditems), [`PickupDockSettings.IncludedItems`](/game-api/types/alta-items/pickupdocksettings#m-includeditems-2), [`PickupDockSettings.IsPhysical`](/game-api/types/alta-items/pickupdocksettings#m-isphysical), [`PickupEventStreamLogger.GetItemHash`](/game-api/types/alta-items/pickupeventstreamlogger#m-getitemhash), [`PickupEventStreamLogger.GetItemName`](/game-api/types/alta-items/pickupeventstreamlogger#m-getitemname), [`StorageData.item`](/game-api/types/alta-items/storagedata#m-item), [`LootHelper.Spawn`](/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`LootTable.GetLoot`](/game-api/types/alta-world-generation/loottable#m-getloot), [`LootTable.Entry.item`](/game-api/types/alta-world-generation/loottable-entry#m-item), [`LootTable.Entry.Item`](/game-api/types/alta-world-generation/loottable-entry#m-item-2), [`BlockingCharge.validItems`](/game-api/types/global-a-b/blockingcharge#m-validitems), [`CoinPress.outputItem`](/game-api/types/global-c-d/coinpress#m-outputitem), [`CommonPrefabs.duplicatePageItem`](/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem), [`CommonPrefabs.DuplicatePageItem`](/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem-2), [`CommonPrefabs.pageItem`](/game-api/types/global-c-d/commonprefabs#m-pageitem), [`CommonPrefabs.PageItem`](/game-api/types/global-c-d/commonprefabs#m-pageitem-2), [`CommonPrefabs.pouchItem`](/game-api/types/global-c-d/commonprefabs#m-pouchitem), [`CommonPrefabs.PouchItem`](/game-api/types/global-c-d/commonprefabs#m-pouchitem-2), [`DockByDefault.item`](/game-api/types/global-c-d/dockbydefault#m-item), [`DockObjectTask.targetItems`](/game-api/types/global-c-d/dockobjecttask#m-targetitems), [`EdiblePageProvider.GeneratePage`](/game-api/types/global-e-h/ediblepageprovider#m-generatepage), [`EdiblePageProvider.testItem`](/game-api/types/global-e-h/ediblepageprovider#m-testitem), [`Fuel.burning`](/game-api/types/global-e-h/fuel#m-burning), [`Fuel.BurningItem`](/game-api/types/global-e-h/fuel#m-burningitem), [`Gatherer.trainingPouchItem`](/game-api/types/global-e-h/gatherer#m-trainingpouchitem), [`Gatherer.validItems`](/game-api/types/global-e-h/gatherer#m-validitems), [`IItemComponent.Initialize`](/game-api/types/global-i-l/iitemcomponent#m-initialize), [`IngredientPageProvider.CheckIfCookable`](/game-api/types/global-i-l/ingredientpageprovider#m-checkifcookable) and 30 more.
