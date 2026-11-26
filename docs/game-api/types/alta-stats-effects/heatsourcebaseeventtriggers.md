---
title: "HeatSourceBaseEventTriggers"
description: "Exposes a HeatSourceBase's events (toggled, extinguished, break extinguish) as inspector UnityEvents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatSourceBaseEventTriggers

A **class** in `Root.Township`, `Alta.Heat`.

Exposes a `HeatSourceBase`'s events (toggled, extinguished, break extinguish) as inspector UnityEvents.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatSourceBaseEventTriggers()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakextinguish" /><code>{"private UnityEvent breakExtinguish"}</code> | Invoked on the heat source's `BreakExtinguish` event. |
| <Link id="m-extinguished" /><code>{"private UnityEvent extinguished"}</code> | Invoked when the heat source is put out. |
| <Link id="m-heatsourcebase" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{" heatSourceBase"}</code> | The heat source on the same object. |
| <Link id="m-invertedtoggleevent" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" invertedToggleEvent"}</code> | Invoked on the heat source's `InvertedToggleEvent`. |
| <Link id="m-toggleevent" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" toggleEvent"}</code> | Invoked on the heat source's `ToggleEvent`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"void Copy(UnityEventBase toggleEvent, UnityEventBase invertedToggleEvent, UnityEventBase extinguished, UnityEventBase breakExtinguish)"}</code> | Replaces all four UnityEvents with the given ones. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks each heat source event to its matching UnityEvent. |

</details>
