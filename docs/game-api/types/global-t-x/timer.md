---
title: "Timer"
description: "A small stopwatch over Time.realtimeSinceStartup that can be paused, resumed and topped up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timer

A **class** in `Root.Township`, no namespace.

A small stopwatch over `Time.realtimeSinceStartup` that can be paused, resumed and topped up. Not a component; create it with `new`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Timer()"}</code> | Creates a `Timer` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savedduration" /><code>{"private float savedDuration"}</code> | Seconds counted by previous runs and `Add` calls. |
| <Link id="m-start" /><code>{"private float start"}</code> | Real time the current run began, or -1 when stopped. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | Total seconds counted so far, including the current run if the timer is going. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(float seconds)"}</code> | Adds the given seconds to the stored duration. |
| <Link id="m-start-2" /><code>{"void Start()"}</code> | Starts or resumes counting. Does nothing if already running. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Pauses counting and folds the current run into the stored duration. |
| <Link id="m-stopandreset" /><code>{"void StopAndReset()"}</code> | Stops the timer and sets the duration back to zero. |
