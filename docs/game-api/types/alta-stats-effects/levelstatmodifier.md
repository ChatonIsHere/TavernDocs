---
title: "LevelStatModifier"
description: "Drives a stat from a curve by a level number, and saves that level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Drives a stat from a curve by a level number, and saves that level.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LevelStatModifierData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LevelStatModifierData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LevelStatModifierData`](/game-api/types/alta-stats-effects/levelstatmodifierdata)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelStatModifier()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affectingstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectingStat"}</code> |  |
| <Link id="m-currentlevel" /><code>{"private int currentLevel"}</code> |  |
| <Link id="m-maxlevel" /><code>{"private int maxLevel"}</code> |  |
| <Link id="m-modifier" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier"}</code> |  |
| <Link id="m-oldlevel" /><code>{"private int oldLevel"}</code> |  |
| <Link id="m-oncurrentlevelchanged" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" onCurrentLevelChanged"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> |  |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |  |
| <Link id="m-valueatlevel" /><code>{"private AnimationCurve valueAtLevel"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreaselevel" /><code>{"void DecreaseLevel(int amount = 1)"}</code> |  |
| <Link id="m-empty" /><code>{"void Empty()"}</code> |  |
| <Link id="m-increaselevel" /><code>{"void IncreaseLevel(int amount = 1)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel()"}</code> |  |
