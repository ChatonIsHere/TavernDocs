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
| <Link id="m-ctor" /><code>{"OfflinePlayerProgressionHandler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/offlineplayerprogressionhandler">{"OfflinePlayerProgressionHandler"}</Link>{" instance"}</code> | <span className="api-desc">The handler in the current scene.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for level changes.</span> |
| <Link id="m-playerstolevels" /><code>{"private Dictionary<int, int[]> playersToLevels"}</code> | <span className="api-desc">Pending levels per user ID, one entry per progression path.</span> |
| <Link id="m-skillslength" /><code>{"private int skillsLength"}</code> | <span className="api-desc">Number of progression paths.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: creates the pending levels table.</span> |
| <Link id="m-logcurrent" /><code>{"void LogCurrent()"}</code> | <span className="api-desc">Server: logs the pending levels for every player.</span> |
| <Link id="m-modifyskills" /><code>{"void ModifySkills(int playerID, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> | <span className="api-desc">Adds or removes levels on a path for a player ID, at once if online, or stored for later. The private overload does the actual XP grant or free point removal.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Applies the player's pending levels and watches their free points.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Drops the player's entry if they have nothing pending.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addallskills" /><code>{"private void AddAllSkills("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Applies all pending levels for a player who just connected.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static `instance`.</span> |
| <Link id="m-clonearray" /><code>{"private int[] CloneArray(int[] array)"}</code> | <span className="api-desc">Copies a levels array into a new one sized for every progression path.</span> |
| <Link id="m-gettable" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/global-m-o/offlineplayerprogressionhandler-pathlevel">{"OfflinePlayerProgressionHandler.PathLevel"}</Link>{"> GetTable(int[] levels) (iterator)"}</code> | <span className="api-desc">Lists the paths with non-zero pending levels, for `LogCurrent`.</span> |
| <Link id="m-modifyskills-2" /><code>{"private int ModifySkills("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> | <span className="api-desc">Adds or removes levels on a path for a player ID, at once if online, or stored for later. The private overload does the actual XP grant or free point removal.</span> |
| <Link id="m-playerupdatedfreepoints" /><code>{"private void PlayerUpdatedFreePoints("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Tries to apply pending levels for a path when the player's free points change.</span> |

</details>
