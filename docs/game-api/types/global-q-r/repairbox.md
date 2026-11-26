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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RepairBox()"}</code> |

## Fields

<details>
<summary>62 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationposition" /><code>{"private Vector3 animationPosition"}</code> | Where building parts start their fly-in animation (the box's position). |
| <Link id="m-boxanimation" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" boxAnimation"}</code> | Network animator for the box; gets `IsBuilding` and `IsRepeatable` set on the server. |
| <Link id="m-btnfinish" /><code>{"private bool btnFinish"}</code> | Debug inspector button. |
| <Link id="m-buildinganimationwrapper" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" buildingAnimationWrapper"}</code> | Backing field for `BuildingAnimationWrapper`. |
| <Link id="m-buildingfinished" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" buildingFinished"}</code> | Event invoked when the building animation ends and the box is done. |
| <Link id="m-canbeundone" /><code>{"private bool canBeUndone"}</code> | Saved flag; not read elsewhere in this class. |
| <Link id="m-checkmark1" /><code>{"private GameObject checkmark1"}</code> | Checkmark shown when dock 1 is full on a one-off box. |
| <Link id="m-checkmark2" /><code>{"private GameObject checkmark2"}</code> | Checkmark shown when dock 2 is full on a one-off box. |
| <Link id="m-checkmark3" /><code>{"private GameObject checkmark3"}</code> | Checkmark shown when dock 3 is full on a one-off box. |
| <Link id="m-cost1" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost1"}</code> | Display dock showing the first required item. |
| <Link id="m-cost2" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost2"}</code> | Display dock showing the second required item; also a layout anchor. |
| <Link id="m-cost3" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost3"}</code> | Display dock showing the third required item; also a layout anchor. |
| <Link id="m-destroying" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" destroying"}</code> | Child object destroyed when the box acts (for example the broken version). |
| <Link id="m-dock1" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock1"}</code> | Input dock for the first item. |
| <Link id="m-dock2" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock2"}</code> | Input dock for the second item. |
| <Link id="m-dock3" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock3"}</code> | Input dock for the third item. |
| <Link id="m-filled" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" filled"}</code> | Event invoked when the box is completed. |
| <Link id="m-filter1" /><code>{"private "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter1"}</code> | Dock filter for the first input. |
| <Link id="m-filter2" /><code>{"private "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter2"}</code> | Dock filter for the second input. |
| <Link id="m-filter3" /><code>{"private "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter3"}</code> | Dock filter for the third input. |
| <Link id="m-flyouttime" /><code>{"private float flyOutTime"}</code> | Seconds for a part to fly from the peak into place. |
| <Link id="m-ignorematerialonsimpleserver1" /><code>{"private bool ignoreMaterialOnSimpleServer1"}</code> | If true, item 1's material requirement is dropped on simple servers. |
| <Link id="m-ignorematerialonsimpleserver2" /><code>{"private bool ignoreMaterialOnSimpleServer2"}</code> | If true, item 2's material requirement is dropped on simple servers. |
| <Link id="m-ignorematerialonsimpleserver3" /><code>{"private bool ignoreMaterialOnSimpleServer3"}</code> | If true, item 3's material requirement is dropped on simple servers. |
| <Link id="m-isdone" /><code>{"private bool isDone"}</code> | True once the box is completed. Repeatable boxes reset it after reporting. |
| <Link id="m-isnonanimatedstaticbuilding" /><code>{"private bool isNonAnimatedStaticBuilding"}</code> | True when the static object has no building animation, so `Act` spawns straight away. |
| <Link id="m-isrepeatable" /><code>{"private bool isRepeatable"}</code> | If true, the box can be filled again and keeps its docks after completion. |
| <Link id="m-item1" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item1"}</code> | First required item; null for none. |
| <Link id="m-item1material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item1Material"}</code> | Physical material item 1 must have, if `item1UsePhysMat` is set. |
| <Link id="m-item1usephysmat" /><code>{"private bool item1UsePhysMat"}</code> | If true, item 1 must be of `item1Material`. |
| <Link id="m-item2" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item2"}</code> | Second required item; null for none. |
| <Link id="m-item2material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item2Material"}</code> | Physical material item 2 must have, if `item2UsePhysMat` is set. |
| <Link id="m-item2usephysmat" /><code>{"private bool item2UsePhysMat"}</code> | If true, item 2 must be of `item2Material`. |
| <Link id="m-item3" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item3"}</code> | Third required item; null for none. |
| <Link id="m-item3material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item3Material"}</code> | Physical material item 3 must have, if `item3UsePhysMat` is set. |
| <Link id="m-item3usephysmat" /><code>{"private bool item3UsePhysMat"}</code> | If true, item 3 must be of `item3Material`. |
| <Link id="m-itemcount1" /><code>{"private uint itemCount1"}</code> | How many of item 1 are needed. |
| <Link id="m-itemcount2" /><code>{"private uint itemCount2"}</code> | How many of item 2 are needed. |
| <Link id="m-itemcount3" /><code>{"private uint itemCount3"}</code> | How many of item 3 are needed. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-onitemdeposited" /><code>{"private Action onItemDeposited"}</code> | Client callback for an item deposited before completion. |
| <Link id="m-onrepaired" /><code>{"private Action onRepaired"}</code> | Backing field for `OnRepaired`. |
| <Link id="m-refundlocation" /><code>{"private Transform refundLocation"}</code> | Where extra items are popped out. |
| <Link id="m-remaining1text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining1Text"}</code> | Text showing how many of item 1 are still needed. |
| <Link id="m-remaining2text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining2Text"}</code> | Text showing how many of item 2 are still needed. |
| <Link id="m-remaining3text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining3Text"}</code> | Text showing how many of item 3 are still needed. |
| <Link id="m-repairboxvfxcontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/repairboxvfxcontroller">{"RepairBoxVfxController"}</Link>{" repairBoxVfxController"}</code> | Plays the vortex, deposit, refund and completed effects. |
| <Link id="m-shootoutcurve" /><code>{"private AnimationCurve shootOutCurve"}</code> | Easing for the shoot-up part of the build animation. |
| <Link id="m-shootoutheight" /><code>{"private float shootOutHeight"}</code> | Height parts shoot up to before flying in. |
| <Link id="m-shootoutmaxradius" /><code>{"private float shootOutMaxRadius"}</code> | Random spread of the shoot-up peak. |
| <Link id="m-shootouttime" /><code>{"private float shootOutTime"}</code> | Seconds for a part to shoot up. |
| <Link id="m-spawnfinished" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" spawnFinished"}</code> | Event invoked after the result spawns, when done. |
| <Link id="m-spawning" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | Prefab spawned when the box acts. |
| <Link id="m-spawningdata" /><code>{"private "}<Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | Set piece spawned when the box acts, if there's no prefab. |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> | Where the result spawns. Saved. |
| <Link id="m-statichash" /><code>{"private uint staticHash"}</code> | Hash of the static world object this box restores; 0 for none. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the full setup. |
| <Link id="m-syncdevquickmodify" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDevQuickModify"}</code> | Method sync for dev tool commands. |
| <Link id="m-syncdone" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDone"}</code> | Method sync for the done state. |
| <Link id="m-syncitemdocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncItemDocked"}</code> | Method sync that tells clients to refresh counts. |
| <Link id="m-undone" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" undone"}</code> | Event invoked when the box is set back to unfinished. |
| <Link id="m-wascompletedbydevtool" /><code>{"private bool wasCompletedByDevTool"}</code> | True if a dev tool built it; `IsRepairBoxDone` is then false. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrepairboxdone" /><code>{"bool IsRepairBoxDone { get; }"}</code> | True when the box has been completed by players. A box completed through the dev tool reports false. |
| <Link id="m-onrepaired-2" /><code>{"Action OnRepaired { get; set; }"}</code> | Callback run when all costs are met, and on clients when an item docks into a finished box. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildinganimationwrapper-2" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" "}<Link to="/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" { get; set; }"}</code> | The building animation on the static object with `staticHash`, looked up the first time it's needed. |

