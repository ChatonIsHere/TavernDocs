---
title: "OffsetEvent"
description: "Debounced call on a Timeline: runs an action once Offset hasn't been called for a minimum delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OffsetEvent

A **class** in `Root.Township`, `Alta.Woodcutting`.

Debounced call on a `Timeline`: runs an action once `Offset` hasn't been called for a minimum delay. Made with `Timeline.CreateOffset`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OffsetEvent("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline, TimeSpan minimumDelay, TimeSpan offsetDelay, Action delayedEvent)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayedevent" /><code>{"private Action delayedEvent"}</code> | The action to run. |
| <Link id="m-lastoffset" /><code>{"private TimeSpan lastOffset"}</code> | Timeline time of the last `Offset` (or creation). |
| <Link id="m-minimumdelay" /><code>{"private TimeSpan minimumDelay"}</code> | Quiet time needed after the last offset before the action runs. |
| <Link id="m-offsetdelay" /><code>{"private TimeSpan offsetDelay"}</code> | Delay before each check. |
| <Link id="m-timeline" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline"}</code> | Timeline used for timing and scheduling checks. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"void Offset()"}</code> | Pushes the action back, counting the delay from now. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | Runs the action if enough time has passed since the last offset, otherwise checks again later. |

</details>

## Used in

Members of other types that take, return or hold a `OffsetEvent`:

[`OffsetEventHelper.CreateOffset`](/game-api/types/alta-crafting/offseteventhelper#m-createoffset).
