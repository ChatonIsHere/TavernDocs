---
title: "MicroTutorialModule"
description: "static class MicroTutorialModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialModule

A **static class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Attributes** `ServerOnly`, `DevOnly`, `Module`, `Alias`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exittutorial" /><code>{"private static async Task ExitTutorial("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-getactivetutorialforplayer" /><code>{"private static async Task<IResult<"}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{">> GetActiveTutorialForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-gettutorialsystem" /><code>{"private static async Task<"}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{"> GetTutorialSystem()"}</code> |  |
| <Link id="m-listactivetutorials" /><code>{"private static async Task<string> ListActiveTutorials()"}</code> |  |
| <Link id="m-listavailabletutorials" /><code>{"private static async Task<string> ListAvailableTutorials()"}</code> |  |
| <Link id="m-nextstep" /><code>{"private static async Task<string> NextStep("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setloglevel" /><code>{"private static string SetLogLevel(int level)"}</code> |  |
| <Link id="m-starttutorial" /><code>{"private static async Task StartTutorial("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> |  |
