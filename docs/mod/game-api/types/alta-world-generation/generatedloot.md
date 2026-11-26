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
| <Link id="m-ctor" /><code>{"GeneratedLoot()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedpluginidentifier" /><code>{"private int cachedPluginIdentifier"}</code> | An int kept in the save data and restored on load; nothing else in this class reads it. |
| <Link id="m-incrementingfailchance" /><code>{"private float incrementingFailChance"}</code> | How much the chance to stop filling grows with each dock tried. Passed to `LootHelper.Spawn`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-respawnfrequency" /><code>{"private float respawnFrequency"}</code> | Seconds between refills. Default 86400 (one day). |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | Unused field; `Respawn` uses the chunk's spawn data instead. |
| <Link id="m-waittorefill" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRefill"}</code> | The `Timeline` entry for the repeating refill. Saved, and on load any missed refill runs on the next frame. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerationvalueused" /><code>{"bool IsGenerationValueUsed { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: fills the docks on first generation (on the next frame) and starts the repeating refill timer if none was loaded. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the refill timer. |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> | Server: clears the docks and fills them again through `LootHelper.Spawn` with the chunk's spawn data. Logs an error if the entity has no chunk. |
| <Link id="m-respawn-2" /><code>{"private void Respawn(int count)"}</code> | Server: clears the docks and fills them again through `LootHelper.Spawn` with the chunk's spawn data. Logs an error if the entity has no chunk. |

</details>
