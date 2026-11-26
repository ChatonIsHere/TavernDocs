---
title: "WalkerStepping"
description: "Pauses and resumes a Walker, with a timer that unpauses it after maximumPauseDuration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WalkerStepping

A **class** in `Root.Township`, the global namespace.

Pauses and resumes a `Walker`, with a timer that unpauses it after `maximumPauseDuration`. No code calls it, so probably wired to animation or Unity events.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WalkerStepping()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forceunpause" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" forceUnpause"}</code> | <span className="api-desc">Timeline entry for the automatic unpause.</span> |
| <Link id="m-maximumpauseduration" /><code>{"private float maximumPauseDuration"}</code> | <span className="api-desc">Seconds before a pause ends by itself. 0 or less means no limit.</span> |
| <Link id="m-walker" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> | <span className="api-desc">The walker to pause.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pause" /><code>{"void Pause()"}</code> | <span className="api-desc">Pauses the walker and, if `maximumPauseDuration` is above 0, schedules an automatic unpause.</span> |
| <Link id="m-unpause" /><code>{"void Unpause()"}</code> | <span className="api-desc">Cancels the timer and unpauses the walker.</span> |
