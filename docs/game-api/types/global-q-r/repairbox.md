---
title: "RepairBox"
description: "A build or repair box that takes up to three item costs in docks and, when filled, repairs a static building, destroys an old object or spawns a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBox

A **class** in `Root.Township`, no namespace.

A build or repair box that takes up to three item costs in docks and, when filled, repairs a static building, destroys an old object or spawns a prefab. The server runs the logic and saves it; clients show counts and effects.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<RepairBoxSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<RepairBoxSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RepairBoxSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`RepairBoxSaveData`](/game-api/types/global-q-r/repairboxsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBox()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationposition" /><code>{"private Vector3 animationPosition"}</code> |  |
| <Link id="m-boxanimation" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" boxAnimation"}</code> |  |
| <Link id="m-btnfinish" /><code>{"private bool btnFinish"}</code> |  |
| <Link id="m-buildinganimationwrapper" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" buildingAnimationWrapper"}</code> |  |
| <Link id="m-buildingfinished" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" buildingFinished"}</code> |  |
| <Link id="m-canbeundone" /><code>{"private bool canBeUndone"}</code> |  |
| <Link id="m-checkmark1" /><code>{"private GameObject checkmark1"}</code> |  |
| <Link id="m-checkmark2" /><code>{"private GameObject checkmark2"}</code> |  |
| <Link id="m-checkmark3" /><code>{"private GameObject checkmark3"}</code> |  |
| <Link id="m-cost1" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost1"}</code> |  |
| <Link id="m-cost2" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost2"}</code> |  |
| <Link id="m-cost3" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost3"}</code> |  |
| <Link id="m-destroying" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" destroying"}</code> |  |
| <Link id="m-dock1" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock1"}</code> |  |
| <Link id="m-dock2" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock2"}</code> |  |
| <Link id="m-dock3" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock3"}</code> |  |
| <Link id="m-filled" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" filled"}</code> |  |
| <Link id="m-filter1" /><code>{"private "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter1"}</code> |  |
| <Link id="m-filter2" /><code>{"private "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter2"}</code> |  |
| <Link id="m-filter3" /><code>{"private "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter3"}</code> |  |
| <Link id="m-flyouttime" /><code>{"private float flyOutTime"}</code> |  |
| <Link id="m-ignorematerialonsimpleserver1" /><code>{"private bool ignoreMaterialOnSimpleServer1"}</code> |  |
| <Link id="m-ignorematerialonsimpleserver2" /><code>{"private bool ignoreMaterialOnSimpleServer2"}</code> |  |
| <Link id="m-ignorematerialonsimpleserver3" /><code>{"private bool ignoreMaterialOnSimpleServer3"}</code> |  |
| <Link id="m-isdone" /><code>{"private bool isDone"}</code> |  |
| <Link id="m-isnonanimatedstaticbuilding" /><code>{"private bool isNonAnimatedStaticBuilding"}</code> |  |
| <Link id="m-isrepeatable" /><code>{"private bool isRepeatable"}</code> |  |
| <Link id="m-item1" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item1"}</code> |  |
| <Link id="m-item1material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item1Material"}</code> |  |
| <Link id="m-item1usephysmat" /><code>{"private bool item1UsePhysMat"}</code> |  |
| <Link id="m-item2" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item2"}</code> |  |
| <Link id="m-item2material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item2Material"}</code> |  |
| <Link id="m-item2usephysmat" /><code>{"private bool item2UsePhysMat"}</code> |  |
| <Link id="m-item3" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item3"}</code> |  |
| <Link id="m-item3material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item3Material"}</code> |  |
| <Link id="m-item3usephysmat" /><code>{"private bool item3UsePhysMat"}</code> |  |
| <Link id="m-itemcount1" /><code>{"private uint itemCount1"}</code> |  |
| <Link id="m-itemcount2" /><code>{"private uint itemCount2"}</code> |  |
| <Link id="m-itemcount3" /><code>{"private uint itemCount3"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-onitemdeposited" /><code>{"private Action onItemDeposited"}</code> |  |
| <Link id="m-onrepaired" /><code>{"private Action onRepaired"}</code> |  |
| <Link id="m-refundlocation" /><code>{"private Transform refundLocation"}</code> |  |
| <Link id="m-remaining1text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining1Text"}</code> |  |
| <Link id="m-remaining2text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining2Text"}</code> |  |
| <Link id="m-remaining3text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining3Text"}</code> |  |
| <Link id="m-repairboxvfxcontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/repairboxvfxcontroller">{"RepairBoxVfxController"}</Link>{" repairBoxVfxController"}</code> |  |
| <Link id="m-shootoutcurve" /><code>{"private AnimationCurve shootOutCurve"}</code> |  |
| <Link id="m-shootoutheight" /><code>{"private float shootOutHeight"}</code> |  |
| <Link id="m-shootoutmaxradius" /><code>{"private float shootOutMaxRadius"}</code> |  |
| <Link id="m-shootouttime" /><code>{"private float shootOutTime"}</code> |  |
| <Link id="m-spawnfinished" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" spawnFinished"}</code> |  |
| <Link id="m-spawning" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> |  |
| <Link id="m-spawningdata" /><code>{"private "}<Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> |  |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> |  |
| <Link id="m-statichash" /><code>{"private uint staticHash"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncdevquickmodify" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDevQuickModify"}</code> |  |
| <Link id="m-syncdone" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDone"}</code> |  |
| <Link id="m-syncitemdocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncItemDocked"}</code> |  |
| <Link id="m-undone" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" undone"}</code> |  |
| <Link id="m-wascompletedbydevtool" /><code>{"private bool wasCompletedByDevTool"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrepairboxdone" /><code>{"bool IsRepairBoxDone { get; }"}</code> | True when the box has been completed by players. A box completed through the dev tool reports false. |
| <Link id="m-onrepaired-2" /><code>{"Action OnRepaired { get; set; }"}</code> | Callback run when all costs are met, and on clients when an item docks into a finished box. |
| <Link id="m-buildinganimationwrapper-2" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" "}<Link to="/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-act" /><code>{"void Act()"}</code> | Server: applies the result. Destroys the linked object, marks the static building modified, and spawns the output. |
| <Link id="m-checkfinished" /><code>{"void CheckFinished()"}</code> | If every dock holds its full cost, fires `OnRepaired` and finishes the repair. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network syncs for state, completion, docked items and dev tool commands. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Prepares the cost docks and animator, and destroys the box if its static building is already built. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the box state to a joining player. |
| <Link id="m-senddevtoolcommandtoserver" /><code>{"void SendDevToolCommandToServer("}<Link to="/game-api/types/alta-menus/repairboxdevcommand">{"RepairBoxDevCommand"}</Link>{" devCommand)"}</code> | Sends a dev panel build or destroy command, which skips the build animation or undoes the building. |
| <Link id="m-setupinput" /><code>{"void SetupInput("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item1, uint count1, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item2 = null, uint count2 = 0, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item3 = null, uint count3 = 0)"}</code> | Sets up to three required items and counts. |
| <Link id="m-setupoutput" /><code>{"void SetupOutput("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning, Vector3 spawnPosition = null, bool isRepeatable = true)"}</code> | Sets the prefab to spawn, where to spawn it and whether the box can be used again. |
| <Link id="m-checkforstaticcontentalreadycompleted" /><code>{"private void CheckForStaticContentAlreadyCompleted()"}</code> |  |
| <Link id="m-checkspawn" /><code>{"private void CheckSpawn()"}</code> |  |
| <Link id="m-consumealldockcontents" /><code>{"private void ConsumeAllDockContents()"}</code> |  |
| <Link id="m-consumedockcontents" /><code>{"private static void ConsumeDockContents("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int consumeQuantity)"}</code> |  |
| <Link id="m-devtoolrepair" /><code>{"private void DevToolRepair()"}</code> |  |
| <Link id="m-devtoolunrepair" /><code>{"private void DevToolUnrepair()"}</code> |  |
| <Link id="m-finish" /><code>{"private void Finish()"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onitemdocked" /><code>{"private void OnItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-onitemdockedlocal" /><code>{"private void OnItemDockedLocal("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-onpreparedlocal" /><code>{"private void OnPreparedLocal()"}</code> |  |
| <Link id="m-onresourceschanged" /><code>{"private void OnResourcesChanged("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-populatestaticobjectanimation" /><code>{"private bool PopulateStaticObjectAnimation()"}</code> |  |
| <Link id="m-preinsertanimation" /><code>{"private IEnumerator PreInsertAnimation("}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part, float speed, bool isLast, IEnumerator insertAnimation) (iterator)"}</code> |  |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> |  |
| <Link id="m-prepare-2" /><code>{"private void Prepare("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, ref uint count, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDock, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int dockCount, bool usePhysMat, "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physMat, ref int index, out "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter)"}</code> |  |
| <Link id="m-refreshremainingtext" /><code>{"private void RefreshRemainingText()"}</code> |  |
| <Link id="m-refreshtext" /><code>{"private void RefreshText(uint cost, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock, "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remainingText, GameObject checkMark)"}</code> |  |
| <Link id="m-refundextraitems" /><code>{"private void RefundExtraItems("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int requiredQuantity)"}</code> |  |
| <Link id="m-rejectdock" /><code>{"private void RejectDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-repair" /><code>{"private void Repair()"}</code> |  |
| <Link id="m-restartvortexvfx" /><code>{"private void RestartVortexVfx()"}</code> |  |
| <Link id="m-staticundo" /><code>{"private void StaticUndo(uint hash, bool isModified)"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncdevtoolcommand" /><code>{"private void SyncDevToolCommand("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int devCommandIndex)"}</code> |  |
| <Link id="m-syncdone-2" /><code>{"private void SyncDone("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncitemdocked-2" /><code>{"private void SyncItemDocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unrepair" /><code>{"private void UnRepair()"}</code> |  |
| <Link id="m-validateisdoneonclient" /><code>{"private void ValidateIsDoneOnClient(bool isRunningEvent)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RepairBox`:

[`RepairBoxDevControlPanel.repairBox`](/game-api/types/alta-menus/repairboxdevcontrolpanel#m-repairbox), [`PendingRepairBoxCompletionCondition.repairBox`](/game-api/types/game-other-namespaces/pendingrepairboxcompletioncondition#m-repairbox).
