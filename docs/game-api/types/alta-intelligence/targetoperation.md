---
title: "TargetOperation"
description: "One scoring rule a creature action uses to rate a possible target (a sense, a stat, distance and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetOperation

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

One scoring rule a creature action uses to rate a possible target (a sense, a stat, distance and so on). The decider multiplies each result by `Weight`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`Chance`](/game-api/types/alta-intelligence/chance), [`FailTargetOperation`](/game-api/types/alta-intelligence/failtargetoperation), [`Formula<T>`](/game-api/types/alta-intelligence/formula-t), [`Grounded`](/game-api/types/alta-intelligence/grounded), [`InverseLerpSenseSelf`](/game-api/types/alta-intelligence/inverselerpsenseself), [`InverseLerpSenseTarget`](/game-api/types/alta-intelligence/inverselerpsensetarget), [`Lifetime`](/game-api/types/alta-intelligence/lifetime), [`RaycastGrounded`](/game-api/types/alta-intelligence/raycastgrounded), [`RVOBlockedValue`](/game-api/types/alta-intelligence/rvoblockedvalue), [`SameTarget`](/game-api/types/alta-intelligence/sametarget), [`Schmeechee.Operation`](/game-api/types/alta-intelligence/schmeechee-operation), [`StatValue`](/game-api/types/alta-intelligence/statvalue), [`VelocityLimit`](/game-api/types/alta-intelligence/velocitylimit)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected TargetOperation()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weight" /><code>{"float Weight { get; private set; }"}</code> | Multiplier on this operation's result. 1 by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"abstract float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Scores a target for an agent. |
| <Link id="m-setweight" /><code><Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" SetWeight(float weight)"}</code> | Sets `Weight` and returns the operation, for chaining. |

## Used in

Members of other types that take, return or hold a `TargetOperation`:

[`Action<TAgent>.CalculateBasePreferred`](/game-api/types/alta-intelligence/action-tagent#m-calculatebasepreferred), [`Action<TAgent>.CalculateBaseRequired`](/game-api/types/alta-intelligence/action-tagent#m-calculatebaserequired), [`Action<TAgent>.CalculateTargetPreferred`](/game-api/types/alta-intelligence/action-tagent#m-calculatetargetpreferred), [`Action<TAgent>.CalculateTargetRequired`](/game-api/types/alta-intelligence/action-tagent#m-calculatetargetrequired), [`ActionComponent.AddChildrenTo`](/game-api/types/alta-intelligence/actioncomponent#m-addchildrento), [`ActionDecider<TAgent>.CalculatePreferred`](/game-api/types/alta-intelligence/actiondecider-tagent#m-calculatepreferred), [`ActionDecider<TAgent>.CalculateRequired`](/game-api/types/alta-intelligence/actiondecider-tagent#m-calculaterequired), [`ChanceOperation.GetOperation`](/game-api/types/alta-intelligence/chanceoperation#m-getoperation), [`CreateTargetOperation.Chance`](/game-api/types/alta-intelligence/createtargetoperation#m-chance), [`CreateTargetOperation.Fail`](/game-api/types/alta-intelligence/createtargetoperation#m-fail), [`CreateTargetOperation.Formula`](/game-api/types/alta-intelligence/createtargetoperation#m-formula), [`CreateTargetOperation.Grounded`](/game-api/types/alta-intelligence/createtargetoperation#m-grounded), [`CreateTargetOperation.Lifetime`](/game-api/types/alta-intelligence/createtargetoperation#m-lifetime), [`CreateTargetOperation.RaycastGrounded`](/game-api/types/alta-intelligence/createtargetoperation#m-raycastgrounded), [`CreateTargetOperation.RVOBlocked`](/game-api/types/alta-intelligence/createtargetoperation#m-rvoblocked), [`CreateTargetOperation.SameTarget`](/game-api/types/alta-intelligence/createtargetoperation#m-sametarget), [`CreateTargetOperation.Sense`](/game-api/types/alta-intelligence/createtargetoperation#m-sense), [`CreateTargetOperation.Stat`](/game-api/types/alta-intelligence/createtargetoperation#m-stat), [`CreateTargetOperation.VelocityLimit`](/game-api/types/alta-intelligence/createtargetoperation#m-velocitylimit), [`DistanceOperation.GetOperation`](/game-api/types/alta-intelligence/distanceoperation#m-getoperation), [`FacingOperation.GetOperation`](/game-api/types/alta-intelligence/facingoperation#m-getoperation), [`GroundedOperation.GetOperation`](/game-api/types/alta-intelligence/groundedoperation#m-getoperation), [`IAction.CalculateBasePreferred`](/game-api/types/alta-intelligence/iaction#m-calculatebasepreferred), [`IAction.CalculateBaseRequired`](/game-api/types/alta-intelligence/iaction#m-calculatebaserequired), [`IAction.CalculateTargetPreferred`](/game-api/types/alta-intelligence/iaction#m-calculatetargetpreferred), [`IAction.CalculateTargetRequired`](/game-api/types/alta-intelligence/iaction#m-calculatetargetrequired), [`LifetimeOperation.GetOperation`](/game-api/types/alta-intelligence/lifetimeoperation#m-getoperation), [`OldSenseOperation.GetOperation`](/game-api/types/alta-intelligence/oldsenseoperation#m-getoperation), [`RaycastGroundedOperation.GetOperation`](/game-api/types/alta-intelligence/raycastgroundedoperation#m-getoperation), [`RVOBlockedOperation.GetOperation`](/game-api/types/alta-intelligence/rvoblockedoperation#m-getoperation), [`SameTargetOperation.GetOperation`](/game-api/types/alta-intelligence/sametargetoperation#m-getoperation), [`SchmeecheeOperation.GetOperation`](/game-api/types/alta-intelligence/schmeecheeoperation#m-getoperation), [`SenseOperation.GetOperation`](/game-api/types/alta-intelligence/senseoperation#m-getoperation), [`StatOperation.GetOperation`](/game-api/types/alta-intelligence/statoperation#m-getoperation), [`TargetOperationComponent.GetOperation`](/game-api/types/alta-intelligence/targetoperationcomponent#m-getoperation), [`VelocityLimitOperation.GetOperation`](/game-api/types/alta-intelligence/velocitylimitoperation#m-getoperation), [`ViewConeOperation.GetOperation`](/game-api/types/alta-intelligence/viewconeoperation#m-getoperation).
