---
title: "TimelineUpdater"
description: "Hidden object that Timeline.Instance creates to drive the timeline with real time each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimelineUpdater

A **class** in `Alta.Timing.Runtime`, `Alta.Timing`.

Hidden object that `Timeline.Instance` creates to drive the timeline with real time each frame. Kept across scene loads.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimelineUpdater()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastupdate" /><code>{"private DateTime lastUpdate"}</code> | <span className="api-desc">Wall clock time of the last update.</span> |
| <Link id="m-timeline" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/itimeline">{"ITimeline"}</Link>{" timeline"}</code> | <span className="api-desc">The timeline being driven.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Grabs the timeline, marks the object to survive scene loads and starts the clock.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Advances the timeline by the real time passed since the last frame (wall clock, not Unity time).</span> |

</details>
