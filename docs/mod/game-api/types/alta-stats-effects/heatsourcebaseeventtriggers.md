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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatSourceBaseEventTriggers()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakextinguish" /><code>{"private UnityEvent breakExtinguish"}</code> | <span className="api-desc">Invoked on the heat source's `BreakExtinguish` event.</span> |
| <Link id="m-extinguished" /><code>{"private UnityEvent extinguished"}</code> | <span className="api-desc">Invoked when the heat source is put out.</span> |
| <Link id="m-heatsourcebase" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{" heatSourceBase"}</code> | <span className="api-desc">The heat source on the same object.</span> |
| <Link id="m-invertedtoggleevent" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" invertedToggleEvent"}</code> | <span className="api-desc">Invoked on the heat source's `InvertedToggleEvent`.</span> |
| <Link id="m-toggleevent" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" toggleEvent"}</code> | <span className="api-desc">Invoked on the heat source's `ToggleEvent`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"void Copy(UnityEventBase toggleEvent, UnityEventBase invertedToggleEvent, UnityEventBase extinguished, UnityEventBase breakExtinguish)"}</code> | <span className="api-desc">Replaces all four UnityEvents with the given ones.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks each heat source event to its matching UnityEvent.</span> |

</details>
