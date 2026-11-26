---
title: "ProfilingPositionCycler.ProfilingPosition"
description: "A named camera spot (position and rotation) in the ProfilingPositionCycler global settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingPositionCycler.ProfilingPosition

A **class** in `Root.Township`, no namespace.

A named camera spot (position and rotation) in the `ProfilingPositionCycler` global settings. The profiler moves the camera through these in turn.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProfilingPositionCycler`](/game-api/types/global-p/profilingpositioncycler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfilingPosition(Transform refTransform)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Label for the spot, used in the profiling results. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position to place the camera at. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Camera rotation at this spot. Defaults to identity. |

## Used in

Members of other types that take, return or hold a `ProfilingPosition`:

[`ProfilingPositionCycler.positions`](/game-api/types/global-p/profilingpositioncycler#m-positions).
