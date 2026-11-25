---
title: "Item"
description: "A ScriptableObject asset (through Alta.HashedGeneralValue<Item> in Alta.Values). The same on both sides; it's data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Item

A **class** in `Root.Township`, `Alta.Inventory`.

A `ScriptableObject` asset (through `Alta.HashedGeneralValue<Item>` in `Alta.Values`). The same on both sides; it's data.

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
| <Link id="m-calculatedscale" /><code>{"float CalculatedScale { set; }"}</code> |  |
| <Link id="m-components-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> Components { get; }"}</code> |  |
| <Link id="m-dockedstacksize-2" /><code>{"int DockedStackSize { get; }"}</code> |  |
| <Link id="m-glyph-2" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> |  |
| <Link id="m-hassize" /><code>{"bool HasSize { get; }"}</code> |  |
| <Link id="m-isassistgrabblocked-2" /><code>{"bool IsAssistGrabBlocked { get; }"}</code> |  |
| <Link id="m-isdestroywhendocked" /><code>{"bool IsDestroyWhenDocked { get; }"}</code> |  |
| <Link id="m-isdisabledonsimpleserver-2" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> |  |
| <Link id="m-isoverridingdefaultshrunkenscale-2" /><code>{"bool IsOverridingDefaultShrunkenScale { get; }"}</code> |  |
| <Link id="m-isoverridingdefaultvisualscale-2" /><code>{"bool IsOverridingDefaultVisualScale { get; }"}</code> |  |
| <Link id="m-isplayingsound-2" /><code>{"bool IsPlayingSound { get; }"}</code> |  |
| <Link id="m-isscalingongrab-2" /><code>{"bool IsScalingOnGrab { get; }"}</code> |  |
| <Link id="m-issnappingtohand-2" /><code>{"bool IsSnappingToHand { get; }"}</code> |  |
| <Link id="m-isstackable-2" /><code>{"bool IsStackable { get; }"}</code> |  |
| <Link id="m-isstackablewhencrafted-2" /><code>{"bool IsStackableWhenCrafted { get; }"}</code> |  |
| <Link id="m-isusingshrunkenvisual-2" /><code>{"bool IsUsingShrunkenVisual { get; }"}</code> |  |
| <Link id="m-lootcategory-2" /><code><Link to="/game-api/types/alta-world-generation/category">{"Category"}</Link>{" LootCategory { get; }"}</code> |  |
| <Link id="m-lootvalue-2" /><code><Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" "}<Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" { get; }"}</code> |  |
| <Link id="m-overrideletgosoundeffecttype-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideLetGoSoundEffectType { get; }"}</code> |  |
| <Link id="m-overridepickupsoundeffecttype-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverridePickUpSoundEffectType { get; }"}</code> |  |
| <Link id="m-overridescaleinsidevisual-2" /><code>{"float OverrideScaleInsideVisual { get; }"}</code> |  |
| <Link id="m-overrideshrunkenscale-2" /><code>{"float OverrideShrunkenScale { get; }"}</code> |  |
| <Link id="m-prefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; set; }"}</code> |  |
| <Link id="m-shrunkenvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenVisual { get; }"}</code> |  |
| <Link id="m-size-2" /><code>{"int Size { get; }"}</code> |  |
| <Link id="m-storescale-2" /><code>{"Vector3 StoreScale { get; }"}</code> |  |
| <Link id="m-tags-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> Tags { get; }"}</code> |  |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> |  |
| <Link id="m-getbyprefabhash" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" GetByPrefabHash(uint hash)"}</code> |  |
| <Link id="m-getcomponent" /><code>{"T GetComponent<T>("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> |  |
| <Link id="m-getcomponent-2" /><code><Link to="/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{" GetComponent(Type type, "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> |  |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> |  |
| <Link id="m-getpositioning" /><code><Link to="/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" GetPositioning("}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" settings, bool isScaling, bool isCrafted)"}</code> |  |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Item`:

[`Smelter.CheckMould`](/game-api/types/alta-crafting/smelter#m-checkmould), [`Smelter.Consume`](/game-api/types/alta-crafting/smelter#m-consume), [`Smelter.FindRecipe`](/game-api/types/alta-crafting/smelter#m-findrecipe), [`Smelter.GetInput`](/game-api/types/alta-crafting/smelter#m-getinput), [`Smelter.mouldResult`](/game-api/types/alta-crafting/smelter#m-mouldresult), [`SmelterSaveData.currentItem`](/game-api/types/alta-crafting/smeltersavedata#m-currentitem), [`BuilderDock.wedgeItem`](/game-api/types/alta-crafting/builderdock#m-wedgeitem), [`RepairBoxModule.SpawnBox`](/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`HashedItemInfo.op_Implicit`](/game-api/types/alta-console/hashediteminfo#m-op-implicit-3), [`CookingPot.IsCookable`](/game-api/types/alta-crafting/cookingpot#m-iscookable), [`FruitNinja.itemsToSpawn`](/game-api/types/alta-crafting/fruitninja#m-itemstospawn), [`FruitNinja.SpawnItem`](/game-api/types/alta-crafting/fruitninja#m-spawnitem), [`StewManagerSaveData.garnishes`](/game-api/types/alta-crafting/stewmanagersavedata#m-garnishes), [`StewManagerSaveData.ingredients`](/game-api/types/alta-crafting/stewmanagersavedata#m-ingredients), [`GenericCraftingPieceDefinition.source`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-source), [`MainMenuShopInterface.talemItem`](/game-api/types/alta-customization/mainmenushopinterface#m-talemitem), [`Fire.FuelConsumptionState.fuels`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`Fire.FuelConsumptionState.tracked`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-tracked), [`ResourceDropChance.resourceDefinition`](/game-api/types/alta-items/resourcedropchance#m-resourcedefinition), [`BoundsDockPositioning.Position`](/game-api/types/alta-items/boundsdockpositioning#m-position), [`DockPositioning.BeginInvoke`](/game-api/types/alta-items/dockpositioning#m-begininvoke), [`DockPositioning.Invoke`](/game-api/types/alta-items/dockpositioning#m-invoke), [`ItemCount.item`](/game-api/types/alta-items/itemcount#m-item), [`ItemCount.Item`](/game-api/types/alta-items/itemcount#m-item-2), [`ItemSet.items`](/game-api/types/alta-items/itemset#m-items), [`ItemSet.Items`](/game-api/types/alta-items/itemset#m-items-2), [`PickupDock.CheckAllowed`](/game-api/types/alta-items/pickupdock#m-checkallowed-3), [`PickupDock.dockedType`](/game-api/types/alta-items/pickupdock#m-dockedtype), [`PickupDock.GetPositioning`](/game-api/types/alta-items/pickupdock#m-getpositioning), [`PickupDock.MoveToDock`](/game-api/types/alta-items/pickupdock#m-movetodock), [`PickupDockSaveData.dockedType`](/game-api/types/alta-items/pickupdocksavedata#m-dockedtype), [`PickupDockSaveDataOld.dockedType`](/game-api/types/alta-items/pickupdocksavedataold#m-dockedtype), [`PickupDockSettings.includedItems`](/game-api/types/alta-items/pickupdocksettings#m-includeditems), [`PickupDockSettings.IncludedItems`](/game-api/types/alta-items/pickupdocksettings#m-includeditems-2), [`PickupDockSettings.IsPhysical`](/game-api/types/alta-items/pickupdocksettings#m-isphysical), [`PickupEventStreamLogger.GetItemHash`](/game-api/types/alta-items/pickupeventstreamlogger#m-getitemhash), [`PickupEventStreamLogger.GetItemName`](/game-api/types/alta-items/pickupeventstreamlogger#m-getitemname), [`StorageData.item`](/game-api/types/alta-items/storagedata#m-item), [`LootHelper.Spawn`](/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`LootTable.GetLoot`](/game-api/types/alta-world-generation/loottable#m-getloot), [`LootTable.Entry.item`](/game-api/types/alta-world-generation/loottable-entry#m-item), [`LootTable.Entry.Item`](/game-api/types/alta-world-generation/loottable-entry#m-item-2), [`BlockingCharge.validItems`](/game-api/types/global-a-b/blockingcharge#m-validitems), [`CoinPress.outputItem`](/game-api/types/global-c-d/coinpress#m-outputitem), [`CommonPrefabs.duplicatePageItem`](/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem), [`CommonPrefabs.DuplicatePageItem`](/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem-2), [`CommonPrefabs.pageItem`](/game-api/types/global-c-d/commonprefabs#m-pageitem), [`CommonPrefabs.PageItem`](/game-api/types/global-c-d/commonprefabs#m-pageitem-2), [`CommonPrefabs.pouchItem`](/game-api/types/global-c-d/commonprefabs#m-pouchitem), [`CommonPrefabs.PouchItem`](/game-api/types/global-c-d/commonprefabs#m-pouchitem-2), [`DockByDefault.item`](/game-api/types/global-c-d/dockbydefault#m-item), [`DockObjectTask.targetItems`](/game-api/types/global-c-d/dockobjecttask#m-targetitems), [`EdiblePageProvider.GeneratePage`](/game-api/types/global-e-h/ediblepageprovider#m-generatepage), [`EdiblePageProvider.testItem`](/game-api/types/global-e-h/ediblepageprovider#m-testitem), [`Fuel.burning`](/game-api/types/global-e-h/fuel#m-burning), [`Fuel.BurningItem`](/game-api/types/global-e-h/fuel#m-burningitem), [`Gatherer.trainingPouchItem`](/game-api/types/global-e-h/gatherer#m-trainingpouchitem), [`Gatherer.validItems`](/game-api/types/global-e-h/gatherer#m-validitems), [`IItemComponent.Initialize`](/game-api/types/global-i-l/iitemcomponent#m-initialize), [`IngredientPageProvider.CheckIfCookable`](/game-api/types/global-i-l/ingredientpageprovider#m-checkifcookable) and 30 more.
