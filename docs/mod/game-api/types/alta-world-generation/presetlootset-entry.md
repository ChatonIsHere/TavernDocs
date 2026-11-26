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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`PresetLootSet`](/mod/game-api/types/alta-world-generation/presetlootset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> | <span className="api-desc">Creates a `PresetLootSet.Entry` with default values.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecount" /><code>{"private float baseCount"}</code> | <span className="api-desc">How many spawn before prosperity and random changes.</span> |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" item"}</code> | <span className="api-desc">Pipeline that picks the item.</span> |
| <Link id="m-minimumdocks" /><code>{"private int minimumDocks"}</code> | <span className="api-desc">Backing field for `MinimumDocks`.</span> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Pipeline that picks the physical material, if set.</span> |
| <Link id="m-prosperitymultiplier" /><code>{"private float prosperityMultiplier"}</code> | <span className="api-desc">Extra count per point of the spawn's prosperity attribute.</span> |
| <Link id="m-randomcountratio" /><code>{"private float randomCountRatio"}</code> | <span className="api-desc">Up to this fraction of the count is randomly removed.</span> |
| <Link id="m-rounds" /><code>{"private int rounds"}</code> | <span className="api-desc">Backing field for `Rounds`.</span> |
| <Link id="m-temp" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" temp"}</code> | <span className="api-desc">The spawn data of the current spawn, kept for `CheckMaterial`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-minimumdocks-2" /><code>{"int MinimumDocks { get; }"}</code> | <span className="api-desc">The group must have at least this many docks for the entry to spawn.</span> |
| <Link id="m-rounds-2" /><code>{"int Rounds { get; }"}</code> | <span className="api-desc">How many times the entry tries to spawn, each into another dock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawninto" /><code>{"bool SpawnInto("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Spawns the item into a dock: base count plus prosperity bonus, minus a random part, rounded up. False if nothing spawned.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkmaterial" /><code>{"private void CheckMaterial("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Sets the spawned pickup's physical material, if this entry has one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`PresetLootSet.entries`](/mod/game-api/types/alta-world-generation/presetlootset#m-entries).

</div>
