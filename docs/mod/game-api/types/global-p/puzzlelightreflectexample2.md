---
title: "PuzzleLightReflectExample2"
description: "Leftover example script for predicting light reflections with gizmos."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleLightReflectExample2

A **class** in `Root.Township`, the global namespace.

Leftover example script for predicting light reflections with gizmos. `OnDrawGizmos` is empty, so it draws nothing.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleLightReflectExample2()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxreflectioncount" /><code>{"int maxReflectionCount"}</code> | <span className="api-desc">Bounces to draw.</span> |
| <Link id="m-maxstepdistance" /><code>{"float maxStepDistance"}</code> | <span className="api-desc">Raycast length per bounce.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawpredictedreflectionpattern" /><code>{"private void DrawPredictedReflectionPattern(Vector3 position, Vector3 direction, int reflectionRemaining)"}</code> | <span className="api-desc">Draws yellow gizmo lines along a raycast path that bounces off surfaces until reflections run out.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Empty.</span> |

</details>
