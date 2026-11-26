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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenericCraftingStation()"}</code> |

## Fields

<details>
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaxdistancetorenderprojectghostsquared" /><code>{"private float androidMaxDistanceToRenderProjectGhostSquared"}</code> | Android ghost render distance, squared. Nothing reads it. |
| <Link id="m-androidmaxdistancetorenderprojectsquared" /><code>{"private float androidMaxDistanceToRenderProjectSquared"}</code> | Android project render distance, squared. Nothing reads it. |
| <Link id="m-currentproject" /><code>{"private "}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" currentProject"}</code> | The project being built, or null when the station is empty. |
| <Link id="m-fakeinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" fakeInteractable"}</code> | Interactable over the finished project that players grab to take the result. |
| <Link id="m-fakeinteractablecollider" /><code>{"private BoxCollider fakeInteractableCollider"}</code> | Box collider for `fakeInteractable`, sized to the project when complete. |
| <Link id="m-issyncingallowed" /><code>{"private bool isSyncingAllowed"}</code> | Turned off while `SetupProjectFromResult` rebuilds a project, so per-piece syncs aren't sent. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxdistancetorenderprojectghostsquared" /><code>{"private float maxDistanceToRenderProjectGhostSquared"}</code> | Squared distance within which the project ghost renders, used by `UpdateDistanceLOD`. |
| <Link id="m-maxdistancetorenderprojectsquared" /><code>{"private float maxDistanceToRenderProjectSquared"}</code> | Squared distance within which the project renders, used by `UpdateDistanceLOD`. |
| <Link id="m-piecesparent" /><code>{"private Transform piecesParent"}</code> | Backing field for `PiecesParent`. The result spawns at its position. |
| <Link id="m-recipedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" recipeDock"}</code> | Dock that holds the recipe page. |
| <Link id="m-syncclientnailhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync">{"GenericCraftingStation.ClientSideNailHitSync"}</Link>{"> syncClientNailHit"}</code> | Method sync for `SyncClientNailHit`. |
| <Link id="m-syncdestroyeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDestroyEffect"}</code> | Method sync for `SyncDestroyEffect`. |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | Method sync for `SyncFull`. |
| <Link id="m-syncnailhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{"> syncNailHit"}</code> | Method sync for `SyncNailHit`. |
| <Link id="m-syncpiece" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPiece"}</code> | Method sync for `SyncPiece`. |
| <Link id="m-syncpiecegrab" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPieceGrab"}</code> | Method sync for `SyncPieceGrab`. |
| <Link id="m-syncproject" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncProject"}</code> | Method sync for `SyncProject`. |
| <Link id="m-syncprojectstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncProjectStatus"}</code> | Method sync for `SyncProjectStatus`. |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> | Static scratch list used by `TrackPickups`. |
| <Link id="m-trackedpickups" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders">{"GenericCraftingStation.PickupColliders"}</Link>{"> trackedPickups"}</code> | Crafting component pickups inside the station's trigger, by rigidbody, with the colliders seen. |
| <Link id="m-trackpickups" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackPickups"}</code> | Update registration for `TrackPickups`, live while any pickup is tracked. |
| <Link id="m-updatedistancelod" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistanceLOD"}</code> | Static update registration for the distance LOD method. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Static update module that runs `TrackPickups`. |
| <Link id="m-updatingstations" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{", Vector3> updatingStations"}</code> | Static map of stations with a project to their positions, for distance LOD. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-piecesparent-2" /><code>{"Transform PiecesParent { get; }"}</code> | Parent transform of the project's pieces; the completed effect plays here. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isempty" /><code>{"private bool IsEmpty { get; }"}</code> | True when there's no current project. |

</details>

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

