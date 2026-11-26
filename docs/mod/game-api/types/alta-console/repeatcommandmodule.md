---
title: "RepeatCommandModule"
description: "Console module repeat: runs the next command typed a set number of times at an interval, or reruns the last command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepeatCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `repeat`: runs the next command typed a set number of times at an interval, or reruns the last command.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Module`

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private static int count"}</code> | <span className="api-desc">Repeat count for the next armed repeater.</span> |
| <Link id="m-interval" /><code>{"private static float interval"}</code> | <span className="api-desc">Seconds between repeats for the next armed repeater.</span> |
| <Link id="m-islogging" /><code>{"private static bool isLogging"}</code> | <span className="api-desc">Whether the next armed repeater logs each iteration.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |
| <Link id="m-nextid" /><code>{"private static uint nextId"}</code> | <span className="api-desc">ID given to the most recently armed repeater.</span> |
| <Link id="m-running" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{"> running"}</code> | <span className="api-desc">Running repeater coroutines by ID.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private static void Handler("}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" result)"}</code> | <span className="api-desc">Custom command handler `Repeat` installs; starts a coroutine that repeats the next matched command and tracks it by ID.</span> |
| <Link id="m-repeat" /><code>{"private static void Repeat(int count, float intervalInSeconds, bool isLoggingProgress = false)"}</code> | <span className="api-desc">`repeat`: arms the repeater so the next command entered runs `count` times, `intervalInSeconds` apart. The private coroutine overload does the looping.</span> |
| <Link id="m-repeat-2" /><code>{"private static IEnumerator Repeat("}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" commandResult, int repeatCount, float interval, bool isLogging) (iterator)"}</code> | <span className="api-desc">`repeat`: arms the repeater so the next command entered runs `count` times, `intervalInSeconds` apart. The private coroutine overload does the looping.</span> |
| <Link id="m-repeatlastasync" /><code>{"private static Task RepeatLastAsync()"}</code> | <span className="api-desc">`repeat last`: runs the last console command again.</span> |
| <Link id="m-stop" /><code>{"private static void Stop(uint id)"}</code> | <span className="api-desc">`repeat stop`: stops the repeater with the given ID.</span> |
| <Link id="m-stopall" /><code>{"private static void StopAll()"}</code> | <span className="api-desc">`repeat stopall`: stops every running repeater.</span> |

</details>
