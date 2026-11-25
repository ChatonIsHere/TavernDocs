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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`INailable`](/game-api/types/alta-crafting/inailable)
- **Attributes** `SelectionBase`
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenericCraftingPiece()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |
| <Link id="m-centerposition" /><code>{"private Vector3 centerPosition"}</code> |
| <Link id="m-cracksmeshrenderer" /><code>{"private MeshRenderer cracksMeshRenderer"}</code> |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition"}</code> |
| <Link id="m-failurehealth" /><code>{"private float failureHealth"}</code> |
| <Link id="m-hascracks" /><code>{"private bool hasCracks"}</code> |
| <Link id="m-mainmeshrenderer" /><code>{"private MeshRenderer mainMeshRenderer"}</code> |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> |
| <Link id="m-popinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" popInteractable"}</code> |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> |
| <Link id="m-progressproperty" /><code>{"private MaterialPropertyBlock progressProperty"}</code> |
| <Link id="m-project" /><code>{"private "}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project"}</code> |
| <Link id="m-rangelevel" /><code>{"private int rangeLevel"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |

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
| <Link id="m-material" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> | Physical material of the item placed in it, or null. |
| <Link id="m-nails" /><code><Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] Nails { get; private set; }"}</code> | The piece's nails. |
| <Link id="m-resulthash" /><code>{"int ResultHash { get; }"}</code> | Result hash from the piece definition. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | World rotation of the piece. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptscomponent" /><code>{"bool AcceptsComponent("}<Link to="/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component)"}</code> | True if the piece is enabled, empty and the component is the right source item. |
| <Link id="m-applysavedata" /><code>{"void ApplySaveData("}<Link to="/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" saveData, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: restores the piece from a save. An unfinished filled piece comes back as a loose item instead. |
| <Link id="m-canremove" /><code>{"bool CanRemove()"}</code> | True if filled, and either unfinished or at a level the project allows removing. |
| <Link id="m-checkfailpop" /><code>{"void CheckFailPop()"}</code> | May pop a completed piece out at random, more likely the more it was damaged. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the piece, releases its nails and returns it to the pool. |
| <Link id="m-empty" /><code>{"void Empty()"}</code> | Removes the material, resetting the piece's progress. |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> | Completes every nail and the piece, without effects. |
| <Link id="m-getsavedata" /><code><Link to="/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" GetSaveData()"}</code> | Returns the piece's hash, completion, damage and material for saving. |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | Called when a nail finishes; completes the piece if all nails are done and tells the project. |
| <Link id="m-playdestroyeffect" /><code>{"void PlayDestroyEffect()"}</code> | Plays the effect for a piece breaking from bad hits. |
| <Link id="m-receivechiselhit" /><code>{"void ReceiveChiselHit(float damage)"}</code> | Server: pops the piece out if a chisel hit is strong enough and it can be removed. |
| <Link id="m-setanimate" /><code>{"void SetAnimate(bool isAnimating)"}</code> | Highlights an empty enabled piece, or turns the highlight off. |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | Opens or closes the piece. Closing a filled piece drops its item back out. |
| <Link id="m-setmaterial" /><code>{"void SetMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Fills the piece with a material, or empties it with null. On the server, filling starts the timer that pops it if nails aren't done. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, "}<Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition)"}</code> | Sets the piece up from its definition for a project: transform, meshes, nails. |
| <Link id="m-spawnrefuse" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnRefuse()"}</code> | Spawns the placed item back out as a loose item with its material. |
| <Link id="m-syncfailure" /><code>{"void SyncFailure("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads how damaged the piece is, which drives the crack visuals. |
| <Link id="m-syncfull" /><code>{"void SyncFull("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the piece state and every nail. |
| <Link id="m-syncgrab" /><code>{"void SyncGrab("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client to server: a player grabbed the filled piece, so the server pops it into their hand. |
| <Link id="m-syncstate" /><code>{"void SyncState("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | Writes or reads enabled, complete and filled state and the material. |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(int rangeLevel)"}</code> | Shows or hides the meshes for a distance level. |

<details>
<summary>17 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkiscomplete" /><code>{"private bool CheckIsComplete()"}</code> |
| <Link id="m-filterpop" /><code>{"private void FilterPop("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-getcompleteeffect" /><code>{"private void GetCompleteEffect()"}</code> |
| <Link id="m-grab" /><code>{"private void Grab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |
| <Link id="m-loadcompletepiece" /><code>{"private void LoadCompletePiece("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> |
| <Link id="m-pop" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> |
| <Link id="m-resetvalues" /><code>{"private void ResetValues()"}</code> |
| <Link id="m-spawnchunkedrefusewithmaterial" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnChunkedRefuseWithMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-spawnrefuseforinteractor" /><code>{"private void SpawnRefuseForInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-updatecracks" /><code>{"private void UpdateCracks(float cracksProgress)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingPiece`:

[`CraftingPieceChiselable.piece`](/game-api/types/alta-crafting/craftingpiecechiselable#m-piece), [`GenericCraftingPieceDefinition.GetNewPiece`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingProject.levelledPieces`](/game-api/types/alta-crafting/genericcraftingproject#m-levelledpieces), [`GenericCraftingProject.MappedPieces`](/game-api/types/alta-crafting/genericcraftingproject#m-mappedpieces), [`GenericCraftingStation.RequestSyncPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiece), [`GenericCraftingStation.RequestSyncPieceGrab`](/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiecegrab), [`GenericCraftingStation.TryAddPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-tryaddpiece), [`GenericCraftingStation.TrySetClosestPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`IProject.MappedPieces`](/game-api/types/alta-crafting/iproject#m-mappedpieces).
