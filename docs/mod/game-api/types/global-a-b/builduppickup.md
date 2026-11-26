---
title: "BuildupPickup"
description: "A pickup with child items attached in slots, which slash hits knock off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupPickup

A **class** in `Root.Township`, the global namespace.

A pickup with child items attached in slots, which slash hits knock off. While it has children it can't be docked and some components are disabled. Server controlled and saved.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BuildupPickupSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<BuildupPickupSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BuildupPickupEvent`](/mod/game-api/types/global-a-b/builduppickupevent), [`BuildupPickupHandler`](/mod/game-api/types/global-a-b/builduppickuphandler), [`BuildupPickupSaveData`](/mod/game-api/types/global-a-b/builduppickupsavedata)
- **Nested types** [`DisposeData`](/mod/game-api/types/global-a-b/builduppickup-disposedata)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildupPickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildupchildren" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildupchild">{"BuildupChild"}</Link>{"[] buildupChildren"}</code> | The child slots. |
| <Link id="m-childcount" /><code>{"private int childCount"}</code> | Number of slots, kept in step with `buildupChildren`. |
| <Link id="m-disablewithchildren" /><code>{"private MonoBehaviour[] disableWithChildren"}</code> | Components turned off while children are attached. |
| <Link id="m-finished" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/builduppickupevent">{"BuildupPickupEvent"}</Link>{" finished"}</code> | Event fired on the server once the last child is gone. |
| <Link id="m-grabpointwhileactive" /><code>{"private int grabPointWhileActive"}</code> | Index of the only grab point usable while children are attached; -1 leaves grab points alone. |
| <Link id="m-haschildren" /><code>{"private bool hasChildren"}</code> | Whether buildup is active. |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | Detector whose slash hits knock children off. |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> | Set once all children are gone, so `finished` fires once. |
| <Link id="m-maxchildren" /><code>{"private uint maxChildren"}</code> | Upper bound for the rolled child count on first spawn. |
| <Link id="m-minchildren" /><code>{"private uint minChildren"}</code> | Lower bound for the rolled child count on first spawn. |
| <Link id="m-probabilitycurve" /><code>{"private AnimationCurve probabilityCurve"}</code> | Shapes the random roll between min and max children. |
| <Link id="m-serializedchildrenindex" /><code>{"private Dictionary<int, int> serializedChildrenIndex"}</code> | During load, maps saved child indexes to slots. |
| <Link id="m-syncchildren" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncChildren"}</code> | Network sync for the child list. |
| <Link id="m-syncenabled" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEnabled"}</code> | Network sync for the active state. |
| <Link id="m-synclosechild" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-a-b/builduppickup-disposedata">{"BuildupPickup.DisposeData"}</Link>{"> syncLoseChild"}</code> | Network sync for losing a child. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync messages for children, enabled state and losing a child. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: on first generation fills the child slots (all of them, whatever the min and max counts say) and destroys stray children. |
| <Link id="m-loserandomchild" /><code>{"void LoseRandomChild()"}</code> | Server: knocks off one random attached child, if any. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the attached children and enabled state. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutchild" /><code>{"private void CutChild("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Server: on a slash hit (when not forwarded), knocks off the child closest to the hit point. |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Stops the pickup docking while any child is still attached. |
| <Link id="m-losechild" /><code>{"private void LoseChild(int index, bool isForced = false)"}</code> | Detaches the child in a slot, syncs it, and when none are left disables buildup and fires `finished`. |
| <Link id="m-networklosechild" /><code>{"private void NetworkLoseChild("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-a-b/builduppickup-disposedata">{"BuildupPickup.DisposeData"}</Link>{" disposeData)"}</code> | Message handler that sends or applies a child being lost. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-registerchild" /><code>{"private void RegisterChild("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | Load callback: links a saved child entity back to its slot. |
| <Link id="m-setenable" /><code>{"private void SetEnable(bool enabled)"}</code> | Turns the buildup state on or off: toggles `disableWithChildren`, the dock filter, grab points and the slash handler, and syncs it. |
| <Link id="m-setupchild" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildupchild">{"BuildupChild"}</Link>{" SetupChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> | Registers an entity as the child of a slot and returns the slot. |
| <Link id="m-setupchildcount" /><code>{"private bool SetupChildCount()"}</code> | Editor: keeps `childCount` equal to the number of slots. |
| <Link id="m-spawnchildren" /><code>{"private void SpawnChildren(int quantity)"}</code> | Server: spawns a child in every slot, starting at a random one. The quantity only picks the start, so min and max don't limit the count. |
| <Link id="m-syncchildren-2" /><code>{"private void SyncChildren("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends or reads which slots have a child and its entity id; clients wait for each to spawn and link it. |
| <Link id="m-syncenabled-2" /><code>{"private void SyncEnabled("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends or reads whether buildup is active. |
| <Link id="m-validatehit" /><code>{"private void ValidateHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit, ref bool isValid)"}</code> | Marks a hit invalid while any child is attached. Not hooked up in this class. |

</details>
