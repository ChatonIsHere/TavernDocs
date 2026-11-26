---
title: "MiningBaseGenerator.Point"
description: "Integer 3D grid point used by MiningBaseGenerator to lay out parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator.Point

A **struct** in `Root.Township`, the global namespace.

Integer 3D grid point used by `MiningBaseGenerator` to lay out parts.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MiningBaseGenerator`](/mod/game-api/types/global-m-o/miningbasegenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Point(int x = 0, int y = 0, int z = 0)"}</code> | Creates a `MiningBaseGenerator.Point` from `x`, `y` and `z`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-x" /><code>{"int X { get; set; }"}</code> | X coordinate of the point. |
| <Link id="m-y" /><code>{"int Y { get; set; }"}</code> | Vertical coordinate; `Rotate` leaves it unchanged. |
| <Link id="m-z" /><code>{"int Z { get; set; }"}</code> | Z coordinate of the point. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotate" /><code><Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" Rotate(int rotations)"}</code> | Returns the point turned by the given number of quarter turns around the Y axis. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Formats the point as `( X Y Z )`. |

## Used in

Members of other types that take, return or hold a `Point`:

[`MiningBaseGenerator.ChoosePossibility`](/mod/game-api/types/global-m-o/miningbasegenerator#m-choosepossibility), [`MiningBaseGenerator.GeneratePossibilities`](/mod/game-api/types/global-m-o/miningbasegenerator#m-generatepossibilities), [`MiningBaseGenerator.priority`](/mod/game-api/types/global-m-o/miningbasegenerator#m-priority), [`MiningBaseGenerator.queue`](/mod/game-api/types/global-m-o/miningbasegenerator#m-queue), [`MiningBaseGenerator.Possibility.offset`](/mod/game-api/types/global-m-o/miningbasegenerator-possibility#m-offset).
