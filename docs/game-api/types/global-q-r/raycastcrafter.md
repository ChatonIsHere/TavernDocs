---
title: "RaycastCrafter"
description: "On kit items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastCrafter

A **class** in `Root.Township`, no namespace.

On kit items.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RaycastCrafterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RaycastCrafterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireStatusRaycastCrafter`](/game-api/types/alta-stats-effects/firestatusraycastcrafter), [`RaycastCrafterSaveData`](/game-api/types/global-q-r/raycastcraftersavedata)
- **Nested types** [`PlacedItem`](/game-api/types/global-q-r/raycastcrafter-placeditem)
- **Documented in** [Crafting](/game-api/game-systems/crafting#raycastcrafter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastCrafter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-additionalrotation" /><code>{"private Quaternion additionalRotation"}</code> |  |
| <Link id="m-crafted" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" crafted"}</code> |  |
| <Link id="m-currentcoroutine" /><code>{"private Coroutine currentCoroutine"}</code> |  |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> |  |
| <Link id="m-distance" /><code>{"private float distance"}</code> |  |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> |  |
| <Link id="m-entitypilesizetoconsidergriefing" /><code>{"private const int entityPileSizeToConsiderGriefing"}</code> |  |
| <Link id="m-foundentities" /><code>{"private static HashSet<uint> foundEntities"}</code> |  |
| <Link id="m-getdirection" /><code>{"private Func<Vector3> getDirection"}</code> |  |
| <Link id="m-isbeingreplacedbyprefaboncrafted" /><code>{"private bool isBeingReplacedByPrefabOnCrafted"}</code> |  |
| <Link id="m-isworldspace" /><code>{"private bool isWorldSpace"}</code> |  |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |  |
| <Link id="m-maximumnormal" /><code>{"private float maximumNormal"}</code> |  |
| <Link id="m-minimumnormal" /><code>{"private float minimumNormal"}</code> |  |
| <Link id="m-overlap" /><code>{"private static Collider[] overlap"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-pooled" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled"}</code> |  |
| <Link id="m-prefabtoreplacewith" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToReplaceWith"}</code> |  |
| <Link id="m-syncnotplaced" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncNotPlaced"}</code> |  |
| <Link id="m-syncplace" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{"> syncPlace"}</code> |  |
| <Link id="m-usingpooled" /><code>{"private List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> usingPooled"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscrafted" /><code>{"bool IsCrafted { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-collidercountstowardsgriefinglimit" /><code>{"private static bool ColliderCountsTowardsGriefingLimit(Collider collider, HashSet<uint> foundEntitiyIdentifiers)"}</code> |  |
| <Link id="m-delaytoplace" /><code>{"private IEnumerator DelayToPlace() (iterator)"}</code> |  |
| <Link id="m-finishpooled" /><code>{"private void FinishPooled()"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-isgriefingaction" /><code>{"private static bool IsGriefingAction(RaycastHit hit)"}</code> |  |
| <Link id="m-killpooled" /><code>{"private IEnumerator KillPooled("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled) (iterator)"}</code> |  |
| <Link id="m-localspacedirection" /><code>{"private Vector3 LocalSpaceDirection()"}</code> |  |
| <Link id="m-lookforsurface" /><code>{"private IEnumerator LookForSurface() (iterator)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onspawn" /><code>{"protected virtual void OnSpawn("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-placeonsurface" /><code>{"private "}<Link to="/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" PlaceOnSurface(RaycastHit hit)"}</code> |  |
| <Link id="m-raycast" /><code>{"private bool Raycast(out RaycastHit hit)"}</code> |  |
| <Link id="m-replacebyprefab" /><code>{"private "}<Link to="/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" ReplaceByPrefab(RaycastHit hit)"}</code> |  |
| <Link id="m-swapcoroutine" /><code>{"private void SwapCoroutine(IEnumerator to)"}</code> |  |
| <Link id="m-syncnotplaced-2" /><code>{"private void SyncNotPlaced("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncplaced" /><code>{"private void SyncPlaced("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-q-r/raycastcrafter-placeditem">{"RaycastCrafter.PlacedItem"}</Link>{" placedItem)"}</code> |  |
| <Link id="m-trygetcolliderentity" /><code>{"private static bool TryGetColliderEntity(Collider overlappingCollider, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-willnotreachgriefinglimit" /><code>{"private static bool WillNotReachGriefingLimit(HashSet<uint> foundEntities, int overlapCount, int i)"}</code> |  |
| <Link id="m-worldspacedirection" /><code>{"private Vector3 WorldSpaceDirection()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RaycastCrafter`:

[`WallHookFilter.crafter`](/game-api/types/global-t-x/wallhookfilter#m-crafter).
