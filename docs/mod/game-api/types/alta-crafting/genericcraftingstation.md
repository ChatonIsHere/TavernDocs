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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GenericCraftingStationData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenericCraftingStationData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenericCraftingStationData`](/mod/game-api/types/alta-crafting/genericcraftingstationdata)
- **Nested types** [`ClientSideNailHitSync`](/mod/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync), [`PickupColliders`](/mod/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting#genericcraftingstation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingStation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaxdistancetorenderprojectghostsquared" /><code>{"private float androidMaxDistanceToRenderProjectGhostSquared"}</code> | <span className="api-desc">Android ghost render distance, squared. Nothing reads it.</span> |
| <Link id="m-androidmaxdistancetorenderprojectsquared" /><code>{"private float androidMaxDistanceToRenderProjectSquared"}</code> | <span className="api-desc">Android project render distance, squared. Nothing reads it.</span> |
| <Link id="m-currentproject" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" currentProject"}</code> | <span className="api-desc">The project being built, or null when the station is empty.</span> |
| <Link id="m-fakeinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" fakeInteractable"}</code> | <span className="api-desc">Interactable over the finished project that players grab to take the result.</span> |
| <Link id="m-fakeinteractablecollider" /><code>{"private BoxCollider fakeInteractableCollider"}</code> | <span className="api-desc">Box collider for `fakeInteractable`, sized to the project when complete.</span> |
| <Link id="m-issyncingallowed" /><code>{"private bool isSyncingAllowed"}</code> | <span className="api-desc">Turned off while `SetupProjectFromResult` rebuilds a project, so per-piece syncs aren't sent.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxdistancetorenderprojectghostsquared" /><code>{"private float maxDistanceToRenderProjectGhostSquared"}</code> | <span className="api-desc">Squared distance within which the project ghost renders, used by `UpdateDistanceLOD`.</span> |
| <Link id="m-maxdistancetorenderprojectsquared" /><code>{"private float maxDistanceToRenderProjectSquared"}</code> | <span className="api-desc">Squared distance within which the project renders, used by `UpdateDistanceLOD`.</span> |
| <Link id="m-piecesparent" /><code>{"private Transform piecesParent"}</code> | <span className="api-desc">Backing field for `PiecesParent`. The result spawns at its position.</span> |
| <Link id="m-recipedock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" recipeDock"}</code> | <span className="api-desc">Dock that holds the recipe page.</span> |
| <Link id="m-syncclientnailhit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync">{"GenericCraftingStation.ClientSideNailHitSync"}</Link>{"> syncClientNailHit"}</code> | <span className="api-desc">Method sync for `SyncClientNailHit`.</span> |
| <Link id="m-syncdestroyeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDestroyEffect"}</code> | <span className="api-desc">Method sync for `SyncDestroyEffect`.</span> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | <span className="api-desc">Method sync for `SyncFull`.</span> |
| <Link id="m-syncnailhit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{"> syncNailHit"}</code> | <span className="api-desc">Method sync for `SyncNailHit`.</span> |
| <Link id="m-syncpiece" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPiece"}</code> | <span className="api-desc">Method sync for `SyncPiece`.</span> |
| <Link id="m-syncpiecegrab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPieceGrab"}</code> | <span className="api-desc">Method sync for `SyncPieceGrab`.</span> |
| <Link id="m-syncproject" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncProject"}</code> | <span className="api-desc">Method sync for `SyncProject`.</span> |
| <Link id="m-syncprojectstatus" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncProjectStatus"}</code> | <span className="api-desc">Method sync for `SyncProjectStatus`.</span> |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> | <span className="api-desc">Static scratch list used by `TrackPickups`.</span> |
| <Link id="m-trackedpickups" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders">{"GenericCraftingStation.PickupColliders"}</Link>{"> trackedPickups"}</code> | <span className="api-desc">Crafting component pickups inside the station's trigger, by rigidbody, with the colliders seen.</span> |
| <Link id="m-trackpickups" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackPickups"}</code> | <span className="api-desc">Update registration for `TrackPickups`, live while any pickup is tracked.</span> |
| <Link id="m-updatedistancelod" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistanceLOD"}</code> | <span className="api-desc">Static update registration for the distance LOD method.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Static update module that runs `TrackPickups`.</span> |
| <Link id="m-updatingstations" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{", Vector3> updatingStations"}</code> | <span className="api-desc">Static map of stations with a project to their positions, for distance LOD.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-piecesparent-2" /><code>{"Transform PiecesParent { get; }"}</code> | <span className="api-desc">Parent transform of the project's pieces; the completed effect plays here.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isempty" /><code>{"private bool IsEmpty { get; }"}</code> | <span className="api-desc">True when there's no current project.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changedpieces" /><code>{"void ChangedPieces()"}</code> | <span className="api-desc">Server: resyncs the project status, or clears the project and returns materials if no page is docked and no piece is filled.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the station's synced messages and hooks the recipe dock filter and the finished-item grab.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks page dock and undock, and loads the recipe of a page already docked.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the full project state to a new player.</span> |
| <Link id="m-requestclientnailhit" /><code>{"void RequestClientNailHit(int pieceHash, int nailIndex, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">Client: sends a nail hit on a piece to the server.</span> |
| <Link id="m-requestdestroyeffect" /><code>{"void RequestDestroyEffect(int pieceHash)"}</code> | <span className="api-desc">Server: tells clients to play a piece's destroy effect.</span> |
| <Link id="m-requestsyncnailhit" /><code>{"void RequestSyncNailHit("}<Link to="/mod/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" nailArguments)"}</code> | <span className="api-desc">Server: syncs a nail hit to clients.</span> |
| <Link id="m-requestsyncpiece" /><code>{"void RequestSyncPiece("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" piece)"}</code> | <span className="api-desc">Server: syncs one piece's state to clients.</span> |
| <Link id="m-requestsyncpiecegrab" /><code>{"void RequestSyncPieceGrab("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" piece)"}</code> | <span className="api-desc">Client: tells the server a piece was grabbed.</span> |
| <Link id="m-setupprojectfromresult" /><code>{"void SetupProjectFromResult("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> | <span className="api-desc">Rebuilds a complete project from a finished item placed back on the station (keeping its materials) and destroys the item.</span> |
| <Link id="m-triggerenter" /><code>{"void TriggerEnter(Collider other)"}</code> | <span className="api-desc">Starts tracking a crafting component pickup that enters the station area. Already crafted pickups are ignored.</span> |
| <Link id="m-triggerexit" /><code>{"void TriggerExit(Collider other)"}</code> | <span className="api-desc">Stops tracking a pickup once all its colliders have left.</span> |
| <Link id="m-tryaddpiece" /><code>{"void TryAddPiece(int bestPieceKey, Action<"}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> callback)"}</code> | <span className="api-desc">Calls back with the piece for a key if it isn't filled yet. Logs an error for an unknown key.</span> |
| <Link id="m-trysetclosestpiece" /><code>{"int TrySetClosestPiece("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component, Vector3 position, Action<"}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> callback)"}</code> | <span className="api-desc">Finds the nearest piece that accepts a component within animate range and calls back with it. Returns its key or -1.</span> |
| <Link id="m-updateprojectcomplete" /><code>{"void UpdateProjectComplete(bool hasEffects = false)"}</code> | <span className="api-desc">Syncs whether the project is complete and turns the grab area for the finished item on or off.</span> |

<details className="api-private">
<summary>33 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additemonreleasecoroutine" /><code>{"private IEnumerator AddItemOnReleaseCoroutine("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | <span className="api-desc">Waits to the end of the frame after a component is let go, then adds it to the project if it's still valid.</span> |
| <Link id="m-checkfakeinteractable" /><code>{"private void CheckFakeInteractable(bool hasEffects)"}</code> | <span className="api-desc">Client: turns on the grab-result collider when the project is complete, with the completion effect if asked.</span> |
| <Link id="m-checkpageforrecipe" /><code>{"private bool CheckPageForRecipe("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pagePickup, out "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | <span className="api-desc">Gets the generic crafting recipe from a page pickup, if it has one.</span> |
| <Link id="m-cleandestroy" /><code>{"private void CleanDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Clears the project without returning materials when the scene destroys the station.</span> |
| <Link id="m-clearlod" /><code>{"private void ClearLOD()"}</code> | <span className="api-desc">Removes the station from the distance LOD list.</span> |
| <Link id="m-clearproject" /><code>{"private void ClearProject(bool isReturningMaterials)"}</code> | <span className="api-desc">Clears the current project, optionally returning materials, and the server syncs the empty project.</span> |
| <Link id="m-cleartracked" /><code>{"private void ClearTracked()"}</code> | <span className="api-desc">Unhooks and forgets every tracked pickup. Called on destroy.</span> |
| <Link id="m-componentreleased" /><code>{"private void ComponentReleased("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: when a tracked pickup is let go, starts `AddItemOnReleaseCoroutine` for it.</span> |
| <Link id="m-dockingfilter" /><code>{"private void DockingFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Client: refuses docking for pickups inside the station's trigger.</span> |
| <Link id="m-grabresult" /><code>{"private void GrabResult("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: when the finished project is grabbed, spawns the result and swaps it into the hand.</span> |
| <Link id="m-grabresultfilter" /><code>{"private void GrabResultFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks grabbing the result until the project is complete.</span> |
| <Link id="m-ispickupvalidtoadd" /><code>{"private bool IsPickupValidToAdd("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">False for pickups that are held, docked or already crafted.</span> |
| <Link id="m-loadrecipe" /><code>{"private void LoadRecipe("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | <span className="api-desc">Starts a project from a recipe and syncs it to chunks.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Calls `ClearTracked`.</span> |
| <Link id="m-onpagedocked" /><code>{"private void OnPageDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: starts a project from the docked page unless pieces are already filled.</span> |
| <Link id="m-onpageundocked" /><code>{"private void OnPageUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: clears an unfinished project, returning materials, when the page is removed and no pieces are filled.</span> |
| <Link id="m-pagefilter" /><code>{"private void PageFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Only lets pages that hold a generic crafting recipe dock in `recipeDock`.</span> |
| <Link id="m-setupfakeinteractable" /><code>{"private void SetupFakeInteractable()"}</code> | <span className="api-desc">Fits the grab-result collider around the bounds of all project pieces.</span> |
| <Link id="m-setuplod" /><code>{"private void SetupLOD()"}</code> | <span className="api-desc">Client: adds the station to the distance LOD list.</span> |
| <Link id="m-setupprojectfrompage" /><code>{"private void SetupProjectFromPage()"}</code> | <span className="api-desc">Starts a project from the page in `recipeDock`, if it holds a recipe.</span> |
| <Link id="m-spawnresult" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnResult()"}</code> | <span className="api-desc">Spawns the recipe's result, clears the project and starts a new one from the docked page.</span> |
| <Link id="m-stopanimating" /><code>{"private void StopAnimating()"}</code> | <span className="api-desc">Stops the placement animation on every project piece.</span> |
| <Link id="m-syncclientnailhit-2" /><code>{"private void SyncClientNailHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync">{"GenericCraftingStation.ClientSideNailHitSync"}</Link>{" arguments)"}</code> | <span className="api-desc">Server: applies a nail hit reported by a client, working out damage from the tool.</span> |
| <Link id="m-syncdestroyeffect-2" /><code>{"private void SyncDestroyEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Hands a piece's destroy effect sync to the project.</span> |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the whole station: recipe, every piece and the project status. Sent on connect.</span> |
| <Link id="m-syncnailhit-2" /><code>{"private void SyncNailHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" identifier)"}</code> | <span className="api-desc">Syncs a nail's state and the piece's failure, playing the nail effect on clients.</span> |
| <Link id="m-syncpiece-2" /><code>{"private void SyncPiece("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Hands one piece's sync to the project.</span> |
| <Link id="m-syncpiecegrab-2" /><code>{"private void SyncPieceGrab("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Syncs a piece being grabbed, sent by clients.</span> |
| <Link id="m-syncproject-2" /><code>{"private void SyncProject("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs which recipe is loaded; clients start or clear their project to match.</span> |
| <Link id="m-syncprojectstatus-2" /><code>{"private void SyncProjectStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | <span className="api-desc">Syncs whether the project is complete or its current level, and updates the grab-result collider on clients.</span> |
| <Link id="m-trackpickups-2" /><code>{"private void TrackPickups()"}</code> | <span className="api-desc">Per-frame while pickups are in the trigger: drops docked or destroyed ones and lets held components track the station.</span> |
| <Link id="m-updatedistancelod-2" /><code>{"private static void UpdateDistanceLOD()"}</code> | <span className="api-desc">Sets each project's render level by distance from the local player's head. Never registered; see `UpdateDistanceLODSingleGhost`.</span> |
| <Link id="m-updatedistancelodsingleghost" /><code>{"private static void UpdateDistanceLODSingleGhost()"}</code> | <span className="api-desc">Empty. This, not `UpdateDistanceLOD`, is what `SetupLOD` registers, so distance LOD does nothing.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingStation`:

<div className="api-used-in">

[`GenericCraftingComponent.Released`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-released), [`GenericCraftingComponent.Track`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-track), [`GenericCraftingProject.GenericCraftingProject`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-ctor), [`GenericCraftingProject.Station`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-station), [`GenericCraftingRecipe.InitializeProject`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-initializeproject), [`GenericCraftingResult.Released`](/mod/game-api/types/alta-crafting/genericcraftingresult#m-released), [`GenericCraftingResult.Track`](/mod/game-api/types/alta-crafting/genericcraftingresult#m-track), [`IGenericCraftingComponent.Released`](/mod/game-api/types/alta-crafting/igenericcraftingcomponent#m-released), [`IGenericCraftingComponent.Track`](/mod/game-api/types/alta-crafting/igenericcraftingcomponent#m-track), [`IProject.Station`](/mod/game-api/types/alta-crafting/iproject#m-station).

</div>
