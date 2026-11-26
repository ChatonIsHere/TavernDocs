---
title: "MicroTutorialModule"
description: "Server, dev-only console module microtutorial (alias mt) for listing, starting, stepping and exiting micro tutorials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialModule

A **static class** in `Root.Township`, `ATT.MicroTutorial`.

Server, dev-only console module `microtutorial` (alias `mt`) for listing, starting, stepping and exiting micro tutorials.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Attributes** `ServerOnly`, `DevOnly`, `Module`, `Alias`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exittutorial" /><code>{"private static async Task ExitTutorial("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Command `exit`: despawns the player's tutorial. |
| <Link id="m-getactivetutorialforplayer" /><code>{"private static async Task<IResult<"}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{">> GetActiveTutorialForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Returns the player's active tutorial as a result, or an error if they have none. |
| <Link id="m-gettutorialsystem" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{"> GetTutorialSystem()"}</code> | Resolves the micro tutorial system from the game's static lifetime scope. |
| <Link id="m-listactivetutorials" /><code>{"private static async Task<string> ListActiveTutorials()"}</code> | Command `active`: lists the active tutorials and their players. |
| <Link id="m-listavailabletutorials" /><code>{"private static async Task<string> ListAvailableTutorials()"}</code> | Command `list`: lists every `MicroTutorialSettings` with its hash. |
| <Link id="m-nextstep" /><code>{"private static async Task<string> NextStep("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Command `next-step` (alias `next`): broadcasts a force-complete event. Every active step listens to it, not only this player's. |
| <Link id="m-setloglevel" /><code>{"private static string SetLogLevel(int level)"}</code> | Command `set-log-level`: sets the micro tutorial log level, 0 (trace) to 5 (fatal). |
| <Link id="m-starttutorial" /><code>{"private static async Task StartTutorial("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> | Command `start`: spawns the given tutorial for the player. |

</details>
