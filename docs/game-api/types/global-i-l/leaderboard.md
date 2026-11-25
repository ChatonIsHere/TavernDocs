---
title: "Leaderboard"
description: "class Leaderboard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Leaderboard

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LeaderboardData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LeaderboardData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LeaderboardData`](/game-api/types/global-i-l/leaderboarddata)
- **Nested types** [`PersonalBest`](/game-api/types/global-i-l/leaderboard-personalbest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Leaderboard()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-anychange" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" anyChange"}</code> |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> |
| <Link id="m-definitiondata" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData"}</code> |
| <Link id="m-individualchange" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" individualChange"}</code> |
| <Link id="m-latest" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" latest"}</code> |
| <Link id="m-leaderboardname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" leaderboardName"}</code> |
| <Link id="m-personalbest" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" personalBest"}</code> |
| <Link id="m-personalbestchange" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" personalBestChange"}</code> |
| <Link id="m-syncpersonalbest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{"> syncPersonalBest"}</code> |
| <Link id="m-syncplayers" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncPlayers"}</code> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{"> syncSetup"}</code> |
| <Link id="m-topplayernames" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] topPlayerNames"}</code> |
| <Link id="m-topplayers" /><code>{"private List<"}<Link to="/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{"> topPlayers"}</code> |
| <Link id="m-topplayertimes" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] topPlayerTimes"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override async void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setupdefinition" /><code>{"async void SetupDefinition("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition)"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkupdate" /><code>{"private async void CheckUpdate("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-syncpersonalbest-2" /><code>{"private void SyncPersonalBest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{" arguments)"}</code> |
| <Link id="m-syncplayers-2" /><code>{"private void SyncPlayers("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffect)"}</code> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/leaderboard-personalbest">{"Leaderboard.PersonalBest"}</Link>{" arguments)"}</code> |
| <Link id="m-updatename" /><code>{"private void UpdateName(string courseName)"}</code> |
| <Link id="m-updateplayerbest" /><code>{"private void UpdatePlayerBest("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" updatedDefinition, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime)"}</code> |
| <Link id="m-updateplayerbest-2" /><code>{"private void UpdatePlayerBest("}<Link to="/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{" data, bool isBestTime, bool isLatestTime = true)"}</code> |
| <Link id="m-updatetext" /><code>{"private void UpdateText(bool hasEffect)"}</code> |

</details>
