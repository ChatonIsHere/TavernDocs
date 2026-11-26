---
title: "IClimbable"
description: "Something a climbing hand can grip."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IClimbable

An **interface** in `Root.Township`, no namespace.

Something a climbing hand can grip. `Climbable` is the usual component; anything without one counts as a `DefaultClimbable`, and `NonClimbable` blocks climbing.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Climbable`](/game-api/types/global-c-d/climbable), [`DefaultClimbable`](/game-api/types/global-c-d/defaultclimbable), [`NonClimbable`](/game-api/types/global-m-o/nonclimbable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> | Whether hands may grab it at all. |
| <Link id="m-canmove" /><code>{"bool CanMove { get; }"}</code> | Whether the object can move while climbed. |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> | Total pressure this step, fading out quickly once hands stop pushing (misspelt in the code). |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> | Current pressure as a fraction of the maximum. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity the grip is stored relative to, so it follows a moving object. |
| <Link id="m-grippriority" /><code>{"float GripPriority { get; }"}</code> | Priority over other overlapping grips. Negative means ungrabbable; `Climbable` returns -1 for non-kinematic rigidbodies. |
| <Link id="m-maximumpressure" /><code>{"float MaximumPressure { get; }"}</code> | Pressure that breaks the grip. -1 means no limit. |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> | Last step's pressure as a fraction of the maximum. Drives the hold strain haptic. |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> | If true, hands let go of it straight away. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | Raised when the grip should break, such as from too much pressure. Climbing hands let go. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"bool ApplyPressure(Vector3 pressure)"}</code> | Adds a hand's pressure for this physics step. False (and `Break` raised) if the total passes the maximum. |
| <Link id="m-getgravityboost" /><code>{"float GetGravityBoost(Vector3 normal)"}</code> | How much of gravity the grip takes on its own for a surface normal. The normal's y by default. |

## Used in

Members of other types that take, return or hold a `IClimbable`:

[`ClimbingSettings.DefaultClimbable`](/game-api/types/global-c-d/climbingsettings#m-defaultclimbable), [`ClimbingHand.climbable`](/game-api/types/game-other-namespaces/climbinghand#m-climbable), [`ClimbingHand.getColliderClimbable`](/game-api/types/game-other-namespaces/climbinghand#m-getcolliderclimbable), [`ClimbingHand.getRigidbodyClimbable`](/game-api/types/game-other-namespaces/climbinghand#m-getrigidbodyclimbable).
