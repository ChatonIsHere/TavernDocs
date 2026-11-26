---
title: "GeneratedLoot"
description: "A dock array that fills its docks with random loot from its chunk's biome and refills them on a timer (one day by default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedLoot

A **class** in `Root.Township`, `Alta.Loot`.

A dock array that fills its docks with random loot from its chunk's biome and refills them on a timer (one day by default). Server side.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`DockArray`](/mod/game-api/types/alta-items/dockarray), [`ISavable<GeneratedLootSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GeneratedLootSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GeneratedLootSaveData`](/mod/game-api/types/alta-world-generation/generatedlootsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedLoot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedpluginidentifier" /><code>{"private int cachedPluginIdentifier"}</code> | <span className="api-desc">An int kept in the save data and restored on load; nothing else in this class reads it.</span> |
| <Link id="m-incrementingfailchance" /><code>{"private float incrementingFailChance"}</code> | <span className="api-desc">How much the chance to stop filling grows with each dock tried. Passed to `LootHelper.Spawn`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-respawnfrequency" /><code>{"private float respawnFrequency"}</code> | <span className="api-desc">Seconds between refills. Default 86400 (one day).</span> |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | <span className="api-desc">Unused field; `Respawn` uses the chunk's spawn data instead.</span> |
| <Link id="m-waittorefill" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRefill"}</code> | <span className="api-desc">The `Timeline` entry for the repeating refill. Saved, and on load any missed refill runs on the next frame.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerationvalueused" /><code>{"bool IsGenerationValueUsed { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: fills the docks on first generation (on the next frame) and starts the repeating refill timer if none was loaded.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the refill timer.</span> |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> | <span className="api-desc">Server: clears the docks and fills them again through `LootHelper.Spawn` with the chunk's spawn data. Logs an error if the entity has no chunk.</span> |
| <Link id="m-respawn-2" /><code>{"private void Respawn(int count)"}</code> | <span className="api-desc">Server: clears the docks and fills them again through `LootHelper.Spawn` with the chunk's spawn data. Logs an error if the entity has no chunk.</span> |

</details>
