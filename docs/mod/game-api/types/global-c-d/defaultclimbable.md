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
| <Link id="m-ctor" /><code>{"DefaultClimbable()"}</code> | <span className="api-desc">Creates a `DefaultClimbable` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-canmove" /><code>{"bool CanMove { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> | <span className="api-desc">Always zero.</span> |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-grippriority" /><code>{"float GripPriority { get; }"}</code> | <span className="api-desc">Always 1. Climbables with a higher priority win the grab.</span> |
| <Link id="m-maximumpressure" /><code>{"float MaximumPressure { get; }"}</code> | <span className="api-desc">Always -1 (no limit).</span> |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> | <span className="api-desc">Always false.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | <span className="api-desc">Never raised; adding handlers does nothing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"bool ApplyPressure(Vector3 pressure)"}</code> | <span className="api-desc">Ignores the pressure and returns true.</span> |
| <Link id="m-getgravityboost" /><code>{"virtual float GetGravityBoost(Vector3 normal)"}</code> | <span className="api-desc">Returns the surface normal's Y, so flatter tops give more boost.</span> |
