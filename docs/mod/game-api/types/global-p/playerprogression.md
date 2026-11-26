---
title: "PlayerProgression"
description: "Server: a log record of a progression event (level up, skill bought or skill sold), written by PathExperience to the level-stats trace log."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgression

A **class** in `Root.Township`, the global namespace.

Server: a log record of a progression event (level up, skill bought or skill sold), written by `PathExperience` to the `level-stats` trace log.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested types** [`EventTypeEnum`](/mod/game-api/types/global-p/playerprogression-eventtypeenum)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProgression("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/global-p/playerprogression-eventtypeenum">{"PlayerProgression.EventTypeEnum"}</Link>{" eventType, uint currentLevel, uint hash = 0)"}</code> | <span className="api-desc">Creates a `PlayerProgression` from `player`, `path`, `eventType`, `currentLevel` and `hash`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"uint CurrentLevel { get; }"}</code> | <span className="api-desc">The player's level in the path at the time.</span> |
| <Link id="m-eventtype" /><code>{"string EventType { get; }"}</code> | <span className="api-desc">Event name: `LevelUp`, `SkillBought` or `SkillSold`.</span> |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Hash of the skill slot bought or sold, or 0 for a level up.</span> |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> | <span className="api-desc">Name of the progression path.</span> |
| <Link id="m-playerid" /><code>{"int PlayerID { get; }"}</code> | <span className="api-desc">The player's user id.</span> |
