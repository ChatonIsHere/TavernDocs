---
title: "CraftingTester"
description: "Server test tool that spawns crafting parts with every (or random) combination of attachments, one after another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingTester

A **class** in `Root.Township`, `Alta.Crafting`.

Server test tool that spawns crafting parts with every (or random) combination of attachments, one after another. Waits until `isRunning` is ticked in the inspector.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftingTester()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insertmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{">> insertMap"}</code> | Attachment prefabs grouped by insert type. |
| <Link id="m-interval" /><code>{"private int interval"}</code> | Milliseconds between spawns. |
| <Link id="m-israndom" /><code>{"private bool isRandom"}</code> | Spawn random builds instead of every variant. |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | Tick in the inspector to start the test. Reset to false at start. |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | Whether `GetVariants` actually spawns parts. |
| <Link id="m-randomemptychance" /><code>{"private float randomEmptyChance"}</code> | Chance a slot is left empty in random mode. |
| <Link id="m-roots" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> roots"}</code> | Prefabs that have no insert, so they start a build. |
| <Link id="m-spawner" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" spawner"}</code> | Spawn manager of the tester's entity. |
| <Link id="m-workingrandomlist" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> workingRandomList"}</code> | Scratch list of candidate attachments. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override async void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: waits for `isRunning`, sorts all non-legacy crafting prefabs into roots and attachments by insert type, then runs. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doall" /><code>{"private async void DoAll()"}</code> | Spawns every variant of every root part in turn, destroying the previous one. |
| <Link id="m-dorandom" /><code>{"private async void DoRandom()"}</code> | Keeps spawning a random root part with random attachments, replacing the last. |
| <Link id="m-getvariants" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> GetVariants("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" prefab, int slotIndex, string prefix) (iterator)"}</code> | Recursively builds every combination of attachments for a part's slots. |
| <Link id="m-randomizeslots" /><code>{"private void RandomizeSlots("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Fills a part's slots with random fitting attachments, recursively, leaving some empty. |

</details>
