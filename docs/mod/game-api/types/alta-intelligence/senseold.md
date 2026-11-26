---
title: "SenseOld"
description: "Old list of AI senses (noise, movement, danger, distance, view cone and so on), still used by the older sense operations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenseOld

An **enum** in `Root.Township`, `Alta.Intelligence`.

Old list of AI senses (noise, movement, danger, distance, view cone and so on), still used by the older sense operations.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Values

| Member |
| --- |
| <Link id="m-armed" /><code>{"Armed = 9"}</code> |
| <Link id="m-asleep" /><code>{"Asleep = 10"}</code> |
| <Link id="m-bird" /><code>{"Bird = 6"}</code> |
| <Link id="m-bug" /><code>{"Bug = 5"}</code> |
| <Link id="m-danger" /><code>{"Danger = 2"}</code> |
| <Link id="m-distance" /><code>{"Distance = 13"}</code> |
| <Link id="m-distancesquared" /><code>{"DistanceSquared = 14"}</code> |
| <Link id="m-facing2d" /><code>{"Facing2D = 17"}</code> |
| <Link id="m-facing3d" /><code>{"Facing3D = 18"}</code> |
| <Link id="m-flesh" /><code>{"Flesh = 4"}</code> |
| <Link id="m-food" /><code>{"Food = 11"}</code> |
| <Link id="m-hurt" /><code>{"Hurt = 8"}</code> |
| <Link id="m-life" /><code>{"Life = 3"}</code> |
| <Link id="m-movement" /><code>{"Movement = 1"}</code> |
| <Link id="m-noise" /><code>{"Noise = 0"}</code> |
| <Link id="m-none" /><code>{"None = 19"}</code> |
| <Link id="m-plant" /><code>{"Plant = 7"}</code> |
| <Link id="m-swine" /><code>{"Swine = 12"}</code> |
| <Link id="m-velocity" /><code>{"Velocity = 16"}</code> |
| <Link id="m-viewcone" /><code>{"ViewCone = 15"}</code> |

## Used in

Members of other types that take, return or hold a `SenseOld`:

[`BasicSenseSet.Modify`](/mod/game-api/types/alta-intelligence/basicsenseset#m-modify), [`CreateTargetOperation.Sense`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-sense), [`OldSenseOperation.Migrate`](/mod/game-api/types/alta-intelligence/oldsenseoperation#m-migrate), [`OldSenseOperation.sense`](/mod/game-api/types/alta-intelligence/oldsenseoperation#m-sense), [`Sense.GetSense`](/mod/game-api/types/alta-intelligence/sense#m-getsense), [`Sense.oldEquivalent`](/mod/game-api/types/alta-intelligence/sense#m-oldequivalent), [`Sense.oldMapping`](/mod/game-api/types/alta-intelligence/sense#m-oldmapping), [`SenseSetup.sense`](/mod/game-api/types/alta-intelligence/sensesetup#m-sense).
