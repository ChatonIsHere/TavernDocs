---
title: "Leaderboard"
description: "A leaderboard sign for a timed course."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Leaderboard

A **class** in `Root.Township`, the global namespace.

A leaderboard sign for a timed course. The server fills it from `LeaderboardManager` and syncs the top players, and each player's own best and latest times, to clients.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LeaderboardData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LeaderboardData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LeaderboardData`](/mod/game-api/types/global-i-l/leaderboarddata)
- **Nested types** [`PersonalBest`](/mod/game-api/types/global-i-l/leaderboard-personalbest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Leaderboard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anychange" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" anyChange"}</code> | <span className="api-desc">Event fired when any top row changes.</span> |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Inspector-assigned course definition. Not read in this code, which uses `definitionData`.</span> |
| <Link id="m-definitiondata" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData"}</code> | <span className="api-desc">The course this board shows, loaded from the save or set by `SetupDefinition`.</span> |
| <Link id="m-individualchange" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" individualChange"}</code> | <span className="api-desc">Effect run on each top row that changes.</span> |
| <Link id="m-latest" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" latest"}</code> | <span className="api-desc">Text showing the player's most recent time.</span> |
| <Link id="m-leaderboardname" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" leaderboardName"}</code> | <span className="api-desc">Text showing the course name.</span> |
| <Link id="m-personalbest" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" personalBest"}</code> | <span className="api-desc">Text showing the player's best time.</span> |
| <Link id="m-personalbestchange" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" personalBestChange"}</code> | <span className="api-desc">Effect run when the personal best text changes.</span> |
| <Link id="m-syncpersonalbest" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{"> syncPersonalBest"}</code> | <span className="api-desc">Sync message for `SyncPersonalBest`.</span> |
| <Link id="m-syncplayers" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncPlayers"}</code> | <span className="api-desc">Sync message for `SyncPlayers`.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{"> syncSetup"}</code> | <span className="api-desc">Sync message for `SyncSetup`.</span> |
| <Link id="m-topplayernames" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] topPlayerNames"}</code> | <span className="api-desc">Text rows for the top player names.</span> |
| <Link id="m-topplayers" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{"> topPlayers"}</code> | <span className="api-desc">Current top players with their times.</span> |
| <Link id="m-topplayertimes" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] topPlayerTimes"}</code> | <span className="api-desc">Text rows for the top player times.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the players, personal best and setup sync messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override async void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: loads and syncs the top players, and starts listening for time updates from the manager.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player's best time. It goes to the whole chunk, so every nearby client shows that time as its personal best.</span> |
| <Link id="m-setupdefinition" /><code>{"async void SetupDefinition("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition)"}</code> | <span className="api-desc">Server: switches the board to a course definition, then loads and syncs its top players.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkupdate" /><code>{"private async void CheckUpdate("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition)"}</code> | <span className="api-desc">Server: when the manager reports a new best for this board's course, reloads the top players and syncs them with effects.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening to the manager's events.</span> |
| <Link id="m-syncpersonalbest-2" /><code>{"private void SyncPersonalBest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{" arguments)"}</code> | <span className="api-desc">Sends a player their new time. Remote clients show it as latest and, if it's a best, as personal best.</span> |
| <Link id="m-syncplayers-2" /><code>{"private void SyncPlayers("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffect)"}</code> | <span className="api-desc">Sends the top players and course name. Clients update the sign text.</span> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{" arguments)"}</code> | <span className="api-desc">Sends a player's best time and the top players to clients that connect.</span> |
| <Link id="m-updatename" /><code>{"private void UpdateName(string courseName)"}</code> | <span className="api-desc">Client: shows the course name on the sign.</span> |
| <Link id="m-updateplayerbest" /><code>{"private void UpdatePlayerBest("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime)"}</code> | <span className="api-desc">Server overload: forwards a time from the manager to that player. Client overload: updates the personal best and latest text.</span> |
| <Link id="m-updateplayerbest-2" /><code>{"private void UpdatePlayerBest("}<Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{" data, bool isBestTime, bool isLatestTime = true)"}</code> | <span className="api-desc">Server overload: forwards a time from the manager to that player. Client overload: updates the personal best and latest text.</span> |
| <Link id="m-updatetext" /><code>{"private void UpdateText(bool hasEffect)"}</code> | <span className="api-desc">Client: writes the top player names and times, firing change effects for rows that changed.</span> |

</details>
