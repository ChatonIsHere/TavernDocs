---
title: "BuildupPickup"
description: "A pickup with child items attached in slots, which slash hits knock off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupPickup

A **class** in `Root.Township`, no namespace.

A pickup with child items attached in slots, which slash hits knock off. While it has children it can't be docked and some components are disabled. Server controlled and saved.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BuildupPickupSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BuildupPickupSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BuildupPickupEvent`](/game-api/types/global-a-b/builduppickupevent), [`BuildupPickupHandler`](/game-api/types/global-a-b/builduppickuphandler), [`BuildupPickupSaveData`](/game-api/types/global-a-b/builduppickupsavedata)
- **Nested types** [`DisposeData`](/game-api/types/global-a-b/builduppickup-disposedata)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuildupPickup()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buildupchildren" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildupchild">{"BuildupChild"}</Link>{"[] buildupChildren"}</code> |
| <Link id="m-childcount" /><code>{"private int childCount"}</code> |
| <Link id="m-disablewithchildren" /><code>{"private MonoBehaviour[] disableWithChildren"}</code> |
| <Link id="m-finished" /><code>{"private "}<Link to="/game-api/types/global-a-b/builduppickupevent">{"BuildupPickupEvent"}</Link>{" finished"}</code> |
| <Link id="m-grabpointwhileactive" /><code>{"private int grabPointWhileActive"}</code> |
| <Link id="m-haschildren" /><code>{"private bool hasChildren"}</code> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> |
| <Link id="m-maxchildren" /><code>{"private uint maxChildren"}</code> |
| <Link id="m-minchildren" /><code>{"private uint minChildren"}</code> |
| <Link id="m-probabilitycurve" /><code>{"private AnimationCurve probabilityCurve"}</code> |
| <Link id="m-serializedchildrenindex" /><code>{"private Dictionary<int, int> serializedChildrenIndex"}</code> |
| <Link id="m-syncchildren" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncChildren"}</code> |
| <Link id="m-syncenabled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEnabled"}</code> |
| <Link id="m-synclosechild" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-a-b/builduppickup-disposedata">{"BuildupPickup.DisposeData"}</Link>{"> syncLoseChild"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync messages for children, enabled state and losing a child. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: on first generation fills the child slots (all of them, whatever the min and max counts say) and destroys stray children. |
| <Link id="m-loserandomchild" /><code>{"void LoseRandomChild()"}</code> | Server: knocks off one random attached child, if any. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the attached children and enabled state. |

<details>
<summary>13 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cutchild" /><code>{"private void CutChild("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |
| <Link id="m-losechild" /><code>{"private void LoseChild(int index, bool isForced = false)"}</code> |
| <Link id="m-networklosechild" /><code>{"private void NetworkLoseChild("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-a-b/builduppickup-disposedata">{"BuildupPickup.DisposeData"}</Link>{" disposeData)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-registerchild" /><code>{"private void RegisterChild("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> |
| <Link id="m-setenable" /><code>{"private void SetEnable(bool enabled)"}</code> |
| <Link id="m-setupchild" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildupchild">{"BuildupChild"}</Link>{" SetupChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> |
| <Link id="m-setupchildcount" /><code>{"private bool SetupChildCount()"}</code> |
| <Link id="m-spawnchildren" /><code>{"private void SpawnChildren(int quantity)"}</code> |
| <Link id="m-syncchildren-2" /><code>{"private void SyncChildren("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncenabled-2" /><code>{"private void SyncEnabled("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-validatehit" /><code>{"private void ValidateHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit, ref bool isValid)"}</code> |

</details>
