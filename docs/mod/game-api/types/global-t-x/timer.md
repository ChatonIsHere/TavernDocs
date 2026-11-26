---
title: "Timer"
description: "A small stopwatch over Time.realtimeSinceStartup that can be paused, resumed and topped up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timer

A **class** in `Root.Township`, the global namespace.

A small stopwatch over `Time.realtimeSinceStartup` that can be paused, resumed and topped up. Not a component; create it with `new`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Timer()"}</code> | <span className="api-desc">Creates a `Timer` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savedduration" /><code>{"private float savedDuration"}</code> | <span className="api-desc">Seconds counted by previous runs and `Add` calls.</span> |
| <Link id="m-start" /><code>{"private float start"}</code> | <span className="api-desc">Real time the current run began, or -1 when stopped.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">Total seconds counted so far, including the current run if the timer is going.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(float seconds)"}</code> | <span className="api-desc">Adds the given seconds to the stored duration.</span> |
| <Link id="m-start-2" /><code>{"void Start()"}</code> | <span className="api-desc">Starts or resumes counting. Does nothing if already running.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Pauses counting and folds the current run into the stored duration.</span> |
| <Link id="m-stopandreset" /><code>{"void StopAndReset()"}</code> | <span className="api-desc">Stops the timer and sets the duration back to zero.</span> |
