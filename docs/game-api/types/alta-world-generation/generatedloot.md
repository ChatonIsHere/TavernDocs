---
title: "GeneratedLoot"
description: "class GeneratedLoot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedLoot

A **class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`DockArray`](/game-api/types/alta-items/dockarray), [`ISavable<GeneratedLootSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GeneratedLootSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GeneratedLootSaveData`](/game-api/types/alta-world-generation/generatedlootsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GeneratedLoot()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedpluginidentifier" /><code>{"private int cachedPluginIdentifier"}</code> |
| <Link id="m-incrementingfailchance" /><code>{"private float incrementingFailChance"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-respawnfrequency" /><code>{"private float respawnFrequency"}</code> |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> |
| <Link id="m-waittorefill" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRefill"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isgenerationvalueused" /><code>{"bool IsGenerationValueUsed { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> |
| <Link id="m-respawn-2" /><code>{"private void Respawn(int count)"}</code> |

</details>
