---
title: "TreeSpawner"
description: "A spot in the world that grows a tree."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeSpawner

A **class** in `Root.Township`, `Alta.Woodcutting`.

A spot in the world that grows a tree.

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

| Member |
| --- |
| <Link id="m-maximumrespawn" /><code>{"private float maximumRespawn"}</code> |
| <Link id="m-minimumrespawn" /><code>{"private float minimumRespawn"}</code> |
| <Link id="m-sizes" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{"[] sizes"}</code> |
| <Link id="m-species" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] species"}</code> |
| <Link id="m-tree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> |
| <Link id="m-treeadded" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" treeAdded"}</code> |
| <Link id="m-treeprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab"}</code> |
| <Link id="m-treeremoved" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" treeRemoved"}</code> |
| <Link id="m-waittorespawn" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRespawn"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset)"}</code> |
| <Link id="m-spawnrandom" /><code>{"void SpawnRandom()"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-basesplit" /><code>{"private void BaseSplit("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> |
| <Link id="m-checkbasecut" /><code>{"private void CheckBaseCut("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> |
| <Link id="m-initializetree" /><code>{"private void InitializeTree()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-spawnonchunkload" /><code>{"private void SpawnOnChunkLoad("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-startwait" /><code>{"private void StartWait()"}</code> |
| <Link id="m-treedestroyed" /><code>{"private void TreeDestroyed()"}</code> |

</details>
