---
title: "DiggingImpactor"
description: "Makes a tool (shovel head) bury itself in the ground when it hits a target layer hard enough, then dig up IDigable objects nearby when it is levered out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactor

A **class** in `Root.Township`, the global namespace.

Makes a tool (shovel head) bury itself in the ground when it hits a target layer hard enough, then dig up `IDigable` objects nearby when it is levered out. The holder's client decides bury and unbury and syncs it; dig damage runs on the server; the buried state is saved.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DiggingImpactorSaveStructure>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<DiggingImpactorSaveStructure>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IToolHitDependant`](/mod/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`DiggingImpactorSaveStructure`](/mod/game-api/types/global-c-d/diggingimpactorsavestructure)
- **Nested types** [`InteractorPositions`](/mod/game-api/types/global-c-d/diggingimpactor-interactorpositions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiggingImpactor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buriedposition" /><code>{"private Vector3 buriedPosition"}</code> | Where the tool sits while buried. |
| <Link id="m-buriedrotation" /><code>{"private Quaternion buriedRotation"}</code> | Tool rotation while buried. |
| <Link id="m-checkpull" /><code>{"private Coroutine checkPull"}</code> | The running `CheckPull` coroutine. |
| <Link id="m-currenttool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" currentTool"}</code> | The impact tool being buried. |
| <Link id="m-diggingdamagemultiplier" /><code>{"private Func<float> diggingDamageMultiplier"}</code> | Server: returns the physical material's damage multiplier, or 1. |
| <Link id="m-digsherecastposition" /><code>{"private Transform digShereCastPosition"}</code> | Where the digable search sphere is centred (at the pivot's height). |
| <Link id="m-durabilitypickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" durabilityPickup"}</code> | Pickup whose durability drops on each dig. |
| <Link id="m-efficiencyratio" /><code>{"private float efficiencyRatio"}</code> | How well the hit landed, 0 to 1; drives depth, pull, radius and damage. Saved as -1 when not buried. |
| <Link id="m-fakepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fakepickup">{"FakePickup"}</Link>{" fakePickup"}</code> | Grab point that holds the tool in the ground and is pulled to unbury it. |
| <Link id="m-interactorpositions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/diggingimpactor-interactorpositions">{"DiggingImpactor.InteractorPositions"}</Link>{"> interactorPositions"}</code> | Start position and lever distance of each hand on the fake pickup. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger. |
| <Link id="m-pivot" /><code>{"private Vector3 pivot"}</code> | Ground hit point the tool levers around. |
| <Link id="m-pulloutdirection" /><code>{"private Vector3 pullOutDirection"}</code> | Local direction for pulling the tool straight out. |
| <Link id="m-receivedtool" /><code>{"private Action receivedTool"}</code> | Callback run when a tool is registered, used for `DelayedBury`. |
| <Link id="m-rotatingaxis" /><code>{"private Vector3 rotatingAxis"}</code> | Local axis used with the pull-out direction to work out the lever torque axis. |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/diggingimpactorsettings">{"DiggingImpactorSettings"}</Link>{" settings"}</code> | `DiggingImpactorSettings` with thresholds, curves, layers and effects. |
| <Link id="m-syncburied" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBuried"}</code> | Sync for the buried state. |
| <Link id="m-syncunburied" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncUnburied"}</code> | Sync for unburying, with a dig flag. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isburied" /><code>{"bool IsBuried { get; private set; }"}</code> | Whether the tool is stuck in the ground. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the buried and unburied syncs. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | Server: sets the damage multiplier source and, if saved as buried, re-buries and syncs it next frame. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the buried state to a joining player next frame. |

<details>
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the impact tool, through the crafting root if there is one, and hooks the fake pickup's grab events. |
| <Link id="m-bury" /><code>{"private void Bury()"}</code> | Marks it buried, attaches the fake pickup to hold the tool in place, and plays the embed effect on clients. |
| <Link id="m-checkpull-2" /><code>{"private IEnumerator CheckPull() (iterator)"}</code> | While grabbed, totals hand movement; enough torque unburies and digs, enough straight pull unburies without digging. |
| <Link id="m-delayedbury" /><code>{"private void DelayedBury()"}</code> | Applies a buried state that arrived before the tool was known, once the tool is registered. |
| <Link id="m-dig" /><code>{"private void Dig()"}</code> | Server: damages every digable in range by effectiveness and the material's damage multiplier, and wears the tool. |
| <Link id="m-endcheckpull" /><code>{"private void EndCheckPull("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops tracking a hand, and stops `CheckPull` when no hands are left. |
| <Link id="m-founddigables" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/global-i-l/idigable">{"IDigable"}</Link>{"> FoundDigables() (iterator)"}</code> | Finds `IDigable` components on rigidbodies in a sphere at the dig point, sized by efficiency. |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | On a hard enough ground hit (by the local holder, or the server if nobody holds it), buries the tool and syncs it. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the pull-out direction and torque axis. |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Empty; only collisions matter. |
| <Link id="m-onrootchanged" /><code>{"private void OnRootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Registers the new root's impact tool when the crafting root changes. |
| <Link id="m-registertool" /><code>{"private void RegisterTool("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" newTool)"}</code> | Sets the current tool and points the fake pickup at its pickup. |
| <Link id="m-startcheckpull" /><code>{"private void StartCheckPull("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the local player grabs the fake pickup, records the hand's start and starts `CheckPull`; unburies if it wasn't buried. |
| <Link id="m-syncburied-2" /><code>{"private void SyncBuried("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs efficiency, buried position, pivot and rotation, then buries the tool; the server relays it and notifies digables. |
| <Link id="m-syncunburied-2" /><code>{"private void SyncUnburied("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDigging)"}</code> | Syncs an unbury and whether it digs; the server relays it to others. |
| <Link id="m-unbury" /><code>{"private void Unbury(bool isDigging)"}</code> | Marks it not buried, plays the dig effect and digs on the server if digging, and detaches the fake pickup. |

</details>
