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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RepeatIfHasTarget()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | The creature whose target is checked. |
| <Link id="m-baserate" /><code>{"private float baseRate"}</code> | Backing field for `BaseRate` (default 2). |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | The repeating `Timeline` entry, or null when stopped. |
| <Link id="m-nexttick" /><code>{"private float nextTick"}</code> | Unused. |
| <Link id="m-ticked" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ticked"}</code> | The event invoked on each tick with a target. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baserate-2" /><code>{"float BaseRate { get; set; }"}</code> | Ticks per second. Only read in `OnEnable`, so a change applies the next time the component is enabled. |
| <Link id="m-ratemultiplier" /><code>{"float RateMultiplier { get; set; }"}</code> | Scales the rate (default 1). Only read in `OnEnable`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tick" /><code>{"protected virtual void Tick()"}</code> | Invokes `ticked` if the creature has a target. Virtual, so subclasses can change it. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the repeating timer. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Server: ticks once, then schedules a repeating tick on `Timeline` every 1 / (`BaseRate` x `RateMultiplier`) seconds. Disables itself on clients. |

</details>
