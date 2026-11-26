---
title: "Leaderboard"
description: "A leaderboard sign for a timed course."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Leaderboard

A **class** in `Root.Township`, no namespace.

A leaderboard sign for a timed course. The server fills it from `LeaderboardManager` and syncs the top players, and each player's own best and latest times, to clients.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LeaderboardData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LeaderboardData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LeaderboardData`](/game-api/types/global-i-l/leaderboarddata)
- **Nested types** [`PersonalBest`](/game-api/types/global-i-l/leaderboard-personalbest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Leaderboard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anychange" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" anyChange"}</code> | Event fired when any top row changes. |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> | Inspector-assigned course definition. Not read in this code, which uses `definitionData`. |
| <Link id="m-definitiondata" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData"}</code> | The course this board shows, loaded from the save or set by `SetupDefinition`. |
| <Link id="m-individualchange" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" individualChange"}</code> | Effect run on each top row that changes. |
| <Link id="m-latest" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" latest"}</code> | Text showing the player's most recent time. |
| <Link id="m-leaderboardname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" leaderboardName"}</code> | Text showing the course name. |
| <Link id="m-personalbest" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" personalBest"}</code> | Text showing the player's best time. |
| <Link id="m-personalbestchange" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" personalBestChange"}</code> | Effect run when the personal best text changes. |
| <Link id="m-syncpersonalbest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{"> syncPersonalBest"}</code> | Sync message for `SyncPersonalBest`. |
| <Link id="m-syncplayers" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncPlayers"}</code> | Sync message for `SyncPlayers`. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{"> syncSetup"}</code> | Sync message for `SyncSetup`. |
| <Link id="m-topplayernames" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] topPlayerNames"}</code> | Text rows for the top player names. |
| <Link id="m-topplayers" /><code>{"private List<"}<Link to="/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{"> topPlayers"}</code> | Current top players with their times. |
| <Link id="m-topplayertimes" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] topPlayerTimes"}</code> | Text rows for the top player times. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the players, personal best and setup sync messages. |
| <Link id="m-initializeasserver" /><code>{"override async void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: loads and syncs the top players, and starts listening for time updates from the manager. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player's best time. It goes to the whole chunk, so every nearby client shows that time as its personal best. |
| <Link id="m-setupdefinition" /><code>{"async void SetupDefinition("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition)"}</code> | Server: switches the board to a course definition, then loads and syncs its top players. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkupdate" /><code>{"private async void CheckUpdate("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition)"}</code> | Server: when the manager reports a new best for this board's course, reloads the top players and syncs them with effects. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening to the manager's events. |
| <Link id="m-syncpersonalbest-2" /><code>{"private void SyncPersonalBest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{" arguments)"}</code> | Sends a player their new time. Remote clients show it as latest and, if it's a best, as personal best. |
| <Link id="m-syncplayers-2" /><code>{"private void SyncPlayers("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffect)"}</code> | Sends the top players and course name. Clients update the sign text. |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{" arguments)"}</code> | Sends a player's best time and the top players to clients that connect. |
| <Link id="m-updatename" /><code>{"private void UpdateName(string courseName)"}</code> | Client: shows the course name on the sign. |
| <Link id="m-updateplayerbest" /><code>{"private void UpdatePlayerBest("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime)"}</code> | Server overload: forwards a time from the manager to that player. Client overload: updates the personal best and latest text. |
| <Link id="m-updateplayerbest-2" /><code>{"private void UpdatePlayerBest("}<Link to="/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{" data, bool isBestTime, bool isLatestTime = true)"}</code> | Server overload: forwards a time from the manager to that player. Client overload: updates the personal best and latest text. |
| <Link id="m-updatetext" /><code>{"private void UpdateText(bool hasEffect)"}</code> | Client: writes the top player names and times, firing change effects for rows that changed. |

</details>
