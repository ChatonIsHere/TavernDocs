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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LevelStatModifierData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LevelStatModifierData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LevelStatModifierData`](/mod/game-api/types/alta-stats-effects/levelstatmodifierdata)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelStatModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectingStat"}</code> | <span className="api-desc">Server: the stat being modified.</span> |
| <Link id="m-currentlevel" /><code>{"private int currentLevel"}</code> | <span className="api-desc">The current level. Saved.</span> |
| <Link id="m-maxlevel" /><code>{"private int maxLevel"}</code> | <span className="api-desc">Highest level.</span> |
| <Link id="m-modifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier"}</code> | <span className="api-desc">Server: the flat stat modifier applied for the current level.</span> |
| <Link id="m-oldlevel" /><code>{"private int oldLevel"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-oncurrentlevelchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" onCurrentLevelChanged"}</code> | <span className="api-desc">Event fired with the new level on both server and clients.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Network sync for the level.</span> |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> | <span className="api-desc">The stat manager holding the target stat.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat to modify.</span> |
| <Link id="m-valueatlevel" /><code>{"private AnimationCurve valueAtLevel"}</code> | <span className="api-desc">Curve giving the modifier value for each level.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreaselevel" /><code>{"void DecreaseLevel(int amount = 1)"}</code> | <span className="api-desc">Server: lowers the level (not below 0), updates the modifier and syncs.</span> |
| <Link id="m-empty" /><code>{"void Empty()"}</code> | <span className="api-desc">Server: sets the level to 0, updates the modifier and syncs.</span> |
| <Link id="m-increaselevel" /><code>{"void IncreaseLevel(int amount = 1)"}</code> | <span className="api-desc">Server: raises the level (capped at `maxLevel`), updates the modifier and syncs.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the level sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | <span className="api-desc">Finds the target stat and applies the saved level if above 0.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the level to a joining player if above 0.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler for the level. Clients update to the received level.</span> |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel()"}</code> | <span className="api-desc">Server applies or updates the modifier from `valueAtLevel`. Both sides fire `onCurrentLevelChanged`.</span> |

</details>
