---
title: "TickTimer"
description: "Repeating timer on the game Timeline that fires Ticked at a fixed interval, and can be saved and reloaded with the world."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TickTimer

A **class** in `Root.Township`, the global namespace.

Repeating timer on the game `Timeline` that fires `Ticked` at a fixed interval, and can be saved and reloaded with the world.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TickTimer(TimeSpan interval)"}</code> | Creates a `TickTimer` from `interval`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | The current timeline entry. |
| <Link id="m-interval" /><code>{"private TimeSpan interval"}</code> | Time between ticks. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ticked" /><code>{"event Action Ticked"}</code> | Raised every interval. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"int Load(TimeSpan time)"}</code> | Restarts from a saved time and returns how many ticks were missed while unloaded. It doesn't fire them. |
| <Link id="m-save" /><code>{"TimeSpan Save()"}</code> | Returns the time of the next tick, for saving. |
| <Link id="m-start" /><code>{"void Start()"}</code> | Restarts the timer, first tick one interval from now. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Cancels the timeline entry. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tick" /><code>{"private void Tick()"}</code> | Raises `Ticked`. |

</details>

## Used in

Members of other types that take, return or hold a `TickTimer`:

[`BasicPopulation.Timer`](/mod/game-api/types/alta-world-generation/basicpopulation#m-timer).
