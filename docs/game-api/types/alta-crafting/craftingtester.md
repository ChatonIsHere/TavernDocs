---
title: "CraftingTester"
description: "Dev tool that builds every part combination."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingTester

A **class** in `Root.Township`, `Alta.Crafting`.

Dev tool that builds every part combination.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CraftingTester()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-insertmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{", List<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{">> insertMap"}</code> |
| <Link id="m-interval" /><code>{"private int interval"}</code> |
| <Link id="m-israndom" /><code>{"private bool isRandom"}</code> |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> |
| <Link id="m-randomemptychance" /><code>{"private float randomEmptyChance"}</code> |
| <Link id="m-roots" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> roots"}</code> |
| <Link id="m-spawner" /><code>{"private "}<Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" spawner"}</code> |
| <Link id="m-workingrandomlist" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> workingRandomList"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override async void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-doall" /><code>{"private async void DoAll()"}</code> |
| <Link id="m-dorandom" /><code>{"private async void DoRandom()"}</code> |
| <Link id="m-getvariants" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> GetVariants("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" prefab, int slotIndex, string prefix) (iterator)"}</code> |
| <Link id="m-randomizeslots" /><code>{"private void RandomizeSlots("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |

</details>
