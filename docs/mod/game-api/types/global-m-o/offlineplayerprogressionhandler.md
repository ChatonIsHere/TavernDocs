---
title: "OfflinePlayerProgressionHandler"
description: "Server-side store of skill levels to give or take from players, including ones who are offline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflinePlayerProgressionHandler

A **class** in `Root.Township`, the global namespace.

Server-side store of skill levels to give or take from players, including ones who are offline. Pending levels are applied when the player joins or has room for free points, and are saved with the world.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<OfflinePlayerProgressionHandlerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<OfflinePlayerProgressionHandlerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`OfflinePlayerProgressionHandlerSaveData`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandlersavedata)
- **Nested types** [`PathLevel`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandler-pathlevel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflinePlayerProgressionHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/offlineplayerprogressionhandler">{"OfflinePlayerProgressionHandler"}</Link>{" instance"}</code> | The handler in the current scene. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for level changes. |
| <Link id="m-playerstolevels" /><code>{"private Dictionary<int, int[]> playersToLevels"}</code> | Pending levels per user ID, one entry per progression path. |
| <Link id="m-skillslength" /><code>{"private int skillsLength"}</code> | Number of progression paths. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: creates the pending levels table. |
| <Link id="m-logcurrent" /><code>{"void LogCurrent()"}</code> | Server: logs the pending levels for every player. |
| <Link id="m-modifyskills" /><code>{"void ModifySkills(int playerID, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> | Adds or removes levels on a path for a player ID, at once if online, or stored for later. The private overload does the actual XP grant or free point removal. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Applies the player's pending levels and watches their free points. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Drops the player's entry if they have nothing pending. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addallskills" /><code>{"private void AddAllSkills("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Applies all pending levels for a player who just connected. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the static `instance`. |
| <Link id="m-clonearray" /><code>{"private int[] CloneArray(int[] array)"}</code> | Copies a levels array into a new one sized for every progression path. |
| <Link id="m-gettable" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/global-m-o/offlineplayerprogressionhandler-pathlevel">{"OfflinePlayerProgressionHandler.PathLevel"}</Link>{"> GetTable(int[] levels) (iterator)"}</code> | Lists the paths with non-zero pending levels, for `LogCurrent`. |
| <Link id="m-modifyskills-2" /><code>{"private int ModifySkills("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> | Adds or removes levels on a path for a player ID, at once if online, or stored for later. The private overload does the actual XP grant or free point removal. |
| <Link id="m-playerupdatedfreepoints" /><code>{"private void PlayerUpdatedFreePoints("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Tries to apply pending levels for a path when the player's free points change. |

</details>
