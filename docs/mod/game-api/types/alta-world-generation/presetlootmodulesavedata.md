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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<PresetLootModule, PresetLootModuleSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PresetLootModule`](/mod/game-api/types/alta-world-generation/presetlootmodule), [`PresetLootModuleSaveData`](/mod/game-api/types/alta-world-generation/presetlootmodulesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetLootModuleSaveData()"}</code> | <span className="api-desc">Creates a `PresetLootModuleSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clearwhenspawn" /><code>{"bool clearWhenSpawn"}</code> | <span className="api-desc">If true, destroys everything in the dock group before spawning.</span> |
| <Link id="m-set" /><code><Link to="/mod/game-api/types/alta-world-generation/presetlootset">{"PresetLootSet"}</Link>{" set"}</code> | <span className="api-desc">The preset loot set to spawn.</span> |

## Used in

Members of other types that take, return or hold a `PresetLootModuleSaveData`:

<div className="api-used-in">

[`PresetLootModule.setup`](/mod/game-api/types/alta-world-generation/presetlootmodule#m-setup).

</div>
