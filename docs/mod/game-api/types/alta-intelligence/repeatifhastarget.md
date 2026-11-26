---
title: "RepeatIfHasTarget"
description: "Component that fires a prefab event at a fixed rate while its creature has a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepeatIfHasTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Component that fires a prefab event at a fixed rate while its creature has a target. Server only; it disables itself on clients.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepeatIfHasTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | <span className="api-desc">The creature whose target is checked.</span> |
| <Link id="m-baserate" /><code>{"private float baseRate"}</code> | <span className="api-desc">Backing field for `BaseRate` (default 2).</span> |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">The repeating `Timeline` entry, or null when stopped.</span> |
| <Link id="m-nexttick" /><code>{"private float nextTick"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-ticked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ticked"}</code> | <span className="api-desc">The event invoked on each tick with a target.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baserate-2" /><code>{"float BaseRate { get; set; }"}</code> | <span className="api-desc">Ticks per second. Only read in `OnEnable`, so a change applies the next time the component is enabled.</span> |
| <Link id="m-ratemultiplier" /><code>{"float RateMultiplier { get; set; }"}</code> | <span className="api-desc">Scales the rate (default 1). Only read in `OnEnable`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tick" /><code>{"protected virtual void Tick()"}</code> | <span className="api-desc">Invokes `ticked` if the creature has a target. Virtual, so subclasses can change it.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the repeating timer.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Server: ticks once, then schedules a repeating tick on `Timeline` every 1 / (`BaseRate` x `RateMultiplier`) seconds. Disables itself on clients.</span> |

</details>
