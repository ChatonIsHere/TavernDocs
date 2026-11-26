---
title: "GenericCraftingPiece"
description: "One ghost piece of a generic crafting station's project."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingPiece

A **class** in `Root.Township`, `Alta.Crafting`.

One ghost piece of a generic crafting station's project. Placing the right item fills it with that item's material; hammering its nails completes it before a timer pops it back out. A pooled object on both sides; the station syncs it.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject), [`INailable`](/mod/game-api/types/alta-crafting/inailable)
- **Attributes** `SelectionBase`
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingPiece()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the cracks progress.</span> |
| <Link id="m-centerposition" /><code>{"private Vector3 centerPosition"}</code> | <span className="api-desc">Local centre of the piece mesh, behind `CenterPosition`.</span> |
| <Link id="m-cracksmeshrenderer" /><code>{"private MeshRenderer cracksMeshRenderer"}</code> | <span className="api-desc">Renderer for the cracks overlay shown as failure health drops.</span> |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The recipe's definition for this piece: mesh, nails, failure health, level and source item.</span> |
| <Link id="m-failurehealth" /><code>{"private float failureHealth"}</code> | <span className="api-desc">Health left before bad nail hits break the piece and fail the project. Saved.</span> |
| <Link id="m-hascracks" /><code>{"private bool hasCracks"}</code> | <span className="api-desc">Whether the cracks overlay should show.</span> |
| <Link id="m-mainmeshrenderer" /><code>{"private MeshRenderer mainMeshRenderer"}</code> | <span className="api-desc">Renderer for the piece. Shows ghost, highlight or the placed material.</span> |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> | <span className="api-desc">Collider for the piece, on only while it's filled.</span> |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> | <span className="api-desc">Mesh filters given the definition's mesh.</span> |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> | <span className="api-desc">Timeline entry for `PlayTimeEndingSound`.</span> |
| <Link id="m-popinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" popInteractable"}</code> | <span className="api-desc">Interactable players grab to pull a filled piece back out.</span> |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> | <span className="api-desc">Server: timeline entry for `Popout`, started when the piece is filled.</span> |
| <Link id="m-progressproperty" /><code>{"private MaterialPropertyBlock progressProperty"}</code> | <span className="api-desc">Material property block that sets the cracks progress.</span> |
| <Link id="m-project" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project"}</code> | <span className="api-desc">The project this piece belongs to.</span> |
| <Link id="m-rangelevel" /><code>{"private int rangeLevel"}</code> | <span className="api-desc">Distance LOD level from `UpdateDistance`: 0 is near.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform placed at the definition's position, rotation and scale.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; }"}</code> | <span className="api-desc">World bounds of the piece's mesh.</span> |
| <Link id="m-centerposition-2" /><code>{"Vector3 CenterPosition { get; }"}</code> | <span className="api-desc">World centre of the piece's mesh.</span> |
| <Link id="m-hash" /><code>{"int Hash { get; }"}</code> | <span className="api-desc">Identifier of this piece in the recipe.</span> |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; private set; }"}</code> | <span className="api-desc">True once all its nails are done.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">True when the piece can be filled (its level is open).</span> |
| <Link id="m-isfilled" /><code>{"bool IsFilled { get; private set; }"}</code> | <span className="api-desc">True when an item has been placed in it.</span> |
| <Link id="m-level" /><code>{"int Level { get; }"}</code> | <span className="api-desc">The build level this piece belongs to.</span> |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> | <span className="api-desc">Physical material of the item placed in it, or null.</span> |
| <Link id="m-nails" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] Nails { get; private set; }"}</code> | <span className="api-desc">The piece's nails.</span> |
| <Link id="m-resulthash" /><code>{"int ResultHash { get; }"}</code> | <span className="api-desc">Result hash from the piece definition.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | <span className="api-desc">World rotation of the piece.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptscomponent" /><code>{"bool AcceptsComponent("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component)"}</code> | <span className="api-desc">True if the piece is enabled, empty and the component is the right source item.</span> |
| <Link id="m-applysavedata" /><code>{"void ApplySaveData("}<Link to="/mod/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" saveData, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: restores the piece from a save. An unfinished filled piece comes back as a loose item instead.</span> |
| <Link id="m-canremove" /><code>{"bool CanRemove()"}</code> | <span className="api-desc">True if filled, and either unfinished or at a level the project allows removing.</span> |
| <Link id="m-checkfailpop" /><code>{"void CheckFailPop()"}</code> | <span className="api-desc">May pop a completed piece out at random, more likely the more it was damaged.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the piece, releases its nails and returns it to the pool.</span> |
| <Link id="m-empty" /><code>{"void Empty()"}</code> | <span className="api-desc">Removes the material, resetting the piece's progress.</span> |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> | <span className="api-desc">Completes every nail and the piece, without effects.</span> |
| <Link id="m-getsavedata" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" GetSaveData()"}</code> | <span className="api-desc">Returns the piece's hash, completion, damage and material for saving.</span> |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | <span className="api-desc">Called when a nail finishes; completes the piece if all nails are done and tells the project.</span> |
| <Link id="m-playdestroyeffect" /><code>{"void PlayDestroyEffect()"}</code> | <span className="api-desc">Plays the effect for a piece breaking from bad hits.</span> |
| <Link id="m-receivechiselhit" /><code>{"void ReceiveChiselHit(float damage)"}</code> | <span className="api-desc">Server: pops the piece out if a chisel hit is strong enough and it can be removed.</span> |
| <Link id="m-setanimate" /><code>{"void SetAnimate(bool isAnimating)"}</code> | <span className="api-desc">Highlights an empty enabled piece, or turns the highlight off.</span> |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | <span className="api-desc">Opens or closes the piece. Closing a filled piece drops its item back out.</span> |
| <Link id="m-setmaterial" /><code>{"void SetMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Fills the piece with a material, or empties it with null. On the server, filling starts the timer that pops it if nails aren't done.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Sets the piece up from its definition for a project: transform, meshes, nails.</span> |
| <Link id="m-spawnrefuse" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnRefuse()"}</code> | <span className="api-desc">Spawns the placed item back out as a loose item with its material.</span> |
| <Link id="m-syncfailure" /><code>{"void SyncFailure("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads how damaged the piece is, which drives the crack visuals.</span> |
| <Link id="m-syncfull" /><code>{"void SyncFull("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the piece state and every nail.</span> |
| <Link id="m-syncgrab" /><code>{"void SyncGrab("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client to server: a player grabbed the filled piece, so the server pops it into their hand.</span> |
| <Link id="m-syncstate" /><code>{"void SyncState("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | <span className="api-desc">Writes or reads enabled, complete and filled state and the material.</span> |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(int rangeLevel)"}</code> | <span className="api-desc">Shows or hides the meshes for a distance level.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates the shader property block on clients and hooks the pop interactable's filter and grab events.</span> |
| <Link id="m-checkiscomplete" /><code>{"private bool CheckIsComplete()"}</code> | <span className="api-desc">True when every nail on the piece is done.</span> |
| <Link id="m-filterpop" /><code>{"private void FilterPop("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only lets a player pull the piece out when it's filled, no nail is done, its level can be removed and the project isn't complete.</span> |
| <Link id="m-getcompleteeffect" /><code>{"private void GetCompleteEffect()"}</code> | <span className="api-desc">Client: plays the piece-completed particle effect and event.</span> |
| <Link id="m-grab" /><code>{"private void Grab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server pops the piece into the grabbing hand as a loose item; a client asks the server to do that.</span> |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Explicit `INailable` method: whether a hit on a nail would push it past full progress.</span> |
| <Link id="m-loadcompletepiece" /><code>{"private void LoadCompletePiece("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Server: restores a saved complete piece with its material and every nail finished.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor gizmo at the piece's centre.</span> |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> | <span className="api-desc">Plays the warning sound shortly before the nailing time runs out.</span> |
| <Link id="m-pop" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> | <span className="api-desc">Spawns the piece's material back as a loose item, empties the piece and re-checks the project level.</span> |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> | <span className="api-desc">Called when the nailing time runs out: if the piece isn't complete, it pops out as a loose item.</span> |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> | <span className="api-desc">Explicit `INailable` method: applies a hammer hit to a nail, damaging the piece's failure health and failing the project if it runs out.</span> |
| <Link id="m-resetvalues" /><code>{"private void ResetValues()"}</code> | <span className="api-desc">Clears completion, restores failure health, resets every nail and turns off the pop interactable.</span> |
| <Link id="m-spawnchunkedrefusewithmaterial" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnChunkedRefuseWithMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns the piece's source item in the given chunk at the piece, set up as refuse with that material.</span> |
| <Link id="m-spawnrefuseforinteractor" /><code>{"private void SpawnRefuseForInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Pops the piece and puts the loose item straight into the interactor's hand.</span> |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Explicit `INailable` method: forwards a client's nail hit to the station to send to the server.</span> |
| <Link id="m-updatecracks" /><code>{"private void UpdateCracks(float cracksProgress)"}</code> | <span className="api-desc">Client: shows the cracks overlay at the given progress, only at the nearest LOD.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingPiece`:

<div className="api-used-in">

[`CraftingPieceChiselable.piece`](/mod/game-api/types/alta-crafting/craftingpiecechiselable#m-piece), [`GenericCraftingPieceDefinition.GetNewPiece`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingProject.levelledPieces`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-levelledpieces), [`GenericCraftingProject.MappedPieces`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-mappedpieces), [`GenericCraftingStation.RequestSyncPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiece), [`GenericCraftingStation.RequestSyncPieceGrab`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiecegrab), [`GenericCraftingStation.TryAddPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-tryaddpiece), [`GenericCraftingStation.TrySetClosestPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`IProject.MappedPieces`](/mod/game-api/types/alta-crafting/iproject#m-mappedpieces).

</div>
