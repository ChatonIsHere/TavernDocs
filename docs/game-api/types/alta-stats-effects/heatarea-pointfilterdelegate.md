---
title: "HeatArea.PointFilterDelegate"
description: "Handler for HeatArea.PointFilter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatArea.PointFilterDelegate

A **delegate** in `Root.Township`, `Alta.Heat`.

Handler for `HeatArea.PointFilter`. Set `isValid` to false to stop a heat point that entered the area from being registered.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`HeatArea`](/game-api/types/alta-stats-effects/heatarea)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PointFilterDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point, ref bool isValid, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isValid, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point, ref bool isValid)"}</code> |

## Used in

Members of other types that take, return or hold a `PointFilterDelegate`:

[`HeatArea.PointFilter`](/game-api/types/alta-stats-effects/heatarea#m-pointfilter).
