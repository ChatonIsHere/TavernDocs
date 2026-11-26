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

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exittutorial" /><code>{"private static async Task ExitTutorial("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Command `exit`: despawns the player's tutorial.</span> |
| <Link id="m-getactivetutorialforplayer" /><code>{"private static async Task<IResult<"}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{">> GetActiveTutorialForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Returns the player's active tutorial as a result, or an error if they have none.</span> |
| <Link id="m-gettutorialsystem" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{"> GetTutorialSystem()"}</code> | <span className="api-desc">Resolves the micro tutorial system from the game's static lifetime scope.</span> |
| <Link id="m-listactivetutorials" /><code>{"private static async Task<string> ListActiveTutorials()"}</code> | <span className="api-desc">Command `active`: lists the active tutorials and their players.</span> |
| <Link id="m-listavailabletutorials" /><code>{"private static async Task<string> ListAvailableTutorials()"}</code> | <span className="api-desc">Command `list`: lists every `MicroTutorialSettings` with its hash.</span> |
| <Link id="m-nextstep" /><code>{"private static async Task<string> NextStep("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Command `next-step` (alias `next`): broadcasts a force-complete event. Every active step listens to it, not only this player's.</span> |
| <Link id="m-setloglevel" /><code>{"private static string SetLogLevel(int level)"}</code> | <span className="api-desc">Command `set-log-level`: sets the micro tutorial log level, 0 (trace) to 5 (fatal).</span> |
| <Link id="m-starttutorial" /><code>{"private static async Task StartTutorial("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> | <span className="api-desc">Command `start`: spawns the given tutorial for the player.</span> |

</details>
