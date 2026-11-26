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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<ChisellingDeckSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<ChisellingDeckSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ChisellingDeckSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`ChisellingDeckSaveData`](/mod/game-api/types/alta-crafting/chisellingdecksavedata)
- **Nested types** [`BuilderLevel`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChisellingDeck()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-blockmodified" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" blockModified"}</code> | Event raised when the current block is carved. |
| <Link id="m-changedblock" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" changedBlock"}</code> | Event raised when the current block is replaced or removed. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockmap" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] blockMap"}</code> | Block prefab for each size, built from `levels`. |
| <Link id="m-blockpositioner" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblockspawner">{"TimberBlockSpawner"}</Link>{" blockPositioner"}</code> | Backing field for `BlockPositioner`. |
| <Link id="m-collidergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliderGroup"}</code> | The deck's colliders, set to ignore the block on it. |
| <Link id="m-currentsize" /><code>{"private int currentSize"}</code> | Backing field for `CurrentSize`. |
| <Link id="m-docker" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/builderdock">{"BuilderDock"}</Link>{" docker"}</code> | Builder dock that takes timber in and spawns refuse. |
| <Link id="m-levels" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel">{"ChisellingDeck.BuilderLevel"}</Link>{"[] levels"}</code> | Size to block prefab pairs. |
| <Link id="m-maxsize" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" maxSize"}</code> | Largest block size the deck can hold. |
| <Link id="m-updateblock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" updateBlock"}</code> | Method sync for the block message. |
| <Link id="m-wedgesperblock" /><code>{"private int wedgesPerBlock"}</code> | Backing field for `WedgesPerBlock`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blockpositioner-2" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockspawner">{"TimberBlockSpawner"}</Link>{" BlockPositioner { get; }"}</code> | Spawner that gives the spot each block size sits at. |
| <Link id="m-currentblock" /><code><Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" CurrentBlock { get; private set; }"}</code> | The timber block on the bench, or null when empty. |
| <Link id="m-currentrequiredsize" /><code>{"int CurrentRequiredSize { get; }"}</code> | Current size plus one if the dock is currently holding wood, capped at the max. |
| <Link id="m-currentsize-2" /><code>{"int CurrentSize { get; set; }"}</code> | Block size as a number (0 means empty). Setting it on the server despawns the old block and spawns one of the new size. |
| <Link id="m-guide" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" Guide { get; private set; }"}</code> | The chisel guide (recipe) currently set on the bench. Private setter. |
| <Link id="m-hasspace" /><code>{"bool HasSpace { get; }"}</code> | True while the block is below its maximum size. |
| <Link id="m-isblocknotmodified" /><code>{"bool IsBlockNotModified { get; }"}</code> | True if there's no block or it hasn't been carved yet. |
| <Link id="m-maxsize-2" /><code>{"int MaxSize { get; }"}</code> | Largest block size allowed, as a number. |
| <Link id="m-wedgesperblock-2" /><code>{"int WedgesPerBlock { get; }"}</code> | How many wedges one size step of block is worth, used when shrinking a block into refuse. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync for the current block. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: makes sure the block spawner has room straight away. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current block to a joining player. |
| <Link id="m-resize" /><code>{"void Resize("}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" toSize)"}</code> | Server: shrinks the block down to a size, dropping wedges as refuse. A carved block is cleared entirely and refunds part of its wood. |
| <Link id="m-setupblockmap" /><code>{"bool SetupBlockMap()"}</code> | Editor: fills the size-to-prefab map from the levels list if it's empty. True if it changed. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockdone" /><code>{"private void BlockDone("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | When the block is finished, empties the deck and repositions the dock. |
| <Link id="m-blockmodified-2" /><code>{"private void BlockModified("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | Passes a block's `Modified` event on to `blockModified`. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | After loading, lets the current block finish its own setup. |
| <Link id="m-networkupdateblock" /><code>{"private void NetworkUpdateBlock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Block message: the server sends the current block's ID; clients wait for it to spawn and set it up. |
| <Link id="m-setcollisionignore" /><code>{"private void SetCollisionIgnore(List<Collider> colliders, bool isIgnoring)"}</code> | Makes the deck's colliders ignore (or stop ignoring) the given colliders. |
| <Link id="m-setupblock" /><code>{"private void SetupBlock()"}</code> | Parents the block to the spawn point for its size, hooks its `Modified` event and ignores collisions with it. |
| <Link id="m-updateblock-2" /><code>{"private void UpdateBlock()"}</code> | Server: destroys the current block and spawns a new one for `currentSize`, then tells clients. |

</details>

## Used in

Members of other types that take, return or hold a `ChisellingDeck`:

[`BuilderDock.deck`](/mod/game-api/types/alta-crafting/builderdock#m-deck), [`DeckClamp.deck`](/mod/game-api/types/alta-crafting/deckclamp#m-deck), [`RecipePlacer.deck`](/mod/game-api/types/alta-crafting/recipeplacer#m-deck), [`TimberBlockSpawner.deck`](/mod/game-api/types/alta-crafting/timberblockspawner#m-deck).
