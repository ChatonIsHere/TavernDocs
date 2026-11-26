---
title: "GeneratedLootSaveData"
description: "Save data (version 2) for GeneratedLoot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedLootSaveData

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for `GeneratedLoot`. Internal.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<GeneratedLoot, GeneratedLootSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GeneratedLoot`](/mod/game-api/types/alta-world-generation/generatedloot), [`GeneratedLootSaveData`](/mod/game-api/types/alta-world-generation/generatedlootsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedLootSaveData()"}</code> | <span className="api-desc">Creates a `GeneratedLootSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedpluginidentifier" /><code>{"int cachedPluginIdentifier"}</code> | <span className="api-desc">Stored int restored to `GeneratedLoot.cachedPluginIdentifier`.</span> |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | <span className="api-desc">Carried over from old saves; `GeneratedLoot` does not read or write it.</span> |
| <Link id="m-waittorefill" /><code>{"TimeSpan waitToRefill"}</code> | <span className="api-desc">Time left on the refill timer, as saved by `Timeline.SaveEntry`.</span> |
