---
title: "PickupDock"
description: "class PickupDock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDock

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable), [`ISavableFull<PickupDockSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<PickupDockSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PickupDockSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t), [`IDockable`](/game-api/types/global-i-l/idockable), [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer), [`IInitializeAsRemotePlayer`](/game-api/types/global-i-l/iinitializeasremoteplayer), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`DockStore`](/game-api/types/alta-player/dockstore), [`AdditionalOwnedDock`](/game-api/types/alta-crafting/additionalowneddock), [`PickupDockSaveData`](/game-api/types/alta-items/pickupdocksavedata), [`PickupDockedEvent`](/game-api/types/global-p/pickupdockedevent), [`PickupDockedUnityEvent`](/game-api/types/global-p/pickupdockedunityevent), [`PickupDockGroup`](/game-api/types/global-p/pickupdockgroup), [`PickupDockPedestalSpawn`](/game-api/types/global-p/pickupdockpedestalspawn)
- **Nested types** [`AllowedResult`](/game-api/types/alta-items/pickupdock-allowedresult)
- **Attributes** `SavingInfo`
- **Documented in** [Other systems](/game-api/game-systems/other-systems), [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDock()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dockedtype" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" dockedType"}</code> |  |
| <Link id="m-clientdocked" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> clientDocked"}</code> |  |
| <Link id="m-dockvisual" /><code>{"private "}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual"}</code> |  |
| <Link id="m-hapticcoroutine" /><code>{"private Coroutine hapticCoroutine"}</code> |  |
| <Link id="m-hascontentsrange" /><code>{"private List<Collider> hasContentsRange"}</code> |  |
| <Link id="m-hovercount" /><code>{"private int hoverCount"}</code> |  |
| <Link id="m-ishapticanimating" /><code>{"private bool isHapticAnimating"}</code> |  |
| <Link id="m-lastofficialquantity" /><code>{"private int lastOfficialQuantity"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-pickuprange" /><code>{"private Collider pickupRange"}</code> |  |
| <Link id="m-previouslydocked" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" previouslyDocked"}</code> |  |
| <Link id="m-quantitystored" /><code>{"private int quantityStored"}</code> |  |
| <Link id="m-scaleanimator" /><code>{"private "}<Link to="/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" scaleAnimator"}</code> |  |
| <Link id="m-scaler" /><code>{"private "}<Link to="/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{" scaler"}</code> |  |
| <Link id="m-serializeddata" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" serializedData"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-snappoint" /><code>{"private Transform snapPoint"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowcontainerinteraction" /><code>{"virtual bool AllowContainerInteraction { get; }"}</code> |  |
| <Link id="m-dockedpickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" DockedPickup { get; private set; }"}</code> |  |
| <Link id="m-hasdockedpickup" /><code>{"bool HasDockedPickup { get; }"}</code> |  |
| <Link id="m-hovercount-2" /><code>{"int HoverCount { get; set; }"}</code> |  |
| <Link id="m-isownedbyplayer" /><code>{"bool IsOwnedByPlayer { get; protected set; }"}</code> |  |
| <Link id="m-maxquantitycurrentlypossible" /><code>{"int MaxQuantityCurrentlyPossible { get; }"}</code> |  |
| <Link id="m-overridepositioning" /><code><Link to="/game-api/types/alta-items/dockpositioning">{"DockPositioning"}</Link>{" OverridePositioning { get; set; }"}</code> |  |
| <Link id="m-pickuprange-2" /><code>{"Collider PickupRange { get; }"}</code> |  |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; protected set; }"}</code> |  |
| <Link id="m-quantitystored-2" /><code>{"int QuantityStored { get; set; }"}</code> |  |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-snappoint-2" /><code>{"Transform SnapPoint { get; }"}</code> |  |
| <Link id="m-syncquantity" /><code><Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" SyncQuantity { get; private set; }"}</code> |  |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; }"}</code> |  |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dockfilter" /><code>{"event "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link></code> |  |
| <Link id="m-hovercountchanged" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockhoverhandler">{"PickupDockHoverHandler"}</Link>{" HoverCountChanged"}</code> |  |
| <Link id="m-itemdocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" ItemDocked"}</code> |  |
| <Link id="m-itemundocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" ItemUndocked"}</code> |  |
| <Link id="m-onsubdocked" /><code>{"event "}<Link to="/game-api/types/alta-items/subdockhandler">{"SubDockHandler"}</Link>{" OnSubDocked"}</code> |  |
| <Link id="m-onsubundocked" /><code>{"event "}<Link to="/game-api/types/alta-items/subdockhandler">{"SubDockHandler"}</Link>{" OnSubUndocked"}</code> |  |
| <Link id="m-preitemdocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreItemDocked"}</code> |  |
| <Link id="m-quantitychanged" /><code>{"event "}<Link to="/game-api/types/alta-items/quantitychangehandler">{"QuantityChangeHandler"}</Link>{" QuantityChanged"}</code> |  |
| <Link id="m-updatecontent" /><code>{"event Action UpdateContent"}</code> |  |
| <Link id="m-updatedplayerownership" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockhandler">{"PickupDockHandler"}</Link>{" UpdatedPlayerOwnership"}</code> |  |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> |  |
| <Link id="m-canaccept" /><code>{"bool CanAccept("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-canacceptuntyped" /><code>{"bool CanAcceptUntyped("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-candockamount" /><code>{"bool CanDockAmount(int amount)"}</code> |  |
| <Link id="m-checkallowed" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" CheckAllowed("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-checkallowed-2" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" CheckAllowed("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity, out "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" finalDock)"}</code> |  |
| <Link id="m-checkallowed-3" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" CheckAllowed("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> |  |
| <Link id="m-checkforward" /><code>{"override "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> |  |
| <Link id="m-cleardocked" /><code>{"void ClearDocked()"}</code> |  |
| <Link id="m-destroyamount" /><code>{"void DestroyAmount(int count)"}</code> |  |
| <Link id="m-destroyamounttoempty" /><code>{"void DestroyAmountToEmpty()"}</code> |  |
| <Link id="m-destroypickupifstackedindock" /><code>{"bool DestroyPickupIfStackedInDock("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-getpositioning" /><code>{"void GetPositioning("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-isscaling" /><code>{"bool IsScaling("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-movetodock" /><code>{"static IEnumerator MoveToDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform target, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup = null, bool isScaling = true, bool isScaleInstant = true) (iterator)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onquantitychanged" /><code>{"void OnQuantityChanged()"}</code> |  |
| <Link id="m-triggerhaptic" /><code>{"void TriggerHaptic("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-triggerhoverhaptic" /><code>{"void TriggerHoverHaptic("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-undockall" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" UndockAll("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null, Transform target = null)"}</code> |  |
| <Link id="m-undockallunityevent" /><code>{"void UndockAllUnityEvent()"}</code> |  |
| <Link id="m-undockmaximum" /><code>{"bool UndockMaximum(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int max = 2147483647)"}</code> |  |
| <Link id="m-undockquantity" /><code>{"bool UndockQuantity(int quantity, out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-undockto" /><code>{"void UndockTo(Transform target)"}</code> |  |
| <Link id="m-undockunlimitedpouches" /><code>{"bool UndockUnlimitedPouches(int quantity, out List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups)"}</code> |  |
| <Link id="m-updatechangedcontent" /><code>{"void UpdateChangedContent()"}</code> |  |
| <Link id="m-updatequantitystoredtext" /><code>{"void UpdateQuantityStoredText()"}</code> |  |
| <Link id="m-addsoundlisteners" /><code>{"private void AddSoundListeners()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-changepickupssavemode" /><code>{"private void ChangePickupsSaveMode("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isSavingNormaly)"}</code> |  |
| <Link id="m-checkcraftingflip" /><code>{"private static Quaternion CheckCraftingFlip("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Quaternion rotation)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-cleandestroy" /><code>{"private void CleanDestroy()"}</code> |  |
| <Link id="m-cleanupdocked" /><code>{"private void CleanupDocked("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, bool isUnload)"}</code> |  |
| <Link id="m-createnewimage" /><code>{"private void CreateNewImage("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" takenOutPickup)"}</code> |  |
| <Link id="m-dock" /><code>{"private void IDockable.Dock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int dockingQuantity, bool isInstantMovementForced)"}</code> |  |
| <Link id="m-dockeddestroyed" /><code>{"private void DockedDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-dockhoversound" /><code>{"private void DockHoverSound("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount)"}</code> |  |
| <Link id="m-generateserializeddata" /><code>{"private void GenerateSerializedData("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" takenOutPickup)"}</code> |  |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-itemdockedsound" /><code>{"private void ItemDockedSound("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-itemundockedsound" /><code>{"private void ItemUnDockedSound("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-loaddockpickup" /><code>{"private void LoadDockPickup("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" pickupPrefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-movetodockinstant" /><code>{"private void MoveToDockInstant("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> |  |
| <Link id="m-removesoundlisteners" /><code>{"private void RemoveSoundListeners()"}</code> |  |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-serializequantity" /><code>{"private void SerializeQuantity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-soundhookinitializedelay" /><code>{"private void SoundHookInitializeDelay()"}</code> |  |
| <Link id="m-subdockedevent" /><code>{"private void SubDockedEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> |  |
| <Link id="m-subundockedevent" /><code>{"private void SubUndockedEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> |  |
| <Link id="m-undock" /><code>{"private void IDockable.Undock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> |  |
| <Link id="m-updateplayerownership" /><code>{"private void UpdatePlayerOwnership("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-updatequantity" /><code>{"private IEnumerator UpdateQuantity() (iterator)"}</code> |  |
| <Link id="m-waitforanimation" /><code>{"private IEnumerator WaitForAnimation() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupDock`:

[`Recycler.fueldDock`](/game-api/types/alta-crafting/recycler#m-fuelddock), [`RecyclerOutputSlot.displayDock`](/game-api/types/alta-crafting/recycleroutputslot#m-displaydock), [`RecyclerOutputSlot.targetDock`](/game-api/types/alta-crafting/recycleroutputslot#m-targetdock), [`Smelter.CheckSmelt`](/game-api/types/alta-crafting/smelter#m-checksmelt-2), [`Smelter.CheckSpriteZero`](/game-api/types/alta-crafting/smelter#m-checkspritezero), [`Smelter.fuelDocks`](/game-api/types/alta-crafting/smelter#m-fueldocks), [`Smelter.MouldAdded`](/game-api/types/alta-crafting/smelter#m-mouldadded), [`Smelter.mouldDock`](/game-api/types/alta-crafting/smelter#m-moulddock), [`Smelter.MouldRemoved`](/game-api/types/alta-crafting/smelter#m-mouldremoved), [`Smelter.oreDocks`](/game-api/types/alta-crafting/smelter#m-oredocks), [`BuilderDock.dock`](/game-api/types/alta-crafting/builderdock#m-dock), [`RecipePlacer.AddDefinition`](/game-api/types/alta-crafting/recipeplacer#m-adddefinition), [`RecipePlacer.ClearDefinition`](/game-api/types/alta-crafting/recipeplacer#m-cleardefinition), [`RecipePlacer.pageDock`](/game-api/types/alta-crafting/recipeplacer#m-pagedock), [`CaveTeleporter.fuelDock`](/game-api/types/alta-world-generation/caveteleporter#m-fueldock), [`DockedDissolver.DissolveItem`](/game-api/types/alta-world-generation/dockeddissolver#m-dissolveitem), [`DockedDissolver.targetDock`](/game-api/types/alta-world-generation/dockeddissolver#m-targetdock), [`DockStore.DockStore`](/game-api/types/alta-player/dockstore#m-ctor), [`DockStore.Source`](/game-api/types/alta-player/dockstore#m-source), [`Inventory.BackDock`](/game-api/types/alta-player/inventory#m-backdock), [`Inventory.LeftBeltDock`](/game-api/types/alta-player/inventory#m-leftbeltdock), [`Inventory.LeftHipDock`](/game-api/types/alta-player/inventory#m-lefthipdock), [`Inventory.RightBeltDock`](/game-api/types/alta-player/inventory#m-rightbeltdock), [`Inventory.RightHipDock`](/game-api/types/alta-player/inventory#m-righthipdock), [`AdditionalOwnedDock.DeregisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-deregisterdock), [`AdditionalOwnedDock.RegisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-registerdock), [`AdditionalOwnedDock.UpdateOwnership`](/game-api/types/alta-crafting/additionalowneddock#m-updateownership), [`DisableLightOnDock.CheckEnabledEnable`](/game-api/types/alta-crafting/disablelightondock#m-checkenabledenable), [`DisableLightOnDock.ForceEnable`](/game-api/types/alta-crafting/disablelightondock#m-forceenable), [`GenericAssemblyStation.dock`](/game-api/types/alta-crafting/genericassemblystation#m-dock), [`GenericAssemblyStation.InsertPiece`](/game-api/types/alta-crafting/genericassemblystation#m-insertpiece), [`GenericAssemblyStation.RemovePiece`](/game-api/types/alta-crafting/genericassemblystation#m-removepiece), [`GenericCraftingStation.DockingFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-dockingfilter), [`GenericCraftingStation.OnPageDocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpagedocked), [`GenericCraftingStation.OnPageUndocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpageundocked), [`GenericCraftingStation.recipeDock`](/game-api/types/alta-crafting/genericcraftingstation#m-recipedock), [`MainMenuShopInterface.depositDock`](/game-api/types/alta-customization/mainmenushopinterface#m-depositdock), [`MainMenuShopInterface.DestroyDocked`](/game-api/types/alta-customization/mainmenushopinterface#m-destroydocked), [`MainMenuShopInterface.withdrawDock`](/game-api/types/alta-customization/mainmenushopinterface#m-withdrawdock), [`MainMenuShopItem.depositDock`](/game-api/types/alta-customization/mainmenushopitem#m-depositdock), [`QuickDrawApplication.Charge`](/game-api/types/alta-crafting/quickdrawapplication#m-charge), [`Fire.AllowLighting`](/game-api/types/alta-stats-effects/fire#m-allowlighting), [`Fire.CheckExtinguish`](/game-api/types/alta-stats-effects/fire#m-checkextinguish), [`Fire.fuelDock`](/game-api/types/alta-stats-effects/fire#m-fueldock), [`Fire.StopExtinguish`](/game-api/types/alta-stats-effects/fire#m-stopextinguish), [`Fire.Subdocked`](/game-api/types/alta-stats-effects/fire#m-subdocked), [`EmbeddableManager.HandleDock`](/game-api/types/alta-items/embeddablemanager#m-handledock), [`ImpactTool.UndockWakeUp`](/game-api/types/alta-items/impacttool#m-undockwakeup), [`PickupAgent.DockedChanged`](/game-api/types/alta-intelligence/pickupagent#m-dockedchanged), [`AbstractDockEvents.dock`](/game-api/types/alta-items/abstractdockevents#m-dock), [`AbstractDockEvents.ItemDocked`](/game-api/types/alta-items/abstractdockevents#m-itemdocked), [`AbstractDockEvents.ItemUndocked`](/game-api/types/alta-items/abstractdockevents#m-itemundocked), [`AutomaticDockArea.docks`](/game-api/types/alta-items/automaticdockarea#m-docks), [`AutomaticDockArea.Docks`](/game-api/types/alta-items/automaticdockarea#m-docks-2), [`BoundsDockPositioning.dock`](/game-api/types/alta-items/boundsdockpositioning#m-dock), [`BoundsDockPositioning.Position`](/game-api/types/alta-items/boundsdockpositioning#m-position), [`CommunalStorage.filterDock`](/game-api/types/alta-items/communalstorage#m-filterdock), [`CommunalStorage.internalDock`](/game-api/types/alta-items/communalstorage#m-internaldock), [`CommunalStorage.Refund`](/game-api/types/alta-items/communalstorage#m-refund), [`CraftedDocks.DisableDocks`](/game-api/types/alta-items/crafteddocks#m-disabledocks) and 215 more.
