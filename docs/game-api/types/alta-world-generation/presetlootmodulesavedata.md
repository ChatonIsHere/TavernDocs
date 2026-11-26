---
title: "PresetLootModuleSaveData"
description: "Saved setup for a PresetLootModule: which preset loot set it spawns and whether it clears first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetLootModuleSaveData

A **class** in `Root.Township`, `Alta.Loot`.

Saved setup for a `PresetLootModule`: which preset loot set it spawns and whether it clears first.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<PresetLootModule, PresetLootModuleSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PresetLootModule`](/game-api/types/alta-world-generation/presetlootmodule), [`PresetLootModuleSaveData`](/game-api/types/alta-world-generation/presetlootmodulesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PresetLootModuleSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clearwhenspawn" /><code>{"bool clearWhenSpawn"}</code> | If true, destroys everything in the dock group before spawning. |
| <Link id="m-set" /><code><Link to="/game-api/types/alta-world-generation/presetlootset">{"PresetLootSet"}</Link>{" set"}</code> | The preset loot set to spawn. |

## Used in

Members of other types that take, return or hold a `PresetLootModuleSaveData`:

[`PresetLootModule.setup`](/game-api/types/alta-world-generation/presetlootmodule#m-setup).
