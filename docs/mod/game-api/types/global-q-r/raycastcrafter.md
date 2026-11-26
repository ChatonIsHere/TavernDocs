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
| <Link id="m-ctor" /><code>{"RaycastCrafter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalrotation" /><code>{"private Quaternion additionalRotation"}</code> | <span className="api-desc">Extra rotation applied after facing the surface normal.</span> |
| <Link id="m-crafted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" crafted"}</code> | <span className="api-desc">Event fired when the pickup is placed. When loading as placed it only fires on the server.</span> |
| <Link id="m-currentcoroutine" /><code>{"private Coroutine currentCoroutine"}</code> | <span className="api-desc">The running preview or placing coroutine.</span> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | <span className="api-desc">Raycast direction. Defaults to down.</span> |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Raycast length. Defaults to 1.</span> |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | <span className="api-desc">Pooled effect shown at the surface while the pickup is held.</span> |
| <Link id="m-entitypilesizetoconsidergriefing" /><code>{"private const int entityPileSizeToConsiderGriefing"}</code> | <span className="api-desc">Number of overlapping entities (10) that counts as a griefing pile.</span> |
| <Link id="m-foundentities" /><code>{"private static HashSet<uint> foundEntities"}</code> | <span className="api-desc">Shared set of entity IDs counted during a griefing check.</span> |
| <Link id="m-getdirection" /><code>{"private Func<Vector3> getDirection"}</code> | <span className="api-desc">Either `WorldSpaceDirection` or `LocalSpaceDirection`, set from `isWorldSpace`.</span> |
| <Link id="m-isbeingreplacedbyprefaboncrafted" /><code>{"private bool isBeingReplacedByPrefabOnCrafted"}</code> | <span className="api-desc">If true, placing spawns `prefabToReplaceWith` and destroys this pickup instead of sticking it.</span> |
| <Link id="m-isworldspace" /><code>{"private bool isWorldSpace"}</code> | <span className="api-desc">If true, `direction` is in world space; otherwise it rotates with the object.</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Layers the raycast can hit.</span> |
| <Link id="m-maximumnormal" /><code>{"private float maximumNormal"}</code> | <span className="api-desc">Highest surface normal Y the pickup can be placed on.</span> |
| <Link id="m-minimumnormal" /><code>{"private float minimumNormal"}</code> | <span className="api-desc">Lowest surface normal Y the pickup can be placed on. Both default to 1, so flat ground only.</span> |
| <Link id="m-overlap" /><code>{"private static Collider[] overlap"}</code> | <span className="api-desc">Shared buffer for the griefing overlap check (20 colliders).</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on this object.</span> |
| <Link id="m-pooled" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled"}</code> | <span className="api-desc">Preview effect currently shown, if any.</span> |
| <Link id="m-prefabtoreplacewith" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToReplaceWith"}</code> | <span className="api-desc">Prefab spawned at the hit point when `isBeingReplacedByPrefabOnCrafted` is on.</span> |
| <Link id="m-syncnotplaced" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncNotPlaced"}</code> | <span className="api-desc">Method sync on `SyncA` for unplacing.</span> |
| <Link id="m-syncplace" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{"> syncPlace"}</code> | <span className="api-desc">Method sync on `SyncPlaced` for placing.</span> |
| <Link id="m-usingpooled" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> usingPooled"}</code> | <span className="api-desc">All preview effects taken from the pool and not yet released.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscrafted" /><code>{"bool IsCrafted { get; private set; }"}</code> | <span className="api-desc">True while the pickup is placed on a surface. Saved; loading as placed fires `crafted` on the server.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the pickup's grab and release events, picks world or local direction and creates the syncs.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the placed transform to a joining player if the pickup is placed.</span> |
| <Link id="m-onspawn" /><code>{"protected virtual void OnSpawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Virtual hook called on the new entity after `ReplaceByPrefab` spawns it. Empty here.</span> |

<details className="api-private">
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidercountstowardsgriefinglimit" /><code>{"private static bool ColliderCountsTowardsGriefingLimit(Collider collider, HashSet<uint> foundEntitiyIdentifiers)"}</code> | <span className="api-desc">True if the collider belongs to a network entity not already counted in the set.</span> |
| <Link id="m-delaytoplace" /><code>{"private IEnumerator DelayToPlace() (iterator)"}</code> | <span className="api-desc">One frame after release, raycasts and places or replaces the pickup; kicks the player if the spot is a griefing pile.</span> |
| <Link id="m-finishpooled" /><code>{"private void FinishPooled()"}</code> | <span className="api-desc">Stops the surface preview particles and releases them after two seconds.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the last hand lets go, places the pickup on the server (or locally if not replaced), else syncs not placed.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Shows the surface preview on clients, turns the pickup's physics sync back on and clears `IsCrafted`.</span> |
| <Link id="m-isgriefingaction" /><code>{"private static bool IsGriefingAction(RaycastHit hit)"}</code> | <span className="api-desc">True when 10 or more distinct entities overlap within 0.1 m of the hit point.</span> |
| <Link id="m-killpooled" /><code>{"private IEnumerator KillPooled("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled) (iterator)"}</code> | <span className="api-desc">Coroutine that releases a preview effect after two seconds.</span> |
| <Link id="m-localspacedirection" /><code>{"private Vector3 LocalSpaceDirection()"}</code> | <span className="api-desc">Returns `direction` rotated by the object's rotation.</span> |
| <Link id="m-lookforsurface" /><code>{"private IEnumerator LookForSurface() (iterator)"}</code> | <span className="api-desc">Client coroutine that moves a preview effect to the raycast hit every frame while held.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Releases all preview effects back to the pool.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the raycast line in the editor.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Reselects world or local direction when the setting changes in play mode.</span> |
| <Link id="m-placeonsurface" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" PlaceOnSurface(RaycastHit hit)"}</code> | <span className="api-desc">Drops the pickup, moves it to the hit point facing the surface normal and freezes it. Fires `crafted` on the server.</span> |
| <Link id="m-raycast" /><code>{"private bool Raycast(out RaycastHit hit)"}</code> | <span className="api-desc">Raycasts from the object along the direction and accepts the hit only if its normal's Y is between the min and max.</span> |
| <Link id="m-replacebyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" ReplaceByPrefab(RaycastHit hit)"}</code> | <span className="api-desc">Spawns `prefabToReplaceWith` at the hit point facing the surface normal, frozen. The old pickup is destroyed after.</span> |
| <Link id="m-swapcoroutine" /><code>{"private void SwapCoroutine(IEnumerator to)"}</code> | <span className="api-desc">Stops the running coroutine and starts a new one, if given.</span> |
| <Link id="m-syncnotplaced-2" /><code>{"private void SyncNotPlaced("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync that marks the pickup as not placed and unfreezes it unless docked.</span> |
| <Link id="m-syncplaced" /><code>{"private void SyncPlaced("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" placedItem)"}</code> | <span className="api-desc">Method sync with the placed entity, position and rotation. Clients freeze it in place and fire `crafted`.</span> |
| <Link id="m-trygetcolliderentity" /><code>{"private static bool TryGetColliderEntity(Collider overlappingCollider, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Gets the network entity on the collider's attached rigidbody, if any.</span> |
| <Link id="m-willnotreachgriefinglimit" /><code>{"private static bool WillNotReachGriefingLimit(HashSet<uint> foundEntities, int overlapCount, int i)"}</code> | <span className="api-desc">True if the colliders left can't bring the entity count up to 10.</span> |
| <Link id="m-worldspacedirection" /><code>{"private Vector3 WorldSpaceDirection()"}</code> | <span className="api-desc">Returns `direction` as is.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RaycastCrafter`:

<div className="api-used-in">

[`WallHookFilter.crafter`](/mod/game-api/types/global-t-x/wallhookfilter#m-crafter).

</div>
