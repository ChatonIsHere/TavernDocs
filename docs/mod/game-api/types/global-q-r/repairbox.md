---
title: "RepairBox"
description: "A build or repair box that takes up to three item costs in docks and, when filled, repairs a static building, destroys an old object or spawns a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBox

A **class** in `Root.Township`, the global namespace.

A build or repair box that takes up to three item costs in docks and, when filled, repairs a static building, destroys an old object or spawns a prefab. The server runs the logic and saves it; clients show counts and effects.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<RepairBoxSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<RepairBoxSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RepairBoxSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`RepairBoxSaveData`](/mod/game-api/types/global-q-r/repairboxsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBox()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>62 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationposition" /><code>{"private Vector3 animationPosition"}</code> | <span className="api-desc">Where building parts start their fly-in animation (the box's position).</span> |
| <Link id="m-boxanimation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" boxAnimation"}</code> | <span className="api-desc">Network animator for the box; gets `IsBuilding` and `IsRepeatable` set on the server.</span> |
| <Link id="m-btnfinish" /><code>{"private bool btnFinish"}</code> | <span className="api-desc">Debug inspector button.</span> |
| <Link id="m-buildinganimationwrapper" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" buildingAnimationWrapper"}</code> | <span className="api-desc">Backing field for `BuildingAnimationWrapper`.</span> |
| <Link id="m-buildingfinished" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" buildingFinished"}</code> | <span className="api-desc">Event invoked when the building animation ends and the box is done.</span> |
| <Link id="m-canbeundone" /><code>{"private bool canBeUndone"}</code> | <span className="api-desc">Saved flag; not read elsewhere in this class.</span> |
| <Link id="m-checkmark1" /><code>{"private GameObject checkmark1"}</code> | <span className="api-desc">Checkmark shown when dock 1 is full on a one-off box.</span> |
| <Link id="m-checkmark2" /><code>{"private GameObject checkmark2"}</code> | <span className="api-desc">Checkmark shown when dock 2 is full on a one-off box.</span> |
| <Link id="m-checkmark3" /><code>{"private GameObject checkmark3"}</code> | <span className="api-desc">Checkmark shown when dock 3 is full on a one-off box.</span> |
| <Link id="m-cost1" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost1"}</code> | <span className="api-desc">Display dock showing the first required item.</span> |
| <Link id="m-cost2" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost2"}</code> | <span className="api-desc">Display dock showing the second required item; also a layout anchor.</span> |
| <Link id="m-cost3" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" cost3"}</code> | <span className="api-desc">Display dock showing the third required item; also a layout anchor.</span> |
| <Link id="m-destroying" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" destroying"}</code> | <span className="api-desc">Child object destroyed when the box acts (for example the broken version).</span> |
| <Link id="m-dock1" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock1"}</code> | <span className="api-desc">Input dock for the first item.</span> |
| <Link id="m-dock2" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock2"}</code> | <span className="api-desc">Input dock for the second item.</span> |
| <Link id="m-dock3" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock3"}</code> | <span className="api-desc">Input dock for the third item.</span> |
| <Link id="m-filled" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" filled"}</code> | <span className="api-desc">Event invoked when the box is completed.</span> |
| <Link id="m-filter1" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter1"}</code> | <span className="api-desc">Dock filter for the first input.</span> |
| <Link id="m-filter2" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter2"}</code> | <span className="api-desc">Dock filter for the second input.</span> |
| <Link id="m-filter3" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter3"}</code> | <span className="api-desc">Dock filter for the third input.</span> |
| <Link id="m-flyouttime" /><code>{"private float flyOutTime"}</code> | <span className="api-desc">Seconds for a part to fly from the peak into place.</span> |
| <Link id="m-ignorematerialonsimpleserver1" /><code>{"private bool ignoreMaterialOnSimpleServer1"}</code> | <span className="api-desc">If true, item 1's material requirement is dropped on simple servers.</span> |
| <Link id="m-ignorematerialonsimpleserver2" /><code>{"private bool ignoreMaterialOnSimpleServer2"}</code> | <span className="api-desc">If true, item 2's material requirement is dropped on simple servers.</span> |
| <Link id="m-ignorematerialonsimpleserver3" /><code>{"private bool ignoreMaterialOnSimpleServer3"}</code> | <span className="api-desc">If true, item 3's material requirement is dropped on simple servers.</span> |
| <Link id="m-isdone" /><code>{"private bool isDone"}</code> | <span className="api-desc">True once the box is completed. Repeatable boxes reset it after reporting.</span> |
| <Link id="m-isnonanimatedstaticbuilding" /><code>{"private bool isNonAnimatedStaticBuilding"}</code> | <span className="api-desc">True when the static object has no building animation, so `Act` spawns straight away.</span> |
| <Link id="m-isrepeatable" /><code>{"private bool isRepeatable"}</code> | <span className="api-desc">If true, the box can be filled again and keeps its docks after completion.</span> |
| <Link id="m-item1" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item1"}</code> | <span className="api-desc">First required item; null for none.</span> |
| <Link id="m-item1material" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item1Material"}</code> | <span className="api-desc">Physical material item 1 must have, if `item1UsePhysMat` is set.</span> |
| <Link id="m-item1usephysmat" /><code>{"private bool item1UsePhysMat"}</code> | <span className="api-desc">If true, item 1 must be of `item1Material`.</span> |
| <Link id="m-item2" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item2"}</code> | <span className="api-desc">Second required item; null for none.</span> |
| <Link id="m-item2material" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item2Material"}</code> | <span className="api-desc">Physical material item 2 must have, if `item2UsePhysMat` is set.</span> |
| <Link id="m-item2usephysmat" /><code>{"private bool item2UsePhysMat"}</code> | <span className="api-desc">If true, item 2 must be of `item2Material`.</span> |
| <Link id="m-item3" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item3"}</code> | <span className="api-desc">Third required item; null for none.</span> |
| <Link id="m-item3material" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" item3Material"}</code> | <span className="api-desc">Physical material item 3 must have, if `item3UsePhysMat` is set.</span> |
| <Link id="m-item3usephysmat" /><code>{"private bool item3UsePhysMat"}</code> | <span className="api-desc">If true, item 3 must be of `item3Material`.</span> |
| <Link id="m-itemcount1" /><code>{"private uint itemCount1"}</code> | <span className="api-desc">How many of item 1 are needed.</span> |
| <Link id="m-itemcount2" /><code>{"private uint itemCount2"}</code> | <span className="api-desc">How many of item 2 are needed.</span> |
| <Link id="m-itemcount3" /><code>{"private uint itemCount3"}</code> | <span className="api-desc">How many of item 3 are needed.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-onitemdeposited" /><code>{"private Action onItemDeposited"}</code> | <span className="api-desc">Client callback for an item deposited before completion.</span> |
| <Link id="m-onrepaired" /><code>{"private Action onRepaired"}</code> | <span className="api-desc">Backing field for `OnRepaired`.</span> |
| <Link id="m-refundlocation" /><code>{"private Transform refundLocation"}</code> | <span className="api-desc">Where extra items are popped out.</span> |
| <Link id="m-remaining1text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining1Text"}</code> | <span className="api-desc">Text showing how many of item 1 are still needed.</span> |
| <Link id="m-remaining2text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining2Text"}</code> | <span className="api-desc">Text showing how many of item 2 are still needed.</span> |
| <Link id="m-remaining3text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remaining3Text"}</code> | <span className="api-desc">Text showing how many of item 3 are still needed.</span> |
| <Link id="m-repairboxvfxcontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/repairboxvfxcontroller">{"RepairBoxVfxController"}</Link>{" repairBoxVfxController"}</code> | <span className="api-desc">Plays the vortex, deposit, refund and completed effects.</span> |
| <Link id="m-shootoutcurve" /><code>{"private AnimationCurve shootOutCurve"}</code> | <span className="api-desc">Easing for the shoot-up part of the build animation.</span> |
| <Link id="m-shootoutheight" /><code>{"private float shootOutHeight"}</code> | <span className="api-desc">Height parts shoot up to before flying in.</span> |
| <Link id="m-shootoutmaxradius" /><code>{"private float shootOutMaxRadius"}</code> | <span className="api-desc">Random spread of the shoot-up peak.</span> |
| <Link id="m-shootouttime" /><code>{"private float shootOutTime"}</code> | <span className="api-desc">Seconds for a part to shoot up.</span> |
| <Link id="m-spawnfinished" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" spawnFinished"}</code> | <span className="api-desc">Event invoked after the result spawns, when done.</span> |
| <Link id="m-spawning" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | <span className="api-desc">Prefab spawned when the box acts.</span> |
| <Link id="m-spawningdata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | <span className="api-desc">Set piece spawned when the box acts, if there's no prefab.</span> |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> | <span className="api-desc">Where the result spawns. Saved.</span> |
| <Link id="m-statichash" /><code>{"private uint staticHash"}</code> | <span className="api-desc">Hash of the static world object this box restores; 0 for none.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the full setup.</span> |
| <Link id="m-syncdevquickmodify" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDevQuickModify"}</code> | <span className="api-desc">Method sync for dev tool commands.</span> |
| <Link id="m-syncdone" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDone"}</code> | <span className="api-desc">Method sync for the done state.</span> |
| <Link id="m-syncitemdocked" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncItemDocked"}</code> | <span className="api-desc">Method sync that tells clients to refresh counts.</span> |
| <Link id="m-undone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" undone"}</code> | <span className="api-desc">Event invoked when the box is set back to unfinished.</span> |
| <Link id="m-wascompletedbydevtool" /><code>{"private bool wasCompletedByDevTool"}</code> | <span className="api-desc">True if a dev tool built it; `IsRepairBoxDone` is then false.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrepairboxdone" /><code>{"bool IsRepairBoxDone { get; }"}</code> | <span className="api-desc">True when the box has been completed by players. A box completed through the dev tool reports false.</span> |
| <Link id="m-onrepaired-2" /><code>{"Action OnRepaired { get; set; }"}</code> | <span className="api-desc">Callback run when all costs are met, and on clients when an item docks into a finished box.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildinganimationwrapper-2" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/buildinganimationwrapper">{"BuildingAnimationWrapper"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The building animation on the static object with `staticHash`, looked up the first time it's needed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-act" /><code>{"void Act()"}</code> | <span className="api-desc">Server: applies the result. Destroys the linked object, marks the static building modified, and spawns the output.</span> |
| <Link id="m-checkfinished" /><code>{"void CheckFinished()"}</code> | <span className="api-desc">If every dock holds its full cost, fires `OnRepaired` and finishes the repair.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network syncs for state, completion, docked items and dev tool commands.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Prepares the cost docks and animator, and destroys the box if its static building is already built.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the box state to a joining player.</span> |
| <Link id="m-senddevtoolcommandtoserver" /><code>{"void SendDevToolCommandToServer("}<Link to="/mod/game-api/types/alta-menus/repairboxdevcommand">{"RepairBoxDevCommand"}</Link>{" devCommand)"}</code> | <span className="api-desc">Sends a dev panel build or destroy command, which skips the build animation or undoes the building.</span> |
| <Link id="m-setupinput" /><code>{"void SetupInput("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item1, uint count1, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item2 = null, uint count2 = 0, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item3 = null, uint count3 = 0)"}</code> | <span className="api-desc">Sets up to three required items and counts.</span> |
| <Link id="m-setupoutput" /><code>{"void SetupOutput("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning, Vector3 spawnPosition = null, bool isRepeatable = true)"}</code> | <span className="api-desc">Sets the prefab to spawn, where to spawn it and whether the box can be used again.</span> |

<details className="api-private">
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforstaticcontentalreadycompleted" /><code>{"private void CheckForStaticContentAlreadyCompleted()"}</code> | <span className="api-desc">Server: destroys a finished box that only restores a static building (spawns nothing) once that building is already restored.</span> |
| <Link id="m-checkspawn" /><code>{"private void CheckSpawn()"}</code> | <span className="api-desc">Server: spawns the `spawning` prefab or the `spawningData` set piece at the spawn point, then invokes `spawnFinished` if done.</span> |
| <Link id="m-consumealldockcontents" /><code>{"private void ConsumeAllDockContents()"}</code> | <span className="api-desc">Destroys the required amount from each input dock and undocks the rest.</span> |
| <Link id="m-consumedockcontents" /><code>{"private static void ConsumeDockContents("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int consumeQuantity)"}</code> | <span className="api-desc">Destroys up to an amount of a dock's stored items, then undocks whatever is left.</span> |
| <Link id="m-devtoolrepair" /><code>{"private void DevToolRepair()"}</code> | <span className="api-desc">Dev tool: builds without the animation (the server runs `Act`, clients play the skipped animation).</span> |
| <Link id="m-devtoolunrepair" /><code>{"private void DevToolUnrepair()"}</code> | <span className="api-desc">Dev tool: marks the static object unmodified on the server and resets the building animation.</span> |
| <Link id="m-finish" /><code>{"private void Finish()"}</code> | <span className="api-desc">Marks the box done, consumes the docked items next frame and, if not repeatable, stops the box from being saved. Inspector button too.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">Save load setup: takes the first child `NetworkPrefab` as the `destroying` object.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks from static object changes.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the refund location in the editor.</span> |
| <Link id="m-onitemdocked" /><code>{"private void OnItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: plays the deposit effect, refunds extras, checks for completion and syncs the remaining counts. Pouches are ignored.</span> |
| <Link id="m-onitemdockedlocal" /><code>{"private void OnItemDockedLocal("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Client: invokes the deposited or repaired callback and refreshes the counts. Pouches are ignored.</span> |
| <Link id="m-onpreparedlocal" /><code>{"private void OnPreparedLocal()"}</code> | <span className="api-desc">Client: refreshes the remaining counts.</span> |
| <Link id="m-onresourceschanged" /><code>{"private void OnResourcesChanged("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Checks for completion; when done, reports the project as finished for the last player who docked an item.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: makes the `destroying` prefab a saved child of this box.</span> |
| <Link id="m-populatestaticobjectanimation" /><code>{"private bool PopulateStaticObjectAnimation()"}</code> | <span className="api-desc">Finds the static object's building animation and hooks the fly-in animation. Returns false if the object isn't found.</span> |
| <Link id="m-preinsertanimation" /><code>{"private IEnumerator PreInsertAnimation("}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part, float speed, bool isLast, IEnumerator insertAnimation) (iterator)"}</code> | <span className="api-desc">Animates each building part shooting up from the box and flying into place; after the last part, invokes `buildingFinished` and spawns on the server.</span> |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> | <span className="api-desc">Lays out the cost and input docks for the set items, adds dock filters and, on the server, spawns the cost display items.</span> |
| <Link id="m-prepare-2" /><code>{"private void Prepare("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item, ref uint count, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDock, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int dockCount, bool usePhysMat, "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physMat, ref int index, out "}<Link to="/mod/game-api/types/alta-items/dockfilter">{"DockFilter"}</Link>{" filter)"}</code> | <span className="api-desc">Lays out the cost and input docks for the set items, adds dock filters and, on the server, spawns the cost display items.</span> |
| <Link id="m-refreshremainingtext" /><code>{"private void RefreshRemainingText()"}</code> | <span className="api-desc">Updates the remaining-count text and checkmarks for all three docks.</span> |
| <Link id="m-refreshtext" /><code>{"private void RefreshText(uint cost, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock, "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" remainingText, GameObject checkMark)"}</code> | <span className="api-desc">Shows how many items a dock still needs; for one-off boxes swaps to a checkmark when full.</span> |
| <Link id="m-refundextraitems" /><code>{"private void RefundExtraItems("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int requiredQuantity)"}</code> | <span className="api-desc">Pops items beyond the required amount out of a dock at the refund location.</span> |
| <Link id="m-rejectdock" /><code>{"private void RejectDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Dock filter that refuses everything.</span> |
| <Link id="m-repair" /><code>{"private void Repair()"}</code> | <span className="api-desc">Sets the box done, starts the building animation and invokes `filled`. One-off boxes then refuse more items. The server syncs it.</span> |
| <Link id="m-restartvortexvfx" /><code>{"private void RestartVortexVfx()"}</code> | <span className="api-desc">Restarts the swirling effect shown while the box is unfinished.</span> |
| <Link id="m-staticundo" /><code>{"private void StaticUndo(uint hash, bool isModified)"}</code> | <span className="api-desc">Un-repairs the box when its static object is set back to unmodified.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the full setup to clients (items, counts, done state, static hash). Refused from clients.</span> |
| <Link id="m-syncdevtoolcommand" /><code>{"private void SyncDevToolCommand("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int devCommandIndex)"}</code> | <span className="api-desc">Runs a dev build or destroy command; the server relays it to the chunk.</span> |
| <Link id="m-syncdone-2" /><code>{"private void SyncDone("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the done flags; clients update the docks and run the filled or undone event.</span> |
| <Link id="m-syncitemdocked-2" /><code>{"private void SyncItemDocked("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Refreshes the remaining counts on clients.</span> |
| <Link id="m-unrepair" /><code>{"private void UnRepair()"}</code> | <span className="api-desc">Sets the box back to unfinished, invokes `undone`, re-enables the docks and filters, and syncs on the server.</span> |
| <Link id="m-validateisdoneonclient" /><code>{"private void ValidateIsDoneOnClient(bool isRunningEvent)"}</code> | <span className="api-desc">Client: shows or hides the docks for the done state, optionally running the filled or undone event.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RepairBox`:

<div className="api-used-in">

[`RepairBoxDevControlPanel.repairBox`](/mod/game-api/types/alta-menus/repairboxdevcontrolpanel#m-repairbox), [`PendingRepairBoxCompletionCondition.repairBox`](/mod/game-api/types/game-other-namespaces/pendingrepairboxcompletioncondition#m-repairbox).

</div>
