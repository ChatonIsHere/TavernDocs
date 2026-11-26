---
title: "PresetLootSet.Entry"
description: "One line in a preset loot set: what item to spawn, how many, and on which material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetLootSet.Entry

A **class** in `Root.Township`, `Alta.Loot`.

One line in a preset loot set: what item to spawn, how many, and on which material.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`PresetLootSet`](/game-api/types/alta-world-generation/presetlootset)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecount" /><code>{"private float baseCount"}</code> | How many spawn before prosperity and random changes. |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" item"}</code> | Pipeline that picks the item. |
| <Link id="m-minimumdocks" /><code>{"private int minimumDocks"}</code> | Backing field for `MinimumDocks`. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" physicalMaterial"}</code> | Pipeline that picks the physical material, if set. |
| <Link id="m-prosperitymultiplier" /><code>{"private float prosperityMultiplier"}</code> | Extra count per point of the spawn's prosperity attribute. |
| <Link id="m-randomcountratio" /><code>{"private float randomCountRatio"}</code> | Up to this fraction of the count is randomly removed. |
| <Link id="m-rounds" /><code>{"private int rounds"}</code> | Backing field for `Rounds`. |
| <Link id="m-temp" /><code>{"private "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" temp"}</code> | The spawn data of the current spawn, kept for `CheckMaterial`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-minimumdocks-2" /><code>{"int MinimumDocks { get; }"}</code> | The group must have at least this many docks for the entry to spawn. |
| <Link id="m-rounds-2" /><code>{"int Rounds { get; }"}</code> | How many times the entry tries to spawn, each into another dock. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawninto" /><code>{"bool SpawnInto("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Spawns the item into a dock: base count plus prosperity bonus, minus a random part, rounded up. False if nothing spawned. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkmaterial" /><code>{"private void CheckMaterial("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Sets the spawned pickup's physical material, if this entry has one. |

</details>

## Used in

Members of other types that take, return or hold a `Entry`:

[`PresetLootSet.entries`](/game-api/types/alta-world-generation/presetlootset#m-entries).
