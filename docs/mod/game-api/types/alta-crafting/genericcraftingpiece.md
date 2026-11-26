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
| <Link id="m-ctor" /><code>{"GenericCraftingPiece()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for the cracks progress. |
| <Link id="m-centerposition" /><code>{"private Vector3 centerPosition"}</code> | Local centre of the piece mesh, behind `CenterPosition`. |
| <Link id="m-cracksmeshrenderer" /><code>{"private MeshRenderer cracksMeshRenderer"}</code> | Renderer for the cracks overlay shown as failure health drops. |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition"}</code> | The recipe's definition for this piece: mesh, nails, failure health, level and source item. |
| <Link id="m-failurehealth" /><code>{"private float failureHealth"}</code> | Health left before bad nail hits break the piece and fail the project. Saved. |
| <Link id="m-hascracks" /><code>{"private bool hasCracks"}</code> | Whether the cracks overlay should show. |
| <Link id="m-mainmeshrenderer" /><code>{"private MeshRenderer mainMeshRenderer"}</code> | Renderer for the piece. Shows ghost, highlight or the placed material. |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> | Collider for the piece, on only while it's filled. |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> | Mesh filters given the definition's mesh. |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> | Timeline entry for `PlayTimeEndingSound`. |
| <Link id="m-popinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" popInteractable"}</code> | Interactable players grab to pull a filled piece back out. |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> | Server: timeline entry for `Popout`, started when the piece is filled. |
| <Link id="m-progressproperty" /><code>{"private MaterialPropertyBlock progressProperty"}</code> | Material property block that sets the cracks progress. |
| <Link id="m-project" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project"}</code> | The project this piece belongs to. |
| <Link id="m-rangelevel" /><code>{"private int rangeLevel"}</code> | Distance LOD level from `UpdateDistance`: 0 is near. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform placed at the definition's position, rotation and scale. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; }"}</code> | World bounds of the piece's mesh. |
| <Link id="m-centerposition-2" /><code>{"Vector3 CenterPosition { get; }"}</code> | World centre of the piece's mesh. |
| <Link id="m-hash" /><code>{"int Hash { get; }"}</code> | Identifier of this piece in the recipe. |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; private set; }"}</code> | True once all its nails are done. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | True when the piece can be filled (its level is open). |
| <Link id="m-isfilled" /><code>{"bool IsFilled { get; private set; }"}</code> | True when an item has been placed in it. |
| <Link id="m-level" /><code>{"int Level { get; }"}</code> | The build level this piece belongs to. |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> | Physical material of the item placed in it, or null. |
| <Link id="m-nails" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] Nails { get; private set; }"}</code> | The piece's nails. |
| <Link id="m-resulthash" /><code>{"int ResultHash { get; }"}</code> | Result hash from the piece definition. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | World rotation of the piece. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptscomponent" /><code>{"bool AcceptsComponent("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component)"}</code> | True if the piece is enabled, empty and the component is the right source item. |
| <Link id="m-applysavedata" /><code>{"void ApplySaveData("}<Link to="/mod/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" saveData, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: restores the piece from a save. An unfinished filled piece comes back as a loose item instead. |
| <Link id="m-canremove" /><code>{"bool CanRemove()"}</code> | True if filled, and either unfinished or at a level the project allows removing. |
| <Link id="m-checkfailpop" /><code>{"void CheckFailPop()"}</code> | May pop a completed piece out at random, more likely the more it was damaged. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the piece, releases its nails and returns it to the pool. |
| <Link id="m-empty" /><code>{"void Empty()"}</code> | Removes the material, resetting the piece's progress. |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> | Completes every nail and the piece, without effects. |
| <Link id="m-getsavedata" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" GetSaveData()"}</code> | Returns the piece's hash, completion, damage and material for saving. |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | Called when a nail finishes; completes the piece if all nails are done and tells the project. |
| <Link id="m-playdestroyeffect" /><code>{"void PlayDestroyEffect()"}</code> | Plays the effect for a piece breaking from bad hits. |
| <Link id="m-receivechiselhit" /><code>{"void ReceiveChiselHit(float damage)"}</code> | Server: pops the piece out if a chisel hit is strong enough and it can be removed. |
| <Link id="m-setanimate" /><code>{"void SetAnimate(bool isAnimating)"}</code> | Highlights an empty enabled piece, or turns the highlight off. |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | Opens or closes the piece. Closing a filled piece drops its item back out. |
| <Link id="m-setmaterial" /><code>{"void SetMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Fills the piece with a material, or empties it with null. On the server, filling starts the timer that pops it if nails aren't done. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition)"}</code> | Sets the piece up from its definition for a project: transform, meshes, nails. |
| <Link id="m-spawnrefuse" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnRefuse()"}</code> | Spawns the placed item back out as a loose item with its material. |
| <Link id="m-syncfailure" /><code>{"void SyncFailure("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads how damaged the piece is, which drives the crack visuals. |
| <Link id="m-syncfull" /><code>{"void SyncFull("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the piece state and every nail. |
| <Link id="m-syncgrab" /><code>{"void SyncGrab("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client to server: a player grabbed the filled piece, so the server pops it into their hand. |
| <Link id="m-syncstate" /><code>{"void SyncState("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | Writes or reads enabled, complete and filled state and the material. |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(int rangeLevel)"}</code> | Shows or hides the meshes for a distance level. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates the shader property block on clients and hooks the pop interactable's filter and grab events. |
| <Link id="m-checkiscomplete" /><code>{"private bool CheckIsComplete()"}</code> | True when every nail on the piece is done. |
| <Link id="m-filterpop" /><code>{"private void FilterPop("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only lets a player pull the piece out when it's filled, no nail is done, its level can be removed and the project isn't complete. |
| <Link id="m-getcompleteeffect" /><code>{"private void GetCompleteEffect()"}</code> | Client: plays the piece-completed particle effect and event. |
| <Link id="m-grab" /><code>{"private void Grab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server pops the piece into the grabbing hand as a loose item; a client asks the server to do that. |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Explicit `INailable` method: whether a hit on a nail would push it past full progress. |
| <Link id="m-loadcompletepiece" /><code>{"private void LoadCompletePiece("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Server: restores a saved complete piece with its material and every nail finished. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor gizmo at the piece's centre. |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> | Plays the warning sound shortly before the nailing time runs out. |
| <Link id="m-pop" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> | Spawns the piece's material back as a loose item, empties the piece and re-checks the project level. |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> | Called when the nailing time runs out: if the piece isn't complete, it pops out as a loose item. |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> | Explicit `INailable` method: applies a hammer hit to a nail, damaging the piece's failure health and failing the project if it runs out. |
| <Link id="m-resetvalues" /><code>{"private void ResetValues()"}</code> | Clears completion, restores failure health, resets every nail and turns off the pop interactable. |
| <Link id="m-spawnchunkedrefusewithmaterial" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnChunkedRefuseWithMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Spawns the piece's source item in the given chunk at the piece, set up as refuse with that material. |
| <Link id="m-spawnrefuseforinteractor" /><code>{"private void SpawnRefuseForInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Pops the piece and puts the loose item straight into the interactor's hand. |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Explicit `INailable` method: forwards a client's nail hit to the station to send to the server. |
| <Link id="m-updatecracks" /><code>{"private void UpdateCracks(float cracksProgress)"}</code> | Client: shows the cracks overlay at the given progress, only at the nearest LOD. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingPiece`:

[`CraftingPieceChiselable.piece`](/mod/game-api/types/alta-crafting/craftingpiecechiselable#m-piece), [`GenericCraftingPieceDefinition.GetNewPiece`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingProject.levelledPieces`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-levelledpieces), [`GenericCraftingProject.MappedPieces`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-mappedpieces), [`GenericCraftingStation.RequestSyncPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiece), [`GenericCraftingStation.RequestSyncPieceGrab`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiecegrab), [`GenericCraftingStation.TryAddPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-tryaddpiece), [`GenericCraftingStation.TrySetClosestPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`IProject.MappedPieces`](/mod/game-api/types/alta-crafting/iproject#m-mappedpieces).
