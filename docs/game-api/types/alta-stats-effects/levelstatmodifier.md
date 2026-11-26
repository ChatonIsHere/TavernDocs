---
title: "LevelStatModifier"
description: "Networked component that holds a saved level from 0 to maxLevel and applies a flat modifier to a stat based on that level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Networked component that holds a saved level from 0 to `maxLevel` and applies a flat modifier to a stat based on that level. The server changes the level and syncs it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LevelStatModifierData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LevelStatModifierData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LevelStatModifierData`](/game-api/types/alta-stats-effects/levelstatmodifierdata)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LevelStatModifier()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectingStat"}</code> | Server: the stat being modified. |
| <Link id="m-currentlevel" /><code>{"private int currentLevel"}</code> | The current level. Saved. |
| <Link id="m-maxlevel" /><code>{"private int maxLevel"}</code> | Highest level. |
| <Link id="m-modifier" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier"}</code> | Server: the flat stat modifier applied for the current level. |
| <Link id="m-oldlevel" /><code>{"private int oldLevel"}</code> | Unused. |
| <Link id="m-oncurrentlevelchanged" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" onCurrentLevelChanged"}</code> | Event fired with the new level on both server and clients. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Network sync for the level. |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> | The stat manager holding the target stat. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat to modify. |
| <Link id="m-valueatlevel" /><code>{"private AnimationCurve valueAtLevel"}</code> | Curve giving the modifier value for each level. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreaselevel" /><code>{"void DecreaseLevel(int amount = 1)"}</code> | Server: lowers the level (not below 0), updates the modifier and syncs. |
| <Link id="m-empty" /><code>{"void Empty()"}</code> | Server: sets the level to 0, updates the modifier and syncs. |
| <Link id="m-increaselevel" /><code>{"void IncreaseLevel(int amount = 1)"}</code> | Server: raises the level (capped at `maxLevel`), updates the modifier and syncs. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the level sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | Finds the target stat and applies the saved level if above 0. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the level to a joining player if above 0. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler for the level. Clients update to the received level. |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel()"}</code> | Server applies or updates the modifier from `valueAtLevel`. Both sides fire `onCurrentLevelChanged`. |

</details>
