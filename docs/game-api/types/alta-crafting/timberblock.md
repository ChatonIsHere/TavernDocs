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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CoreStage`](/game-api/types/alta-crafting/timberblock-corestage), [`InnerStage`](/game-api/types/alta-crafting/timberblock-innerstage), [`OuterStage`](/game-api/types/alta-crafting/timberblock-outerstage), [`Stage`](/game-api/types/alta-crafting/timberblock-stage), [`StageLevel`](/game-api/types/alta-crafting/timberblock-stagelevel)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimberBlock()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-done" /><code><Link to="/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" Done"}</code> | Raised when the core stage finishes, just before the block is destroyed. |
| <Link id="m-modified" /><code><Link to="/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" Modified"}</code> | Raised the first time a piece in a stage changes. |

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chiselledpieces" /><code>{"private "}<Link to="/game-api/types/alta-utilities/listenedlist-t">{"ListenedList"}</Link>{"<int> chiselledPieces"}</code> | Indexes of outer pieces finished, used to choose the chisel result. Cleared when the outer stage ends. |
| <Link id="m-collidergroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliderGroup"}</code> | Backing field for `ColliderGroup`. |
| <Link id="m-corestage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-corestage">{"TimberBlock.CoreStage"}</Link>{" coreStage"}</code> | The last stage. Finishing it releases the result and destroys the block. |
| <Link id="m-currentstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-stage">{"TimberBlock.Stage"}</Link>{" currentStage"}</code> | The stage being chiselled now. `SetCurrent` on a stage changes it. |
| <Link id="m-destroyingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" destroyingSound"}</code> | Sound played where a piece is fully chiselled away. |
| <Link id="m-filters" /><code>{"private MeshFilter[] filters"}</code> | Mesh filters re-atlased for the block's material. |
| <Link id="m-hittingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" hittingSound"}</code> | Sound set in the inspector. Not used by this class. |
| <Link id="m-hittinpiece" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hittinPiece"}</code> | Pooled effect set in the inspector. Not used by this class. |
| <Link id="m-innerstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-innerstage">{"TimberBlock.InnerStage"}</Link>{" innerStage"}</code> | The middle stage, current after the outer stage ends. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Whether `Initialize` has run, so `Serialize`, save and load can run it first. |
| <Link id="m-outerstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-outerstage">{"TimberBlock.OuterStage"}</Link>{" outerStage"}</code> | The first stage. Its chiselled pieces decide the result. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | Backing field for `PhysicalMaterial`. Applied to result pickups and saved. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Renderers given the block's material. |
| <Link id="m-size" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | Backing field for `Size`, used to pick a chisel definition. |
| <Link id="m-spawncraftposition" /><code>{"private Transform spawnCraftPosition"}</code> | Transform the result pickups are spawned under and stage effects play at. |
| <Link id="m-spawneddefinition" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawnedDefinition"}</code> | The chisel definition whose result was spawned. Saved and synced. |
| <Link id="m-spawnedpickups" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] spawnedPickups"}</code> | The result pickups held on the block until the core stage ends. |
| <Link id="m-stagemap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{", "}<Link to="/game-api/types/alta-crafting/timberblock-stage">{"TimberBlock.Stage"}</Link>{"> stageMap"}</code> | Stages by level, filled when each stage initializes. |
| <Link id="m-syncpickup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncPickup"}</code> | Method sync for `SyncPickup`. |
| <Link id="m-syncpieceeffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPieceEffects"}</code> | Method sync for `SyncPieceEffects`. |
| <Link id="m-syncstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncStatus"}</code> | Method sync for `SyncStatus`, sent on connect and when the stage changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselledpieces-2" /><code><Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<int> ChiselledPieces { get; }"}</code> | Indexes of outer pieces in the order they were chiselled off. Matched against `ChiselDefinition` orders. |
| <Link id="m-collidergroup-2" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" { get; }"}</code> | The block's colliders. |
| <Link id="m-currentstagelevel" /><code><Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" CurrentStageLevel { get; }"}</code> | Outer, inner or core. |
| <Link id="m-hasfollowedrecipe" /><code>{"bool HasFollowedRecipe { get; set; }"}</code> | Whether the player followed a guide; passed on with the crafted item task. |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; }"}</code> | Whether the block has been carved: true past the outer stage, else whether any outer piece changed. |
| <Link id="m-physicalmaterial-2" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | The wood material of the block. |
| <Link id="m-size-2" /><code><Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | The block's `ChiselBlockSize`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activefilters" /><code>{"List<MeshFilter> ActiveFilters()"}</code> | Mesh filters of the current stage's pieces that are still there. |
| <Link id="m-getpiece" /><code><Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" GetPiece(int index)"}</code> | A piece of the current stage by index. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up synced messages and the three stages, starting at the outer stage. Runs once. |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | Restores the stage, pieces, chiselled order, result and material from deck save data. |
| <Link id="m-loadsetup" /><code>{"void LoadSetup()"}</code> | Respawns the result pickups if a result was chosen before saving. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the full block state, and the result pickups if any, to a new player. |
| <Link id="m-refusepercentage" /><code>{"float RefusePercentage()"}</code> | Share of wedges given back if the block is removed now; drops as pieces are finished. |
| <Link id="m-rotateto" /><code>{"void RotateTo(bool isInversedUp)"}</code> | Server: turns the current stage's pieces to match the block's up direction. |
| <Link id="m-saveinto" /><code>{"void SaveInto("}<Link to="/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | Writes the stage, pieces, chiselled order, result and material into deck save data. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Writes or reads the stage and piece state, and with full writes the chiselled order and result. |
| <Link id="m-setupphysicalmaterial" /><code>{"void SetupPhysicalMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | Sets the wood material and, on clients, the matching atlased renderer material. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callpieceeffect" /><code>{"private void CallPieceEffect("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | Server sends the piece's state to chunks; non-headless sides play the destroy effect and sound when a piece reaches full progress. |
| <Link id="m-getresult" /><code>{"private void GetResult()"}</code> | Server: picks the best chisel definition for the chiselled outer pieces and spawns its result. |
| <Link id="m-handlesyncedpickup" /><code>{"private async void HandleSyncedPickup(uint identifier, int index, bool isAdding)"}</code> | Client: waits for a synced result pickup to spawn, then parents and freezes it on the block or releases it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Server: destroys any result pickups still held on the block. |
| <Link id="m-releaseresult" /><code>{"private void ReleaseResult("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: frees the held result pickups into the world, makes them saveable and reports the spawn task for the player. |
| <Link id="m-spawnresult" /><code>{"private void SpawnResult()"}</code> | Spawns the chosen definition's pickups at `spawnCraftPosition`, frozen and non-interactable, in the block's material. |
| <Link id="m-syncpickup-2" /><code>{"private void SyncPickup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isAdding)"}</code> | Syncs whether result pickups are held, with the chisel definition and their entity ids. |
| <Link id="m-syncpieceeffects-2" /><code>{"private void SyncPieceEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Syncs one piece's state by index and plays its effect on the receiving side. |
| <Link id="m-syncstatus-2" /><code>{"private void SyncStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Syncs the block's physical material and stage state, applying the material on remote clients. |
| <Link id="m-updatepickupcollision" /><code>{"private void UpdatePickupCollision("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isEnabling)"}</code> | Turns all colliders on a result pickup on or off. |

</details>

## Used in

Members of other types that take, return or hold a `TimberBlock`:

[`ChisellingDeck.BlockDone`](/game-api/types/alta-crafting/chisellingdeck#m-blockdone), [`ChisellingDeck.BlockModified`](/game-api/types/alta-crafting/chisellingdeck#m-blockmodified-2), [`ChisellingDeck.CurrentBlock`](/game-api/types/alta-crafting/chisellingdeck#m-currentblock), [`DeckClamp.UpdateBlock`](/game-api/types/alta-crafting/deckclamp#m-updateblock), [`RecipePlacer.UpdateBlock`](/game-api/types/alta-crafting/recipeplacer#m-updateblock), [`RecipePlacer.ValidateBlock`](/game-api/types/alta-crafting/recipeplacer#m-validateblock), [`TimberBlock.Stage.block`](/game-api/types/alta-crafting/timberblock-stage#m-block), [`TimberBlock.Stage.Initialize`](/game-api/types/alta-crafting/timberblock-stage#m-initialize), [`TimberBlockEvent.BeginInvoke`](/game-api/types/alta-crafting/timberblockevent#m-begininvoke), [`TimberBlockEvent.Invoke`](/game-api/types/alta-crafting/timberblockevent#m-invoke), [`TimberPiece.timberBlock`](/game-api/types/alta-crafting/timberpiece#m-timberblock).
