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

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private static int count"}</code> | Repeat count for the next armed repeater. |
| <Link id="m-interval" /><code>{"private static float interval"}</code> | Seconds between repeats for the next armed repeater. |
| <Link id="m-islogging" /><code>{"private static bool isLogging"}</code> | Whether the next armed repeater logs each iteration. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |
| <Link id="m-nextid" /><code>{"private static uint nextId"}</code> | ID given to the most recently armed repeater. |
| <Link id="m-running" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{"> running"}</code> | Running repeater coroutines by ID. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private static void Handler("}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" result)"}</code> | Custom command handler `Repeat` installs; starts a coroutine that repeats the next matched command and tracks it by ID. |
| <Link id="m-repeat" /><code>{"private static void Repeat(int count, float intervalInSeconds, bool isLoggingProgress = false)"}</code> | `repeat`: arms the repeater so the next command entered runs `count` times, `intervalInSeconds` apart. The private coroutine overload does the looping. |
| <Link id="m-repeat-2" /><code>{"private static IEnumerator Repeat("}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" commandResult, int repeatCount, float interval, bool isLogging) (iterator)"}</code> | `repeat`: arms the repeater so the next command entered runs `count` times, `intervalInSeconds` apart. The private coroutine overload does the looping. |
| <Link id="m-repeatlastasync" /><code>{"private static Task RepeatLastAsync()"}</code> | `repeat last`: runs the last console command again. |
| <Link id="m-stop" /><code>{"private static void Stop(uint id)"}</code> | `repeat stop`: stops the repeater with the given ID. |
| <Link id="m-stopall" /><code>{"private static void StopAll()"}</code> | `repeat stopall`: stops every running repeater. |

</details>
