---
title: "PickupDock"
description: "A slot that holds pickups: backpack and belt slots, pouches, racks, crafting station inputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDock

A **class** in `Root.Township`, `Alta.Inventory`.

A slot that holds pickups: backpack and belt slots, pouches, racks, crafting station inputs. A stack is one real docked `Pickup` plus a count in `QuantityStored`; the server spawns a fresh copy when one is taken out. Both sides; the server owns the count and syncs it.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable), [`ISavableFull<PickupDockSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<PickupDockSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PickupDockSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t), [`IDockable`](/game-api/types/global-i-l/idockable), [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer), [`IInitializeAsRemotePlayer`](/game-api/types/global-i-l/iinitializeasremoteplayer), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`DockStore`](/game-api/types/alta-player/dockstore), [`AdditionalOwnedDock`](/game-api/types/alta-crafting/additionalowneddock), [`PickupDockSaveData`](/game-api/types/alta-items/pickupdocksavedata), [`PickupDockedEvent`](/game-api/types/global-p/pickupdockedevent), [`PickupDockedUnityEvent`](/game-api/types/global-p/pickupdockedunityevent), [`PickupDockGroup`](/game-api/types/global-p/pickupdockgroup), [`PickupDockPedestalSpawn`](/game-api/types/global-p/pickupdockpedestalspawn)
- **Nested types** [`AllowedResult`](/game-api/types/alta-items/pickupdock-allowedresult)
- **Attributes** `SavingInfo`
- **Documented in** [Other systems](/game-api/game-systems/other-systems), [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dockedtype" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" dockedType"}</code> | The `Item` type stored in the dock. Saved, and used to respawn the docked pickup on load. |

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientdocked" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> clientDocked"}</code> | Client: pickups predicted as docked here before the server confirms, added to the shown count. |
| <Link id="m-dockvisual" /><code>{"private "}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual"}</code> | Visual that shows the stored count text. |
| <Link id="m-hapticcoroutine" /><code>{"private Coroutine hapticCoroutine"}</code> | The running `WaitForAnimation` coroutine, restarted on each pass-through haptic. |
| <Link id="m-hascontentsrange" /><code>{"private List<Collider> hasContentsRange"}</code> | Colliders enabled only while the dock holds something. |
| <Link id="m-hovercount" /><code>{"private int hoverCount"}</code> | Backing field for `HoverCount`. |
| <Link id="m-ishapticanimating" /><code>{"private bool isHapticAnimating"}</code> | True while the pass-through haptic plays, so hover haptics are skipped. |
| <Link id="m-lastofficialquantity" /><code>{"private int lastOfficialQuantity"}</code> | The last quantity set through `QuantityStored`, which clients add their predicted items to. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pickuprange" /><code>{"private Collider pickupRange"}</code> | Backing field for `PickupRange`. Disabled on headless servers. |
| <Link id="m-previouslydocked" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" previouslyDocked"}</code> | The last pickup undocked from this dock. |
| <Link id="m-quantitystored" /><code>{"private int quantityStored"}</code> | Backing field for `QuantityStored`. Saved with the dock. |
| <Link id="m-scaleanimator" /><code>{"private "}<Link to="/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" scaleAnimator"}</code> | Scales the dock up while a hand hovers over it. |
| <Link id="m-scaler" /><code>{"private "}<Link to="/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{" scaler"}</code> | Optional `NearbyPlayerScaler`; docking forces it to scale for items the dock doesn't shrink. |
| <Link id="m-serializeddata" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" serializedData"}</code> | Server: saved state of the docked item that new copies are spawned from when the stack is taken from. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" settings"}</code> | Backing field for `Settings`: what the dock accepts, stacking, scaling and haptics. |
| <Link id="m-snappoint" /><code>{"private Transform snapPoint"}</code> | Backing field for `SnapPoint`, the transform docked items are parented to. Defaults to the dock's own transform. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowcontainerinteraction" /><code>{"virtual bool AllowContainerInteraction { get; }"}</code> | Whether the dock lets you interact through it to a container, taken from its settings. |
| <Link id="m-dockedpickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" DockedPickup { get; private set; }"}</code> | The one real pickup shown in the dock, standing in for the whole stack. Null when empty. |
| <Link id="m-hasdockedpickup" /><code>{"bool HasDockedPickup { get; }"}</code> | True if there is a docked pickup that is not being destroyed. |
| <Link id="m-hovercount-2" /><code>{"int HoverCount { get; set; }"}</code> | How many hands are hovering over the dock. Drives the hover scale animation and raises `HoverCountChanged`. |
| <Link id="m-isownedbyplayer" /><code>{"bool IsOwnedByPlayer { get; protected set; }"}</code> | True for docks on a player body (backpack, belt and so on). Set when the player controller initialises. |
| <Link id="m-maxquantitycurrentlypossible" /><code>{"int MaxQuantityCurrentlyPossible { get; }"}</code> | Most the dock can hold right now: the docked item's stack size times the max stacks setting, or unlimited when empty or uncapped. |
| <Link id="m-overridepositioning" /><code><Link to="/game-api/types/alta-items/dockpositioning">{"DockPositioning"}</Link>{" OverridePositioning { get; set; }"}</code> | Optional callback that replaces the default docked position, rotation and scale. |
| <Link id="m-pickuprange-2" /><code>{"Collider PickupRange { get; }"}</code> | Collider for the area where pickups can be dropped into the dock. Disabled on headless servers. |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; protected set; }"}</code> | The player that owns this dock, if `IsOwnedByPlayer`. |
| <Link id="m-quantitystored-2" /><code>{"int QuantityStored { get; set; }"}</code> | How many items are in the stack. Setting it clamps at zero and runs `OnQuantityChanged`. Only the server's value is authoritative. |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" Settings { get; }"}</code> | The `PickupDockSettings` asset with this dock's rules (what it accepts, stacking, sizes, haptics, sounds). |
| <Link id="m-snappoint-2" /><code>{"Transform SnapPoint { get; }"}</code> | Transform docked pickups are parented to. |
| <Link id="m-syncquantity" /><code><Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" SyncQuantity { get; private set; }"}</code> | The network sync that sends the stored count to clients. |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; }"}</code> | Weight of the docked pickup times the stored count. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> | The item holding this dock can only be taken apart while the dock is empty. |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Build bake order, always 0. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dockfilter" /><code>{"event "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link></code> | Event for extra rules. Handlers can set the result to false to refuse a pickup, giving `FilterFail`. |
| <Link id="m-hovercountchanged" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockhoverhandler">{"PickupDockHoverHandler"}</Link>{" HoverCountChanged"}</code> | Raised when `HoverCount` changes, with the old count. |
| <Link id="m-itemdocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" ItemDocked"}</code> | Raised after a pickup is docked. |
| <Link id="m-itemundocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" ItemUndocked"}</code> | Raised after a pickup is undocked. |
| <Link id="m-onsubdocked" /><code>{"event "}<Link to="/game-api/types/alta-items/subdockhandler">{"SubDockHandler"}</Link>{" OnSubDocked"}</code> | Raised when something docks into a dock on the pickup this dock belongs to. |
| <Link id="m-onsubundocked" /><code>{"event "}<Link to="/game-api/types/alta-items/subdockhandler">{"SubDockHandler"}</Link>{" OnSubUndocked"}</code> | Raised when something undocks from a dock on the pickup this dock belongs to. |
| <Link id="m-preitemdocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreItemDocked"}</code> | Raised during docking, after the pickup is parented to the snap point but before it is counted. |
| <Link id="m-quantitychanged" /><code>{"event "}<Link to="/game-api/types/alta-items/quantitychangehandler">{"QuantityChangeHandler"}</Link>{" QuantityChanged"}</code> | Raised after the stored count changes and the text updates. |
| <Link id="m-updatecontent" /><code>{"event Action UpdateContent"}</code> | Raised by `UpdateChangedContent`. |
| <Link id="m-updatedplayerownership" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockhandler">{"PickupDockHandler"}</Link>{" UpdatedPlayerOwnership"}</code> | Raised when the dock is linked to its owning player. |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> | Raised when the docked weight changes (docking, undocking, or the docked pickup's weight changing). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Hand scoring for grabbing from the dock. A local hand without a hard grab is refused; otherwise the base score times ten. |
| <Link id="m-canaccept" /><code>{"bool CanAccept("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | True if the pickup is the same item type as what is docked and passes the transient check. |
| <Link id="m-canacceptuntyped" /><code>{"bool CanAcceptUntyped("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | True unless the pickup is transient and the dock's settings refuse transient pickups. |
| <Link id="m-candockamount" /><code>{"bool CanDockAmount(int amount)"}</code> | Whether adding that many would stay within `MaxQuantityCurrentlyPossible`. |
| <Link id="m-checkallowed" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" CheckAllowed("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Checks if a pickup or item may go in this dock and returns an `AllowedResult` reason. Covers pouches, filters, tags, crafting size and sub docks. |
| <Link id="m-checkallowed-2" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" CheckAllowed("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity, out "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" finalDock)"}</code> | Checks if a pickup or item may go in this dock and returns an `AllowedResult` reason. Covers pouches, filters, tags, crafting size and sub docks. |
| <Link id="m-checkallowed-3" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" CheckAllowed("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | Checks if a pickup or item may go in this dock and returns an `AllowedResult` reason. Covers pouches, filters, tags, crafting size and sub docks. |
| <Link id="m-checkforward" /><code>{"override "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> | Grabbing the dock forwards to the docked pickup. A dock owned by a player refuses other players. |
| <Link id="m-cleardocked" /><code>{"void ClearDocked()"}</code> | Forgets the docked pickup without undocking it or changing the count. |
| <Link id="m-destroyamount" /><code>{"void DestroyAmount(int count)"}</code> | Server: removes that many from the stack, destroying the docked pickup if the count runs out. |
| <Link id="m-destroyamounttoempty" /><code>{"void DestroyAmountToEmpty()"}</code> | Server: destroys the whole stored stack. |
| <Link id="m-destroypickupifstackedindock" /><code>{"bool DestroyPickupIfStackedInDock("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Server: destroys a pickup that was stacked into this dock (count above one and not the docked pickup). Returns true if it did. |
| <Link id="m-getpositioning" /><code>{"void GetPositioning("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> | Works out the local position, rotation and scale a pickup should have in the dock, using `OverridePositioning` if set and the item's positioning otherwise. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the quantity sync, hooks cleanup when the parent is destroyed and forwards sub dock events from the parent pickup. |
| <Link id="m-isscaling" /><code>{"bool IsScaling("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Whether a pickup shrinks when docked here, based on the settings' scaling tags. |
| <Link id="m-movetodock" /><code>{"static IEnumerator MoveToDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform target, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup = null, bool isScaling = true, bool isScaleInstant = true) (iterator)"}</code> | Coroutine that moves a transform smoothly to its docked position, rotation and scale. Stops if it gets undocked meanwhile. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the stored count to a player who just loaded the dock. |
| <Link id="m-onquantitychanged" /><code>{"void OnQuantityChanged()"}</code> | Updates the contents colliders and count text, raises `QuantityChanged`, and on the server syncs the count to the chunk. |
| <Link id="m-triggerhaptic" /><code>{"void TriggerHaptic("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Client: plays the pass-through haptic on a controller, unless toggle-holding haptics are off. |
| <Link id="m-triggerhoverhaptic" /><code>{"void TriggerHoverHaptic("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Client: plays the hover haptic on a controller if the settings have one. |
| <Link id="m-undockall" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" UndockAll("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null, Transform target = null)"}</code> | Takes everything out. One item comes out as itself; on the server more than one is moved into a new pouch, which is returned. |
| <Link id="m-undockallunityevent" /><code>{"void UndockAllUnityEvent()"}</code> | `UndockAll` with no arguments, for wiring from Unity events. |
| <Link id="m-undockmaximum" /><code>{"bool UndockMaximum(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int max = 2147483647)"}</code> | Takes out as much as one stack allows (up to the given max) via `UndockQuantity`. |
| <Link id="m-undockquantity" /><code>{"bool UndockQuantity(int quantity, out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Takes out that many. One comes out as the docked pickup itself; more are moved into a new pouch. |
| <Link id="m-undockto" /><code>{"void UndockTo(Transform target)"}</code> | Server: undocks everything to the given transform and forces a position sync. |
| <Link id="m-undockunlimitedpouches" /><code>{"bool UndockUnlimitedPouches(int quantity, out List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups)"}</code> | Splits that quantity into as many pickups or pouches as needed, one stack each. False if there isn't enough. |
| <Link id="m-updatechangedcontent" /><code>{"void UpdateChangedContent()"}</code> | Re-places the docked pickup, refreshes the count text and raises `UpdateContent`. |
| <Link id="m-updatequantitystoredtext" /><code>{"void UpdateQuantityStoredText()"}</code> | Client: refreshes the count shown on the dock, hiding it for empty, non-stackable or unique crafted items. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Clears a stored count that has no item, sets up the hover scale animation and turns off the pickup range collider on a headless server. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Defaults the snap point to the dock's own transform. |

<details>
<summary>34 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addsoundlisteners" /><code>{"private void AddSoundListeners()"}</code> | Client: hooks the dock, undock and hover sounds to this dock's events. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build step that makes the dock not interactable until something docks into it. |
| <Link id="m-changepickupssavemode" /><code>{"private void ChangePickupsSaveMode("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isSavingNormaly)"}</code> | Sets a pickup's prefab save mode to `Child` while docked, or back to its base save mode when undocked. |
| <Link id="m-checkcraftingflip" /><code>{"private static Quaternion CheckCraftingFlip("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Quaternion rotation)"}</code> | Turns a crafted, non-stackable item 180 degrees in the dock if its crafting part says it is stored flipped. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Explicit `IBuildRendererBakeable` build step. Does nothing. |
| <Link id="m-cleandestroy" /><code>{"private void CleanDestroy()"}</code> | Removes the sound listeners and stops watching the parent entity's destruction. |
| <Link id="m-cleanupdocked" /><code>{"private void CleanupDocked("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, bool isUnload)"}</code> | Server: destroys the docked pickup when the dock's parent entity is destroyed by the scene. |
| <Link id="m-createnewimage" /><code>{"private void CreateNewImage("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" takenOutPickup)"}</code> | Server: after the shown item is taken out of a stack, spawns a copy from the saved data and docks it as the new shown item. |
| <Link id="m-dock" /><code>{"private void IDockable.Dock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int dockingQuantity, bool isInstantMovementForced)"}</code> | Explicit `IDockable` dock: parents the pickup to the snap point, moves it into place and adds the quantity (server) or tracks it (client). |
| <Link id="m-dockeddestroyed" /><code>{"private void DockedDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Undocks everything when the docked pickup is destroyed for a reason other than unloading. |
| <Link id="m-dockhoversound" /><code>{"private void DockHoverSound("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount)"}</code> | Client: plays the hover sound when the first hand starts hovering, if the settings allow it. |
| <Link id="m-generateserializeddata" /><code>{"private void GenerateSerializedData("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" takenOutPickup)"}</code> | Server: saves the docked pickup's state so `CreateNewImage` can spawn identical copies of it. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Marks this dock as owned by the local player's controller. |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Marks this dock as owned by a remote player's controller (also used on the server). |
| <Link id="m-itemdockedsound" /><code>{"private void ItemDockedSound("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Client: plays the dock added-to sound if the settings allow it. |
| <Link id="m-itemundockedsound" /><code>{"private void ItemUnDockedSound("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Client: plays the dock removed-from sound if the settings allow it. |
| <Link id="m-loaddockpickup" /><code>{"private void LoadDockPickup("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" pickupPrefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | Server load: initialises a saved child pickup and docks it, clamping the quantity to 1 if the item can't stack. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | Server load: if the dock should hold items but has none, docks a matching child pickup or spawns a new one of the saved type. |
| <Link id="m-movetodockinstant" /><code>{"private void MoveToDockInstant("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling)"}</code> | Puts the pickup at its dock position, rotation and scale straight away. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Undocks a leftover pickup if the dock was empty and cleans up listeners when destroyed outside entity destruction. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the hover scale animation. |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | After docking: switches the pickup to child save mode, watches it for destruction and raises `ItemDocked` and `WeightChanged`. |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | After undocking: restores the pickup's save mode, stops watching it and raises `ItemUndocked` and `WeightChanged`. |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> | Raises `WeightChanged`. Hooked to the docked pickup's own weight changes. |
| <Link id="m-removesoundlisteners" /><code>{"private void RemoveSoundListeners()"}</code> | Unhooks the dock sound handlers. |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Cleans up listeners when the dock's entity is destroyed by the scene. |
| <Link id="m-serializequantity" /><code>{"private void SerializeQuantity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Synced message with the stored quantity; clients apply it through `QuantityStored`. |
| <Link id="m-soundhookinitializedelay" /><code>{"private void SoundHookInitializeDelay()"}</code> | Client: adds the sound listeners half a second after initialising, so loading docks stay quiet. |
| <Link id="m-subdockedevent" /><code>{"private void SubDockedEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> | Raises `OnSubDocked` when something docks into a dock on the item this dock belongs to. |
| <Link id="m-subundockedevent" /><code>{"private void SubUndockedEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> | Raises `OnSubUndocked` when something undocks from a dock on the item this dock belongs to. |
| <Link id="m-undock" /><code>{"private void IDockable.Undock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> | Explicit `IDockable` undock: frees the pickup, lowers the quantity and on the server docks a fresh copy if any remain. |
| <Link id="m-updateplayerownership" /><code>{"private void UpdatePlayerOwnership("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Sets the owning player controller, marks the dock as player owned and raises `UpdatedPlayerOwnership`. |
| <Link id="m-updatequantity" /><code>{"private IEnumerator UpdateQuantity() (iterator)"}</code> | Coroutine run on quantity change: the server sends the quantity to chunks, clients recount predicted items, then the count text updates. |
| <Link id="m-waitforanimation" /><code>{"private IEnumerator WaitForAnimation() (iterator)"}</code> | Coroutine that blocks hover haptics until the pass-through haptic curve has finished. |

</details>

## Used in

Members of other types that take, return or hold a `PickupDock`:

[`Recycler.fueldDock`](/game-api/types/alta-crafting/recycler#m-fuelddock), [`RecyclerOutputSlot.displayDock`](/game-api/types/alta-crafting/recycleroutputslot#m-displaydock), [`RecyclerOutputSlot.targetDock`](/game-api/types/alta-crafting/recycleroutputslot#m-targetdock), [`Smelter.CheckSmelt`](/game-api/types/alta-crafting/smelter#m-checksmelt-2), [`Smelter.CheckSpriteZero`](/game-api/types/alta-crafting/smelter#m-checkspritezero), [`Smelter.fuelDocks`](/game-api/types/alta-crafting/smelter#m-fueldocks), [`Smelter.MouldAdded`](/game-api/types/alta-crafting/smelter#m-mouldadded), [`Smelter.mouldDock`](/game-api/types/alta-crafting/smelter#m-moulddock), [`Smelter.MouldRemoved`](/game-api/types/alta-crafting/smelter#m-mouldremoved), [`Smelter.oreDocks`](/game-api/types/alta-crafting/smelter#m-oredocks), [`BuilderDock.dock`](/game-api/types/alta-crafting/builderdock#m-dock), [`RecipePlacer.AddDefinition`](/game-api/types/alta-crafting/recipeplacer#m-adddefinition), [`RecipePlacer.ClearDefinition`](/game-api/types/alta-crafting/recipeplacer#m-cleardefinition), [`RecipePlacer.pageDock`](/game-api/types/alta-crafting/recipeplacer#m-pagedock), [`CaveTeleporter.fuelDock`](/game-api/types/alta-world-generation/caveteleporter#m-fueldock), [`DockedDissolver.DissolveItem`](/game-api/types/alta-world-generation/dockeddissolver#m-dissolveitem), [`DockedDissolver.targetDock`](/game-api/types/alta-world-generation/dockeddissolver#m-targetdock), [`DockStore.DockStore`](/game-api/types/alta-player/dockstore#m-ctor), [`DockStore.Source`](/game-api/types/alta-player/dockstore#m-source), [`Inventory.BackDock`](/game-api/types/alta-player/inventory#m-backdock), [`Inventory.LeftBeltDock`](/game-api/types/alta-player/inventory#m-leftbeltdock), [`Inventory.LeftHipDock`](/game-api/types/alta-player/inventory#m-lefthipdock), [`Inventory.RightBeltDock`](/game-api/types/alta-player/inventory#m-rightbeltdock), [`Inventory.RightHipDock`](/game-api/types/alta-player/inventory#m-righthipdock), [`AdditionalOwnedDock.DeregisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-deregisterdock), [`AdditionalOwnedDock.RegisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-registerdock), [`AdditionalOwnedDock.UpdateOwnership`](/game-api/types/alta-crafting/additionalowneddock#m-updateownership), [`DisableLightOnDock.CheckEnabledEnable`](/game-api/types/alta-crafting/disablelightondock#m-checkenabledenable), [`DisableLightOnDock.ForceEnable`](/game-api/types/alta-crafting/disablelightondock#m-forceenable), [`GenericAssemblyStation.dock`](/game-api/types/alta-crafting/genericassemblystation#m-dock), [`GenericAssemblyStation.InsertPiece`](/game-api/types/alta-crafting/genericassemblystation#m-insertpiece), [`GenericAssemblyStation.RemovePiece`](/game-api/types/alta-crafting/genericassemblystation#m-removepiece), [`GenericCraftingStation.DockingFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-dockingfilter), [`GenericCraftingStation.OnPageDocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpagedocked), [`GenericCraftingStation.OnPageUndocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpageundocked), [`GenericCraftingStation.recipeDock`](/game-api/types/alta-crafting/genericcraftingstation#m-recipedock), [`MainMenuShopInterface.depositDock`](/game-api/types/alta-customization/mainmenushopinterface#m-depositdock), [`MainMenuShopInterface.DestroyDocked`](/game-api/types/alta-customization/mainmenushopinterface#m-destroydocked), [`MainMenuShopInterface.withdrawDock`](/game-api/types/alta-customization/mainmenushopinterface#m-withdrawdock), [`MainMenuShopItem.depositDock`](/game-api/types/alta-customization/mainmenushopitem#m-depositdock), [`QuickDrawApplication.Charge`](/game-api/types/alta-crafting/quickdrawapplication#m-charge), [`Fire.AllowLighting`](/game-api/types/alta-stats-effects/fire#m-allowlighting), [`Fire.CheckExtinguish`](/game-api/types/alta-stats-effects/fire#m-checkextinguish), [`Fire.fuelDock`](/game-api/types/alta-stats-effects/fire#m-fueldock), [`Fire.StopExtinguish`](/game-api/types/alta-stats-effects/fire#m-stopextinguish), [`Fire.Subdocked`](/game-api/types/alta-stats-effects/fire#m-subdocked), [`EmbeddableManager.HandleDock`](/game-api/types/alta-items/embeddablemanager#m-handledock), [`ImpactTool.UndockWakeUp`](/game-api/types/alta-items/impacttool#m-undockwakeup), [`PickupAgent.DockedChanged`](/game-api/types/alta-intelligence/pickupagent#m-dockedchanged), [`AbstractDockEvents.dock`](/game-api/types/alta-items/abstractdockevents#m-dock), [`AbstractDockEvents.ItemDocked`](/game-api/types/alta-items/abstractdockevents#m-itemdocked), [`AbstractDockEvents.ItemUndocked`](/game-api/types/alta-items/abstractdockevents#m-itemundocked), [`AutomaticDockArea.docks`](/game-api/types/alta-items/automaticdockarea#m-docks), [`AutomaticDockArea.Docks`](/game-api/types/alta-items/automaticdockarea#m-docks-2), [`BoundsDockPositioning.dock`](/game-api/types/alta-items/boundsdockpositioning#m-dock), [`BoundsDockPositioning.Position`](/game-api/types/alta-items/boundsdockpositioning#m-position), [`CommunalStorage.filterDock`](/game-api/types/alta-items/communalstorage#m-filterdock), [`CommunalStorage.internalDock`](/game-api/types/alta-items/communalstorage#m-internaldock), [`CommunalStorage.Refund`](/game-api/types/alta-items/communalstorage#m-refund), [`CraftedDocks.DisableDocks`](/game-api/types/alta-items/crafteddocks#m-disabledocks) and 215 more.
