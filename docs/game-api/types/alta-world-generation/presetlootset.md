---
title: "PresetLootSet"
description: "class PresetLootSet in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetLootSet

A **class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PresetLootSet>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PresetLootSet`](/game-api/types/alta-world-generation/presetlootset), [`PresetLootSet.Create`](/game-api/types/alta-world-generation/presetlootset-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/presetlootset-create), [`Entry`](/game-api/types/alta-world-generation/presetlootset-entry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetLootSet()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/presetlootset-entry">{"PresetLootSet.Entry"}</Link>{"[] entries"}</code> |  |
| <Link id="m-temp" /><code>{"private static List<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> temp"}</code> |  |
| <Link id="m-used" /><code>{"private static List<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> used"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" docks, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PresetLootSet`:

[`PresetLootModuleSaveData.set`](/game-api/types/alta-world-generation/presetlootmodulesavedata#m-set).
