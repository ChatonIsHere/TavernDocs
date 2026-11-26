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
| <Link id="m-ctor" /><code>{"BuildupPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildupchildren" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildupchild">{"BuildupChild"}</Link>{"[] buildupChildren"}</code> | <span className="api-desc">The child slots.</span> |
| <Link id="m-childcount" /><code>{"private int childCount"}</code> | <span className="api-desc">Number of slots, kept in step with `buildupChildren`.</span> |
| <Link id="m-disablewithchildren" /><code>{"private MonoBehaviour[] disableWithChildren"}</code> | <span className="api-desc">Components turned off while children are attached.</span> |
| <Link id="m-finished" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/builduppickupevent">{"BuildupPickupEvent"}</Link>{" finished"}</code> | <span className="api-desc">Event fired on the server once the last child is gone.</span> |
| <Link id="m-grabpointwhileactive" /><code>{"private int grabPointWhileActive"}</code> | <span className="api-desc">Index of the only grab point usable while children are attached; -1 leaves grab points alone.</span> |
| <Link id="m-haschildren" /><code>{"private bool hasChildren"}</code> | <span className="api-desc">Whether buildup is active.</span> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">Detector whose slash hits knock children off.</span> |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> | <span className="api-desc">Set once all children are gone, so `finished` fires once.</span> |
| <Link id="m-maxchildren" /><code>{"private uint maxChildren"}</code> | <span className="api-desc">Upper bound for the rolled child count on first spawn.</span> |
| <Link id="m-minchildren" /><code>{"private uint minChildren"}</code> | <span className="api-desc">Lower bound for the rolled child count on first spawn.</span> |
| <Link id="m-probabilitycurve" /><code>{"private AnimationCurve probabilityCurve"}</code> | <span className="api-desc">Shapes the random roll between min and max children.</span> |
| <Link id="m-serializedchildrenindex" /><code>{"private Dictionary<int, int> serializedChildrenIndex"}</code> | <span className="api-desc">During load, maps saved child indexes to slots.</span> |
| <Link id="m-syncchildren" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncChildren"}</code> | <span className="api-desc">Network sync for the child list.</span> |
| <Link id="m-syncenabled" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEnabled"}</code> | <span className="api-desc">Network sync for the active state.</span> |
| <Link id="m-synclosechild" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-a-b/builduppickup-disposedata">{"BuildupPickup.DisposeData"}</Link>{"> syncLoseChild"}</code> | <span className="api-desc">Network sync for losing a child.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync messages for children, enabled state and losing a child.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: on first generation fills the child slots (all of them, whatever the min and max counts say) and destroys stray children.</span> |
| <Link id="m-loserandomchild" /><code>{"void LoseRandomChild()"}</code> | <span className="api-desc">Server: knocks off one random attached child, if any.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player the attached children and enabled state.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutchild" /><code>{"private void CutChild("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Server: on a slash hit (when not forwarded), knocks off the child closest to the hit point.</span> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Stops the pickup docking while any child is still attached.</span> |
| <Link id="m-losechild" /><code>{"private void LoseChild(int index, bool isForced = false)"}</code> | <span className="api-desc">Detaches the child in a slot, syncs it, and when none are left disables buildup and fires `finished`.</span> |
| <Link id="m-networklosechild" /><code>{"private void NetworkLoseChild("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-a-b/builduppickup-disposedata">{"BuildupPickup.DisposeData"}</Link>{" disposeData)"}</code> | <span className="api-desc">Message handler that sends or applies a child being lost.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-registerchild" /><code>{"private void RegisterChild("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | <span className="api-desc">Load callback: links a saved child entity back to its slot.</span> |
| <Link id="m-setenable" /><code>{"private void SetEnable(bool enabled)"}</code> | <span className="api-desc">Turns the buildup state on or off: toggles `disableWithChildren`, the dock filter, grab points and the slash handler, and syncs it.</span> |
| <Link id="m-setupchild" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildupchild">{"BuildupChild"}</Link>{" SetupChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> | <span className="api-desc">Registers an entity as the child of a slot and returns the slot.</span> |
| <Link id="m-setupchildcount" /><code>{"private bool SetupChildCount()"}</code> | <span className="api-desc">Editor: keeps `childCount` equal to the number of slots.</span> |
| <Link id="m-spawnchildren" /><code>{"private void SpawnChildren(int quantity)"}</code> | <span className="api-desc">Server: spawns a child in every slot, starting at a random one. The quantity only picks the start, so min and max don't limit the count.</span> |
| <Link id="m-syncchildren-2" /><code>{"private void SyncChildren("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends or reads which slots have a child and its entity id; clients wait for each to spawn and link it.</span> |
| <Link id="m-syncenabled-2" /><code>{"private void SyncEnabled("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends or reads whether buildup is active.</span> |
| <Link id="m-validatehit" /><code>{"private void ValidateHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit, ref bool isValid)"}</code> | <span className="api-desc">Marks a hit invalid while any child is attached. Not hooked up in this class.</span> |

</details>
