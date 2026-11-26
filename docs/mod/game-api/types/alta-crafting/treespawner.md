---
title: "TreeSpawner"
description: "Server entity that keeps one tree growing at its spot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeSpawner

A **class** in `Root.Township`, `Alta.Woodcutting`.

Server entity that keeps one tree growing at its spot. When the tree is felled it waits a random time and spawns a new random preset of the allowed species and sizes.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TreeSpawnerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TreeSpawnerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TreeSpawnerSaveData`](/mod/game-api/types/alta-crafting/treespawnersavedata)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumrespawn" /><code>{"private float maximumRespawn"}</code> | <span className="api-desc">Longest respawn wait in seconds.</span> |
| <Link id="m-minimumrespawn" /><code>{"private float minimumRespawn"}</code> | <span className="api-desc">Shortest respawn wait in seconds.</span> |
| <Link id="m-sizes" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{"[] sizes"}</code> | <span className="api-desc">Tree sizes this spawner may pick.</span> |
| <Link id="m-species" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] species"}</code> | <span className="api-desc">Tree species this spawner may pick.</span> |
| <Link id="m-tree" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> | <span className="api-desc">The current tree, or null while waiting.</span> |
| <Link id="m-treeadded" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" treeAdded"}</code> | <span className="api-desc">Event fired when a tree is spawned or adopted.</span> |
| <Link id="m-treeprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab"}</code> | <span className="api-desc">The network prefab the tree is built on.</span> |
| <Link id="m-treeremoved" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" treeRemoved"}</code> | <span className="api-desc">Event fired when the tree is felled.</span> |
| <Link id="m-waittorespawn" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRespawn"}</code> | <span className="api-desc">The pending respawn timeline entry.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Adopts an existing child tree (destroying duplicates), or spawns a new one once the entity is in a chunk.</span> |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset)"}</code> | <span className="api-desc">Spawns a tree from a preset with one of the allowed species. Starts the wait instead if none fits.</span> |
| <Link id="m-spawnrandom" /><code>{"void SpawnRandom()"}</code> | <span className="api-desc">Spawns a random preset matching the allowed sizes and species.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basesplit" /><code>{"private void BaseSplit("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | <span className="api-desc">Treats the tree as gone when its base is killed.</span> |
| <Link id="m-checkbasecut" /><code>{"private void CheckBaseCut("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | <span className="api-desc">When a cut leaves the tree with no root, destroys the tree and starts the respawn wait.</span> |
| <Link id="m-initializetree" /><code>{"private void InitializeTree()"}</code> | <span className="api-desc">Fires `treeAdded` and watches the tree for cuts and death.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the respawn timer.</span> |
| <Link id="m-spawnonchunkload" /><code>{"private void SpawnOnChunkLoad("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns a tree once the entity joins a chunk.</span> |
| <Link id="m-startwait" /><code>{"private void StartWait()"}</code> | <span className="api-desc">Schedules `SpawnRandom` after a random time between the minimum and maximum respawn. Saved with the spawner.</span> |
| <Link id="m-treedestroyed" /><code>{"private void TreeDestroyed()"}</code> | <span className="api-desc">Unhooks the old tree, fires `treeRemoved` and starts the respawn wait.</span> |

</details>
