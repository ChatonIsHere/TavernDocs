---
title: "RepeatCommandModule"
description: "static class RepeatCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepeatCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `Module`

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-count" /><code>{"private static int count"}</code> |
| <Link id="m-interval" /><code>{"private static float interval"}</code> |
| <Link id="m-islogging" /><code>{"private static bool isLogging"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-nextid" /><code>{"private static uint nextId"}</code> |
| <Link id="m-running" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{"> running"}</code> |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handler" /><code>{"private static void Handler("}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" result)"}</code> |
| <Link id="m-repeat" /><code>{"private static void Repeat(int count, float intervalInSeconds, bool isLoggingProgress = false)"}</code> |
| <Link id="m-repeat-2" /><code>{"private static IEnumerator Repeat("}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" commandResult, int repeatCount, float interval, bool isLogging) (iterator)"}</code> |
| <Link id="m-repeatlastasync" /><code>{"private static Task RepeatLastAsync()"}</code> |
| <Link id="m-stop" /><code>{"private static void Stop(uint id)"}</code> |
| <Link id="m-stopall" /><code>{"private static void StopAll()"}</code> |

</details>
