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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TemperatureModifier(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref float newtemperature, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref float newtemperature, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref float newtemperature)"}</code> |

## Used in

Members of other types that take, return or hold a `TemperatureModifier`:

[`HeatPoint.TemperatureModifier`](/game-api/types/alta-stats-effects/heatpoint#m-temperaturemodifier).