<details>
<summary>33 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additemonreleasecoroutine" /><code>{"private IEnumerator AddItemOnReleaseCoroutine("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | Waits to the end of the frame after a component is let go, then adds it to the project if it's still valid. |
| <Link id="m-checkfakeinteractable" /><code>{"private void CheckFakeInteractable(bool hasEffects)"}</code> | Client: turns on the grab-result collider when the project is complete, with the completion effect if asked. |
| <Link id="m-checkpageforrecipe" /><code>{"private bool CheckPageForRecipe("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pagePickup, out "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | Gets the generic crafting recipe from a page pickup, if it has one. |
| <Link id="m-cleandestroy" /><code>{"private void CleanDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Clears the project without returning materials when the scene destroys the station. |
| <Link id="m-clearlod" /><code>{"private void ClearLOD()"}</code> | Removes the station from the distance LOD list. |
| <Link id="m-clearproject" /><code>{"private void ClearProject(bool isReturningMaterials)"}</code> | Clears the current project, optionally returning materials, and the server syncs the empty project. |
| <Link id="m-cleartracked" /><code>{"private void ClearTracked()"}</code> | Unhooks and forgets every tracked pickup. Called on destroy. |
| <Link id="m-componentreleased" /><code>{"private void ComponentReleased("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: when a tracked pickup is let go, starts `AddItemOnReleaseCoroutine` for it. |
| <Link id="m-dockingfilter" /><code>{"private void DockingFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Client: refuses docking for pickups inside the station's trigger. |
| <Link id="m-grabresult" /><code>{"private void GrabResult("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: when the finished project is grabbed, spawns the result and swaps it into the hand. |
| <Link id="m-grabresultfilter" /><code>{"private void GrabResultFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks grabbing the result until the project is complete. |
| <Link id="m-ispickupvalidtoadd" /><code>{"private bool IsPickupValidToAdd("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | False for pickups that are held, docked or already crafted. |
| <Link id="m-loadrecipe" /><code>{"private void LoadRecipe("}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | Starts a project from a recipe and syncs it to chunks. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Calls `ClearTracked`. |
| <Link id="m-onpagedocked" /><code>{"private void OnPageDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: starts a project from the docked page unless pieces are already filled. |
| <Link id="m-onpageundocked" /><code>{"private void OnPageUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: clears an unfinished project, returning materials, when the page is removed and no pieces are filled. |
| <Link id="m-pagefilter" /><code>{"private void PageFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Only lets pages that hold a generic crafting recipe dock in `recipeDock`. |
| <Link id="m-setupfakeinteractable" /><code>{"private void SetupFakeInteractable()"}</code> | Fits the grab-result collider around the bounds of all project pieces. |
| <Link id="m-setuplod" /><code>{"private void SetupLOD()"}</code> | Client: adds the station to the distance LOD list. |
| <Link id="m-setupprojectfrompage" /><code>{"private void SetupProjectFromPage()"}</code> | Starts a project from the page in `recipeDock`, if it holds a recipe. |
| <Link id="m-spawnresult" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnResult()"}</code> | Spawns the recipe's result, clears the project and starts a new one from the docked page. |
| <Link id="m-stopanimating" /><code>{"private void StopAnimating()"}</code> | Stops the placement animation on every project piece. |
| <Link id="m-syncclientnailhit-2" /><code>{"private void SyncClientNailHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync">{"GenericCraftingStation.ClientSideNailHitSync"}</Link>{" arguments)"}</code> | Server: applies a nail hit reported by a client, working out damage from the tool. |
| <Link id="m-syncdestroyeffect-2" /><code>{"private void SyncDestroyEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Hands a piece's destroy effect sync to the project. |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the whole station: recipe, every piece and the project status. Sent on connect. |
| <Link id="m-syncnailhit-2" /><code>{"private void SyncNailHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" identifier)"}</code> | Syncs a nail's state and the piece's failure, playing the nail effect on clients. |
| <Link id="m-syncpiece-2" /><code>{"private void SyncPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Hands one piece's sync to the project. |
| <Link id="m-syncpiecegrab-2" /><code>{"private void SyncPieceGrab("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Syncs a piece being grabbed, sent by clients. |
| <Link id="m-syncproject-2" /><code>{"private void SyncProject("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs which recipe is loaded; clients start or clear their project to match. |
| <Link id="m-syncprojectstatus-2" /><code>{"private void SyncProjectStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | Syncs whether the project is complete or its current level, and updates the grab-result collider on clients. |
| <Link id="m-trackpickups-2" /><code>{"private void TrackPickups()"}</code> | Per-frame while pickups are in the trigger: drops docked or destroyed ones and lets held components track the station. |
| <Link id="m-updatedistancelod-2" /><code>{"private static void UpdateDistanceLOD()"}</code> | Sets each project's render level by distance from the local player's head. Never registered; see `UpdateDistanceLODSingleGhost`. |
| <Link id="m-updatedistancelodsingleghost" /><code>{"private static void UpdateDistanceLODSingleGhost()"}</code> | Empty. This, not `UpdateDistanceLOD`, is what `SetupLOD` registers, so distance LOD does nothing. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingStation`:

[`GenericCraftingComponent.Released`](/game-api/types/alta-crafting/genericcraftingcomponent#m-released), [`GenericCraftingComponent.Track`](/game-api/types/alta-crafting/genericcraftingcomponent#m-track), [`GenericCraftingProject.GenericCraftingProject`](/game-api/types/alta-crafting/genericcraftingproject#m-ctor), [`GenericCraftingProject.Station`](/game-api/types/alta-crafting/genericcraftingproject#m-station), [`GenericCraftingRecipe.InitializeProject`](/game-api/types/alta-crafting/genericcraftingrecipe#m-initializeproject), [`GenericCraftingResult.Released`](/game-api/types/alta-crafting/genericcraftingresult#m-released), [`GenericCraftingResult.Track`](/game-api/types/alta-crafting/genericcraftingresult#m-track), [`IGenericCraftingComponent.Released`](/game-api/types/alta-crafting/igenericcraftingcomponent#m-released), [`IGenericCraftingComponent.Track`](/game-api/types/alta-crafting/igenericcraftingcomponent#m-track), [`IProject.Station`](/game-api/types/alta-crafting/iproject#m-station).
