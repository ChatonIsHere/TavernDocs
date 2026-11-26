---
title: "DefaultClimbable"
description: "The climbable used when a grabbed collider has no climbable of its own, so plain surfaces can be climbed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DefaultClimbable

A **class** in `Root.Township`, the global namespace.

The climbable used when a grabbed collider has no climbable of its own, so plain surfaces can be climbed. Held by `ClimbingSettings.DefaultClimbable`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`IClimbable`](/mod/game-api/types/global-i-l/iclimbable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DefaultClimbable()"}</code> | Creates a `DefaultClimbable` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> | Always true. |
| <Link id="m-canmove" /><code>{"bool CanMove { get; }"}</code> | Always false. |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> | Always zero. |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> | Always 0. |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | Always null. |
| <Link id="m-grippriority" /><code>{"float GripPriority { get; }"}</code> | Always 1. Climbables with a higher priority win the grab. |
| <Link id="m-maximumpressure" /><code>{"float MaximumPressure { get; }"}</code> | Always -1 (no limit). |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> | Always 0. |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> | Always false. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | Never raised; adding handlers does nothing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"bool ApplyPressure(Vector3 pressure)"}</code> | Ignores the pressure and returns true. |
| <Link id="m-getgravityboost" /><code>{"virtual float GetGravityBoost(Vector3 normal)"}</code> | Returns the surface normal's Y, so flatter tops give more boost. |
