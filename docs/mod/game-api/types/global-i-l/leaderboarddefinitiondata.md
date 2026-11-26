---
title: "LeaderboardDefinitionData"
description: "A leaderboard's settings: course name, size and whether lower scores win."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardDefinitionData

A **class** in `Root.Township`, the global namespace.

A leaderboard's settings: course name, size and whether lower scores win. A static list holds one per `LeaderboardDefinition` asset plus any added by the leaderboard console commands.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`LeaderboardComparer`](/mod/game-api/types/global-i-l/leaderboardcomparer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardDefinitionData()"}</code> | <span className="api-desc">Creates a `LeaderboardDefinitionData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coursename" /><code>{"string courseName"}</code> | <span className="api-desc">Display name of the course.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The asset it came from, or null if made by command.</span> |
| <Link id="m-hash" /><code>{"uint hash"}</code> | <span className="api-desc">Identifier: the asset's hash, or the course name's hash code for command-made ones.</span> |
| <Link id="m-islowest" /><code>{"bool isLowest"}</code> | <span className="api-desc">True if lower scores (such as times) rank higher.</span> |
| <Link id="m-size" /><code>{"int size"}</code> | <span className="api-desc">Number of entries kept.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mapped" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> mapped"}</code> | <span className="api-desc">All known leaderboards, from the assets plus any added with `SetData` or `AddData`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-trimmedcoursename" /><code>{"string TrimmedCourseName { get; }"}</code> | <span className="api-desc">Course name with spaces removed, used for lookups.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adddata" /><code>{"static void AddData("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" newData)"}</code> | <span className="api-desc">Adds a leaderboard, replacing any with the same hash.</span> |
| <Link id="m-compare" /><code>{"bool Compare(float a, float b)"}</code> | <span className="api-desc">True if score `b` beats score `a`, taking `isLowest` into account.</span> |
| <Link id="m-getdata" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" GetData(string courseName)"}</code> | <span className="api-desc">Finds a leaderboard by course name, ignoring spaces and case. Null if none.</span> |
| <Link id="m-listavailable" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondatainfo">{"LeaderboardDefinitionDataInfo"}</Link>{"> ListAvailable() (iterator)"}</code> | <span className="api-desc">Lists every known leaderboard as `LeaderboardDefinitionDataInfo`.</span> |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondatainfo">{"LeaderboardDefinitionDataInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" data)"}</code> | <span className="api-desc">Converts to a `LeaderboardDefinitionDataInfo` with just the name.</span> |
| <Link id="m-setdata" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" SetData(string courseName, int size, bool isLowest)"}</code> | <span className="api-desc">Finds or creates a leaderboard by course name. Size and order only change for ones without an asset.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prepare" /><code>{"private static void Prepare()"}</code> | <span className="api-desc">On first use, fills `mapped` with the data of every `LeaderboardDefinition` asset.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LeaderboardDefinitionData`:

<div className="api-used-in">

[`CheckPoint.AddData`](/mod/game-api/types/global-c-d/checkpoint#m-adddata), [`CheckPoint.AddDefinition`](/mod/game-api/types/global-c-d/checkpoint#m-adddefinition), [`CheckPoint.beginningDatas`](/mod/game-api/types/global-c-d/checkpoint#m-beginningdatas), [`CheckPoint.CopyArray`](/mod/game-api/types/global-c-d/checkpoint#m-copyarray), [`CheckPoint.endingDatas`](/mod/game-api/types/global-c-d/checkpoint#m-endingdatas), [`CheckPoint.RemoveData`](/mod/game-api/types/global-c-d/checkpoint#m-removedata), [`CheckPoint.RemoveDefinition`](/mod/game-api/types/global-c-d/checkpoint#m-removedefinition), [`CheckPointData.beginningDatas`](/mod/game-api/types/global-c-d/checkpointdata#m-beginningdatas), [`CheckPointData.endingDatas`](/mod/game-api/types/global-c-d/checkpointdata#m-endingdatas), [`Leaderboard.CheckUpdate`](/mod/game-api/types/global-i-l/leaderboard#m-checkupdate), [`Leaderboard.definitionData`](/mod/game-api/types/global-i-l/leaderboard#m-definitiondata), [`Leaderboard.SetupDefinition`](/mod/game-api/types/global-i-l/leaderboard#m-setupdefinition), [`Leaderboard.UpdatePlayerBest`](/mod/game-api/types/global-i-l/leaderboard#m-updateplayerbest), [`LeaderboardData.definition`](/mod/game-api/types/global-i-l/leaderboarddata#m-definition), [`LeaderboardDefinition.GetData`](/mod/game-api/types/global-i-l/leaderboarddefinition#m-getdata), [`LeaderboardManager.availableLeaderboards`](/mod/game-api/types/global-i-l/leaderboardmanager#m-availableleaderboards), [`LeaderboardManager.GetPlayers`](/mod/game-api/types/global-i-l/leaderboardmanager#m-getplayers), [`LeaderboardManager.GetPlayersBestTime`](/mod/game-api/types/global-i-l/leaderboardmanager#m-getplayersbesttime), [`LeaderboardManager.MarkPlayer`](/mod/game-api/types/global-i-l/leaderboardmanager#m-markplayer), [`LeaderboardManager.onBestTimeUpdated`](/mod/game-api/types/global-i-l/leaderboardmanager#m-onbesttimeupdated), [`LeaderboardManager.ValidateTopPlayers`](/mod/game-api/types/global-i-l/leaderboardmanager#m-validatetopplayers), [`LeaderboardManager.PlayerTracker.Beginnings`](/mod/game-api/types/global-i-l/leaderboardmanager-playertracker#m-beginnings), [`LeaderboardManager.PlayerTracker.BestTimes`](/mod/game-api/types/global-i-l/leaderboardmanager-playertracker#m-besttimes), [`LeaderboardManagerData.Setup`](/mod/game-api/types/global-i-l/leaderboardmanagerdata#m-setup), [`LeaderboardManagerData.LeaderboardEntry.definition`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry#m-definition), [`LeaderboardManagerData.LeaderboardEntry.Setup`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry#m-setup), [`LeaderboardManagerData.PlayerBestTimes.definitions`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes#m-definitions), [`PlayerTimeUpdate.BeginInvoke`](/mod/game-api/types/global-p/playertimeupdate#m-begininvoke), [`PlayerTimeUpdate.Invoke`](/mod/game-api/types/global-p/playertimeupdate#m-invoke).

</div>