</details>

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

<details>
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforstaticcontentalreadycompleted" /><code>{"private void CheckForStaticContentAlreadyCompleted()"}</code> | Server: destroys a finished box that only restores a static building (spawns nothing) once that building is already restored. |
| <Link id="m-checkspawn" /><code>{"private void CheckSpawn()"}</code> | Server: spawns the `spawning` prefab or the `spawningData` set piece at the spawn point, then invokes `spawnFinished` if done. |
| <Link id="m-consumealldockcontents" /><code>{"private void ConsumeAllDockContents()"}</code> | Destroys the required amount from each input dock and undocks the rest. |
| <Link id="m-consumedockcontents" /><code>{"private static void ConsumeDockContents("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int consumeQuantity)"}</code> | Destroys up to an amount of a dock's stored items, then undocks whatever is left. |
| <Link id="m-devtoolrepair" /><code>{"private void DevToolRepair()"}</code> | Dev tool: builds without the animation (the server runs `Act`, clients play the skipped animation). |
| <Link id="m-devtoolunrepair" /><code>{"private void DevToolUnrepair()"}</code> | Dev tool: marks the static object unmodified on the server and resets the building animation. |
| <Link id="m-finish" /><code>{"private void Finish()"}</code> | Marks the box done, consumes the docked items next frame and, if not repeatable, stops the box from being saved. Inspector button too. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | Save load setup: takes the first child `NetworkPrefab` as the `destroying` object. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks from static object changes. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the refund location in the editor. |
| <Link id="m-onitemdocked" /><code>{"private void OnItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: plays the deposit effect, refunds extras, checks for completion and syncs the remaining counts. Pouches are ignored. |
| <Link id="m-onitemdockedlocal" /><code>{"private void OnItemDockedLocal("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Client: invokes the deposited or repaired callback and refreshes the counts. Pouches are ignored. |
| <Link id="m-onpreparedlocal" /><code>{"private void OnPreparedLocal()"}</code> | Client: refreshes the remaining counts. |
| <Link id="m-onresourceschanged" /><code>{"private void OnResourcesChanged("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Checks for completion; when done, reports the project as finished for the last player who docked an item. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: makes the `destroying` prefab a saved child of this box. |
| <Link id="m-populatestaticobjectanimation" /><code>{"private bool PopulateStaticObjectAnimation()"}</code> | Finds the static object's building animation and hooks the fly-in animation. Returns false if the object isn't found. |
| <Link id="m-preinsertanimation" /><code>{"private IEnumerator PreInsertAnimation("}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part, float speed, bool isLast, IEnumerator insertAnimation) (iterator)"}</code> | Animates each building part shooting up from the box and flying into place; after the last part, invokes `buildingFinished` and spawns on the server. |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> | Lays out the cost and input docks for the set items, adds dock filters and, on the server, spawns the cost display items. |
| <Link id="m-prepare-2" /><code>{"private void Prepare("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, ref uint count, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDock, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int dockCount, bool usePhysMat, "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physMat, ref int index, out "}<Link to="/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter)"}</code> | Lays out the cost and input docks for the set items, adds dock filters and, on the server, spawns the cost display items. |
| <Link id="m-refreshremainingtext" /><code>{"private void RefreshRemainingText()"}</code> | Updates the remaining-count text and checkmarks for all three docks. |
| <Link id="m-refreshtext" /><code>{"private void RefreshText(uint cost, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock, "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remainingText, GameObject checkMark)"}</code> | Shows how many items a dock still needs; for one-off boxes swaps to a checkmark when full. |
| <Link id="m-refundextraitems" /><code>{"private void RefundExtraItems("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int requiredQuantity)"}</code> | Pops items beyond the required amount out of a dock at the refund location. |
| <Link id="m-rejectdock" /><code>{"private void RejectDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Dock filter that refuses everything. |
| <Link id="m-repair" /><code>{"private void Repair()"}</code> | Sets the box done, starts the building animation and invokes `filled`. One-off boxes then refuse more items. The server syncs it. |
| <Link id="m-restartvortexvfx" /><code>{"private void RestartVortexVfx()"}</code> | Restarts the swirling effect shown while the box is unfinished. |
| <Link id="m-staticundo" /><code>{"private void StaticUndo(uint hash, bool isModified)"}</code> | Un-repairs the box when its static object is set back to unmodified. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the full setup to clients (items, counts, done state, static hash). Refused from clients. |
| <Link id="m-syncdevtoolcommand" /><code>{"private void SyncDevToolCommand("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int devCommandIndex)"}</code> | Runs a dev build or destroy command; the server relays it to the chunk. |
| <Link id="m-syncdone-2" /><code>{"private void SyncDone("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the done flags; clients update the docks and run the filled or undone event. |
| <Link id="m-syncitemdocked-2" /><code>{"private void SyncItemDocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Refreshes the remaining counts on clients. |
| <Link id="m-unrepair" /><code>{"private void UnRepair()"}</code> | Sets the box back to unfinished, invokes `undone`, re-enables the docks and filters, and syncs on the server. |
| <Link id="m-validateisdoneonclient" /><code>{"private void ValidateIsDoneOnClient(bool isRunningEvent)"}</code> | Client: shows or hides the docks for the done state, optionally running the filled or undone event. |

</details>

## Used in

Members of other types that take, return or hold a `RepairBox`:

[`RepairBoxDevControlPanel.repairBox`](/game-api/types/alta-menus/repairboxdevcontrolpanel#m-repairbox), [`PendingRepairBoxCompletionCondition.repairBox`](/game-api/types/game-other-namespaces/pendingrepairboxcompletioncondition#m-repairbox).
