---
title: "Pickup"
description: "An Interactable you can pick up, hold, dock and drop: almost every item in the game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pickup

A **class** in `Root.Township`, the global namespace.

An `Interactable` you can pick up, hold, dock and drop: almost every item in the game. Lives on the item's prefab root; grabs start on the holding client and are synced to the server and others.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable), [`IGetRigidbody`](/mod/game-api/types/alta-crafting/igetrigidbody), [`IPopulationRemovalMethod`](/mod/game-api/types/alta-world-generation/ipopulationremovalmethod), [`ISavable<PickupSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PickupSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`KeyItem`](/mod/game-api/types/alta-items/keyitem), [`CapPickup`](/mod/game-api/types/global-c-d/cappickup), [`DockableJoints`](/mod/game-api/types/global-c-d/dockablejoints), [`MultiHandPickup`](/mod/game-api/types/global-m-o/multihandpickup), [`PickupDockedEvent`](/mod/game-api/types/global-p/pickupdockedevent), [`PickupDockedUnityEvent`](/mod/game-api/types/global-p/pickupdockedunityevent), [`PickupEvent`](/mod/game-api/types/global-p/pickupevent), [`PickupSaveData`](/mod/game-api/types/global-p/pickupsavedata), [`UnityPickupEvent`](/mod/game-api/types/global-t-x/unitypickupevent)
- **Nested types** [`PickupHandler`](/mod/game-api/types/global-p/pickup-pickuphandler)
- **Attributes** `SelectionBase`
- **Documented in** [Pickup](/mod/game-api/items/pickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bestgrab" /><code>{"protected "}<Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" bestGrab"}</code> | Protected backing field for `BestGrab`. |
| <Link id="m-bestgrabinteractor" /><code>{"protected "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" bestGrabInteractor"}</code> | Protected. The hand `bestGrab` was chosen for. |
| <Link id="m-interactortograbpoint" /><code>{"protected Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{"> interactorToGrabPoint"}</code> | Protected. The grab point each holding hand is using. |

<details>
<summary>48 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayerindex" /><code>{"private static int ActiveTightGripLayerIndex"}</code> | Index of the "Active Tight Grip" layer. Tight grip colliders move to it briefly while the hand grip is fitted. |
| <Link id="m-blocklevel" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" blockLevel"}</code> | Backing field for `BlockLevel`: how well this blocks in combat. Default cannot block. |
| <Link id="m-breakevent" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" breakEvent"}</code> | Backing field for `BreakEvent`, invoked by `Break`. |
| <Link id="m-btn" /><code>{"private bool btn"}</code> | Inspector button that runs `GetInterferees`. |
| <Link id="m-bypassmed1h" /><code>{"private bool bypassMed1h"}</code> | Backing field for `BypassMed1h`. |
| <Link id="m-childrencolliders" /><code>{"private Collider[] childrenColliders"}</code> | All child colliders, baked. Copied into `Colliders` on awake. |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | Backing field for `CraftingPart`. |
| <Link id="m-distancethresholdsquared" /><code>{"private float distanceThresholdSquared"}</code> | Squared distance a hand may move from the pickup during locomotion before it is force released. |
| <Link id="m-docked" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" docked"}</code> | Event behind `Docked`. |
| <Link id="m-dockedmemoryleft" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" dockedMemoryLeft"}</code> | Grab point the left hand last used when docking, reused on the next grab from the dock. Saved with the pickup. |
| <Link id="m-dockedmemoryright" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" dockedMemoryRight"}</code> | Grab point the right hand last used when docking. Saved with the pickup. |
| <Link id="m-docker" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdocker">{"PickupDocker"}</Link>{" docker"}</code> | Helper that handles docking into and out of docks; `Dock` comes from it. |
| <Link id="m-dockingchecker" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockingchecker">{"PickupDockingChecker"}</Link>{" dockingChecker"}</code> | Helper that finds a dock candidate while the local player holds the pickup. |
| <Link id="m-double1hsurpluspenalty" /><code>{"private bool double1hSurplusPenalty"}</code> | Inspector flag that no code reads. |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> | Backing field for `DurabilityModule`. |
| <Link id="m-grabpoints" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{"[] grabPoints"}</code> | Backing field for `GrabPoints`: where and how hands can hold this. |
| <Link id="m-grabpointsscale" /><code>{"private float grabPointsScale"}</code> | Scale applied to grab point positions. |
| <Link id="m-hasdistancethreshold" /><code>{"private bool hasDistanceThreshold"}</code> | Whether `CheckThreshold` force releases hands that move too far away. |
| <Link id="m-interactorstorelease" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> interactorsToRelease"}</code> | Shared scratch list used by `CheckThreshold`. |
| <Link id="m-interferewithdocking" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{"[] interfereWithDocking"}</code> | Cached cast of `interfereWithDockingObjects`, behind `InterfereWithDocking`. |
| <Link id="m-interferewithdockingobjects" /><code>{"private MonoBehaviour[] interfereWithDockingObjects"}</code> | Child components that can interfere with docking. Only filled for stackable items by `GetInterferees`. |
| <Link id="m-ischunkingparentstatic" /><code>{"private bool isChunkingParentStatic"}</code> | Backing field for `IsChunkingParentStatic`. When set, grabbing doesn't make the player the chunking parent. |
| <Link id="m-iscumbersome" /><code>{"private bool isCumbersome"}</code> | Inspector flag that no code reads. |
| <Link id="m-isenvironmentaljoint" /><code>{"private bool isEnvironmentalJoint"}</code> | Backing field for `IsEnvironmental`: an environment joint (lever, door) that stays put and doesn't follow the hand's chunk. |
| <Link id="m-isignoringmasterterrain" /><code>{"private bool isIgnoringMasterTerrain"}</code> | Whether terrain collision is currently off because of the chunk's environment. |
| <Link id="m-isloggingownerchanged" /><code>{"private bool isLoggingOwnerChanged"}</code> | Whether ownership changes and sub dock removals by other players are logged. |
| <Link id="m-isnetworkinitialized" /><code>{"private bool isNetworkInitialized"}</code> | Backing field for `IsNetworkInitialized`. False while the docker initializes for networking. |
| <Link id="m-isnexttreatedasdocked" /><code>{"private bool isNextTreatedAsDocked"}</code> | Makes the next grab point score as if docked. For items always spawned from a dock, like pouches. |
| <Link id="m-isstackdestroying" /><code>{"private bool isStackDestroying"}</code> | Set by `PrepareForStackingDestroy`. Stops grabs and the undock on destroy. |
| <Link id="m-isswingable" /><code>{"private bool isSwingable"}</code> | Backing field for `IsSwingable`. |
| <Link id="m-istightgrab" /><code>{"private bool isTightGrab"}</code> | Backing field for `IsTightGrab`: the hand grip is fitted to the tight grip colliders. |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | Backing field for `Item`. |
| <Link id="m-jointtype" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType"}</code> | Backing field for `JointType`: how the pickup is joined to the hand. Default velocity joint. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | Backing field for `NetworkRigidbody`. |
| <Link id="m-overridebreakeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideBreakEffect"}</code> | Pooled effect spawned on break instead of the global default. |
| <Link id="m-overridebreaksound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" overrideBreakSound"}</code> | Sound played on break instead of the global default. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> | Cached `PhysicalMaterialPart`, behind `PhysicalMaterial`. |
| <Link id="m-pickupjoints" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupjoints">{"PickupJoints"}</Link>{" pickupJoints"}</code> | Backing field for `JointManager`: creates and removes the hand joints. |
| <Link id="m-pickupscaler" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupinteractionscaler">{"PickupInteractionScaler"}</Link>{" pickupScaler"}</code> | Scales the item while held. Only made when the item scales on grab. |
| <Link id="m-removefrompopulation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" removeFromPopulation"}</code> | Delegate behind the explicit `RemoveFromPopulation` event. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | Backing field for `Rigidbody`. Without one the pickup can't be grabbed. |
| <Link id="m-rotationscoreperdegree" /><code>{"private const float RotationScorePerDegree"}</code> | Score added per degree of hand rotation difference when scoring grab points (0.005). |
| <Link id="m-subdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" subDocks"}</code> | Backing field for `SubDocks`: docks inside this pickup, like a pouch or bag. |
| <Link id="m-syncbreak" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreak"}</code> | Network sync for the break message. |
| <Link id="m-syncgrabmemory" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncGrabMemory"}</code> | Network sync that sends the docked grab memory to its last holder when they connect. |
| <Link id="m-tightgriplayerindex" /><code>{"private static int TightGripLayerIndex"}</code> | Index of the "Tight Grip" layer, looked up once in `Awake`. |
| <Link id="m-undocked" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" undocked"}</code> | Event behind `Undocked`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bestgrab-2" /><code><Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" BestGrab { get; }"}</code> | The grab point chosen by the last score check. |
| <Link id="m-blocklevel-2" /><code><Link to="/mod/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" { get; set; }"}</code> | How well the item blocks attacks. Read by impact code when hits land on it. |
| <Link id="m-breakevent-2" /><code><Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" BreakEvent { get; }"}</code> | Serialized event raised when the item breaks. |
| <Link id="m-bypassmed1h-2" /><code>{"bool BypassMed1h { get; }"}</code> | When set, a medium handle held in one hand doesn't lose tool efficiency. |
| <Link id="m-cancraft" /><code>{"bool CanCraft { get; }"}</code> | False when docked in a dock whose settings don't allow crafting. |
| <Link id="m-colliders" /><code>{"HashSet<Collider> Colliders { get; }"}</code> | All colliders on the item and its children. |
| <Link id="m-craftingpart-2" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" { get; }"}</code> | The item's `CraftingPart`, if it can be crafted with. |
| <Link id="m-currentvalue" /><code><Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" CurrentValue { get; set; }"}</code> | The item's loot value, starting from its `Item`. Crafting raises it to the best part's value. |
| <Link id="m-dock" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Dock { get; }"}</code> | The dock the item is in, or null. |
| <Link id="m-durabilitymodule-2" /><code><Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" { get; }"}</code> | The item's `DurabilityModule`, if it wears out. |
| <Link id="m-grabpoints-2" /><code><Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{"[] GrabPoints { get; }"}</code> | The item's grab points, set on the prefab. |
| <Link id="m-interactorstorelease-2" /><code>{"virtual int InteractorsToRelease { get; }"}</code> | How many hands must remain for letting go to count as a drop. 1 here. |
| <Link id="m-interferewithdocking-2" /><code><Link to="/mod/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{"[] InterfereWithDocking { get; }"}</code> | Child components that can stop the item docking. |
| <Link id="m-ischunkingparentstatic-2" /><code>{"bool IsChunkingParentStatic { get; set; }"}</code> | When set, grabbing doesn't make the hand the item's chunking parent. |
| <Link id="m-iscrafted" /><code>{"bool IsCrafted { get; set; }"}</code> | True when the item is part of a crafted object of more than one part. |
| <Link id="m-iscraftedchild" /><code>{"bool IsCraftedChild { get; set; }"}</code> | True while the item is attached to another part as a crafting child. |
| <Link id="m-isdocked" /><code>{"bool IsDocked { get; }"}</code> | True while the item is in a dock. |
| <Link id="m-isdockingblocked" /><code>{"bool IsDockingBlocked { get; set; }"}</code> | When true, letting go doesn't try to dock the item. |
| <Link id="m-isenvironmental" /><code>{"bool IsEnvironmental { get; }"}</code> | True for items joined to the world rather than carried. They don't take the hand as chunking parent. |
| <Link id="m-isnetworkinitialized-2" /><code>{"bool IsNetworkInitialized { get; }"}</code> | True once networking is set up for the item's docking. |
| <Link id="m-ispouch" /><code>{"bool IsPouch { get; }"}</code> | True for the pouch item, which holds others in its sub-docks. |
| <Link id="m-isswingable-2" /><code>{"bool IsSwingable { get; }"}</code> | Whether the item counts as a swung weapon. |
| <Link id="m-istightgrab-2" /><code>{"bool IsTightGrab { get; }"}</code> | When set, the hand closes tightly around the item's colliders. |
| <Link id="m-istransient" /><code>{"bool IsTransient { get; set; }"}</code> | Marks the item as temporary (a lit fuse, for example). Most docks refuse transient items. |
| <Link id="m-item-2" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" { get; set; }"}</code> | The item definition: name, weight, size and docking rules. |
| <Link id="m-jointmanager" /><code><Link to="/mod/game-api/types/global-p/pickupjoints">{"PickupJoints"}</Link>{" JointManager { get; }"}</code> | Handles the joints between the item and the hands holding it. |
| <Link id="m-jointtype-2" /><code><Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" JointType { get; }"}</code> | How the item is joined to a hand (velocity joint, empty joint and so on). |
| <Link id="m-maximumangularvelocity" /><code>{"float MaximumAngularVelocity { get; private set; }"}</code> | The rigidbody's spin limit when the item spawned, put back by the joints. |
| <Link id="m-networkrigidbody-2" /><code><Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" { get; }"}</code> | The item's synced rigidbody. |
| <Link id="m-overrideparent" /><code>{"Transform OverrideParent { get; set; }"}</code> | A transform to treat as the item's parent. Set for embedded items and by a bow string. |
| <Link id="m-overridescenterofmass" /><code>{"bool OverridesCenterOfMass { get; protected set; }"}</code> | When true, the hand doesn't adjust the rigidbody's centre of mass while holding it. |
| <Link id="m-physicalmaterial-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" PhysicalMaterial { get; }"}</code> | The item's material part, which sets its weight multiplier. |
| <Link id="m-physicalweight" /><code>{"float PhysicalWeight { get; }"}</code> | The item's weight times its material's weight multiplier. |
| <Link id="m-rawweight" /><code>{"float RawWeight { get; }"}</code> | The `Item` weight, or 0 with no item. |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The item's rigidbody. |
| <Link id="m-storedscaleoffset" /><code>{"Vector3 StoredScaleOffset { get; set; }"}</code> | Position offset when docked, set by crafting to centre crafted items. |
| <Link id="m-storescalemodifier" /><code>{"float StoreScaleModifier { get; set; }"}</code> | Extra scale when docked, set by crafting so long crafted items fit. |
| <Link id="m-subdocks-2" /><code><Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" SubDocks { get; }"}</code> | The docks inside this item, such as a bag's slots. |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; }"}</code> | Weight including sub-dock contents and attached crafting parts. |
| <Link id="m-wedgejoints" /><code>{"List<Joint> WedgeJoints { get; private set; }"}</code> | Joints holding the item embedded in a surface, such as a stuck arrow. |
| <Link id="m-defaultmultipleblockedaction" /><code>{"protected override "}<Link to="/mod/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" DefaultMultipleBlockedAction { get; }"}</code> | `Replace`: a second hand that isn't allowed takes the item from the first. |
| <Link id="m-defaultmultipleinteractionallowance" /><code>{"protected override "}<Link to="/mod/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" DefaultMultipleInteractionAllowance { get; }"}</code> | No multiple hands by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-breakeffectsetup" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> BreakEffectSetup"}</code> | Raised with the pooled break effect after it is spawned, so you can adjust it. |
| <Link id="m-docked-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docked"}</code> | Raised when the item goes into a dock. |
| <Link id="m-dockfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockfilter">{"PickupDockFilter"}</Link>{" DockFilter"}</code> | Handlers can set the result to false to stop the item going into a given dock. |
| <Link id="m-onaffectdurability" /><code>{"event Action<float> OnAffectDurability"}</code> | Raised by `AffectDurability`. |
| <Link id="m-pickupgrabbed" /><code>{"event "}<Link to="/mod/game-api/types/global-p/pickup-pickuphandler">{"Pickup.PickupHandler"}</Link>{" PickupGrabbed"}</code> | Raised after the item is grabbed and joined. |
| <Link id="m-predocked" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreDocked"}</code> | Raised just before the item goes into a dock. |
| <Link id="m-undocked-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Undocked"}</code> | Raised when the item leaves a dock. |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> | Raised when the weight of the item's contents changes. |

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-populations-ipopulationremovalmethod-removefrompopulation" /><code>{"private event "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" Alta.Populations.IPopulationRemovalMethod.RemoveFromPopulation"}</code> | Raised when the pickup is grabbed or docked, so its population (spawner) stops counting it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectdurability" /><code>{"void AffectDurability(float affect)"}</code> | Raises `OnAffectDurability` with the amount, for the durability module to apply. |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Scores a hand against the item's grab points (position and angle), or by distance if it has none. Lower is better. |
| <Link id="m-attemptgrabchange" /><code>{"bool AttemptGrabChange("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Re-picks the best grab point for a hand already holding the item and re-grabs with it. |
| <Link id="m-break" /><code>{"void Break()"}</code> | Breaks the item: raises `BreakEvent`, plays the break effect and sound, and on the server destroys it for everyone. |
| <Link id="m-checkdockfilter" /><code>{"bool CheckDockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Runs the `DockFilter` handlers. False if any of them refuses the dock. |
| <Link id="m-checkinteractallowedandreplace" /><code>{"override bool CheckInteractAllowedAndReplace("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | The base hand rules, plus the item must have a rigidbody. |
| <Link id="m-destroyjoint" /><code>{"void DestroyJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Removes the joint between the item and a hand and detaches the hand model. |
| <Link id="m-dockinto" /><code><Link to="/mod/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" DockInto("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity, bool isInstantMovementForced = false)"}</code> | Docks the item into a dock (a given quantity) and returns whether it was allowed. |
| <Link id="m-ensurebestgrabfound" /><code>{"void EnsureBestGrabFound("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Makes sure `BestGrab` suits this hand, using the remembered grab from the dock if that setting is on. |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Lets go: removes the joint, moves the chunking parent, tries to dock, and on clients hands physics back. |
| <Link id="m-getgrabpoint" /><code>{"bool GetGrabPoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" grabPoint)"}</code> | The grab point a hand is using, if it holds the item. |
| <Link id="m-getinterferees" /><code>{"void GetInterferees()"}</code> | Editor button: collects child components that interfere with docking, for stackable items. |
| <Link id="m-getpouchitem" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" GetPouchItem()"}</code> | For a pouch, the item type stored in it, or null. |
| <Link id="m-grabwith" /><code>{"virtual void GrabWith("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isGrabbingFromDock, bool isAddingJoint = true)"}</code> | Moves the item into a hand at the best grab point and joins it. The transform overload just places it. |
| <Link id="m-grabwith-2" /><code>{"void GrabWith(Transform interactionPoint)"}</code> | Moves the item into a hand at the best grab point and joins it. The transform overload just places it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up docking sync and break messages, and on the server terrain collision handling per chunk. |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Grabs the item: takes it out of its dock and population, makes the hand its chunking parent and joins it. |
| <Link id="m-networkstartinteraction" /><code>{"override void NetworkStartInteraction("}<Link to="/mod/game-api/types/global-i-l/inetworkinteractargument">{"INetworkInteractArgument"}</Link>{" args, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionStart)"}</code> | Starts a grab that came over the network, placing the hand and item where the sender had them. |
| <Link id="m-networkstopinteraction" /><code>{"override void NetworkStopInteraction("}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" args, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> | Ends a grab from the network, setting the item's position and velocity from the sender. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the item's dock, and its remembered grab if they held it last. |
| <Link id="m-onweightchanged" /><code>{"void OnWeightChanged()"}</code> | Raises `WeightChanged`. |
| <Link id="m-prepareforstackingdestroy" /><code>{"void PrepareForStackingDestroy()"}</code> | Marks the item as being merged into a stack, so it can't be grabbed or undocked again. |
| <Link id="m-recovergrip" /><code>{"void RecoverGrip("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Snaps the item back to a hand's grab point. |
| <Link id="m-reevaluatetightgrip" /><code>{"void ReevaluateTightGrip("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, IEnumerable<Collider> colliders)"}</code> | Client: closes the hand around the item's tight-grip colliders. |
| <Link id="m-replacedwith" /><code>{"override void ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | Called when the entity is replaced: hands move to the new entity's pickup unless told not to. |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Moves every hand on this item to another pickup, or to what a `Spawner` last spawned. |
| <Link id="m-replacewith-2" /><code>{"override void ReplaceWith("}<Link to="/mod/game-api/types/global-s/spawner">{"Spawner"}</Link>{" spawner)"}</code> | Moves every hand on this item to another pickup, or to what a `Spawner` last spawned. |
| <Link id="m-setupgrabpoint" /><code>{"void SetupGrabPoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabPoint)"}</code> | Sets the grab point and hand to use for the next grab. |
| <Link id="m-testgrabpoints" /><code>{"bool TestGrabPoints(Transform interactionPoint, "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex, out float score)"}</code> | Scores every free grab point against a hand position and rotation, and picks the best. |
| <Link id="m-treatnextpickupasifdocked" /><code>{"void TreatNextPickupAsIfDocked()"}</code> | Makes the next grab point check score as if the item were docked. |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isScalingBack, int quantity)"}</code> | Takes the item, or a quantity of a stack, out of its dock. |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | Re-fetches the rigidbody component. |
| <Link id="m-addsecondarycollision" /><code>{"protected virtual void AddSecondaryCollision()"}</code> | Adds a secondary collision check to the item when the local player grabs it with one hand. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Builds the joint, docking and scaling helpers, collects colliders and hooks sub-dock weight changes. |
| <Link id="m-cleandestroy" /><code>{"protected virtual void CleanDestroy()"}</code> | Clears the docking check and undocks the item from its dock when it goes away. |
| <Link id="m-createjoint" /><code>{"protected virtual void CreateJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Joins the item to a hand using its joint type. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Stops the grab and let-go sounds. |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | Editor: draws the grab points. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Starts the grab and let-go sounds (not on a headless server). |
| <Link id="m-onlastinteractorplayerchanged" /><code>{"protected override void OnLastInteractorPlayerChanged()"}</code> | Forgets the remembered grab points when a different player handles the item. |
| <Link id="m-updategrabpoint" /><code>{"protected void UpdateGrabPoint("}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" grabPointParameters, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Sets `BestGrab` from saved grab point parameters for a hand. |

<details>
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkthreshold" /><code>{"private void CheckThreshold("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Handler for the holder's `PositionAboutToChange`: force releases hands that end up further than the distance threshold from the pickup. |
| <Link id="m-enteredchunk" /><code>{"private void EnteredChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: when the pickup enters a location chunk whose environment disables terrain collision, turns off collision with the master terrain. |
| <Link id="m-getquantity" /><code>{"private int GetQuantity()"}</code> | Count for event logs: 1 for a plain pickup, or the total stored in its sub docks. |
| <Link id="m-ignoreterrain" /><code>{"private void IgnoreTerrain(bool isIgnoringMasterTerrain)"}</code> | Turns collision between every pickup collider and the master terrain collider off or on. |
| <Link id="m-interactionendedsound" /><code>{"private void InteractionEndedSound("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Client: plays the let go sound (or the item's override) at the hand when released. |
| <Link id="m-interactionstartedsound" /><code>{"private void InteractionStartedSound("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Client: plays the grab sound (or the item's override) at the hand when grabbed. |
| <Link id="m-leftchunk" /><code>{"private void LeftChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: turns master terrain collision back on when leaving a no terrain collision chunk for one that isn't. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Calls `CleanDestroy` unless the game is quitting, reloading or the entity is already being destroyed. |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Handler for the docker's docked event: logs it, removes the pickup from its population, raises `Docked` and raises the sync priority. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the interaction scaler's gizmos in the editor. |
| <Link id="m-onpredocked" /><code>{"private void OnPreDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Forwards the docker's pre docked event to `PreDocked`. |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Handler for the docker's undocked event: logs it, raises `Undocked` and clears the docked sync priority. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build bake step: strips null entries from `childrenColliders`. |
| <Link id="m-processgrabbedevent" /><code>{"private void ProcessGrabbedEvent("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server (or local test): broadcasts a `PlayerGrabbedPrefabEvent` on the township event bus when a player grabs this. |
| <Link id="m-savegrabforinteractor" /><code>{"private void SaveGrabForInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: stores the grab point that hand used as the left or right docked grab memory. |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Handler for the entity's `DestroyedByScene` event; calls `CleanDestroy`. |
| <Link id="m-serializegrabmemory" /><code>{"private void SerializeGrabMemory("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" memory)"}</code> | Reads or writes one hand's grab memory, with a flag for whether it is set. |
| <Link id="m-shouldteleporttohand" /><code>{"private bool ShouldTeleportToHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | True when the pickup is far enough from the hand (past the global minimum) to be moved there on grab. Never for empty joints. |
| <Link id="m-syncbreak-2" /><code>{"private void SyncBreak("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Remote clients: runs `Break` when the server says the pickup broke. |
| <Link id="m-syncgrabmemory-2" /><code>{"private void SyncGrabMemory("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: receives the left and right docked grab memory from the server; the server rejects it as unauthorized. |
| <Link id="m-teleporttohand" /><code>{"private void TeleportToHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Moves the pickup to the hand's interaction point. |
| <Link id="m-trydock" /><code>{"private bool TryDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, docks into the best dock candidate. True if it was already docked or got docked. |
| <Link id="m-undocklog" /><code>{"private void UndockLog("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When owner logging is on, logs when another player takes something out of this pickup's sub docks. |

</details>

## Used in

Members of other types that take, return or hold a `Pickup`:

[`CraftingMeltingAllowedModifier.pickupMaps`](/mod/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-pickupmaps), [`ForgedModel<TB, TA>.pickup`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-pickup), [`RecyclerOutputSlot.NewSource`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-newsource), [`Smelter.CheckSmelt`](/mod/game-api/types/alta-crafting/smelter#m-checksmelt-2), [`Smelter.MouldAdded`](/mod/game-api/types/alta-crafting/smelter#m-mouldadded), [`Smelter.MouldRemoved`](/mod/game-api/types/alta-crafting/smelter#m-mouldremoved), [`BuilderDock.BlockFilter`](/mod/game-api/types/alta-crafting/builderdock#m-blockfilter), [`RecipePlacer.AddDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-adddefinition), [`RecipePlacer.ClearDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-cleardefinition), [`RecipePlacer.PageFilter`](/mod/game-api/types/alta-crafting/recipeplacer#m-pagefilter), [`TimberBlock.spawnedPickups`](/mod/game-api/types/alta-crafting/timberblock#m-spawnedpickups), [`TimberBlock.UpdatePickupCollision`](/mod/game-api/types/alta-crafting/timberblock#m-updatepickupcollision), [`DockedDissolver.DissolveItem`](/mod/game-api/types/alta-world-generation/dockeddissolver#m-dissolveitem), [`CharacterCollisionController.DelaySetColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-delaysetcolliders), [`DockStore.CanAdd`](/mod/game-api/types/alta-player/dockstore#m-canadd), [`DockStore.Peek`](/mod/game-api/types/alta-player/dockstore#m-peek), [`DockStore.Search`](/mod/game-api/types/alta-player/dockstore#m-search), [`DockStore.TryPeek`](/mod/game-api/types/alta-player/dockstore#m-trypeek), [`DockStore.TryPop`](/mod/game-api/types/alta-player/dockstore#m-trypop), [`DockStore.TryPush`](/mod/game-api/types/alta-player/dockstore#m-trypush), [`Hand.AverageCenterOfMass`](/mod/game-api/types/alta-player/hand#m-averagecenterofmass), [`HandStore.CanAdd`](/mod/game-api/types/alta-player/handstore#m-canadd), [`HandStore.Peek`](/mod/game-api/types/alta-player/handstore#m-peek), [`HandStore.Search`](/mod/game-api/types/alta-player/handstore#m-search), [`HandStore.TryPeek`](/mod/game-api/types/alta-player/handstore#m-trypeek), [`HandStore.TryPop`](/mod/game-api/types/alta-player/handstore#m-trypop), [`HandStore.TryPush`](/mod/game-api/types/alta-player/handstore#m-trypush), [`IInventoryStore<T>.CanAdd`](/mod/game-api/types/alta-player/iinventorystore-outt#m-canadd), [`IInventoryStore<T>.Peek`](/mod/game-api/types/alta-player/iinventorystore-outt#m-peek), [`IInventoryStore<T>.Search`](/mod/game-api/types/alta-player/iinventorystore-outt#m-search), [`IInventoryStore<T>.TryPeek`](/mod/game-api/types/alta-player/iinventorystore-outt#m-trypeek), [`IInventoryStore<T>.TryPop`](/mod/game-api/types/alta-player/iinventorystore-outt#m-trypop), [`IInventoryStore<T>.TryPush`](/mod/game-api/types/alta-player/iinventorystore-outt#m-trypush), [`Cookable.pickup`](/mod/game-api/types/alta-crafting/cookable#m-pickup), [`Cookable.Pickup`](/mod/game-api/types/alta-crafting/cookable#m-pickup-2), [`CookingGarnishComponent.pickup`](/mod/game-api/types/alta-crafting/cookinggarnishcomponent#m-pickup), [`AdditionalOwnedDock.basePickup`](/mod/game-api/types/alta-crafting/additionalowneddock#m-basepickup), [`AdditionalOwnedDock.CheckDockFilter`](/mod/game-api/types/alta-crafting/additionalowneddock#m-checkdockfilter), [`AdditionalOwnedDock.DeregisterDock`](/mod/game-api/types/alta-crafting/additionalowneddock#m-deregisterdock), [`AdditionalOwnedDock.RegisterDock`](/mod/game-api/types/alta-crafting/additionalowneddock#m-registerdock), [`CraftingPart.Break`](/mod/game-api/types/alta-crafting/craftingpart#m-break), [`CraftingPart.pickup`](/mod/game-api/types/alta-crafting/craftingpart#m-pickup), [`CraftingPart.Pickup`](/mod/game-api/types/alta-crafting/craftingpart#m-pickup-2), [`DecraftingComponent.AddPickup`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-addpickup), [`DecraftingDeck.PickupFilter`](/mod/game-api/types/alta-crafting/decraftingdeck#m-pickupfilter), [`DisableLightOnDock.CheckEnabledEnable`](/mod/game-api/types/alta-crafting/disablelightondock#m-checkenabledenable), [`DisableLightOnDock.ForceEnable`](/mod/game-api/types/alta-crafting/disablelightondock#m-forceenable), [`DisableLightOnDock.pickup`](/mod/game-api/types/alta-crafting/disablelightondock#m-pickup), [`GenericAssemblyStation.DockFilter`](/mod/game-api/types/alta-crafting/genericassemblystation#m-dockfilter), [`GenericAssemblyStation.GetAdditionalChiselables`](/mod/game-api/types/alta-crafting/genericassemblystation#m-getadditionalchiselables), [`GenericAssemblyStation.InsertPiece`](/mod/game-api/types/alta-crafting/genericassemblystation#m-insertpiece), [`GenericAssemblyStation.RemovePiece`](/mod/game-api/types/alta-crafting/genericassemblystation#m-removepiece), [`GenericCraftingComponent.pickup`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-pickup), [`GenericCraftingComponent.Pickup`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-pickup-2), [`GenericCraftingStation.AddItemOnReleaseCoroutine`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-additemonreleasecoroutine), [`GenericCraftingStation.CheckPageForRecipe`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-checkpageforrecipe), [`GenericCraftingStation.IsPickupValidToAdd`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-ispickupvalidtoadd), [`GenericCraftingStation.OnPageDocked`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-onpagedocked), [`GenericCraftingStation.OnPageUndocked`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-onpageundocked), [`GenericCraftingStation.PageFilter`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-pagefilter) and 413 more.
