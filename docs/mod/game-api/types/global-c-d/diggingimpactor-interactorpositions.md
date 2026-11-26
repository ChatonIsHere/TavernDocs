---
title: "DiggingImpactor.InteractorPositions"
description: "Where a hand was when it grabbed a buried DiggingImpactor, used to measure the pull or twist that unburies it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactor.InteractorPositions

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Where a hand was when it grabbed a buried `DiggingImpactor`, used to measure the pull or twist that unburies it.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DiggingImpactor`](/mod/game-api/types/global-c-d/diggingimpactor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractorPositions(Transform transform, Vector3 position, float distanceToPivot)"}</code> | Creates a `DiggingImpactor.InteractorPositions` from `transform`, `position` and `distanceToPivot`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancetopivot" /><code>{"float distanceToPivot"}</code> | The grab point's distance from the pivot along the pull-out direction, a lever arm for torque. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Hand position at grab time. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | The hand's ghost controller transform. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-movement" /><code>{"Vector3 Movement { get; }"}</code> | How far the hand has moved since it grabbed. |

## Used in

Members of other types that take, return or hold a `InteractorPositions`:

[`DiggingImpactor.interactorPositions`](/mod/game-api/types/global-c-d/diggingimpactor#m-interactorpositions).
