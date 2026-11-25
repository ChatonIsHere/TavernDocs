---
title: "ChisellingDeck"
description: "The carpentry bench: holds a timber block whose size grows as wood is docked into it, spawns the matching block prefab and syncs which block is current."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChisellingDeck

A **class** in `Root.Township`, `Alta.Carpentry`.

The carpentry bench: holds a timber block whose size grows as wood is docked into it, spawns the matching block prefab and syncs which block is current. Server drives it; saves the block's carving.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<ChisellingDeckSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<ChisellingDeckSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ChisellingDeckSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`ChisellingDeckSaveData`](/game-api/types/alta-crafting/chisellingdecksavedata)
- **Nested types** [`BuilderLevel`](/game-api/types/alta-crafting/chisellingdeck-builderlevel)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChisellingDeck()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-blockmodified" /><code><Link to="/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" blockModified"}</code> | Event raised when the current block is carved. |
| <Link id="m-changedblock" /><code><Link to="/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" changedBlock"}</code> | Event raised when the current block is replaced or removed. |
| <Link id="m-blockmap" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] blockMap"}</code> |  |
| <Link id="m-blockpositioner" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblockspawner">{"TimberBlockSpawner"}</Link>{" blockPositioner"}</code> |  |
| <Link id="m-collidergroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliderGroup"}</code> |  |
| <Link id="m-currentsize" /><code>{"private int currentSize"}</code> |  |
| <Link id="m-docker" /><code>{"private "}<Link to="/game-api/types/alta-crafting/builderdock">{"BuilderDock"}</Link>{" docker"}</code> |  |
| <Link id="m-levels" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chisellingdeck-builderlevel">{"ChisellingDeck.BuilderLevel"}</Link>{"[] levels"}</code> |  |
| <Link id="m-maxsize" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" maxSize"}</code> |  |
| <Link id="m-updateblock" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" updateBlock"}</code> |  |
| <Link id="m-wedgesperblock" /><code>{"private int wedgesPerBlock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blockpositioner-2" /><code><Link to="/game-api/types/alta-crafting/timberblockspawner">{"TimberBlockSpawner"}</Link>{" BlockPositioner { get; }"}</code> | Spawner that gives the spot each block size sits at. |
| <Link id="m-currentblock" /><code><Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" CurrentBlock { get; private set; }"}</code> | The timber block on the bench, or null when empty. |
| <Link id="m-currentrequiredsize" /><code>{"int CurrentRequiredSize { get; }"}</code> | Current size plus one if the dock is currently holding wood, capped at the max. |
| <Link id="m-currentsize-2" /><code>{"int CurrentSize { get; set; }"}</code> | Block size as a number (0 means empty). Setting it on the server despawns the old block and spawns one of the new size. |
| <Link id="m-guide" /><code><Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" Guide { get; private set; }"}</code> | The chisel guide (recipe) currently set on the bench. Private setter. |
| <Link id="m-hasspace" /><code>{"bool HasSpace { get; }"}</code> | True while the block is below its maximum size. |
| <Link id="m-isblocknotmodified" /><code>{"bool IsBlockNotModified { get; }"}</code> | True if there's no block or it hasn't been carved yet. |
| <Link id="m-maxsize-2" /><code>{"int MaxSize { get; }"}</code> | Largest block size allowed, as a number. |
| <Link id="m-wedgesperblock-2" /><code>{"int WedgesPerBlock { get; }"}</code> | How many wedges one size step of block is worth, used when shrinking a block into refuse. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync for the current block. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: makes sure the block spawner has room straight away. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current block to a joining player. |
| <Link id="m-resize" /><code>{"void Resize("}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" toSize)"}</code> | Server: shrinks the block down to a size, dropping wedges as refuse. A carved block is cleared entirely and refunds part of its wood. |
| <Link id="m-setupblockmap" /><code>{"bool SetupBlockMap()"}</code> | Editor: fills the size-to-prefab map from the levels list if it's empty. True if it changed. |
| <Link id="m-blockdone" /><code>{"private void BlockDone("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> |  |
| <Link id="m-blockmodified-2" /><code>{"private void BlockModified("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-networkupdateblock" /><code>{"private void NetworkUpdateBlock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setcollisionignore" /><code>{"private void SetCollisionIgnore(List<Collider> colliders, bool isIgnoring)"}</code> |  |
| <Link id="m-setupblock" /><code>{"private void SetupBlock()"}</code> |  |
| <Link id="m-updateblock-2" /><code>{"private void UpdateBlock()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChisellingDeck`:

[`BuilderDock.deck`](/game-api/types/alta-crafting/builderdock#m-deck), [`DeckClamp.deck`](/game-api/types/alta-crafting/deckclamp#m-deck), [`RecipePlacer.deck`](/game-api/types/alta-crafting/recipeplacer#m-deck), [`TimberBlockSpawner.deck`](/game-api/types/alta-crafting/timberblockspawner#m-deck).
