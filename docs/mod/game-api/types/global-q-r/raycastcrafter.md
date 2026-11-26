---
title: "RaycastCrafter"
description: "Places a pickup onto a surface when it is let go: raycasts in a set direction and either sticks the pickup there or replaces it with another prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastCrafter

A **class** in `Root.Township`, the global namespace.

Places a pickup onto a surface when it is let go: raycasts in a set direction and either sticks the pickup there or replaces it with another prefab. The server does the placing and syncs it; used by things like wall hooks.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RaycastCrafterSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RaycastCrafterSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireStatusRaycastCrafter`](/mod/game-api/types/alta-stats-effects/firestatusraycastcrafter), [`RaycastCrafterSaveData`](/mod/game-api/types/global-q-r/raycastcraftersavedata)
- **Nested types** [`PlacedItem`](/mod/game-api/types/global-q-r/raycastcrafter-placeditem)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting#raycastcrafter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastCrafter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalrotation" /><code>{"private Quaternion additionalRotation"}</code> | Extra rotation applied after facing the surface normal. |
| <Link id="m-crafted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" crafted"}</code> | Event fired when the pickup is placed. When loading as placed it only fires on the server. |
| <Link id="m-currentcoroutine" /><code>{"private Coroutine currentCoroutine"}</code> | The running preview or placing coroutine. |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | Raycast direction. Defaults to down. |
| <Link id="m-distance" /><code>{"private float distance"}</code> | Raycast length. Defaults to 1. |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | Pooled effect shown at the surface while the pickup is held. |
| <Link id="m-entitypilesizetoconsidergriefing" /><code>{"private const int entityPileSizeToConsiderGriefing"}</code> | Number of overlapping entities (10) that counts as a griefing pile. |
| <Link id="m-foundentities" /><code>{"private static HashSet<uint> foundEntities"}</code> | Shared set of entity IDs counted during a griefing check. |
| <Link id="m-getdirection" /><code>{"private Func<Vector3> getDirection"}</code> | Either `WorldSpaceDirection` or `LocalSpaceDirection`, set from `isWorldSpace`. |
| <Link id="m-isbeingreplacedbyprefaboncrafted" /><code>{"private bool isBeingReplacedByPrefabOnCrafted"}</code> | If true, placing spawns `prefabToReplaceWith` and destroys this pickup instead of sticking it. |
| <Link id="m-isworldspace" /><code>{"private bool isWorldSpace"}</code> | If true, `direction` is in world space; otherwise it rotates with the object. |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Layers the raycast can hit. |
| <Link id="m-maximumnormal" /><code>{"private float maximumNormal"}</code> | Highest surface normal Y the pickup can be placed on. |
| <Link id="m-minimumnormal" /><code>{"private float minimumNormal"}</code> | Lowest surface normal Y the pickup can be placed on. Both default to 1, so flat ground only. |
| <Link id="m-overlap" /><code>{"private static Collider[] overlap"}</code> | Shared buffer for the griefing overlap check (20 colliders). |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object. |
| <Link id="m-pooled" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled"}</code> | Preview effect currently shown, if any. |
| <Link id="m-prefabtoreplacewith" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToReplaceWith"}</code> | Prefab spawned at the hit point when `isBeingReplacedByPrefabOnCrafted` is on. |
| <Link id="m-syncnotplaced" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncNotPlaced"}</code> | Method sync on `SyncA` for unplacing. |
| <Link id="m-syncplace" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{"> syncPlace"}</code> | Method sync on `SyncPlaced` for placing. |
| <Link id="m-usingpooled" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> usingPooled"}</code> | All preview effects taken from the pool and not yet released. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscrafted" /><code>{"bool IsCrafted { get; private set; }"}</code> | True while the pickup is placed on a surface. Saved; loading as placed fires `crafted` on the server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the pickup's grab and release events, picks world or local direction and creates the syncs. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the placed transform to a joining player if the pickup is placed. |
| <Link id="m-onspawn" /><code>{"protected virtual void OnSpawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Virtual hook called on the new entity after `ReplaceByPrefab` spawns it. Empty here. |

<details>
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidercountstowardsgriefinglimit" /><code>{"private static bool ColliderCountsTowardsGriefingLimit(Collider collider, HashSet<uint> foundEntitiyIdentifiers)"}</code> | True if the collider belongs to a network entity not already counted in the set. |
| <Link id="m-delaytoplace" /><code>{"private IEnumerator DelayToPlace() (iterator)"}</code> | One frame after release, raycasts and places or replaces the pickup; kicks the player if the spot is a griefing pile. |
| <Link id="m-finishpooled" /><code>{"private void FinishPooled()"}</code> | Stops the surface preview particles and releases them after two seconds. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the last hand lets go, places the pickup on the server (or locally if not replaced), else syncs not placed. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Shows the surface preview on clients, turns the pickup's physics sync back on and clears `IsCrafted`. |
| <Link id="m-isgriefingaction" /><code>{"private static bool IsGriefingAction(RaycastHit hit)"}</code> | True when 10 or more distinct entities overlap within 0.1 m of the hit point. |
| <Link id="m-killpooled" /><code>{"private IEnumerator KillPooled("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled) (iterator)"}</code> | Coroutine that releases a preview effect after two seconds. |
| <Link id="m-localspacedirection" /><code>{"private Vector3 LocalSpaceDirection()"}</code> | Returns `direction` rotated by the object's rotation. |
| <Link id="m-lookforsurface" /><code>{"private IEnumerator LookForSurface() (iterator)"}</code> | Client coroutine that moves a preview effect to the raycast hit every frame while held. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Releases all preview effects back to the pool. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the raycast line in the editor. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Reselects world or local direction when the setting changes in play mode. |
| <Link id="m-placeonsurface" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" PlaceOnSurface(RaycastHit hit)"}</code> | Drops the pickup, moves it to the hit point facing the surface normal and freezes it. Fires `crafted` on the server. |
| <Link id="m-raycast" /><code>{"private bool Raycast(out RaycastHit hit)"}</code> | Raycasts from the object along the direction and accepts the hit only if its normal's Y is between the min and max. |
| <Link id="m-replacebyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" ReplaceByPrefab(RaycastHit hit)"}</code> | Spawns `prefabToReplaceWith` at the hit point facing the surface normal, frozen. The old pickup is destroyed after. |
| <Link id="m-swapcoroutine" /><code>{"private void SwapCoroutine(IEnumerator to)"}</code> | Stops the running coroutine and starts a new one, if given. |
| <Link id="m-syncnotplaced-2" /><code>{"private void SyncNotPlaced("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync that marks the pickup as not placed and unfreezes it unless docked. |
| <Link id="m-syncplaced" /><code>{"private void SyncPlaced("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" placedItem)"}</code> | Method sync with the placed entity, position and rotation. Clients freeze it in place and fire `crafted`. |
| <Link id="m-trygetcolliderentity" /><code>{"private static bool TryGetColliderEntity(Collider overlappingCollider, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Gets the network entity on the collider's attached rigidbody, if any. |
| <Link id="m-willnotreachgriefinglimit" /><code>{"private static bool WillNotReachGriefingLimit(HashSet<uint> foundEntities, int overlapCount, int i)"}</code> | True if the colliders left can't bring the entity count up to 10. |
| <Link id="m-worldspacedirection" /><code>{"private Vector3 WorldSpaceDirection()"}</code> | Returns `direction` as is. |

</details>

## Used in

Members of other types that take, return or hold a `RaycastCrafter`:

[`WallHookFilter.crafter`](/mod/game-api/types/global-t-x/wallhookfilter#m-crafter).
