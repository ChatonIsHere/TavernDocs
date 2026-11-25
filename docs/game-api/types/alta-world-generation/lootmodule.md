---
title: "LootModule"
description: "Alta.Loot.LootModule, a NetworkEntityBehaviour on containers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModule

A **class** in `Root.Township`, `Alta.Loot`.

`Alta.Loot.LootModule`, a `NetworkEntityBehaviour` on containers.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LootModuleSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LootModuleSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LootModuleSaveData`](/game-api/types/alta-world-generation/lootmodulesavedata)
- **Documented in** [Loot](/game-api/world/loot#lootmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModule()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group"}</code> |  |
| <Link id="m-incrementingfailchance" /><code>{"private float incrementingFailChance"}</code> |  |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-overridebiome" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" overrideBiome"}</code> |  |
| <Link id="m-prosperity" /><code>{"private float prosperity"}</code> |  |
| <Link id="m-respawn" /><code>{"private bool respawn"}</code> |  |
| <Link id="m-respawnfrequency" /><code>{"private float respawnFrequency"}</code> |  |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> |  |
| <Link id="m-waittorefill" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" waitToRefill"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group-2" /><code><Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" Group { get; }"}</code> |  |
| <Link id="m-isgenerationvalueused" /><code>{"bool IsGenerationValueUsed { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-respawn-2" /><code>{"private void Respawn()"}</code> |  |
| <Link id="m-respawn-3" /><code>{"private void Respawn(int count)"}</code> |  |
