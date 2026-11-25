---
title: "PresetLootSet.Entry"
description: "class PresetLootSet.Entry in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetLootSet.Entry

A **class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`PresetLootSet`](/game-api/types/alta-world-generation/presetlootset)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basecount" /><code>{"private float baseCount"}</code> |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" item"}</code> |
| <Link id="m-minimumdocks" /><code>{"private int minimumDocks"}</code> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" physicalMaterial"}</code> |
| <Link id="m-prosperitymultiplier" /><code>{"private float prosperityMultiplier"}</code> |
| <Link id="m-randomcountratio" /><code>{"private float randomCountRatio"}</code> |
| <Link id="m-rounds" /><code>{"private int rounds"}</code> |
| <Link id="m-temp" /><code>{"private "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" temp"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-minimumdocks-2" /><code>{"int MinimumDocks { get; }"}</code> |
| <Link id="m-rounds-2" /><code>{"int Rounds { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-spawninto" /><code>{"bool SpawnInto("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-checkmaterial" /><code>{"private void CheckMaterial("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Entry`:

[`PresetLootSet.entries`](/game-api/types/alta-world-generation/presetlootset#m-entries).
