---
title: "OptimizationManager.Direction"
description: "Which way OptimizationManager is stepping quality: towards performance, holding still, or towards graphics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimizationManager.Direction

An **private enum** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Which way `OptimizationManager` is stepping quality: towards performance, holding still, or towards graphics.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`OptimizationManager`](/mod/game-api/types/global-m-o/optimizationmanager)

## Values

| Member |
| --- |
| <Link id="m-graphicsup" /><code>{"GraphicsUp = 2"}</code> |
| <Link id="m-performanceup" /><code>{"PerformanceUp = 0"}</code> |
| <Link id="m-still" /><code>{"Still = 1"}</code> |

## Used in

Members of other types that take, return or hold a `Direction`:

[`OptimizationManager.stepDirection`](/mod/game-api/types/global-m-o/optimizationmanager#m-stepdirection).
