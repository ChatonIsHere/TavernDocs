---
title: "TimberBlock"
description: "A timber block on a chiselling deck, carved in three stages (outer, inner, core)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock

A **class** in `Root.Township`, `Alta.Carpentry`.

A timber block on a chiselling deck, carved in three stages (outer, inner, core). Finishing the outer stage picks a result from the chiselled order; finishing the core frees the result pickups and destroys the block. The server runs it and syncs pieces to clients.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CoreStage`](/mod/game-api/types/alta-crafting/timberblock-corestage), [`InnerStage`](/mod/game-api/types/alta-crafting/timberblock-innerstage), [`OuterStage`](/mod/game-api/types/alta-crafting/timberblock-outerstage), [`Stage`](/mod/game-api/types/alta-crafting/timberblock-stage), [`StageLevel`](/mod/game-api/types/alta-crafting/timberblock-stagelevel)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberBlock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-done" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" Done"}</code> | <span className="api-desc">Raised when the core stage finishes, just before the block is destroyed.</span> |
| <Link id="m-modified" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" Modified"}</code> | <span className="api-desc">Raised the first time a piece in a stage changes.</span> |

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chiselledpieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/listenedlist-t">{"ListenedList"}</Link>{"<int> chiselledPieces"}</code> | <span className="api-desc">Indexes of outer pieces finished, used to choose the chisel result. Cleared when the outer stage ends.</span> |
| <Link id="m-collidergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliderGroup"}</code> | <span className="api-desc">Backing field for `ColliderGroup`.</span> |
| <Link id="m-corestage" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblock-corestage">{"TimberBlock.CoreStage"}</Link>{" coreStage"}</code> | <span className="api-desc">The last stage. Finishing it releases the result and destroys the block.</span> |
| <Link id="m-currentstage" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stage">{"TimberBlock.Stage"}</Link>{" currentStage"}</code> | <span className="api-desc">The stage being chiselled now. `SetCurrent` on a stage changes it.</span> |
| <Link id="m-destroyingsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" destroyingSound"}</code> | <span className="api-desc">Sound played where a piece is fully chiselled away.</span> |
| <Link id="m-filters" /><code>{"private MeshFilter[] filters"}</code> | <span className="api-desc">Mesh filters re-atlased for the block's material.</span> |
| <Link id="m-hittingsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" hittingSound"}</code> | <span className="api-desc">Sound set in the inspector. Not used by this class.</span> |
| <Link id="m-hittinpiece" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hittinPiece"}</code> | <span className="api-desc">Pooled effect set in the inspector. Not used by this class.</span> |
| <Link id="m-innerstage" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblock-innerstage">{"TimberBlock.InnerStage"}</Link>{" innerStage"}</code> | <span className="api-desc">The middle stage, current after the outer stage ends.</span> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">Whether `Initialize` has run, so `Serialize`, save and load can run it first.</span> |
| <Link id="m-outerstage" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblock-outerstage">{"TimberBlock.OuterStage"}</Link>{" outerStage"}</code> | <span className="api-desc">The first stage. Its chiselled pieces decide the result.</span> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Backing field for `PhysicalMaterial`. Applied to result pickups and saved.</span> |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | <span className="api-desc">Renderers given the block's material.</span> |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | <span className="api-desc">Backing field for `Size`, used to pick a chisel definition.</span> |
| <Link id="m-spawncraftposition" /><code>{"private Transform spawnCraftPosition"}</code> | <span className="api-desc">Transform the result pickups are spawned under and stage effects play at.</span> |
| <Link id="m-spawneddefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawnedDefinition"}</code> | <span className="api-desc">The chisel definition whose result was spawned. Saved and synced.</span> |
| <Link id="m-spawnedpickups" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] spawnedPickups"}</code> | <span className="api-desc">The result pickups held on the block until the core stage ends.</span> |
| <Link id="m-stagemap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{", "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stage">{"TimberBlock.Stage"}</Link>{"> stageMap"}</code> | <span className="api-desc">Stages by level, filled when each stage initializes.</span> |
| <Link id="m-syncpickup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncPickup"}</code> | <span className="api-desc">Method sync for `SyncPickup`.</span> |
| <Link id="m-syncpieceeffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPieceEffects"}</code> | <span className="api-desc">Method sync for `SyncPieceEffects`.</span> |
| <Link id="m-syncstatus" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncStatus"}</code> | <span className="api-desc">Method sync for `SyncStatus`, sent on connect and when the stage changes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselledpieces-2" /><code><Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<int> ChiselledPieces { get; }"}</code> | <span className="api-desc">Indexes of outer pieces in the order they were chiselled off. Matched against `ChiselDefinition` orders.</span> |
| <Link id="m-collidergroup-2" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" { get; }"}</code> | <span className="api-desc">The block's colliders.</span> |
| <Link id="m-currentstagelevel" /><code><Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" CurrentStageLevel { get; }"}</code> | <span className="api-desc">Outer, inner or core.</span> |
| <Link id="m-hasfollowedrecipe" /><code>{"bool HasFollowedRecipe { get; set; }"}</code> | <span className="api-desc">Whether the player followed a guide; passed on with the crafted item task.</span> |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; }"}</code> | <span className="api-desc">Whether the block has been carved: true past the outer stage, else whether any outer piece changed.</span> |
| <Link id="m-physicalmaterial-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | <span className="api-desc">The wood material of the block.</span> |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | <span className="api-desc">The block's `ChiselBlockSize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activefilters" /><code>{"List<MeshFilter> ActiveFilters()"}</code> | <span className="api-desc">Mesh filters of the current stage's pieces that are still there.</span> |
| <Link id="m-getpiece" /><code><Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" GetPiece(int index)"}</code> | <span className="api-desc">A piece of the current stage by index.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up synced messages and the three stages, starting at the outer stage. Runs once.</span> |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/mod/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores the stage, pieces, chiselled order, result and material from deck save data.</span> |
| <Link id="m-loadsetup" /><code>{"void LoadSetup()"}</code> | <span className="api-desc">Respawns the result pickups if a result was chosen before saving.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the full block state, and the result pickups if any, to a new player.</span> |
| <Link id="m-refusepercentage" /><code>{"float RefusePercentage()"}</code> | <span className="api-desc">Share of wedges given back if the block is removed now; drops as pieces are finished.</span> |
| <Link id="m-rotateto" /><code>{"void RotateTo(bool isInversedUp)"}</code> | <span className="api-desc">Server: turns the current stage's pieces to match the block's up direction.</span> |
| <Link id="m-saveinto" /><code>{"void SaveInto("}<Link to="/mod/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Writes the stage, pieces, chiselled order, result and material into deck save data.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Writes or reads the stage and piece state, and with full writes the chiselled order and result.</span> |
| <Link id="m-setupphysicalmaterial" /><code>{"void SetupPhysicalMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | <span className="api-desc">Sets the wood material and, on clients, the matching atlased renderer material.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callpieceeffect" /><code>{"private void CallPieceEffect("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | <span className="api-desc">Server sends the piece's state to chunks; non-headless sides play the destroy effect and sound when a piece reaches full progress.</span> |
| <Link id="m-getresult" /><code>{"private void GetResult()"}</code> | <span className="api-desc">Server: picks the best chisel definition for the chiselled outer pieces and spawns its result.</span> |
| <Link id="m-handlesyncedpickup" /><code>{"private async void HandleSyncedPickup(uint identifier, int index, bool isAdding)"}</code> | <span className="api-desc">Client: waits for a synced result pickup to spawn, then parents and freezes it on the block or releases it.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Server: destroys any result pickups still held on the block.</span> |
| <Link id="m-releaseresult" /><code>{"private void ReleaseResult("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: frees the held result pickups into the world, makes them saveable and reports the spawn task for the player.</span> |
| <Link id="m-spawnresult" /><code>{"private void SpawnResult()"}</code> | <span className="api-desc">Spawns the chosen definition's pickups at `spawnCraftPosition`, frozen and non-interactable, in the block's material.</span> |
| <Link id="m-syncpickup-2" /><code>{"private void SyncPickup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isAdding)"}</code> | <span className="api-desc">Syncs whether result pickups are held, with the chisel definition and their entity ids.</span> |
| <Link id="m-syncpieceeffects-2" /><code>{"private void SyncPieceEffects("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Syncs one piece's state by index and plays its effect on the receiving side.</span> |
| <Link id="m-syncstatus-2" /><code>{"private void SyncStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Syncs the block's physical material and stage state, applying the material on remote clients.</span> |
| <Link id="m-updatepickupcollision" /><code>{"private void UpdatePickupCollision("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isEnabling)"}</code> | <span className="api-desc">Turns all colliders on a result pickup on or off.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TimberBlock`:

<div className="api-used-in">

[`ChisellingDeck.BlockDone`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockdone), [`ChisellingDeck.BlockModified`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockmodified-2), [`ChisellingDeck.CurrentBlock`](/mod/game-api/types/alta-crafting/chisellingdeck#m-currentblock), [`DeckClamp.UpdateBlock`](/mod/game-api/types/alta-crafting/deckclamp#m-updateblock), [`RecipePlacer.UpdateBlock`](/mod/game-api/types/alta-crafting/recipeplacer#m-updateblock), [`RecipePlacer.ValidateBlock`](/mod/game-api/types/alta-crafting/recipeplacer#m-validateblock), [`TimberBlock.Stage.block`](/mod/game-api/types/alta-crafting/timberblock-stage#m-block), [`TimberBlock.Stage.Initialize`](/mod/game-api/types/alta-crafting/timberblock-stage#m-initialize), [`TimberBlockEvent.BeginInvoke`](/mod/game-api/types/alta-crafting/timberblockevent#m-begininvoke), [`TimberBlockEvent.Invoke`](/mod/game-api/types/alta-crafting/timberblockevent#m-invoke), [`TimberPiece.timberBlock`](/mod/game-api/types/alta-crafting/timberpiece#m-timberblock).

</div>
