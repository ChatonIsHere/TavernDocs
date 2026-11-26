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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TreeSpawnerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TreeSpawnerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TreeSpawnerSaveData`](/game-api/types/alta-crafting/treespawnersavedata)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TreeSpawner()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumrespawn" /><code>{"private float maximumRespawn"}</code> | Longest respawn wait in seconds. |
| <Link id="m-minimumrespawn" /><code>{"private float minimumRespawn"}</code> | Shortest respawn wait in seconds. |
| <Link id="m-sizes" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{"[] sizes"}</code> | Tree sizes this spawner may pick. |
| <Link id="m-species" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] species"}</code> | Tree species this spawner may pick. |
| <Link id="m-tree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> | The current tree, or null while waiting. |
| <Link id="m-treeadded" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" treeAdded"}</code> | Event fired when a tree is spawned or adopted. |
| <Link id="m-treeprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab"}</code> | The network prefab the tree is built on. |
| <Link id="m-treeremoved" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" treeRemoved"}</code> | Event fired when the tree is felled. |
| <Link id="m-waittorespawn" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRespawn"}</code> | The pending respawn timeline entry. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Adopts an existing child tree (destroying duplicates), or spawns a new one once the entity is in a chunk. |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset)"}</code> | Spawns a tree from a preset with one of the allowed species. Starts the wait instead if none fits. |
| <Link id="m-spawnrandom" /><code>{"void SpawnRandom()"}</code> | Spawns a random preset matching the allowed sizes and species. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basesplit" /><code>{"private void BaseSplit("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | Treats the tree as gone when its base is killed. |
| <Link id="m-checkbasecut" /><code>{"private void CheckBaseCut("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | When a cut leaves the tree with no root, destroys the tree and starts the respawn wait. |
| <Link id="m-initializetree" /><code>{"private void InitializeTree()"}</code> | Fires `treeAdded` and watches the tree for cuts and death. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the respawn timer. |
| <Link id="m-spawnonchunkload" /><code>{"private void SpawnOnChunkLoad("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Spawns a tree once the entity joins a chunk. |
| <Link id="m-startwait" /><code>{"private void StartWait()"}</code> | Schedules `SpawnRandom` after a random time between the minimum and maximum respawn. Saved with the spawner. |
| <Link id="m-treedestroyed" /><code>{"private void TreeDestroyed()"}</code> | Unhooks the old tree, fires `treeRemoved` and starts the respawn wait. |

</details>
