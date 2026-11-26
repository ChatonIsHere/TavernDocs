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

| Member | What it is |
| --- | --- |
| <Link id="m-appeareffect" /><code>{"private ParticleSystem appearEffect"}</code> | Child particle system played where a reset pickup reappears, when no pooled effect is set. |
| <Link id="m-appearpooledeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" appearPooledEffect"}</code> | Pooled effect played at both the old and new spot on reset. Takes priority over the particle systems. |
| <Link id="m-autojumpbackboundsize" /><code>{"private Vector3 autoJumpBackBoundSize"}</code> | Box size (in the spawn location's local space) past which a loose pickup gets the haptic warning, in bounds mode. |
| <Link id="m-autojumpbackradius" /><code>{"private float autoJumpBackRadius"}</code> | Radius past which even a loose pickup gets the haptic warning before reset, in radius mode. |
| <Link id="m-boundsize" /><code>{"private Vector3 boundSize"}</code> | Box size (in the spawn location's local space) outside which a loose pickup is reset, in bounds mode. |
| <Link id="m-disappeareffect" /><code>{"private ParticleSystem disappearEffect"}</code> | Child particle system played where a pickup was before it reset. |
| <Link id="m-docks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks"}</code> | All docks of the registered dock groups. Tracked pickups may only dock into these. |
| <Link id="m-entitiestorestrict" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] entitiesToRestrict"}</code> | Entities to register when `restrictSpecificEntities` is on, instead of all children. |
| <Link id="m-groups" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> groups"}</code> | Server: entities with a `PickupDockGroup` registered so far. |
| <Link id="m-hapticstarted" /><code>{"private Dictionary<uint, float> hapticStarted"}</code> | Server: when each pickup's haptic warning began, by entity id. |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | Strength of the haptic pulse added to a pickup that's out of range. |
| <Link id="m-heldlimit" /><code>{"private float heldLimit"}</code> | Seconds a pickup can stay out of range with the haptic warning before it resets. |
| <Link id="m-isrecursivelyaddingchildren" /><code>{"private bool isRecursivelyAddingChildren"}</code> | Whether children of children are registered too. |
| <Link id="m-isusingbounds" /><code>{"private bool isUsingBounds"}</code> | Uses boxes (`boundSize`) instead of radii to decide when to reset. |
| <Link id="m-isusingdocks" /><code>{"private bool isUsingDocks"}</code> | Whether child pickups and dock groups are registered at all, and resets try to dock pickups. |
| <Link id="m-isusinglastdock" /><code>{"private bool isUsingLastDock"}</code> | Whether a reset tries the pickup's last dock first. |
| <Link id="m-lastdocks" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> lastDocks"}</code> | Server: the dock each pickup last left, by entity id. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Backing field for `Radius`: distance from the spawn location past which a loose pickup is reset. Saved. |
| <Link id="m-resetlocation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> resetLocation"}</code> | Network sync that sends a reset (pickup, whether it docked, old position) to clients. |
| <Link id="m-resetlocationsave" /><code>{"private TransformSave resetLocationSave"}</code> | Saved transform of `spawnLocation`, loaded onto pickups that reset without docking. |
| <Link id="m-restrictspecificentities" /><code>{"private bool restrictSpecificEntities"}</code> | Registers only `entitiesToRestrict` rather than every child. |
| <Link id="m-sethaptic" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> setHaptic"}</code> | Network sync that turns the haptic warning on or off for a pickup on clients. |
| <Link id="m-spawnlocation" /><code>{"private Transform spawnLocation"}</code> | Centre of the area and where undocked pickups are put back. |
| <Link id="m-syncitem" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> syncItem"}</code> | Network sync for one pickup or dock group being registered or deregistered. |
| <Link id="m-syncitems" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncItems"}</code> | Network sync that sends the full tracked list to a player on connect. |
| <Link id="m-tracking" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> tracking"}</code> | Server: the pickups being kept in the area. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The budgeted update method (`CheckBounds` or `CheckDistances`) while at least one pickup is tracked. |

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
| <Link id="m-attemptdock" /><code>{"private bool AttemptDock("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Server: tries to dock a reset pickup into its last recorded dock, then into any tracked dock. Returns false when docks are off. |
| <Link id="m-checkbounds" /><code>{"private void CheckBounds()"}</code> | Server update used when `isUsingBounds` is on: checks each tracked pickup against the box sizes and resets or warns it. |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | When the entity is destroyed (not unloaded), deregisters every tracked pickup. |
| <Link id="m-checkdistances" /><code>{"private void CheckDistances()"}</code> | Server update used for the radius mode: resets loose pickups outside `radius`, and held ones after `heldLimit` seconds of haptic warning. |
| <Link id="m-childadded" /><code>{"private void ChildAdded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Server: registers a new child's dock group and pickup and sets its save mode to child. Recurses when `isRecursivelyAddingChildren` is on. |
| <Link id="m-childremoved" /><code>{"private void ChildRemoved("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Logs an error when a child with a `PickupDockGroup` is removed. Nothing else. |
| <Link id="m-deregister" /><code>{"private void Deregister("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" groupEntity, "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group)"}</code> | Server: stops tracking a pickup and makes it a normal saved entity again. |
| <Link id="m-disablehaptic" /><code>{"private void DisableHaptic("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: on dock, stops the haptic warning for that pickup and tells clients. |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Registers any pickup docked into one of the tracked docks. |
| <Link id="m-limitdocks" /><code>{"private void LimitDocks("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Dock filter that blocks docking a tracked pickup into any dock outside this restrictor's dock groups. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the update method. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the reset area (red) and auto jump back area (green) as spheres or boxes. |
| <Link id="m-pickupdestroyed" /><code>{"private void PickupDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Deregisters a tracked pickup when its entity is destroyed. |
| <Link id="m-recorddock" /><code>{"private void RecordDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On undock, remembers the dock the pickup came from when `isUsingLastDock` is on, so a reset can put it back. |
| <Link id="m-register" /><code>{"private void Register("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" groupEntity, "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group)"}</code> | Server: starts tracking a pickup. It becomes a saved child of this entity and is checked each budgeted update. |
| <Link id="m-resetsync" /><code>{"private void ResetSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> | Network handler for the reset message. Clients run the reset (with effect) for the given pickup and position. |
| <Link id="m-sethaptic-2" /><code>{"private void SetHaptic("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> | Network handler that adds or removes a `HapticWhileHeld` on the pickup, using `hapticStrength`. |
| <Link id="m-stophaptic" /><code>{"private void StopHaptic("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Client: removes the `HapticWhileHeld` component when the pickup docks. |
| <Link id="m-syncitem-2" /><code>{"private void SyncItem("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> | Network handler for one registered or deregistered pickup or dock group. Clients add or remove the dock filter for it. |
| <Link id="m-syncitems-2" /><code>{"private void SyncItems("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends every tracked dock group and pickup to a joining player so the client can register them. |

</details>
