---
title: "GeometryHelperMethods"
description: "Point and segment tests on the XZ plane (Y is ignored)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeometryHelperMethods

A **static class** in `Root.Township`, `Alta.Utilities`.

Point and segment tests on the XZ plane (Y is ignored).

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested types** [`Orientation`](/game-api/types/alta-utilities/geometryhelpermethods-orientation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ispointinsidepolygonxz" /><code>{"static bool IsPointInsidePolygonXZ(Vector3 position, IList<Vector3> polygonVertices)"}</code> | Whether a point is inside a polygon on the XZ plane, by ray casting. A point on an edge counts as inside. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areintersecting" /><code>{"private static bool AreIntersecting("}<Link to="/game-api/types/alta-utilities/line">{"Line"}</Link>{" line1, "}<Link to="/game-api/types/alta-utilities/line">{"Line"}</Link>{" line2)"}</code> | Whether two segments cross on the XZ plane, counting touching ends. |
| <Link id="m-intersectionorientation" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/geometryhelpermethods-orientation">{"GeometryHelperMethods.Orientation"}</Link>{" IntersectionOrientation("}<Link to="/game-api/types/alta-utilities/line">{"Line"}</Link>{" line, Vector3 c)"}</code> | Whether a point is clockwise, anticlockwise or collinear relative to a line on the XZ plane. |
| <Link id="m-iscolinearpointonline" /><code>{"private static bool IsColinearPointOnLine("}<Link to="/game-api/types/alta-utilities/line">{"Line"}</Link>{" line, Vector3 point)"}</code> | Whether a point already known to be collinear lies within the segment's XZ bounds. |

</details>
