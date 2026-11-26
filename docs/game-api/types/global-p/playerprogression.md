---
title: "PlayerProgression"
description: "Server: a log record of a progression event (level up, skill bought or skill sold), written by PathExperience to the level-stats trace log."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgression

A **class** in `Root.Township`, no namespace.

Server: a log record of a progression event (level up, skill bought or skill sold), written by `PathExperience` to the `level-stats` trace log.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested types** [`EventTypeEnum`](/game-api/types/global-p/playerprogression-eventtypeenum)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerProgression("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/global-p/playerprogression-eventtypeenum">{"PlayerProgression.EventTypeEnum"}</Link>{" eventType, uint currentLevel, uint hash = 0)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"uint CurrentLevel { get; }"}</code> | The player's level in the path at the time. |
| <Link id="m-eventtype" /><code>{"string EventType { get; }"}</code> | Event name: `LevelUp`, `SkillBought` or `SkillSold`. |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Hash of the skill slot bought or sold, or 0 for a level up. |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> | Name of the progression path. |
| <Link id="m-playerid" /><code>{"int PlayerID { get; }"}</code> | The player's user id. |
