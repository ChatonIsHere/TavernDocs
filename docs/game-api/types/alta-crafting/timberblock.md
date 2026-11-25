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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberBlock()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-done" /><code><Link to="/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" Done"}</code> | Raised when the core stage finishes, just before the block is destroyed. |
| <Link id="m-modified" /><code><Link to="/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" Modified"}</code> | Raised the first time a piece in a stage changes. |
| <Link id="m-chiselledpieces" /><code>{"private "}<Link to="/game-api/types/alta-utilities/listenedlist-t">{"ListenedList"}</Link>{"<int> chiselledPieces"}</code> |  |
| <Link id="m-collidergroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliderGroup"}</code> |  |
| <Link id="m-corestage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-corestage">{"TimberBlock.CoreStage"}</Link>{" coreStage"}</code> |  |
| <Link id="m-currentstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-stage">{"TimberBlock.Stage"}</Link>{" currentStage"}</code> |  |
| <Link id="m-destroyingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" destroyingSound"}</code> |  |
| <Link id="m-filters" /><code>{"private MeshFilter[] filters"}</code> |  |
| <Link id="m-hittingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" hittingSound"}</code> |  |
| <Link id="m-hittinpiece" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hittinPiece"}</code> |  |
| <Link id="m-innerstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-innerstage">{"TimberBlock.InnerStage"}</Link>{" innerStage"}</code> |  |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |
| <Link id="m-outerstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock-outerstage">{"TimberBlock.OuterStage"}</Link>{" outerStage"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> |  |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> |  |
| <Link id="m-size" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> |  |
| <Link id="m-spawncraftposition" /><code>{"private Transform spawnCraftPosition"}</code> |  |
| <Link id="m-spawneddefinition" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawnedDefinition"}</code> |  |
| <Link id="m-spawnedpickups" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] spawnedPickups"}</code> |  |
| <Link id="m-stagemap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{", "}<Link to="/game-api/types/alta-crafting/timberblock-stage">{"TimberBlock.Stage"}</Link>{"> stageMap"}</code> |  |
| <Link id="m-syncpickup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncPickup"}</code> |  |
| <Link id="m-syncpieceeffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncPieceEffects"}</code> |  |
| <Link id="m-syncstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncStatus"}</code> |  |

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
| <Link id="m-callpieceeffect" /><code>{"private void CallPieceEffect("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> |  |
| <Link id="m-getresult" /><code>{"private void GetResult()"}</code> |  |
| <Link id="m-handlesyncedpickup" /><code>{"private async void HandleSyncedPickup(uint identifier, int index, bool isAdding)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-releaseresult" /><code>{"private void ReleaseResult("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-spawnresult" /><code>{"private void SpawnResult()"}</code> |  |
| <Link id="m-syncpickup-2" /><code>{"private void SyncPickup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isAdding)"}</code> |  |
| <Link id="m-syncpieceeffects-2" /><code>{"private void SyncPieceEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |  |
| <Link id="m-syncstatus-2" /><code>{"private void SyncStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> |  |
| <Link id="m-updatepickupcollision" /><code>{"private void UpdatePickupCollision("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isEnabling)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TimberBlock`:

[`ChisellingDeck.BlockDone`](/game-api/types/alta-crafting/chisellingdeck#m-blockdone), [`ChisellingDeck.BlockModified`](/game-api/types/alta-crafting/chisellingdeck#m-blockmodified-2), [`ChisellingDeck.CurrentBlock`](/game-api/types/alta-crafting/chisellingdeck#m-currentblock), [`DeckClamp.UpdateBlock`](/game-api/types/alta-crafting/deckclamp#m-updateblock), [`RecipePlacer.UpdateBlock`](/game-api/types/alta-crafting/recipeplacer#m-updateblock), [`RecipePlacer.ValidateBlock`](/game-api/types/alta-crafting/recipeplacer#m-validateblock), [`TimberBlock.Stage.block`](/game-api/types/alta-crafting/timberblock-stage#m-block), [`TimberBlock.Stage.Initialize`](/game-api/types/alta-crafting/timberblock-stage#m-initialize), [`TimberBlockEvent.BeginInvoke`](/game-api/types/alta-crafting/timberblockevent#m-begininvoke), [`TimberBlockEvent.Invoke`](/game-api/types/alta-crafting/timberblockevent#m-invoke), [`TimberPiece.timberBlock`](/game-api/types/alta-crafting/timberpiece#m-timberblock).
