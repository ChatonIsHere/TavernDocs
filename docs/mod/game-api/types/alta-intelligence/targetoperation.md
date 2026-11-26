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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`Chance`](/mod/game-api/types/alta-intelligence/chance), [`FailTargetOperation`](/mod/game-api/types/alta-intelligence/failtargetoperation), [`Formula<T>`](/mod/game-api/types/alta-intelligence/formula-t), [`Grounded`](/mod/game-api/types/alta-intelligence/grounded), [`InverseLerpSenseSelf`](/mod/game-api/types/alta-intelligence/inverselerpsenseself), [`InverseLerpSenseTarget`](/mod/game-api/types/alta-intelligence/inverselerpsensetarget), [`Lifetime`](/mod/game-api/types/alta-intelligence/lifetime), [`RaycastGrounded`](/mod/game-api/types/alta-intelligence/raycastgrounded), [`RVOBlockedValue`](/mod/game-api/types/alta-intelligence/rvoblockedvalue), [`SameTarget`](/mod/game-api/types/alta-intelligence/sametarget), [`Schmeechee.Operation`](/mod/game-api/types/alta-intelligence/schmeechee-operation), [`StatValue`](/mod/game-api/types/alta-intelligence/statvalue), [`VelocityLimit`](/mod/game-api/types/alta-intelligence/velocitylimit)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TargetOperation()"}</code> | Creates a `TargetOperation` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weight" /><code>{"float Weight { get; private set; }"}</code> | Multiplier on this operation's result. 1 by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"abstract float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Scores a target for an agent. |
| <Link id="m-setweight" /><code><Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" SetWeight(float weight)"}</code> | Sets `Weight` and returns the operation, for chaining. |

## Used in

Members of other types that take, return or hold a `TargetOperation`:

[`Action<TAgent>.CalculateBasePreferred`](/mod/game-api/types/alta-intelligence/action-tagent#m-calculatebasepreferred), [`Action<TAgent>.CalculateBaseRequired`](/mod/game-api/types/alta-intelligence/action-tagent#m-calculatebaserequired), [`Action<TAgent>.CalculateTargetPreferred`](/mod/game-api/types/alta-intelligence/action-tagent#m-calculatetargetpreferred), [`Action<TAgent>.CalculateTargetRequired`](/mod/game-api/types/alta-intelligence/action-tagent#m-calculatetargetrequired), [`ActionComponent.AddChildrenTo`](/mod/game-api/types/alta-intelligence/actioncomponent#m-addchildrento), [`ActionDecider<TAgent>.CalculatePreferred`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-calculatepreferred), [`ActionDecider<TAgent>.CalculateRequired`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-calculaterequired), [`ChanceOperation.GetOperation`](/mod/game-api/types/alta-intelligence/chanceoperation#m-getoperation), [`CreateTargetOperation.Chance`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-chance), [`CreateTargetOperation.Fail`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-fail), [`CreateTargetOperation.Formula`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-formula), [`CreateTargetOperation.Grounded`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-grounded), [`CreateTargetOperation.Lifetime`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-lifetime), [`CreateTargetOperation.RaycastGrounded`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-raycastgrounded), [`CreateTargetOperation.RVOBlocked`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-rvoblocked), [`CreateTargetOperation.SameTarget`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-sametarget), [`CreateTargetOperation.Sense`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-sense), [`CreateTargetOperation.Stat`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-stat), [`CreateTargetOperation.VelocityLimit`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-velocitylimit), [`DistanceOperation.GetOperation`](/mod/game-api/types/alta-intelligence/distanceoperation#m-getoperation), [`FacingOperation.GetOperation`](/mod/game-api/types/alta-intelligence/facingoperation#m-getoperation), [`GroundedOperation.GetOperation`](/mod/game-api/types/alta-intelligence/groundedoperation#m-getoperation), [`IAction.CalculateBasePreferred`](/mod/game-api/types/alta-intelligence/iaction#m-calculatebasepreferred), [`IAction.CalculateBaseRequired`](/mod/game-api/types/alta-intelligence/iaction#m-calculatebaserequired), [`IAction.CalculateTargetPreferred`](/mod/game-api/types/alta-intelligence/iaction#m-calculatetargetpreferred), [`IAction.CalculateTargetRequired`](/mod/game-api/types/alta-intelligence/iaction#m-calculatetargetrequired), [`LifetimeOperation.GetOperation`](/mod/game-api/types/alta-intelligence/lifetimeoperation#m-getoperation), [`OldSenseOperation.GetOperation`](/mod/game-api/types/alta-intelligence/oldsenseoperation#m-getoperation), [`RaycastGroundedOperation.GetOperation`](/mod/game-api/types/alta-intelligence/raycastgroundedoperation#m-getoperation), [`RVOBlockedOperation.GetOperation`](/mod/game-api/types/alta-intelligence/rvoblockedoperation#m-getoperation), [`SameTargetOperation.GetOperation`](/mod/game-api/types/alta-intelligence/sametargetoperation#m-getoperation), [`SchmeecheeOperation.GetOperation`](/mod/game-api/types/alta-intelligence/schmeecheeoperation#m-getoperation), [`SenseOperation.GetOperation`](/mod/game-api/types/alta-intelligence/senseoperation#m-getoperation), [`StatOperation.GetOperation`](/mod/game-api/types/alta-intelligence/statoperation#m-getoperation), [`TargetOperationComponent.GetOperation`](/mod/game-api/types/alta-intelligence/targetoperationcomponent#m-getoperation), [`VelocityLimitOperation.GetOperation`](/mod/game-api/types/alta-intelligence/velocitylimitoperation#m-getoperation), [`ViewConeOperation.GetOperation`](/mod/game-api/types/alta-intelligence/viewconeoperation#m-getoperation).
