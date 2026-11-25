---
title: "LeaderboardDefinitionData"
description: "class LeaderboardDefinitionData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardDefinitionData

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`LeaderboardComparer`](/game-api/types/global-i-l/leaderboardcomparer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardDefinitionData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coursename" /><code>{"string courseName"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> |  |
| <Link id="m-hash" /><code>{"uint hash"}</code> |  |
| <Link id="m-islowest" /><code>{"bool isLowest"}</code> |  |
| <Link id="m-size" /><code>{"int size"}</code> |  |
| <Link id="m-mapped" /><code>{"private static List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> mapped"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-trimmedcoursename" /><code>{"string TrimmedCourseName { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adddata" /><code>{"static void AddData("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" newData)"}</code> |  |
| <Link id="m-compare" /><code>{"bool Compare(float a, float b)"}</code> |  |
| <Link id="m-getdata" /><code>{"static "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" GetData(string courseName)"}</code> |  |
| <Link id="m-listavailable" /><code>{"static IEnumerable<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondatainfo">{"LeaderboardDefinitionDataInfo"}</Link>{"> ListAvailable() (iterator)"}</code> |  |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondatainfo">{"LeaderboardDefinitionDataInfo"}</Link>{" op_Implicit("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" data)"}</code> |  |
| <Link id="m-setdata" /><code>{"static "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" SetData(string courseName, int size, bool isLowest)"}</code> |  |
| <Link id="m-prepare" /><code>{"private static void Prepare()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LeaderboardDefinitionData`:

[`CheckPoint.AddData`](/game-api/types/global-c-d/checkpoint#m-adddata), [`CheckPoint.AddDefinition`](/game-api/types/global-c-d/checkpoint#m-adddefinition), [`CheckPoint.beginningDatas`](/game-api/types/global-c-d/checkpoint#m-beginningdatas), [`CheckPoint.CopyArray`](/game-api/types/global-c-d/checkpoint#m-copyarray), [`CheckPoint.endingDatas`](/game-api/types/global-c-d/checkpoint#m-endingdatas), [`CheckPoint.RemoveData`](/game-api/types/global-c-d/checkpoint#m-removedata), [`CheckPoint.RemoveDefinition`](/game-api/types/global-c-d/checkpoint#m-removedefinition), [`CheckPointData.beginningDatas`](/game-api/types/global-c-d/checkpointdata#m-beginningdatas), [`CheckPointData.endingDatas`](/game-api/types/global-c-d/checkpointdata#m-endingdatas), [`Leaderboard.CheckUpdate`](/game-api/types/global-i-l/leaderboard#m-checkupdate), [`Leaderboard.definitionData`](/game-api/types/global-i-l/leaderboard#m-definitiondata), [`Leaderboard.SetupDefinition`](/game-api/types/global-i-l/leaderboard#m-setupdefinition), [`Leaderboard.UpdatePlayerBest`](/game-api/types/global-i-l/leaderboard#m-updateplayerbest), [`LeaderboardData.definition`](/game-api/types/global-i-l/leaderboarddata#m-definition), [`LeaderboardDefinition.GetData`](/game-api/types/global-i-l/leaderboarddefinition#m-getdata), [`LeaderboardManager.availableLeaderboards`](/game-api/types/global-i-l/leaderboardmanager#m-availableleaderboards), [`LeaderboardManager.GetPlayers`](/game-api/types/global-i-l/leaderboardmanager#m-getplayers), [`LeaderboardManager.GetPlayersBestTime`](/game-api/types/global-i-l/leaderboardmanager#m-getplayersbesttime), [`LeaderboardManager.MarkPlayer`](/game-api/types/global-i-l/leaderboardmanager#m-markplayer), [`LeaderboardManager.onBestTimeUpdated`](/game-api/types/global-i-l/leaderboardmanager#m-onbesttimeupdated), [`LeaderboardManager.ValidateTopPlayers`](/game-api/types/global-i-l/leaderboardmanager#m-validatetopplayers), [`LeaderboardManager.PlayerTracker.Beginnings`](/game-api/types/global-i-l/leaderboardmanager-playertracker#m-beginnings), [`LeaderboardManager.PlayerTracker.BestTimes`](/game-api/types/global-i-l/leaderboardmanager-playertracker#m-besttimes), [`LeaderboardManagerData.Setup`](/game-api/types/global-i-l/leaderboardmanagerdata#m-setup), [`LeaderboardManagerData.LeaderboardEntry.definition`](/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry#m-definition), [`LeaderboardManagerData.LeaderboardEntry.Setup`](/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry#m-setup), [`LeaderboardManagerData.PlayerBestTimes.definitions`](/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes#m-definitions), [`PlayerTimeUpdate.BeginInvoke`](/game-api/types/global-p/playertimeupdate#m-begininvoke), [`PlayerTimeUpdate.Invoke`](/game-api/types/global-p/playertimeupdate#m-invoke).
