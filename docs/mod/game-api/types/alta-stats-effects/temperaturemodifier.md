---
title: "TemperatureModifier"
description: "Handler for HeatPoint.TemperatureModifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureModifier

A **delegate** in `Root.Township`, `Alta.Heat`.

Handler for `HeatPoint.TemperatureModifier`. Can change a new temperature by reference before the heat point stores it, as `HeatPointTemperatureController` does to clamp it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureModifier(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref float newtemperature, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref float newtemperature, IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref float newtemperature)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `TemperatureModifier`:

<div className="api-used-in">

[`HeatPoint.TemperatureModifier`](/mod/game-api/types/alta-stats-effects/heatpoint#m-temperaturemodifier).

</div>
