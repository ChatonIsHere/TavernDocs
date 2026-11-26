---
title: "PresetLootModule"
description: "Fills the parent PickupDockGroup with a fixed PresetLootSet instead of random loot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetLootModule

A **class** in `Root.Township`, `Alta.Loot`.

Fills the parent `PickupDockGroup` with a fixed `PresetLootSet` instead of random loot. Server side; the set and options come from its saved setup.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PresetLootModuleSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PresetLootModuleSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PresetLootModuleSaveData`](/mod/game-api/types/alta-world-generation/presetlootmodulesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetLootModule()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" group"}</code> | Backing field for `Group`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs an error when the preset set is missing. |
| <Link id="m-setup" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/presetlootmodulesavedata">{"PresetLootModuleSaveData"}</Link>{" setup"}</code> | The saved settings: which `PresetLootSet` to use and whether to clear the group first. Saved and loaded as is. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group-2" /><code><Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" Group { get; }"}</code> | The `PickupDockGroup` in the parents, found on first access. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | Spawns the preset set into the group now, or waits until the entity is added to a chunk. No code callers; probably hooked up from a Unity event. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haschunk" /><code>{"private void HasChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk = null)"}</code> | Runs the spawn once the entity has a chunk, using the chunk's spawn data. Clears the group first if `clearWhenSpawn` is set. |

</details>
