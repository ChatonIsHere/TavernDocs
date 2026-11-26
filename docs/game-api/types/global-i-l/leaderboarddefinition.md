---
title: "LeaderboardDefinition"
description: "Asset for a leaderboard (a course), with its size and whether lower scores are better."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardDefinition

A **class** in `Root.Township`, no namespace.

Asset for a leaderboard (a course), with its size and whether lower scores are better.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`HashedGeneralValue<LeaderboardDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LeaderboardDefinition`](/game-api/types/global-i-l/leaderboarddefinition)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LeaderboardDefinition()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coursename" /><code>{"private string courseName"}</code> | Backing field for `CourseName`, the name of the course or challenge ranked. |
| <Link id="m-islowest" /><code>{"private bool isLowest"}</code> | True when the lowest score ranks first (probably for times). Default true. |
| <Link id="m-size" /><code>{"private int size"}</code> | How many entries the leaderboard keeps. Default 5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coursename-2" /><code>{"string CourseName { get; }"}</code> | Course name shown for the leaderboard. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" GetData()"}</code> | A `LeaderboardDefinitionData` with this definition, its hash, name, size and lowest-is-best flag. |

## Used in

Members of other types that take, return or hold a `LeaderboardDefinition`:

[`CheckPoint.beginnings`](/game-api/types/global-c-d/checkpoint#m-beginnings), [`CheckPoint.CopyArray`](/game-api/types/global-c-d/checkpoint#m-copyarray), [`CheckPoint.endings`](/game-api/types/global-c-d/checkpoint#m-endings), [`CheckPoint.SerializeArray`](/game-api/types/global-c-d/checkpoint#m-serializearray), [`Leaderboard.definition`](/game-api/types/global-i-l/leaderboard#m-definition), [`LeaderboardDefinitionData.definition`](/game-api/types/global-i-l/leaderboarddefinitiondata#m-definition), [`LeaderboardManagerDataOld.LeaderboardEntry.definition`](/game-api/types/global-i-l/leaderboardmanagerdataold-leaderboardentry#m-definition), [`LeaderboardManagerDataOld.PlayerBestTimes.definitions`](/game-api/types/global-i-l/leaderboardmanagerdataold-playerbesttimes#m-definitions).
