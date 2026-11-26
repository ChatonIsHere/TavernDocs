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
| <Link id="m-ctor" /><code>{"TimelineUpdater()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastupdate" /><code>{"private DateTime lastUpdate"}</code> | Wall clock time of the last update. |
| <Link id="m-timeline" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/itimeline">{"ITimeline"}</Link>{" timeline"}</code> | The timeline being driven. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Grabs the timeline, marks the object to survive scene loads and starts the clock. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Advances the timeline by the real time passed since the last frame (wall clock, not Unity time). |

</details>
