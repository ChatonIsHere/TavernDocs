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
| <Link id="m-ctor" /><code>{"Item()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>31 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> components"}</code> | <span className="api-desc">Backing list for `Components`. `GetComponent` returns the first entry matching the type and physical material.</span> |
| <Link id="m-custompositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-customdockpositioning">{"Item.CustomDockPositioning"}</Link>{"[] customPositions"}</code> | <span className="api-desc">Per dock type positions used by `GetPositioning`; an entry with no dock settings is the fallback.</span> |
| <Link id="m-custompositionswhencrafted" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-customdockpositioning">{"Item.CustomDockPositioning"}</Link>{"[] customPositionsWhenCrafted"}</code> | <span className="api-desc">Like `customPositions`, but checked first when the item is a crafted assembly.</span> |
| <Link id="m-destroywhendocked" /><code>{"private bool destroyWhenDocked"}</code> | <span className="api-desc">Backing field for `IsDestroyWhenDocked`.</span> |
| <Link id="m-dockedstacksize" /><code>{"private int dockedStackSize"}</code> | <span className="api-desc">Backing field for `DockedStackSize`: how many fit in one stack (30 by default). Docks multiply it by their max stacks.</span> |
| <Link id="m-glyph" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> | <span className="api-desc">Backing field for `Glyph`, the item's symbol used on pages.</span> |
| <Link id="m-isassistgrabblocked" /><code>{"private bool isAssistGrabBlocked"}</code> | <span className="api-desc">Backing field for `IsAssistGrabBlocked`. When true, grab assist never picks this item.</span> |
| <Link id="m-isdisabledonsimpleserver" /><code>{"private bool isDisabledOnSimpleServer"}</code> | <span className="api-desc">Backing field for `IsDisabledOnSimpleServer`. Progress commands skip such items on simple servers.</span> |
| <Link id="m-isoverridingdefaultshrunkenscale" /><code>{"private bool isOverridingDefaultShrunkenScale"}</code> | <span className="api-desc">Backing field for `IsOverridingDefaultShrunkenScale`.</span> |
| <Link id="m-isoverridingdefaultvisualscale" /><code>{"private bool isOverridingDefaultVisualScale"}</code> | <span className="api-desc">Backing field for `IsOverridingDefaultVisualScale`.</span> |
| <Link id="m-isplayingsound" /><code>{"private bool isPlayingSound"}</code> | <span className="api-desc">Backing field for `IsPlayingSound`.</span> |
| <Link id="m-isscalingongrab" /><code>{"private bool isScalingOnGrab"}</code> | <span className="api-desc">Backing field for `IsScalingOnGrab`, read by `PickupInteractionScaler` and `Pickup`.</span> |
| <Link id="m-issnappingtohand" /><code>{"private bool isSnappingToHand"}</code> | <span className="api-desc">Backing field for `IsSnappingToHand`. Read by `Pickup` when deciding how a grab moves the item to the hand.</span> |
| <Link id="m-isstackable" /><code>{"private bool isStackable"}</code> | <span className="api-desc">Backing field for `IsStackable`.</span> |
| <Link id="m-isstackablewhencrafted" /><code>{"private bool isStackableWhenCrafted"}</code> | <span className="api-desc">Backing field for `IsStackableWhenCrafted`. Docks check it for crafted items.</span> |
| <Link id="m-isusingshrunkenvisual" /><code>{"private bool isUsingShrunkenVisual"}</code> | <span className="api-desc">Backing field for `IsUsingShrunkenVisual` (true by default).</span> |
| <Link id="m-lastcalculatedscale" /><code>{"private float lastCalculatedScale"}</code> | <span className="api-desc">Read-only inspector value written through `CalculatedScale` by `PickupInteractionScaler`.</span> |
| <Link id="m-lootcategory" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/category">{"Category"}</Link>{" lootCategory"}</code> | <span className="api-desc">Backing field for `LootCategory`, the loot category used for weighted loot picks.</span> |
| <Link id="m-lootvalue" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" lootValue"}</code> | <span className="api-desc">Backing field for `LootValue`.</span> |
| <Link id="m-normalpositioning" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" normalPositioning"}</code> | <span className="api-desc">Dock position and rotation used when no custom entry matches and the dock doesn't scale items.</span> |
| <Link id="m-overrideletgosoundeffecttype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideLetGoSoundEffectType"}</code> | <span className="api-desc">Backing field for `OverrideLetGoSoundEffectType`; `None` means the default sound.</span> |
| <Link id="m-overridepickupsoundeffecttype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overridePickUpSoundEffectType"}</code> | <span className="api-desc">Backing field for `OverridePickUpSoundEffectType`; `None` means the default sound.</span> |
| <Link id="m-overridescaleinsidevisual" /><code>{"private float overrideScaleInsideVisual"}</code> | <span className="api-desc">Backing field for `OverrideScaleInsideVisual`.</span> |
| <Link id="m-overrideshrunkenscale" /><code>{"private float overrideShrunkenScale"}</code> | <span className="api-desc">Backing field for `OverrideShrunkenScale`.</span> |
| <Link id="m-prefabhash" /><code>{"private uint prefabHash"}</code> | <span className="api-desc">Network prefab hash behind `Prefab`. A zero hash logs a warning when read.</span> |
| <Link id="m-scaledpositioning" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" scaledPositioning"}</code> | <span className="api-desc">Dock position and rotation used when no custom entry matches and the dock scales items down.</span> |
| <Link id="m-shrunkenvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrunkenVisual"}</code> | <span className="api-desc">Backing field for `ShrunkenVisual`.</span> |
| <Link id="m-size" /><code>{"private int size"}</code> | <span className="api-desc">Backing field for `Size` and `HasSize`. Negative means no size; docks compare it to their min and max crafting size.</span> |
| <Link id="m-storescale" /><code>{"private Vector3 storeScale"}</code> | <span className="api-desc">Backing field for `StoreScale`: the item's scale in a scaling dock (half size by default).</span> |
| <Link id="m-tags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> tags"}</code> | <span className="api-desc">Backing field for `Tags`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight` (1 by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedscale" /><code>{"float CalculatedScale { set; }"}</code> | <span className="api-desc">Write-only: stores the last calculated scale on the asset, shown read-only in the inspector.</span> |
| <Link id="m-components-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{"> Components { get; }"}</code> | <span className="api-desc">The extra `ItemComponent` data blocks on this item.</span> |
| <Link id="m-dockedstacksize-2" /><code>{"int DockedStackSize { get; }"}</code> | <span className="api-desc">How many of this item make one stack in a dock (default 30). Docks multiply it by their max stacks.</span> |
| <Link id="m-glyph-2" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | <span className="api-desc">The symbol shown for this item on book pages.</span> |
| <Link id="m-hassize" /><code>{"bool HasSize { get; }"}</code> | <span className="api-desc">True if the asset's size is not negative.</span> |
| <Link id="m-isassistgrabblocked-2" /><code>{"bool IsAssistGrabBlocked { get; }"}</code> | <span className="api-desc">When true, grab assist will not pull this item to the hand.</span> |
| <Link id="m-isdestroywhendocked" /><code>{"bool IsDestroyWhenDocked { get; }"}</code> | <span className="api-desc">Asset flag; nothing reads it in this build.</span> |
| <Link id="m-isdisabledonsimpleserver-2" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | <span className="api-desc">Hides the item from progress console commands on a simple server.</span> |
| <Link id="m-isoverridingdefaultshrunkenscale-2" /><code>{"bool IsOverridingDefaultShrunkenScale { get; }"}</code> | <span className="api-desc">Whether `OverrideShrunkenScale` replaces the default shrunken scale.</span> |
| <Link id="m-isoverridingdefaultvisualscale-2" /><code>{"bool IsOverridingDefaultVisualScale { get; }"}</code> | <span className="api-desc">Whether `OverrideScaleInsideVisual` replaces the default scale inside the shrunken visual.</span> |
| <Link id="m-isplayingsound-2" /><code>{"bool IsPlayingSound { get; }"}</code> | <span className="api-desc">Whether picking up and letting go of this item plays a sound.</span> |
| <Link id="m-isscalingongrab-2" /><code>{"bool IsScalingOnGrab { get; }"}</code> | <span className="api-desc">Whether the item shrinks or grows when grabbed (used by `PickupInteractionScaler`).</span> |
| <Link id="m-issnappingtohand-2" /><code>{"bool IsSnappingToHand { get; }"}</code> | <span className="api-desc">Whether the item snaps into the hand when grabbed, for example out of a dock.</span> |
| <Link id="m-isstackable-2" /><code>{"bool IsStackable { get; }"}</code> | <span className="api-desc">Whether more than one of this item can share a dock.</span> |
| <Link id="m-isstackablewhencrafted-2" /><code>{"bool IsStackableWhenCrafted { get; }"}</code> | <span className="api-desc">Whether the item can still stack in a dock once it is part of a crafted object.</span> |
| <Link id="m-isusingshrunkenvisual-2" /><code>{"bool IsUsingShrunkenVisual { get; }"}</code> | <span className="api-desc">Whether the shrunken visual is used when the item is scaled down.</span> |
| <Link id="m-lootcategory-2" /><code><Link to="/mod/game-api/types/alta-world-generation/category">{"Category"}</Link>{" LootCategory { get; }"}</code> | <span className="api-desc">The loot category this item belongs to.</span> |
| <Link id="m-lootvalue-2" /><code><Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" { get; }"}</code> | <span className="api-desc">The item's loot value. Crafting also uses it to pick the most valuable part.</span> |
| <Link id="m-overrideletgosoundeffecttype-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideLetGoSoundEffectType { get; }"}</code> | <span className="api-desc">Sound played on letting go, or `None` for the default.</span> |
| <Link id="m-overridepickupsoundeffecttype-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverridePickUpSoundEffectType { get; }"}</code> | <span className="api-desc">Sound played on pick up, or `None` for the default.</span> |
| <Link id="m-overridescaleinsidevisual-2" /><code>{"float OverrideScaleInsideVisual { get; }"}</code> | <span className="api-desc">Scale of the item inside the shrunken visual, when overriding the default.</span> |
| <Link id="m-overrideshrunkenscale-2" /><code>{"float OverrideShrunkenScale { get; }"}</code> | <span className="api-desc">Shrunken scale to use when overriding the default.</span> |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; set; }"}</code> | <span className="api-desc">The network prefab for this item, looked up by stored hash. Logs a warning if no prefab is set.</span> |
| <Link id="m-shrunkenvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenVisual { get; }"}</code> | <span className="api-desc">Pooled visual shown around the item when it is shrunk.</span> |
| <Link id="m-size-2" /><code>{"int Size { get; }"}</code> | <span className="api-desc">The item's crafting size (never below 0). Crafting parts start with it.</span> |
| <Link id="m-storescale-2" /><code>{"Vector3 StoreScale { get; }"}</code> | <span className="api-desc">Scale applied when the item is stored scaled down in a dock (default half size).</span> |
| <Link id="m-tags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> Tags { get; }"}</code> | <span className="api-desc">The pickup tags on this item. Docks use them to include, exclude or scale items.</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | <span className="api-desc">Base weight of the item. `Pickup.RawWeight` uses it, then the material's multiplier applies.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | <span className="api-desc">Builds a book page for this item using the edible or ingredient page provider.</span> |
| <Link id="m-getbyprefabhash" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" GetByPrefabHash(uint hash)"}</code> | <span className="api-desc">Finds the item used by a prefab, through the prefab's common pickup. Null if there is none.</span> |
| <Link id="m-getcomponent" /><code>{"T GetComponent<T>("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> | <span className="api-desc">Gets the first item component of a type that matches the given material (or any), initialised for this item.</span> |
| <Link id="m-getcomponent-2" /><code><Link to="/mod/game-api/types/global-i-l/itemcomponent">{"ItemComponent"}</Link>{" GetComponent(Type type, "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material = null)"}</code> | <span className="api-desc">Gets the first item component of a type that matches the given material (or any), initialised for this item.</span> |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | <span className="api-desc">Returns the item's hash, for the page system.</span> |
| <Link id="m-getpositioning" /><code><Link to="/mod/game-api/types/alta-items/item-dockpositioning">{"Item.DockPositioning"}</Link>{" GetPositioning("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" settings, bool isScaling, bool isCrafted)"}</code> | <span className="api-desc">Picks where and how the item sits in a dock: crafted custom, custom per dock type, then scaled or normal default.</span> |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | <span className="api-desc">Returns the page provider to use, the edible one unless the ingredient one was asked for. Logs other values.</span> |

## Used in

Members of other types that take, return or hold a `Item`:

<div className="api-used-in">

[`Smelter.CheckMould`](/mod/game-api/types/alta-crafting/smelter#m-checkmould), [`Smelter.Consume`](/mod/game-api/types/alta-crafting/smelter#m-consume), [`Smelter.FindRecipe`](/mod/game-api/types/alta-crafting/smelter#m-findrecipe), [`Smelter.GetInput`](/mod/game-api/types/alta-crafting/smelter#m-getinput), [`Smelter.mouldResult`](/mod/game-api/types/alta-crafting/smelter#m-mouldresult), [`SmelterSaveData.currentItem`](/mod/game-api/types/alta-crafting/smeltersavedata#m-currentitem), [`BuilderDock.wedgeItem`](/mod/game-api/types/alta-crafting/builderdock#m-wedgeitem), [`RepairBoxModule.SpawnBox`](/mod/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`HashedItemInfo.op_Implicit`](/mod/game-api/types/alta-console/hashediteminfo#m-op-implicit-3), [`CookingPot.IsCookable`](/mod/game-api/types/alta-crafting/cookingpot#m-iscookable), [`FruitNinja.itemsToSpawn`](/mod/game-api/types/alta-crafting/fruitninja#m-itemstospawn), [`FruitNinja.SpawnItem`](/mod/game-api/types/alta-crafting/fruitninja#m-spawnitem), [`StewManagerSaveData.garnishes`](/mod/game-api/types/alta-crafting/stewmanagersavedata#m-garnishes), [`StewManagerSaveData.ingredients`](/mod/game-api/types/alta-crafting/stewmanagersavedata#m-ingredients), [`GenericCraftingPieceDefinition.source`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-source), [`MainMenuShopInterface.talemItem`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-talemitem), [`Fire.FuelConsumptionState.fuels`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`Fire.FuelConsumptionState.tracked`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-tracked), [`ResourceDropChance.resourceDefinition`](/mod/game-api/types/alta-items/resourcedropchance#m-resourcedefinition), [`BoundsDockPositioning.Position`](/mod/game-api/types/alta-items/boundsdockpositioning#m-position), [`DockPositioning.BeginInvoke`](/mod/game-api/types/alta-items/dockpositioning#m-begininvoke), [`DockPositioning.Invoke`](/mod/game-api/types/alta-items/dockpositioning#m-invoke), [`ItemCount.item`](/mod/game-api/types/alta-items/itemcount#m-item), [`ItemCount.Item`](/mod/game-api/types/alta-items/itemcount#m-item-2), [`ItemSet.items`](/mod/game-api/types/alta-items/itemset#m-items), [`ItemSet.Items`](/mod/game-api/types/alta-items/itemset#m-items-2), [`PickupDock.CheckAllowed`](/mod/game-api/types/alta-items/pickupdock#m-checkallowed-3), [`PickupDock.dockedType`](/mod/game-api/types/alta-items/pickupdock#m-dockedtype), [`PickupDock.GetPositioning`](/mod/game-api/types/alta-items/pickupdock#m-getpositioning), [`PickupDock.MoveToDock`](/mod/game-api/types/alta-items/pickupdock#m-movetodock), [`PickupDockSaveData.dockedType`](/mod/game-api/types/alta-items/pickupdocksavedata#m-dockedtype), [`PickupDockSaveDataOld.dockedType`](/mod/game-api/types/alta-items/pickupdocksavedataold#m-dockedtype), [`PickupDockSettings.includedItems`](/mod/game-api/types/alta-items/pickupdocksettings#m-includeditems), [`PickupDockSettings.IncludedItems`](/mod/game-api/types/alta-items/pickupdocksettings#m-includeditems-2), [`PickupDockSettings.IsPhysical`](/mod/game-api/types/alta-items/pickupdocksettings#m-isphysical), [`PickupEventStreamLogger.GetItemHash`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-getitemhash), [`PickupEventStreamLogger.GetItemName`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-getitemname), [`StorageData.item`](/mod/game-api/types/alta-items/storagedata#m-item), [`LootHelper.Spawn`](/mod/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`LootTable.GetLoot`](/mod/game-api/types/alta-world-generation/loottable#m-getloot), [`LootTable.Entry.item`](/mod/game-api/types/alta-world-generation/loottable-entry#m-item), [`LootTable.Entry.Item`](/mod/game-api/types/alta-world-generation/loottable-entry#m-item-2), [`BlockingCharge.validItems`](/mod/game-api/types/global-a-b/blockingcharge#m-validitems), [`CoinPress.outputItem`](/mod/game-api/types/global-c-d/coinpress#m-outputitem), [`CommonPrefabs.duplicatePageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem), [`CommonPrefabs.DuplicatePageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-duplicatepageitem-2), [`CommonPrefabs.pageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pageitem), [`CommonPrefabs.PageItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pageitem-2), [`CommonPrefabs.pouchItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pouchitem), [`CommonPrefabs.PouchItem`](/mod/game-api/types/global-c-d/commonprefabs#m-pouchitem-2), [`DockByDefault.item`](/mod/game-api/types/global-c-d/dockbydefault#m-item), [`DockObjectTask.targetItems`](/mod/game-api/types/global-c-d/dockobjecttask#m-targetitems), [`EdiblePageProvider.GeneratePage`](/mod/game-api/types/global-e-h/ediblepageprovider#m-generatepage), [`EdiblePageProvider.testItem`](/mod/game-api/types/global-e-h/ediblepageprovider#m-testitem), [`Fuel.burning`](/mod/game-api/types/global-e-h/fuel#m-burning), [`Fuel.BurningItem`](/mod/game-api/types/global-e-h/fuel#m-burningitem), [`Gatherer.trainingPouchItem`](/mod/game-api/types/global-e-h/gatherer#m-trainingpouchitem), [`Gatherer.validItems`](/mod/game-api/types/global-e-h/gatherer#m-validitems), [`IItemComponent.Initialize`](/mod/game-api/types/global-i-l/iitemcomponent#m-initialize), [`IngredientPageProvider.CheckIfCookable`](/mod/game-api/types/global-i-l/ingredientpageprovider#m-checkifcookable) and 30 more.

</div>
