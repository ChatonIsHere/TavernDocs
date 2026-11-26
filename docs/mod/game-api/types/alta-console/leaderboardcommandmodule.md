---
title: "LeaderboardCommandModule"
description: "Console module leaderboard for setting up course leaderboards and their checkpoints."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `leaderboard` for setting up course leaderboards and their checkpoints. Server only. The board and checkpoint commands act on the selected object.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Module`, `ServerOnly`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefinitiondata" /><code>{"static void CreateDefinitionData(string courseName, bool isLowest = true)"}</code> | <span className="api-desc">Command `leaderboard create`: creates a leaderboard definition for a course. `isLowest` probably means lower scores rank higher.</span> |
| <Link id="m-getranking" /><code>{"static async Task<IEnumerable<"}<Link to="/mod/game-api/types/global-p/playerdatainfo">{"PlayerDataInfo"}</Link>{">> GetRanking(string courseName)"}</code> | <span className="api-desc">Command `leaderboard get-rank` (alias `rank`): the current player rankings for a course.</span> |
| <Link id="m-list" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondatainfo">{"LeaderboardDefinitionDataInfo"}</Link>{"> List()"}</code> | <span className="api-desc">Command `leaderboard list`: the available leaderboard definitions.</span> |
| <Link id="m-removecheckpoint" /><code>{"static void RemoveCheckPoint(string courseName, bool isBeginning)"}</code> | <span className="api-desc">Command `leaderboard remove-checkpoint` (alias `remove`): removes a course from the selected checkpoint, as start or end.</span> |
| <Link id="m-setboard" /><code>{"static void SetBoard(string courseName)"}</code> | <span className="api-desc">Command `leaderboard set-board` (alias `board`): makes the selected leaderboard show a course.</span> |
| <Link id="m-setcheckpoint" /><code>{"static void SetCheckpoint(string courseName, bool isBeginning)"}</code> | <span className="api-desc">Command `leaderboard set-checkpoint` (alias `point`): adds a course to the selected checkpoint, as start or end.</span> |
