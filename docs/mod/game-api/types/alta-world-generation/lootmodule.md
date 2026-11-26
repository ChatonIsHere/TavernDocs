---
title: "LootModule"
description: "Server: fills the parent PickupDockGroup with generated loot on first spawn and again every respawnFrequency (default 48 hours), using the chunk's biome or..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModule

A **class** in `Root.Township`, `Alta.Loot`.

Server: fills the parent `PickupDockGroup` with generated loot on first spawn and again every `respawnFrequency` (default 48 hours), using the chunk's biome or an override. A one-off module spawns once and then destroys itself.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LootModuleSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LootModuleSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LootModuleSaveData`](/mod/game-api/types/alta-world-generation/lootmodulesavedata)
- **Documented in** [Loot](/mod/game-api/world/loot#lootmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModule()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group"}</code> | <span className="api-desc">Backing field for `Group`.</span> |
| <Link id="m-incrementingfailchance" /><code>{"private float incrementingFailChance"}</code> | <span className="api-desc">Fail chance passed to `LootHelper.Spawn` (default 0.05), probably added per item spawned.</span> |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> | <span className="api-desc">Spawn once after a short delay, then destroy this entity.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-overridebiome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" overrideBiome"}</code> | <span className="api-desc">Biome to generate loot from instead of the chunk's.</span> |
| <Link id="m-prosperity" /><code>{"private float prosperity"}</code> | <span className="api-desc">Prosperity attribute set on the spawn data, which affects loot quality (default 1).</span> |
| <Link id="m-respawn" /><code>{"private bool respawn"}</code> | <span className="api-desc">Editor button that calls `Respawn`.</span> |
| <Link id="m-respawnfrequency" /><code>{"private float respawnFrequency"}</code> | <span className="api-desc">Seconds between refills (default 172800, 48 hours); saved values under 60 are ignored.</span> |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | <span className="api-desc">Spawn data reused for every refill, made on the first one.</span> |
| <Link id="m-waittorefill" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRefill"}</code> | <span className="api-desc">Timeline entry for the repeating refill; saved so the countdown survives restarts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group-2" /><code><Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" Group { get; }"}</code> | <span className="api-desc">The `PickupDockGroup` in a parent that loot is spawned into, found on first use.</span> |
| <Link id="m-isgenerationvalueused" /><code>{"bool IsGenerationValueUsed { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: spawns loot if the entity is being generated (or is one-off) and starts the repeating refill timer.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the refill timer.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: sets the prefab's save mode to Child.</span> |
| <Link id="m-respawn-2" /><code>{"private void Respawn()"}</code> | <span className="api-desc">Spawns loot into the group with `LootHelper.Spawn`, building spawn data from the chunk or override biome with this module's prosperity. Destroys the entity if one-off.</span> |
| <Link id="m-respawn-3" /><code>{"private void Respawn(int count)"}</code> | <span className="api-desc">Spawns loot into the group with `LootHelper.Spawn`, building spawn data from the chunk or override biome with this module's prosperity. Destroys the entity if one-off.</span> |

</details>
