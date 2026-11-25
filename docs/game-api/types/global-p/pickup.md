---
title: "Pickup"
description: "Runs on both sides; docking on release starts on the holder's client, breaking is the server's."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pickup

A **class** in `Root.Township`, no namespace.

Runs on both sides; docking on release starts on the holder's client, breaking is the server's.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable), [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody), [`IPopulationRemovalMethod`](/game-api/types/alta-world-generation/ipopulationremovalmethod), [`ISavable<PickupSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PickupSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`KeyItem`](/game-api/types/alta-items/keyitem), [`CapPickup`](/game-api/types/global-c-d/cappickup), [`DockableJoints`](/game-api/types/global-c-d/dockablejoints), [`MultiHandPickup`](/game-api/types/global-m-o/multihandpickup), [`PickupDockedEvent`](/game-api/types/global-p/pickupdockedevent), [`PickupDockedUnityEvent`](/game-api/types/global-p/pickupdockedunityevent), [`PickupEvent`](/game-api/types/global-p/pickupevent), [`PickupSaveData`](/game-api/types/global-p/pickupsavedata), [`UnityPickupEvent`](/game-api/types/global-t-x/unitypickupevent)
- **Nested types** [`PickupHandler`](/game-api/types/global-p/pickup-pickuphandler)
- **Attributes** `SelectionBase`
- **Documented in** [Pickup](/game-api/items/pickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayerindex" /><code>{"private static int ActiveTightGripLayerIndex"}</code> |  |
| <Link id="m-bestgrab" /><code>{"protected "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" bestGrab"}</code> |  |
| <Link id="m-bestgrabinteractor" /><code>{"protected "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" bestGrabInteractor"}</code> |  |
| <Link id="m-blocklevel" /><code>{"private "}<Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" blockLevel"}</code> |  |
| <Link id="m-breakevent" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" breakEvent"}</code> |  |
| <Link id="m-btn" /><code>{"private bool btn"}</code> |  |
| <Link id="m-bypassmed1h" /><code>{"private bool bypassMed1h"}</code> |  |
| <Link id="m-childrencolliders" /><code>{"private Collider[] childrenColliders"}</code> |  |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> |  |
| <Link id="m-distancethresholdsquared" /><code>{"private float distanceThresholdSquared"}</code> |  |
| <Link id="m-docked" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" docked"}</code> |  |
| <Link id="m-dockedmemoryleft" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" dockedMemoryLeft"}</code> |  |
| <Link id="m-dockedmemoryright" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" dockedMemoryRight"}</code> |  |
| <Link id="m-docker" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocker">{"PickupDocker"}</Link>{" docker"}</code> |  |
| <Link id="m-dockingchecker" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockingchecker">{"PickupDockingChecker"}</Link>{" dockingChecker"}</code> |  |
| <Link id="m-double1hsurpluspenalty" /><code>{"private bool double1hSurplusPenalty"}</code> |  |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> |  |
| <Link id="m-grabpoints" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{"[] grabPoints"}</code> |  |
| <Link id="m-grabpointsscale" /><code>{"private float grabPointsScale"}</code> |  |
| <Link id="m-hasdistancethreshold" /><code>{"private bool hasDistanceThreshold"}</code> |  |
| <Link id="m-interactorstorelease" /><code>{"private static List<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> interactorsToRelease"}</code> |  |
| <Link id="m-interactortograbpoint" /><code>{"protected Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{"> interactorToGrabPoint"}</code> |  |
| <Link id="m-interferewithdocking" /><code>{"private "}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{"[] interfereWithDocking"}</code> |  |
| <Link id="m-interferewithdockingobjects" /><code>{"private MonoBehaviour[] interfereWithDockingObjects"}</code> |  |
| <Link id="m-ischunkingparentstatic" /><code>{"private bool isChunkingParentStatic"}</code> |  |
| <Link id="m-iscumbersome" /><code>{"private bool isCumbersome"}</code> |  |
| <Link id="m-isenvironmentaljoint" /><code>{"private bool isEnvironmentalJoint"}</code> |  |
| <Link id="m-isignoringmasterterrain" /><code>{"private bool isIgnoringMasterTerrain"}</code> |  |
| <Link id="m-isloggingownerchanged" /><code>{"private bool isLoggingOwnerChanged"}</code> |  |
| <Link id="m-isnetworkinitialized" /><code>{"private bool isNetworkInitialized"}</code> |  |
| <Link id="m-isnexttreatedasdocked" /><code>{"private bool isNextTreatedAsDocked"}</code> |  |
| <Link id="m-isstackdestroying" /><code>{"private bool isStackDestroying"}</code> |  |
| <Link id="m-isswingable" /><code>{"private bool isSwingable"}</code> |  |
| <Link id="m-istightgrab" /><code>{"private bool isTightGrab"}</code> |  |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> |  |
| <Link id="m-jointtype" /><code>{"private "}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> |  |
| <Link id="m-overridebreakeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideBreakEffect"}</code> |  |
| <Link id="m-overridebreaksound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" overrideBreakSound"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> |  |
| <Link id="m-pickupjoints" /><code>{"private "}<Link to="/game-api/types/global-p/pickupjoints">{"PickupJoints"}</Link>{" pickupJoints"}</code> |  |
| <Link id="m-pickupscaler" /><code>{"private "}<Link to="/game-api/types/global-p/pickupinteractionscaler">{"PickupInteractionScaler"}</Link>{" pickupScaler"}</code> |  |
| <Link id="m-removefrompopulation" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" removeFromPopulation"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-rotationscoreperdegree" /><code>{"private const float RotationScorePerDegree"}</code> |  |
| <Link id="m-subdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" subDocks"}</code> |  |
| <Link id="m-syncbreak" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBreak"}</code> |  |
| <Link id="m-syncgrabmemory" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncGrabMemory"}</code> |  |
| <Link id="m-tightgriplayerindex" /><code>{"private static int TightGripLayerIndex"}</code> |  |
| <Link id="m-undocked" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" undocked"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bestgrab-2" /><code><Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" BestGrab { get; }"}</code> |  |
| <Link id="m-blocklevel-2" /><code><Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" "}<Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-breakevent-2" /><code><Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" BreakEvent { get; }"}</code> |  |
| <Link id="m-bypassmed1h-2" /><code>{"bool BypassMed1h { get; }"}</code> |  |
| <Link id="m-cancraft" /><code>{"bool CanCraft { get; }"}</code> |  |
| <Link id="m-colliders" /><code>{"HashSet<Collider> Colliders { get; }"}</code> |  |
| <Link id="m-craftingpart-2" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" { get; }"}</code> |  |
| <Link id="m-currentvalue" /><code><Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" CurrentValue { get; set; }"}</code> |  |
| <Link id="m-dock" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Dock { get; }"}</code> |  |
| <Link id="m-durabilitymodule-2" /><code><Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" { get; }"}</code> |  |
| <Link id="m-grabpoints-2" /><code><Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{"[] GrabPoints { get; }"}</code> |  |
| <Link id="m-interactorstorelease-2" /><code>{"virtual int InteractorsToRelease { get; }"}</code> |  |
| <Link id="m-interferewithdocking-2" /><code><Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{"[] InterfereWithDocking { get; }"}</code> |  |
| <Link id="m-ischunkingparentstatic-2" /><code>{"bool IsChunkingParentStatic { get; set; }"}</code> |  |
| <Link id="m-iscrafted" /><code>{"bool IsCrafted { get; set; }"}</code> |  |
| <Link id="m-iscraftedchild" /><code>{"bool IsCraftedChild { get; set; }"}</code> |  |
| <Link id="m-isdocked" /><code>{"bool IsDocked { get; }"}</code> |  |
| <Link id="m-isdockingblocked" /><code>{"bool IsDockingBlocked { get; set; }"}</code> |  |
| <Link id="m-isenvironmental" /><code>{"bool IsEnvironmental { get; }"}</code> |  |
| <Link id="m-isnetworkinitialized-2" /><code>{"bool IsNetworkInitialized { get; }"}</code> |  |
| <Link id="m-ispouch" /><code>{"bool IsPouch { get; }"}</code> |  |
| <Link id="m-isswingable-2" /><code>{"bool IsSwingable { get; }"}</code> |  |
| <Link id="m-istightgrab-2" /><code>{"bool IsTightGrab { get; }"}</code> |  |
| <Link id="m-istransient" /><code>{"bool IsTransient { get; set; }"}</code> |  |
| <Link id="m-item-2" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-jointmanager" /><code><Link to="/game-api/types/global-p/pickupjoints">{"PickupJoints"}</Link>{" JointManager { get; }"}</code> |  |
| <Link id="m-jointtype-2" /><code><Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" JointType { get; }"}</code> |  |
| <Link id="m-maximumangularvelocity" /><code>{"float MaximumAngularVelocity { get; private set; }"}</code> |  |
| <Link id="m-networkrigidbody-2" /><code><Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" { get; }"}</code> |  |
| <Link id="m-overrideparent" /><code>{"Transform OverrideParent { get; set; }"}</code> |  |
| <Link id="m-overridescenterofmass" /><code>{"bool OverridesCenterOfMass { get; protected set; }"}</code> |  |
| <Link id="m-physicalmaterial-2" /><code><Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" PhysicalMaterial { get; }"}</code> |  |
| <Link id="m-physicalweight" /><code>{"float PhysicalWeight { get; }"}</code> |  |
| <Link id="m-rawweight" /><code>{"float RawWeight { get; }"}</code> |  |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> |  |
| <Link id="m-storedscaleoffset" /><code>{"Vector3 StoredScaleOffset { get; set; }"}</code> |  |
| <Link id="m-storescalemodifier" /><code>{"float StoreScaleModifier { get; set; }"}</code> |  |
| <Link id="m-subdocks-2" /><code><Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" SubDocks { get; }"}</code> |  |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; }"}</code> |  |
| <Link id="m-wedgejoints" /><code>{"List<Joint> WedgeJoints { get; private set; }"}</code> |  |
| <Link id="m-defaultmultipleblockedaction" /><code>{"protected override "}<Link to="/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" DefaultMultipleBlockedAction { get; }"}</code> |  |
| <Link id="m-defaultmultipleinteractionallowance" /><code>{"protected override "}<Link to="/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" DefaultMultipleInteractionAllowance { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-breakeffectsetup" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> BreakEffectSetup"}</code> |  |
| <Link id="m-docked-2" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docked"}</code> |  |
| <Link id="m-dockfilter" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockfilter">{"PickupDockFilter"}</Link>{" DockFilter"}</code> |  |
| <Link id="m-onaffectdurability" /><code>{"event Action<float> OnAffectDurability"}</code> |  |
| <Link id="m-pickupgrabbed" /><code>{"event "}<Link to="/game-api/types/global-p/pickup-pickuphandler">{"Pickup.PickupHandler"}</Link>{" PickupGrabbed"}</code> |  |
| <Link id="m-predocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreDocked"}</code> |  |
| <Link id="m-undocked-2" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Undocked"}</code> |  |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> |  |
| <Link id="m-alta-populations-ipopulationremovalmethod-removefrompopulation" /><code>{"private event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" Alta.Populations.IPopulationRemovalMethod.RemoveFromPopulation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectdurability" /><code>{"void AffectDurability(float affect)"}</code> |  |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> |  |
| <Link id="m-attemptgrabchange" /><code>{"bool AttemptGrabChange("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-break" /><code>{"void Break()"}</code> |  |
| <Link id="m-checkdockfilter" /><code>{"bool CheckDockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-checkinteractallowedandreplace" /><code>{"override bool CheckInteractAllowedAndReplace("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-destroyjoint" /><code>{"void DestroyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-dockinto" /><code><Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" DockInto("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity, bool isInstantMovementForced = false)"}</code> |  |
| <Link id="m-ensurebestgrabfound" /><code>{"void EnsureBestGrabFound("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-getgrabpoint" /><code>{"bool GetGrabPoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" grabPoint)"}</code> |  |
| <Link id="m-getinterferees" /><code>{"void GetInterferees()"}</code> |  |
| <Link id="m-getpouchitem" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" GetPouchItem()"}</code> |  |
| <Link id="m-grabwith" /><code>{"virtual void GrabWith("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isGrabbingFromDock, bool isAddingJoint = true)"}</code> |  |
| <Link id="m-grabwith-2" /><code>{"void GrabWith(Transform interactionPoint)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-networkstartinteraction" /><code>{"override void NetworkStartInteraction("}<Link to="/game-api/types/global-i-l/inetworkinteractargument">{"INetworkInteractArgument"}</Link>{" args, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionStart)"}</code> |  |
| <Link id="m-networkstopinteraction" /><code>{"override void NetworkStopInteraction("}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" args, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onweightchanged" /><code>{"void OnWeightChanged()"}</code> |  |
| <Link id="m-prepareforstackingdestroy" /><code>{"void PrepareForStackingDestroy()"}</code> |  |
| <Link id="m-recovergrip" /><code>{"void RecoverGrip("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-reevaluatetightgrip" /><code>{"void ReevaluateTightGrip("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, IEnumerable<Collider> colliders)"}</code> |  |
| <Link id="m-replacedwith" /><code>{"override void ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |  |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-replacewith-2" /><code>{"override void ReplaceWith("}<Link to="/game-api/types/global-s/spawner">{"Spawner"}</Link>{" spawner)"}</code> |  |
| <Link id="m-setupgrabpoint" /><code>{"void SetupGrabPoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabPoint)"}</code> |  |
| <Link id="m-testgrabpoints" /><code>{"bool TestGrabPoints(Transform interactionPoint, "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex, out float score)"}</code> |  |
| <Link id="m-treatnextpickupasifdocked" /><code>{"void TreatNextPickupAsIfDocked()"}</code> |  |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isScalingBack, int quantity)"}</code> |  |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> |  |
| <Link id="m-addsecondarycollision" /><code>{"protected virtual void AddSecondaryCollision()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-checkthreshold" /><code>{"private void CheckThreshold("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-cleandestroy" /><code>{"protected virtual void CleanDestroy()"}</code> |  |
| <Link id="m-createjoint" /><code>{"protected virtual void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-enteredchunk" /><code>{"private void EnteredChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-getquantity" /><code>{"private int GetQuantity()"}</code> |  |
| <Link id="m-ignoreterrain" /><code>{"private void IgnoreTerrain(bool isIgnoringMasterTerrain)"}</code> |  |
| <Link id="m-interactionendedsound" /><code>{"private void InteractionEndedSound("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstartedsound" /><code>{"private void InteractionStartedSound("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-leftchunk" /><code>{"private void LeftChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> |  |
| <Link id="m-onlastinteractorplayerchanged" /><code>{"protected override void OnLastInteractorPlayerChanged()"}</code> |  |
| <Link id="m-onpredocked" /><code>{"private void OnPreDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-processgrabbedevent" /><code>{"private void ProcessGrabbedEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-savegrabforinteractor" /><code>{"private void SaveGrabForInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-serializegrabmemory" /><code>{"private void SerializeGrabMemory("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" memory)"}</code> |  |
| <Link id="m-shouldteleporttohand" /><code>{"private bool ShouldTeleportToHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncbreak-2" /><code>{"private void SyncBreak("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncgrabmemory-2" /><code>{"private void SyncGrabMemory("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-teleporttohand" /><code>{"private void TeleportToHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-trydock" /><code>{"private bool TryDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-undocklog" /><code>{"private void UndockLog("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-updategrabpoint" /><code>{"protected void UpdateGrabPoint("}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{" grabPointParameters, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Pickup`:

[`CraftingMeltingAllowedModifier.pickupMaps`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-pickupmaps), [`ForgedModel<TB, TA>.pickup`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-pickup), [`RecyclerOutputSlot.NewSource`](/game-api/types/alta-crafting/recycleroutputslot#m-newsource), [`Smelter.CheckSmelt`](/game-api/types/alta-crafting/smelter#m-checksmelt-2), [`Smelter.MouldAdded`](/game-api/types/alta-crafting/smelter#m-mouldadded), [`Smelter.MouldRemoved`](/game-api/types/alta-crafting/smelter#m-mouldremoved), [`BuilderDock.BlockFilter`](/game-api/types/alta-crafting/builderdock#m-blockfilter), [`RecipePlacer.AddDefinition`](/game-api/types/alta-crafting/recipeplacer#m-adddefinition), [`RecipePlacer.ClearDefinition`](/game-api/types/alta-crafting/recipeplacer#m-cleardefinition), [`RecipePlacer.PageFilter`](/game-api/types/alta-crafting/recipeplacer#m-pagefilter), [`TimberBlock.spawnedPickups`](/game-api/types/alta-crafting/timberblock#m-spawnedpickups), [`TimberBlock.UpdatePickupCollision`](/game-api/types/alta-crafting/timberblock#m-updatepickupcollision), [`DockedDissolver.DissolveItem`](/game-api/types/alta-world-generation/dockeddissolver#m-dissolveitem), [`CharacterCollisionController.DelaySetColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-delaysetcolliders), [`DockStore.CanAdd`](/game-api/types/alta-player/dockstore#m-canadd), [`DockStore.Peek`](/game-api/types/alta-player/dockstore#m-peek), [`DockStore.Search`](/game-api/types/alta-player/dockstore#m-search), [`DockStore.TryPeek`](/game-api/types/alta-player/dockstore#m-trypeek), [`DockStore.TryPop`](/game-api/types/alta-player/dockstore#m-trypop), [`DockStore.TryPush`](/game-api/types/alta-player/dockstore#m-trypush), [`Hand.AverageCenterOfMass`](/game-api/types/alta-player/hand#m-averagecenterofmass), [`HandStore.CanAdd`](/game-api/types/alta-player/handstore#m-canadd), [`HandStore.Peek`](/game-api/types/alta-player/handstore#m-peek), [`HandStore.Search`](/game-api/types/alta-player/handstore#m-search), [`HandStore.TryPeek`](/game-api/types/alta-player/handstore#m-trypeek), [`HandStore.TryPop`](/game-api/types/alta-player/handstore#m-trypop), [`HandStore.TryPush`](/game-api/types/alta-player/handstore#m-trypush), [`IInventoryStore<T>.CanAdd`](/game-api/types/alta-player/iinventorystore-outt#m-canadd), [`IInventoryStore<T>.Peek`](/game-api/types/alta-player/iinventorystore-outt#m-peek), [`IInventoryStore<T>.Search`](/game-api/types/alta-player/iinventorystore-outt#m-search), [`IInventoryStore<T>.TryPeek`](/game-api/types/alta-player/iinventorystore-outt#m-trypeek), [`IInventoryStore<T>.TryPop`](/game-api/types/alta-player/iinventorystore-outt#m-trypop), [`IInventoryStore<T>.TryPush`](/game-api/types/alta-player/iinventorystore-outt#m-trypush), [`Cookable.pickup`](/game-api/types/alta-crafting/cookable#m-pickup), [`Cookable.Pickup`](/game-api/types/alta-crafting/cookable#m-pickup-2), [`CookingGarnishComponent.pickup`](/game-api/types/alta-crafting/cookinggarnishcomponent#m-pickup), [`AdditionalOwnedDock.basePickup`](/game-api/types/alta-crafting/additionalowneddock#m-basepickup), [`AdditionalOwnedDock.CheckDockFilter`](/game-api/types/alta-crafting/additionalowneddock#m-checkdockfilter), [`AdditionalOwnedDock.DeregisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-deregisterdock), [`AdditionalOwnedDock.RegisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-registerdock), [`CraftingPart.Break`](/game-api/types/alta-crafting/craftingpart#m-break), [`CraftingPart.pickup`](/game-api/types/alta-crafting/craftingpart#m-pickup), [`CraftingPart.Pickup`](/game-api/types/alta-crafting/craftingpart#m-pickup-2), [`DecraftingComponent.AddPickup`](/game-api/types/alta-crafting/decraftingcomponent#m-addpickup), [`DecraftingDeck.PickupFilter`](/game-api/types/alta-crafting/decraftingdeck#m-pickupfilter), [`DisableLightOnDock.CheckEnabledEnable`](/game-api/types/alta-crafting/disablelightondock#m-checkenabledenable), [`DisableLightOnDock.ForceEnable`](/game-api/types/alta-crafting/disablelightondock#m-forceenable), [`DisableLightOnDock.pickup`](/game-api/types/alta-crafting/disablelightondock#m-pickup), [`GenericAssemblyStation.DockFilter`](/game-api/types/alta-crafting/genericassemblystation#m-dockfilter), [`GenericAssemblyStation.GetAdditionalChiselables`](/game-api/types/alta-crafting/genericassemblystation#m-getadditionalchiselables), [`GenericAssemblyStation.InsertPiece`](/game-api/types/alta-crafting/genericassemblystation#m-insertpiece), [`GenericAssemblyStation.RemovePiece`](/game-api/types/alta-crafting/genericassemblystation#m-removepiece), [`GenericCraftingComponent.pickup`](/game-api/types/alta-crafting/genericcraftingcomponent#m-pickup), [`GenericCraftingComponent.Pickup`](/game-api/types/alta-crafting/genericcraftingcomponent#m-pickup-2), [`GenericCraftingStation.AddItemOnReleaseCoroutine`](/game-api/types/alta-crafting/genericcraftingstation#m-additemonreleasecoroutine), [`GenericCraftingStation.CheckPageForRecipe`](/game-api/types/alta-crafting/genericcraftingstation#m-checkpageforrecipe), [`GenericCraftingStation.IsPickupValidToAdd`](/game-api/types/alta-crafting/genericcraftingstation#m-ispickupvalidtoadd), [`GenericCraftingStation.OnPageDocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpagedocked), [`GenericCraftingStation.OnPageUndocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpageundocked), [`GenericCraftingStation.PageFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-pagefilter) and 413 more.
