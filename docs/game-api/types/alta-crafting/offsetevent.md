---
title: "OffsetEvent"
description: "class OffsetEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OffsetEvent

A **class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OffsetEvent("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline, TimeSpan minimumDelay, TimeSpan offsetDelay, Action delayedEvent)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-delayedevent" /><code>{"private Action delayedEvent"}</code> |
| <Link id="m-lastoffset" /><code>{"private TimeSpan lastOffset"}</code> |
| <Link id="m-minimumdelay" /><code>{"private TimeSpan minimumDelay"}</code> |
| <Link id="m-offsetdelay" /><code>{"private TimeSpan offsetDelay"}</code> |
| <Link id="m-timeline" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-offset" /><code>{"void Offset()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `OffsetEvent`:

[`OffsetEventHelper.CreateOffset`](/game-api/types/alta-crafting/offseteventhelper#m-createoffset).
