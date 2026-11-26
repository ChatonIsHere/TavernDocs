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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OffsetEvent("}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline, TimeSpan minimumDelay, TimeSpan offsetDelay, Action delayedEvent)"}</code> | <span className="api-desc">Creates an `OffsetEvent` from `timeline`, `minimumDelay`, `offsetDelay` and `delayedEvent`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayedevent" /><code>{"private Action delayedEvent"}</code> | <span className="api-desc">The action to run.</span> |
| <Link id="m-lastoffset" /><code>{"private TimeSpan lastOffset"}</code> | <span className="api-desc">Timeline time of the last `Offset` (or creation).</span> |
| <Link id="m-minimumdelay" /><code>{"private TimeSpan minimumDelay"}</code> | <span className="api-desc">Quiet time needed after the last offset before the action runs.</span> |
| <Link id="m-offsetdelay" /><code>{"private TimeSpan offsetDelay"}</code> | <span className="api-desc">Delay before each check.</span> |
| <Link id="m-timeline" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline"}</code> | <span className="api-desc">Timeline used for timing and scheduling checks.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"void Offset()"}</code> | <span className="api-desc">Pushes the action back, counting the delay from now.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | <span className="api-desc">Runs the action if enough time has passed since the last offset, otherwise checks again later.</span> |

</details>

## Used in

Members of other types that take, return or hold a `OffsetEvent`:

<div className="api-used-in">

[`OffsetEventHelper.CreateOffset`](/mod/game-api/types/alta-crafting/offseteventhelper#m-createoffset).

</div>
