---
title: "OfflinePlayerProgressionHandler"
description: "class OfflinePlayerProgressionHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflinePlayerProgressionHandler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<OfflinePlayerProgressionHandlerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<OfflinePlayerProgressionHandlerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`OfflinePlayerProgressionHandlerSaveData`](/game-api/types/global-m-o/offlineplayerprogressionhandlersavedata)
- **Nested types** [`PathLevel`](/game-api/types/global-m-o/offlineplayerprogressionhandler-pathlevel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflinePlayerProgressionHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-m-o/offlineplayerprogressionhandler">{"OfflinePlayerProgressionHandler"}</Link>{" instance"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playerstolevels" /><code>{"private Dictionary<int, int[]> playersToLevels"}</code> |  |
| <Link id="m-skillslength" /><code>{"private int skillsLength"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-logcurrent" /><code>{"void LogCurrent()"}</code> |  |
| <Link id="m-modifyskills" /><code>{"void ModifySkills(int playerID, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-addallskills" /><code>{"private void AddAllSkills("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-clonearray" /><code>{"private int[] CloneArray(int[] array)"}</code> |  |
| <Link id="m-gettable" /><code>{"private IEnumerable<"}<Link to="/game-api/types/global-m-o/offlineplayerprogressionhandler-pathlevel">{"OfflinePlayerProgressionHandler.PathLevel"}</Link>{"> GetTable(int[] levels) (iterator)"}</code> |  |
| <Link id="m-modifyskills-2" /><code>{"private int ModifySkills("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> |  |
| <Link id="m-playerupdatedfreepoints" /><code>{"private void PlayerUpdatedFreePoints("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
