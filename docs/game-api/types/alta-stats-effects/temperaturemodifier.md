---
title: "TemperatureModifier"
description: "delegate TemperatureModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureModifier

A **delegate** in `Root.Township`, `Alta.Heat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureModifier(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref float newtemperature, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref float newtemperature, IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref float newtemperature)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TemperatureModifier`:

[`HeatPoint.TemperatureModifier`](/game-api/types/alta-stats-effects/heatpoint#m-temperaturemodifier).
