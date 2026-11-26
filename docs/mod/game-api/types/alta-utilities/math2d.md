---
title: "Math2d"
description: "Static 2D geometry helpers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Math2d

A **static class** in `Root.Township`, `Alta`.

Static 2D geometry helpers.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-linesegmentsintersection" /><code>{"static bool LineSegmentsIntersection(Vector2 a1, Vector2 a2, Vector2 b1, Vector3 b2, out float aProgress, out float bProgress)"}</code> | <span className="api-desc">Returns true if segments a1-a2 and b1-b2 cross, giving how far along each the crossing is (0 to 1). `b2` is a Vector3 but only x and y are used.</span> |
