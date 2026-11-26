---
title: "WalkerStepping"
description: "Pauses and resumes a Walker, with a timer that unpauses it after maximumPauseDuration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WalkerStepping

A **class** in `Root.Township`, no namespace.

Pauses and resumes a `Walker`, with a timer that unpauses it after `maximumPauseDuration`. No code calls it, so probably wired to animation or Unity events.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WalkerStepping()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forceunpause" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" forceUnpause"}</code> | Timeline entry for the automatic unpause. |
| <Link id="m-maximumpauseduration" /><code>{"private float maximumPauseDuration"}</code> | Seconds before a pause ends by itself. 0 or less means no limit. |
| <Link id="m-walker" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> | The walker to pause. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pause" /><code>{"void Pause()"}</code> | Pauses the walker and, if `maximumPauseDuration` is above 0, schedules an automatic unpause. |
| <Link id="m-unpause" /><code>{"void Unpause()"}</code> | Cancels the timer and unpauses the walker. |
