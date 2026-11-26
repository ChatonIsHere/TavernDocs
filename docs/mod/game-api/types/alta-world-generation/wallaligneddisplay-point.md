---
title: "WallAlignedDisplay.Point"
description: "One cell offset inside WallAlignedDisplay's check radius, with a weight that falls off with distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WallAlignedDisplay.Point

A **private class** in `Root.Township`, `Alta.Caves.Displays`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One cell offset inside `WallAlignedDisplay`'s check radius, with a weight that falls off with distance. Built once in `Initialize`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`WallAlignedDisplay`](/mod/game-api/types/alta-world-generation/wallaligneddisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Point(int x, int y, Vector2 direction, float value)"}</code> | Creates a `WallAlignedDisplay.Point` from `x`, `y`, `direction` and `value`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"Vector2 Direction { get; private set; }"}</code> | The offset as a vector, used to sum up which way the nearby wall lies. |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | Weight of the cell: distance left to the check radius, divided by the threshold. |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> | X offset from the centre cell. |
| <Link id="m-y" /><code>{"int Y { get; private set; }"}</code> | Second grid offset from the centre cell (Z in map terms). |

## Used in

Members of other types that take, return or hold a `Point`:

[`WallAlignedDisplay.checkPoints`](/mod/game-api/types/alta-world-generation/wallaligneddisplay#m-checkpoints).
