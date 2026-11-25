---
title: "GenericCraftingPiece"
description: "class GenericCraftingPiece in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingPiece

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`INailable`](/game-api/types/alta-crafting/inailable)
- **Attributes** `SelectionBase`
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingPiece()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-centerposition" /><code>{"private Vector3 centerPosition"}</code> |  |
| <Link id="m-cracksmeshrenderer" /><code>{"private MeshRenderer cracksMeshRenderer"}</code> |  |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition"}</code> |  |
| <Link id="m-failurehealth" /><code>{"private float failureHealth"}</code> |  |
| <Link id="m-hascracks" /><code>{"private bool hasCracks"}</code> |  |
| <Link id="m-mainmeshrenderer" /><code>{"private MeshRenderer mainMeshRenderer"}</code> |  |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> |  |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> |  |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> |  |
| <Link id="m-popinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" popInteractable"}</code> |  |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> |  |
| <Link id="m-progressproperty" /><code>{"private MaterialPropertyBlock progressProperty"}</code> |  |
| <Link id="m-project" /><code>{"private "}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project"}</code> |  |
| <Link id="m-rangelevel" /><code>{"private int rangeLevel"}</code> |  |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; }"}</code> |  |
| <Link id="m-centerposition-2" /><code>{"Vector3 CenterPosition { get; }"}</code> |  |
| <Link id="m-hash" /><code>{"int Hash { get; }"}</code> |  |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; private set; }"}</code> |  |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> |  |
| <Link id="m-isfilled" /><code>{"bool IsFilled { get; private set; }"}</code> |  |
| <Link id="m-level" /><code>{"int Level { get; }"}</code> |  |
| <Link id="m-material" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> |  |
| <Link id="m-nails" /><code><Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] Nails { get; private set; }"}</code> |  |
| <Link id="m-resulthash" /><code>{"int ResultHash { get; }"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptscomponent" /><code>{"bool AcceptsComponent("}<Link to="/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component)"}</code> |  |
| <Link id="m-applysavedata" /><code>{"void ApplySaveData("}<Link to="/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" saveData, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-canremove" /><code>{"bool CanRemove()"}</code> |  |
| <Link id="m-checkfailpop" /><code>{"void CheckFailPop()"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-empty" /><code>{"void Empty()"}</code> |  |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> |  |
| <Link id="m-getsavedata" /><code><Link to="/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{" GetSaveData()"}</code> |  |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> |  |
| <Link id="m-playdestroyeffect" /><code>{"void PlayDestroyEffect()"}</code> |  |
| <Link id="m-receivechiselhit" /><code>{"void ReceiveChiselHit(float damage)"}</code> |  |
| <Link id="m-setanimate" /><code>{"void SetAnimate(bool isAnimating)"}</code> |  |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-setmaterial" /><code>{"void SetMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, "}<Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-spawnrefuse" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnRefuse()"}</code> |  |
| <Link id="m-syncfailure" /><code>{"void SyncFailure("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncfull" /><code>{"void SyncFull("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncgrab" /><code>{"void SyncGrab("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstate" /><code>{"void SyncState("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> |  |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(int rangeLevel)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkiscomplete" /><code>{"private bool CheckIsComplete()"}</code> |  |
| <Link id="m-filterpop" /><code>{"private void FilterPop("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-getcompleteeffect" /><code>{"private void GetCompleteEffect()"}</code> |  |
| <Link id="m-grab" /><code>{"private void Grab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-loadcompletepiece" /><code>{"private void LoadCompletePiece("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> |  |
| <Link id="m-pop" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> |  |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> |  |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> |  |
| <Link id="m-resetvalues" /><code>{"private void ResetValues()"}</code> |  |
| <Link id="m-spawnchunkedrefusewithmaterial" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnChunkedRefuseWithMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-spawnrefuseforinteractor" /><code>{"private void SpawnRefuseForInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-updatecracks" /><code>{"private void UpdateCracks(float cracksProgress)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingPiece`:

[`CraftingPieceChiselable.piece`](/game-api/types/alta-crafting/craftingpiecechiselable#m-piece), [`GenericCraftingPieceDefinition.GetNewPiece`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingProject.levelledPieces`](/game-api/types/alta-crafting/genericcraftingproject#m-levelledpieces), [`GenericCraftingProject.MappedPieces`](/game-api/types/alta-crafting/genericcraftingproject#m-mappedpieces), [`GenericCraftingStation.RequestSyncPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiece), [`GenericCraftingStation.RequestSyncPieceGrab`](/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncpiecegrab), [`GenericCraftingStation.TryAddPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-tryaddpiece), [`GenericCraftingStation.TrySetClosestPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`IProject.MappedPieces`](/game-api/types/alta-crafting/iproject#m-mappedpieces).
