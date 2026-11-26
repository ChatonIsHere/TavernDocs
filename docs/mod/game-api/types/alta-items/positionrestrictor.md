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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PositionRestrictorSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PositionRestrictorSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BookRestrictor`](/mod/game-api/types/alta-items/bookrestrictor), [`MouldRestrictor`](/mod/game-api/types/alta-items/mouldrestrictor), [`PositionRestrictorSaveData`](/mod/game-api/types/alta-items/positionrestrictorsavedata)
- **Nested types** [`SyncArgs`](/mod/game-api/types/alta-items/positionrestrictor-syncargs)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRestrictor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appeareffect" /><code>{"private ParticleSystem appearEffect"}</code> | <span className="api-desc">Child particle system played where a reset pickup reappears, when no pooled effect is set.</span> |
| <Link id="m-appearpooledeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" appearPooledEffect"}</code> | <span className="api-desc">Pooled effect played at both the old and new spot on reset. Takes priority over the particle systems.</span> |
| <Link id="m-autojumpbackboundsize" /><code>{"private Vector3 autoJumpBackBoundSize"}</code> | <span className="api-desc">Box size (in the spawn location's local space) past which a loose pickup gets the haptic warning, in bounds mode.</span> |
| <Link id="m-autojumpbackradius" /><code>{"private float autoJumpBackRadius"}</code> | <span className="api-desc">Radius past which even a loose pickup gets the haptic warning before reset, in radius mode.</span> |
| <Link id="m-boundsize" /><code>{"private Vector3 boundSize"}</code> | <span className="api-desc">Box size (in the spawn location's local space) outside which a loose pickup is reset, in bounds mode.</span> |
| <Link id="m-disappeareffect" /><code>{"private ParticleSystem disappearEffect"}</code> | <span className="api-desc">Child particle system played where a pickup was before it reset.</span> |
| <Link id="m-docks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks"}</code> | <span className="api-desc">All docks of the registered dock groups. Tracked pickups may only dock into these.</span> |
| <Link id="m-entitiestorestrict" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] entitiesToRestrict"}</code> | <span className="api-desc">Entities to register when `restrictSpecificEntities` is on, instead of all children.</span> |
| <Link id="m-groups" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> groups"}</code> | <span className="api-desc">Server: entities with a `PickupDockGroup` registered so far.</span> |
| <Link id="m-hapticstarted" /><code>{"private Dictionary<uint, float> hapticStarted"}</code> | <span className="api-desc">Server: when each pickup's haptic warning began, by entity id.</span> |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | <span className="api-desc">Strength of the haptic pulse added to a pickup that's out of range.</span> |
| <Link id="m-heldlimit" /><code>{"private float heldLimit"}</code> | <span className="api-desc">Seconds a pickup can stay out of range with the haptic warning before it resets.</span> |
| <Link id="m-isrecursivelyaddingchildren" /><code>{"private bool isRecursivelyAddingChildren"}</code> | <span className="api-desc">Whether children of children are registered too.</span> |
| <Link id="m-isusingbounds" /><code>{"private bool isUsingBounds"}</code> | <span className="api-desc">Uses boxes (`boundSize`) instead of radii to decide when to reset.</span> |
| <Link id="m-isusingdocks" /><code>{"private bool isUsingDocks"}</code> | <span className="api-desc">Whether child pickups and dock groups are registered at all, and resets try to dock pickups.</span> |
| <Link id="m-isusinglastdock" /><code>{"private bool isUsingLastDock"}</code> | <span className="api-desc">Whether a reset tries the pickup's last dock first.</span> |
| <Link id="m-lastdocks" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> lastDocks"}</code> | <span className="api-desc">Server: the dock each pickup last left, by entity id.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`: distance from the spawn location past which a loose pickup is reset. Saved.</span> |
| <Link id="m-resetlocation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> resetLocation"}</code> | <span className="api-desc">Network sync that sends a reset (pickup, whether it docked, old position) to clients.</span> |
| <Link id="m-resetlocationsave" /><code>{"private TransformSave resetLocationSave"}</code> | <span className="api-desc">Saved transform of `spawnLocation`, loaded onto pickups that reset without docking.</span> |
| <Link id="m-restrictspecificentities" /><code>{"private bool restrictSpecificEntities"}</code> | <span className="api-desc">Registers only `entitiesToRestrict` rather than every child.</span> |
| <Link id="m-sethaptic" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> setHaptic"}</code> | <span className="api-desc">Network sync that turns the haptic warning on or off for a pickup on clients.</span> |
| <Link id="m-spawnlocation" /><code>{"private Transform spawnLocation"}</code> | <span className="api-desc">Centre of the area and where undocked pickups are put back.</span> |
| <Link id="m-syncitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{"> syncItem"}</code> | <span className="api-desc">Network sync for one pickup or dock group being registered or deregistered.</span> |
| <Link id="m-syncitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncItems"}</code> | <span className="api-desc">Network sync that sends the full tracked list to a player on connect.</span> |
| <Link id="m-tracking" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> tracking"}</code> | <span className="api-desc">Server: the pickups being kept in the area.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The budgeted update method (`CheckBounds` or `CheckDistances`) while at least one pickup is tracked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">How far a loose item may go from the spawn spot before it's returned.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientderegister" /><code>{"void ClientDeregister("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Client: undoes `ClientRegister`.</span> |
| <Link id="m-clientderegister-2" /><code>{"void ClientDeregister("}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" dockGroup)"}</code> | <span className="api-desc">Client: undoes `ClientRegister`.</span> |
| <Link id="m-clientregister" /><code>{"void ClientRegister("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Client: limits where a tracked pickup may dock, or adds a dock group's docks to the allowed list.</span> |
| <Link id="m-clientregister-2" /><code>{"void ClientRegister("}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" dockGroup)"}</code> | <span className="api-desc">Client: limits where a tracked pickup may dock, or adds a dock group's docks to the allowed list.</span> |
| <Link id="m-deregister-2" /><code>{"virtual void Deregister("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Server: stops tracking a pickup and makes it a normal saved entity again.</span> |
| <Link id="m-forcereset" /><code>{"void ForceReset()"}</code> | <span className="api-desc">Returns every tracked pickup straight away.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Remembers the reset spot and creates the syncs.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts tracking child entities (or a chosen list) and their docks, if docks are used.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the tracked items to a joining player.</span> |
| <Link id="m-register-2" /><code>{"virtual void Register("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Server: starts tracking a pickup. It becomes a saved child of this entity and is checked each budgeted update.</span> |
| <Link id="m-resetlocation-2" /><code>{"protected void ResetLocation("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Vector3 position, bool isPlayingEffect, bool isDocking)"}</code> | <span className="api-desc">Drops a pickup and, on the server, docks it back or moves it to the reset spot, with effects.</span> |

<details className="api-private">
<summary>20 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptdock" /><code>{"private bool AttemptDock("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Server: tries to dock a reset pickup into its last recorded dock, then into any tracked dock. Returns false when docks are off.</span> |
| <Link id="m-checkbounds" /><code>{"private void CheckBounds()"}</code> | <span className="api-desc">Server update used when `isUsingBounds` is on: checks each tracked pickup against the box sizes and resets or warns it.</span> |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">When the entity is destroyed (not unloaded), deregisters every tracked pickup.</span> |
| <Link id="m-checkdistances" /><code>{"private void CheckDistances()"}</code> | <span className="api-desc">Server update used for the radius mode: resets loose pickups outside `radius`, and held ones after `heldLimit` seconds of haptic warning.</span> |
| <Link id="m-childadded" /><code>{"private void ChildAdded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Server: registers a new child's dock group and pickup and sets its save mode to child. Recurses when `isRecursivelyAddingChildren` is on.</span> |
| <Link id="m-childremoved" /><code>{"private void ChildRemoved("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Logs an error when a child with a `PickupDockGroup` is removed. Nothing else.</span> |
| <Link id="m-deregister" /><code>{"private void Deregister("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" groupEntity, "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group)"}</code> | <span className="api-desc">Server: stops tracking a pickup and makes it a normal saved entity again.</span> |
| <Link id="m-disablehaptic" /><code>{"private void DisableHaptic("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: on dock, stops the haptic warning for that pickup and tells clients.</span> |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Registers any pickup docked into one of the tracked docks.</span> |
| <Link id="m-limitdocks" /><code>{"private void LimitDocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Dock filter that blocks docking a tracked pickup into any dock outside this restrictor's dock groups.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the update method.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the reset area (red) and auto jump back area (green) as spheres or boxes.</span> |
| <Link id="m-pickupdestroyed" /><code>{"private void PickupDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Deregisters a tracked pickup when its entity is destroyed.</span> |
| <Link id="m-recorddock" /><code>{"private void RecordDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On undock, remembers the dock the pickup came from when `isUsingLastDock` is on, so a reset can put it back.</span> |
| <Link id="m-register" /><code>{"private void Register("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" groupEntity, "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group)"}</code> | <span className="api-desc">Server: starts tracking a pickup. It becomes a saved child of this entity and is checked each budgeted update.</span> |
| <Link id="m-resetsync" /><code>{"private void ResetSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> | <span className="api-desc">Network handler for the reset message. Clients run the reset (with effect) for the given pickup and position.</span> |
| <Link id="m-sethaptic-2" /><code>{"private void SetHaptic("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> | <span className="api-desc">Network handler that adds or removes a `HapticWhileHeld` on the pickup, using `hapticStrength`.</span> |
| <Link id="m-stophaptic" /><code>{"private void StopHaptic("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Client: removes the `HapticWhileHeld` component when the pickup docks.</span> |
| <Link id="m-syncitem-2" /><code>{"private void SyncItem("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/positionrestrictor-syncargs">{"PositionRestrictor.SyncArgs"}</Link>{" args)"}</code> | <span className="api-desc">Network handler for one registered or deregistered pickup or dock group. Clients add or remove the dock filter for it.</span> |
| <Link id="m-syncitems-2" /><code>{"private void SyncItems("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends every tracked dock group and pickup to a joining player so the client can register them.</span> |

</details>
