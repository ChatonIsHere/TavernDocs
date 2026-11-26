---
title: "TimeCommandModule"
description: "Console module time: sets and reads the time of day and advances real (timeline) time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `time`: sets and reads the time of day and advances real (timeline) time. Server and play mode only.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `ServerOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-future" /><code>{"private static void Future(float progress, char measure = s)"}</code> | `time future`: moves the timeline forward by an amount in seconds, minutes, hours or days (`s`, `m`, `h`, `d`). |
| <Link id="m-keywords" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"> Keywords()"}</code> | `time keywords`: lists the named times `time set` accepts. |
| <Link id="m-printcurrenttime" /><code>{"private static TimeSpan PrintCurrentTime()"}</code> | `time`: logs and returns the current timeline time. |
| <Link id="m-printcurrenttimeofday" /><code>{"private static void PrintCurrentTimeOfDay(bool isNormalised = false)"}</code> | `time ofday`: logs the time of day, raw or normalised. |
| <Link id="m-set" /><code>{"private static void Set(string time)"}</code> | `time set`: moves time of day to a 24-hour value or a keyword. Normalised time 0 is 06:00. |
| <Link id="m-toggledaynight" /><code>{"private static void ToggleDayNight()"}</code> | `time toggle`: jumps to evening (0.75) if it is day, otherwise to morning (0.25). |

</details>
