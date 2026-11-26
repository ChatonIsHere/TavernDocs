---
title: "PlayerAchievementResponse"
description: "Web API model listing the achievements a player has."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerAchievementResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model listing the achievements a player has.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerAchievementResponse()"}</code> | Creates a `PlayerAchievementResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-achievementhashes" /><code>{"IEnumerable<uint> AchievementHashes { get; set; }"}</code> | Hashes of the achievements the player has earned. |

## Used in

Members of other types that take, return or hold a `PlayerAchievementResponse`:

[`LowLevelApiClient.GetAchievementForUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getachievementforuserasync).
