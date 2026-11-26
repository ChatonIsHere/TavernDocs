---
title: "ITimeline"
description: "Something that TimelineUpdater advances each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITimeline

An **interface** in `Alta.Timing.Runtime`, `Alta.Timing`.

Something that `TimelineUpdater` advances each frame. `Timeline` is the only implementation.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`Timeline`](/game-api/types/assembly-other/timeline)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(TimeSpan deltaTime)"}</code> | Advances the timeline by the given time and runs whatever is due. |

## Used in

Members of other types that take, return or hold a `ITimeline`:

[`TimelineUpdater.timeline`](/game-api/types/assembly-other/timelineupdater#m-timeline).
