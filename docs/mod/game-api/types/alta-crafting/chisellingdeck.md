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
| <Link id="m-ctor" /><code>{"ChisellingDeck()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-blockmodified" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" blockModified"}</code> | <span className="api-desc">Event raised when the current block is carved.</span> |
| <Link id="m-changedblock" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockevent">{"TimberBlockEvent"}</Link>{" changedBlock"}</code> | <span className="api-desc">Event raised when the current block is replaced or removed.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockmap" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] blockMap"}</code> | <span className="api-desc">Block prefab for each size, built from `levels`.</span> |
| <Link id="m-blockpositioner" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblockspawner">{"TimberBlockSpawner"}</Link>{" blockPositioner"}</code> | <span className="api-desc">Backing field for `BlockPositioner`.</span> |
| <Link id="m-collidergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliderGroup"}</code> | <span className="api-desc">The deck's colliders, set to ignore the block on it.</span> |
| <Link id="m-currentsize" /><code>{"private int currentSize"}</code> | <span className="api-desc">Backing field for `CurrentSize`.</span> |
| <Link id="m-docker" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/builderdock">{"BuilderDock"}</Link>{" docker"}</code> | <span className="api-desc">Builder dock that takes timber in and spawns refuse.</span> |
| <Link id="m-levels" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel">{"ChisellingDeck.BuilderLevel"}</Link>{"[] levels"}</code> | <span className="api-desc">Size to block prefab pairs.</span> |
| <Link id="m-maxsize" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" maxSize"}</code> | <span className="api-desc">Largest block size the deck can hold.</span> |
| <Link id="m-updateblock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" updateBlock"}</code> | <span className="api-desc">Method sync for the block message.</span> |
| <Link id="m-wedgesperblock" /><code>{"private int wedgesPerBlock"}</code> | <span className="api-desc">Backing field for `WedgesPerBlock`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blockpositioner-2" /><code><Link to="/mod/game-api/types/alta-crafting/timberblockspawner">{"TimberBlockSpawner"}</Link>{" BlockPositioner { get; }"}</code> | <span className="api-desc">Spawner that gives the spot each block size sits at.</span> |
| <Link id="m-currentblock" /><code><Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" CurrentBlock { get; private set; }"}</code> | <span className="api-desc">The timber block on the bench, or null when empty.</span> |
| <Link id="m-currentrequiredsize" /><code>{"int CurrentRequiredSize { get; }"}</code> | <span className="api-desc">Current size plus one if the dock is currently holding wood, capped at the max.</span> |
| <Link id="m-currentsize-2" /><code>{"int CurrentSize { get; set; }"}</code> | <span className="api-desc">Block size as a number (0 means empty). Setting it on the server despawns the old block and spawns one of the new size.</span> |
| <Link id="m-guide" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" Guide { get; private set; }"}</code> | <span className="api-desc">The chisel guide (recipe) currently set on the bench. Private setter.</span> |
| <Link id="m-hasspace" /><code>{"bool HasSpace { get; }"}</code> | <span className="api-desc">True while the block is below its maximum size.</span> |
| <Link id="m-isblocknotmodified" /><code>{"bool IsBlockNotModified { get; }"}</code> | <span className="api-desc">True if there's no block or it hasn't been carved yet.</span> |
| <Link id="m-maxsize-2" /><code>{"int MaxSize { get; }"}</code> | <span className="api-desc">Largest block size allowed, as a number.</span> |
| <Link id="m-wedgesperblock-2" /><code>{"int WedgesPerBlock { get; }"}</code> | <span className="api-desc">How many wedges one size step of block is worth, used when shrinking a block into refuse.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync for the current block.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: makes sure the block spawner has room straight away.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current block to a joining player.</span> |
| <Link id="m-resize" /><code>{"void Resize("}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" toSize)"}</code> | <span className="api-desc">Server: shrinks the block down to a size, dropping wedges as refuse. A carved block is cleared entirely and refunds part of its wood.</span> |
| <Link id="m-setupblockmap" /><code>{"bool SetupBlockMap()"}</code> | <span className="api-desc">Editor: fills the size-to-prefab map from the levels list if it's empty. True if it changed.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockdone" /><code>{"private void BlockDone("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | <span className="api-desc">When the block is finished, empties the deck and repositions the dock.</span> |
| <Link id="m-blockmodified-2" /><code>{"private void BlockModified("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | <span className="api-desc">Passes a block's `Modified` event on to `blockModified`.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">After loading, lets the current block finish its own setup.</span> |
| <Link id="m-networkupdateblock" /><code>{"private void NetworkUpdateBlock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Block message: the server sends the current block's ID; clients wait for it to spawn and set it up.</span> |
| <Link id="m-setcollisionignore" /><code>{"private void SetCollisionIgnore(List<Collider> colliders, bool isIgnoring)"}</code> | <span className="api-desc">Makes the deck's colliders ignore (or stop ignoring) the given colliders.</span> |
| <Link id="m-setupblock" /><code>{"private void SetupBlock()"}</code> | <span className="api-desc">Parents the block to the spawn point for its size, hooks its `Modified` event and ignores collisions with it.</span> |
| <Link id="m-updateblock-2" /><code>{"private void UpdateBlock()"}</code> | <span className="api-desc">Server: destroys the current block and spawns a new one for `currentSize`, then tells clients.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChisellingDeck`:

<div className="api-used-in">

[`BuilderDock.deck`](/mod/game-api/types/alta-crafting/builderdock#m-deck), [`DeckClamp.deck`](/mod/game-api/types/alta-crafting/deckclamp#m-deck), [`RecipePlacer.deck`](/mod/game-api/types/alta-crafting/recipeplacer#m-deck), [`TimberBlockSpawner.deck`](/mod/game-api/types/alta-crafting/timberblockspawner#m-deck).

</div>
