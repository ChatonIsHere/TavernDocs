---
title: "IClimbable"
description: "Something a climbing hand can grip."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IClimbable

An **interface** in `Root.Township`, the global namespace.

Something a climbing hand can grip. `Climbable` is the usual component; anything without one counts as a `DefaultClimbable`, and `NonClimbable` blocks climbing.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Climbable`](/mod/game-api/types/global-c-d/climbable), [`DefaultClimbable`](/mod/game-api/types/global-c-d/defaultclimbable), [`NonClimbable`](/mod/game-api/types/global-m-o/nonclimbable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> | <span className="api-desc">Whether hands may grab it at all.</span> |
| <Link id="m-canmove" /><code>{"bool CanMove { get; }"}</code> | <span className="api-desc">Whether the object can move while climbed.</span> |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> | <span className="api-desc">Total pressure this step, fading out quickly once hands stop pushing (misspelt in the code).</span> |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> | <span className="api-desc">Current pressure as a fraction of the maximum.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity the grip is stored relative to, so it follows a moving object.</span> |
| <Link id="m-grippriority" /><code>{"float GripPriority { get; }"}</code> | <span className="api-desc">Priority over other overlapping grips. Negative means ungrabbable; `Climbable` returns -1 for non-kinematic rigidbodies.</span> |
| <Link id="m-maximumpressure" /><code>{"float MaximumPressure { get; }"}</code> | <span className="api-desc">Pressure that breaks the grip. -1 means no limit.</span> |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> | <span className="api-desc">Last step's pressure as a fraction of the maximum. Drives the hold strain haptic.</span> |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> | <span className="api-desc">If true, hands let go of it straight away.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | <span className="api-desc">Raised when the grip should break, such as from too much pressure. Climbing hands let go.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"bool ApplyPressure(Vector3 pressure)"}</code> | <span className="api-desc">Adds a hand's pressure for this physics step. False (and `Break` raised) if the total passes the maximum.</span> |
| <Link id="m-getgravityboost" /><code>{"float GetGravityBoost(Vector3 normal)"}</code> | <span className="api-desc">How much of gravity the grip takes on its own for a surface normal. The normal's y by default.</span> |

## Used in

Members of other types that take, return or hold a `IClimbable`:

<div className="api-used-in">

[`ClimbingSettings.DefaultClimbable`](/mod/game-api/types/global-c-d/climbingsettings#m-defaultclimbable), [`ClimbingHand.climbable`](/mod/game-api/types/game-other-namespaces/climbinghand#m-climbable), [`ClimbingHand.getColliderClimbable`](/mod/game-api/types/game-other-namespaces/climbinghand#m-getcolliderclimbable), [`ClimbingHand.getRigidbodyClimbable`](/mod/game-api/types/game-other-namespaces/climbinghand#m-getrigidbodyclimbable).

</div>
