---
title: "IClimbable"
description: "interface IClimbable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IClimbable

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Climbable`](/game-api/types/global-c-d/climbable), [`DefaultClimbable`](/game-api/types/global-c-d/defaultclimbable), [`NonClimbable`](/game-api/types/global-m-o/nonclimbable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> |  |
| <Link id="m-canmove" /><code>{"bool CanMove { get; }"}</code> |  |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> |  |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-grippriority" /><code>{"float GripPriority { get; }"}</code> |  |
| <Link id="m-maximumpressure" /><code>{"float MaximumPressure { get; }"}</code> |  |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> |  |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"bool ApplyPressure(Vector3 pressure)"}</code> |  |
| <Link id="m-getgravityboost" /><code>{"float GetGravityBoost(Vector3 normal)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IClimbable`:

[`ClimbingSettings.DefaultClimbable`](/game-api/types/global-c-d/climbingsettings#m-defaultclimbable), [`ClimbingHand.climbable`](/game-api/types/game-other-namespaces/climbinghand#m-climbable), [`ClimbingHand.getColliderClimbable`](/game-api/types/game-other-namespaces/climbinghand#m-getcolliderclimbable), [`ClimbingHand.getRigidbodyClimbable`](/game-api/types/game-other-namespaces/climbinghand#m-getrigidbodyclimbable).
