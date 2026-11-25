---
title: "PositionRestrictor"
description: "Server component that keeps pickups near a spot, such as tutorial items or moulds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRestrictor

A **class** in `Root.Township`, `Alta.Pages`.

Server component that keeps pickups near a spot, such as tutorial items or moulds. Loose items outside the radius (or box) snap back or re-dock; held items outside it buzz, then snap back after a time.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PositionRestrictorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PositionRestrictorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BookRestrictor`](/game-api/types/alta-items/bookrestrictor), [`MouldRestrictor`](/game-api/types/alta-items/mouldrestrictor), [`PositionRestrictorSaveData`](/game-api/types/alta-items/positionrestrictorsavedata)
- **Nested types** [`SyncArgs`](/game-api/types/alta-items/positionrestrictor-syncargs)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionRestrictor()"}</code> |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-appeareffect" /><code>{"private ParticleSystem appearEffect"}</code> |
| <Link id="m-appearpooledeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" appearPooledEffect"}</code> |
| <Link id="m-autojumpbackboundsize" /><code>{"private Vector3 autoJumpBackBoundSize"}</code> |
| <Link id="m-autojumpbackradius" /><code>{"private float autoJumpBackRadius"}</code> |
| <Link id="m-boundsize" /><code>{"private Vector3 boundSize"}</code> |
| <Link id="m-disappeareffect" /><code>{"private ParticleSystem disappearEffect"}</code> |
| <Link id="m-docks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks"}</code> |
| <Link id="m-entitiestorestrict" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] entitiesToRestrict"}</code> |
| <Link id="m-groups" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> groups"}</code> |
| <Link id="m-hapticstarted" /><code>{"private Dictionary<uint, float> hapticStarted"}</code> |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> |
| <Link id="m-heldlimit" /><code>{"private float heldLimit"}</code> |
| <Link id="m-isrecursivelyaddingchildren" /><code>{"private bool isRecursivelyAddingChildren"}</code> |
| <Link id="m-isusingbounds" /><code>{"private bool isUsingBounds"}</code> |
| <Link id="m-isusingdocks" /><code>{"private bool isUsingDocks"}</code> |
| <Link id="m-isusinglastdock" /><code>{"private bool isUsingLastDock"}</code> |
| <Link id="m-lastdocks" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> lastDocks"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-resetlocation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> resetLocation"}</code> |
| <Link id="m-resetlocationsave" /><code>{"private TransformSave resetLocationSave"}</code> |
| <Link id="m-restrictspecificentities" /><code>{"private bool restrictSpecificEntities"}</code> |
| <Link id="m-sethaptic" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> setHaptic"}</code> |
| <Link id="m-spawnlocation" /><code>{"private Transform spawnLocation"}</code> |
| <Link id="m-syncitem" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> syncItem"}</code> |
| <Link id="m-syncitems" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncItems"}</code> |
| <Link id="m-tracking" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> tracking"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | How far a loose item may go from the spawn spot before it's returned. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientderegister" /><code>{"void ClientDeregister("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Client: undoes `ClientRegister`. |
| <Link id="m-clientderegister-2" /><code>{"void ClientDeregister("}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" dockGroup)"}</code> | Client: undoes `ClientRegister`. |
| <Link id="m-clientregister" /><code>{"void ClientRegister("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Client: limits where a tracked pickup may dock, or adds a dock group's docks to the allowed list. |
| <Link id="m-clientregister-2" /><code>{"void ClientRegister("}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" dockGroup)"}</code> | Client: limits where a tracked pickup may dock, or adds a dock group's docks to the allowed list. |
| <Link id="m-deregister-2" /><code>{"virtual void Deregister("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Server: stops tracking a pickup and makes it a normal saved entity again. |
| <Link id="m-forcereset" /><code>{"void ForceReset()"}</code> | Returns every tracked pickup straight away. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Remembers the reset spot and creates the syncs. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts tracking child entities (or a chosen list) and their docks, if docks are used. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the tracked items to a joining player. |
| <Link id="m-register-2" /><code>{"virtual void Register("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Server: starts tracking a pickup. It becomes a saved child of this entity and is checked each budgeted update. |
| <Link id="m-resetlocation-2" /><code>{"protected void ResetLocation("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Vector3 position, bool isPlayingEffect, bool isDocking)"}</code> | Drops a pickup and, on the server, docks it back or moves it to the reset spot, with effects. |

<details>
<summary>20 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptdock" /><code>{"private bool AttemptDock("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-checkbounds" /><code>{"private void CheckBounds()"}</code> |  |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-checkdistances" /><code>{"private void CheckDistances()"}</code> |  |
| <Link id="m-childadded" /><code>{"private void ChildAdded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-childremoved" /><code>{"private void ChildRemoved("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-deregister" /><code>{"private void Deregister("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" groupEntity, "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group)"}</code> | Server: stops tracking a pickup and makes it a normal saved entity again. |
| <Link id="m-disablehaptic" /><code>{"private void DisableHaptic("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-limitdocks" /><code>{"private void LimitDocks("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-pickupdestroyed" /><code>{"private void PickupDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-recorddock" /><code>{"private void RecordDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-register" /><code>{"private void Register("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" groupEntity, "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group)"}</code> | Server: starts tracking a pickup. It becomes a saved child of this entity and is checked each budgeted update. |
| <Link id="m-resetsync" /><code>{"private void ResetSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> |  |
| <Link id="m-sethaptic-2" /><code>{"private void SetHaptic("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> |  |
| <Link id="m-stophaptic" /><code>{"private void StopHaptic("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-syncitem-2" /><code>{"private void SyncItem("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> |  |
| <Link id="m-syncitems-2" /><code>{"private void SyncItems("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

</details>
