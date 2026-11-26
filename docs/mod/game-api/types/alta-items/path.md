---
title: "Path"
description: "Base class for a path a mechanism part moves along, such as StraightPath or BendPath."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Path

An **abstract class** in `Root.Township`, `Alta.Mechanisms`.

Base class for a path a mechanism part moves along, such as `StraightPath` or `BendPath`. Used by `Scrubber`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BendPath`](/mod/game-api/types/alta-items/bendpath), [`StraightPath`](/mod/game-api/types/alta-items/straightpath)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Path()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"abstract float GetProgress(Transform transform)"}</code> | <span className="api-desc">Returns how far along the path (0 to 1) the given transform is.</span> |
| <Link id="m-settransform" /><code>{"abstract void SetTransform(Transform transform, float lerp)"}</code> | <span className="api-desc">Moves the given transform to the point on the path at the given progress (0 to 1).</span> |

## Used in

Members of other types that take, return or hold a `Path`:

<div className="api-used-in">

[`Scrubber.path`](/mod/game-api/types/alta-items/scrubber#m-path).

</div>
