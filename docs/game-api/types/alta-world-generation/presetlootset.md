---
title: "PresetLootSet"
description: "Asset listing loot to spawn into a group of docks, one random free dock per spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetLootSet

A **class** in `Root.Township`, `Alta.Loot`.

Asset listing loot to spawn into a group of docks, one random free dock per spawn. Used by `PresetLootModule` on the server.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PresetLootSet>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PresetLootSet`](/game-api/types/alta-world-generation/presetlootset), [`PresetLootSet.Create`](/game-api/types/alta-world-generation/presetlootset-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/presetlootset-create), [`Entry`](/game-api/types/alta-world-generation/presetlootset-entry)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PresetLootSet()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/presetlootset-entry">{"PresetLootSet.Entry"}</Link>{"[] entries"}</code> | The loot entries, in order. |
| <Link id="m-temp" /><code>{"private static List<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> temp"}</code> | Scratch list of docks still free. |
| <Link id="m-used" /><code>{"private static List<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> used"}</code> | Scratch list of docks already filled. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" docks, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Empties the dock group, then for each entry tries its rounds, each into a random unused dock. |

## Used in

Members of other types that take, return or hold a `PresetLootSet`:

[`PresetLootModuleSaveData.set`](/game-api/types/alta-world-generation/presetlootmodulesavedata#m-set).
