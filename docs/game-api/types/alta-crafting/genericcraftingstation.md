---
title: "GenericCraftingStation"
description: "A crafting station driven by a recipe page in its dock: it shows ghost pieces you fill with the right materials and nail, then lets you pull out the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingStation

A **class** in `Root.Township`, `Alta.Crafting`.

A crafting station driven by a recipe page in its dock: it shows ghost pieces you fill with the right materials and nail, then lets you pull out the finished item. The server runs the project; clients send nail hits and piece grabs.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GenericCraftingStationData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenericCraftingStationData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenericCraftingStationData`](/game-api/types/alta-crafting/genericcraftingstationdata)
- **Nested types** [`ClientSideNailHitSync`](/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync), [`PickupColliders`](/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders)
- **Documented in** [Crafting](/game-api/game-systems/crafting#genericcraftingstation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingStation()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaxdistancetorenderprojectghostsquared" /><code>{"private float androidMaxDistanceToRenderProjectGhostSquared"}</code> |  |
| <Link id="m-androidmaxdistancetorenderprojectsquared" /><code>{"private float androidMaxDistanceToRenderProjectSquared"}</code> |  |
| <Link id="m-currentproject" /><code>{"private "}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" currentProject"}</code> |  |
| <Link id="m-fakeinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" fakeInteractable"}</code> |  |
| <Link id="m-fakeinteractablecollider" /><code>{"private BoxCollider fakeInteractableCollider"}</code> |  |
| <Link id="m-issyncingallowed" /><code>{"private bool isSyncingAllowed"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxdistancetorenderprojectghostsquared" /><code>{"private float maxDistanceToRenderProjectGhostSquared"}</code> |  |
| <Link id="m-maxdistancetorenderprojectsquared" /><code>{"private float maxDistanceToRenderProjectSquared"}</code> |  |
| <Link id="m-piecesparent" /><code>{"private Transform piecesParent"}</code> |  |
| <Link id="m-recipedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" recipeDock"}</code> |  |
| <Link id="m-syncclientnailhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync">{"GenericCraftingStation.ClientSideNailHitSync"}</Link>{"> syncClientNailHit"}</code> |  |
| <Link id="m-syncdestroyeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDestroyEffect"}</code> |  |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> |  |
| <Link id="m-syncnailhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{"> syncNailHit"}</code> |  |
| <Link id="m-syncpiece" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPiece"}</code> |  |
| <Link id="m-syncpiecegrab" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPieceGrab"}</code> |  |
| <Link id="m-syncproject" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncProject"}</code> |  |
| <Link id="m-syncprojectstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncProjectStatus"}</code> |  |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> |  |
| <Link id="m-trackedpickups" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders">{"GenericCraftingStation.PickupColliders"}</Link>{"> trackedPickups"}</code> |  |
| <Link id="m-trackpickups" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackPickups"}</code> |  |
| <Link id="m-updatedistancelod" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistanceLOD"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-updatingstations" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{", Vector3> updatingStations"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-piecesparent-2" /><code>{"Transform PiecesParent { get; }"}</code> | Parent transform of the project's pieces; the completed effect plays here. |
| <Link id="m-isempty" /><code>{"private bool IsEmpty { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changedpieces" /><code>{"void ChangedPieces()"}</code> | Server: resyncs the project status, or clears the project and returns materials if no page is docked and no piece is filled. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the station's synced messages and hooks the recipe dock filter and the finished-item grab. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks page dock and undock, and loads the recipe of a page already docked. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the full project state to a new player. |
| <Link id="m-requestclientnailhit" /><code>{"void RequestClientNailHit(int pieceHash, int nailIndex, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Client: sends a nail hit on a piece to the server. |
| <Link id="m-requestdestroyeffect" /><code>{"void RequestDestroyEffect(int pieceHash)"}</code> | Server: tells clients to play a piece's destroy effect. |
| <Link id="m-requestsyncnailhit" /><code>{"void RequestSyncNailHit("}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" nailArguments)"}</code> | Server: syncs a nail hit to clients. |
| <Link id="m-requestsyncpiece" /><code>{"void RequestSyncPiece("}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" piece)"}</code> | Server: syncs one piece's state to clients. |
| <Link id="m-requestsyncpiecegrab" /><code>{"void RequestSyncPieceGrab("}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" piece)"}</code> | Client: tells the server a piece was grabbed. |
| <Link id="m-setupprojectfromresult" /><code>{"void SetupProjectFromResult("}<Link to="/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> | Rebuilds a complete project from a finished item placed back on the station (keeping its materials) and destroys the item. |
| <Link id="m-triggerenter" /><code>{"void TriggerEnter(Collider other)"}</code> | Starts tracking a crafting component pickup that enters the station area. Already crafted pickups are ignored. |
| <Link id="m-triggerexit" /><code>{"void TriggerExit(Collider other)"}</code> | Stops tracking a pickup once all its colliders have left. |
| <Link id="m-tryaddpiece" /><code>{"void TryAddPiece(int bestPieceKey, Action<"}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> callback)"}</code> | Calls back with the piece for a key if it isn't filled yet. Logs an error for an unknown key. |
| <Link id="m-trysetclosestpiece" /><code>{"int TrySetClosestPiece("}<Link to="/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component, Vector3 position, Action<"}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> callback)"}</code> | Finds the nearest piece that accepts a component within animate range and calls back with it. Returns its key or -1. |
| <Link id="m-updateprojectcomplete" /><code>{"void UpdateProjectComplete(bool hasEffects = false)"}</code> | Syncs whether the project is complete and turns the grab area for the finished item on or off. |
| <Link id="m-additemonreleasecoroutine" /><code>{"private IEnumerator AddItemOnReleaseCoroutine("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> |  |
| <Link id="m-checkfakeinteractable" /><code>{"private void CheckFakeInteractable(bool hasEffects)"}</code> |  |
| <Link id="m-checkpageforrecipe" /><code>{"private bool CheckPageForRecipe("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pagePickup, out "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> |  |
| <Link id="m-cleandestroy" /><code>{"private void CleanDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-clearlod" /><code>{"private void ClearLOD()"}</code> |  |
| <Link id="m-clearproject" /><code>{"private void ClearProject(bool isReturningMaterials)"}</code> |  |
| <Link id="m-cleartracked" /><code>{"private void ClearTracked()"}</code> |  |
| <Link id="m-componentreleased" /><code>{"private void ComponentReleased("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-dockingfilter" /><code>{"private void DockingFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-grabresult" /><code>{"private void GrabResult("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-grabresultfilter" /><code>{"private void GrabResultFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-ispickupvalidtoadd" /><code>{"private bool IsPickupValidToAdd("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-loadrecipe" /><code>{"private void LoadRecipe("}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onpagedocked" /><code>{"private void OnPageDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-onpageundocked" /><code>{"private void OnPageUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-pagefilter" /><code>{"private void PageFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-setupfakeinteractable" /><code>{"private void SetupFakeInteractable()"}</code> |  |
| <Link id="m-setuplod" /><code>{"private void SetupLOD()"}</code> |  |
| <Link id="m-setupprojectfrompage" /><code>{"private void SetupProjectFromPage()"}</code> |  |
| <Link id="m-spawnresult" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnResult()"}</code> |  |
| <Link id="m-stopanimating" /><code>{"private void StopAnimating()"}</code> |  |
| <Link id="m-syncclientnailhit-2" /><code>{"private void SyncClientNailHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync">{"GenericCraftingStation.ClientSideNailHitSync"}</Link>{" arguments)"}</code> |  |
| <Link id="m-syncdestroyeffect-2" /><code>{"private void SyncDestroyEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncnailhit-2" /><code>{"private void SyncNailHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" identifier)"}</code> |  |
| <Link id="m-syncpiece-2" /><code>{"private void SyncPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |  |
| <Link id="m-syncpiecegrab-2" /><code>{"private void SyncPieceGrab("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |  |
| <Link id="m-syncproject-2" /><code>{"private void SyncProject("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncprojectstatus-2" /><code>{"private void SyncProjectStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> |  |
| <Link id="m-trackpickups-2" /><code>{"private void TrackPickups()"}</code> |  |
| <Link id="m-updatedistancelod-2" /><code>{"private static void UpdateDistanceLOD()"}</code> |  |
| <Link id="m-updatedistancelodsingleghost" /><code>{"private static void UpdateDistanceLODSingleGhost()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingStation`:

[`GenericCraftingComponent.Released`](/game-api/types/alta-crafting/genericcraftingcomponent#m-released), [`GenericCraftingComponent.Track`](/game-api/types/alta-crafting/genericcraftingcomponent#m-track), [`GenericCraftingProject.GenericCraftingProject`](/game-api/types/alta-crafting/genericcraftingproject#m-ctor), [`GenericCraftingProject.Station`](/game-api/types/alta-crafting/genericcraftingproject#m-station), [`GenericCraftingRecipe.InitializeProject`](/game-api/types/alta-crafting/genericcraftingrecipe#m-initializeproject), [`GenericCraftingResult.Released`](/game-api/types/alta-crafting/genericcraftingresult#m-released), [`GenericCraftingResult.Track`](/game-api/types/alta-crafting/genericcraftingresult#m-track), [`IGenericCraftingComponent.Released`](/game-api/types/alta-crafting/igenericcraftingcomponent#m-released), [`IGenericCraftingComponent.Track`](/game-api/types/alta-crafting/igenericcraftingcomponent#m-track), [`IProject.Station`](/game-api/types/alta-crafting/iproject#m-station).
