---
title: "LiquidTransition"
description: "class LiquidTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidTransition

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidTransition("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" sourceContainer)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentcontroller" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" currentController"}</code> |  |
| <Link id="m-isduringtransitionfinishing" /><code>{"private bool isDuringTransitionFinishing"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-receivingcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" receivingContainer"}</code> |  |
| <Link id="m-sourcecontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" sourceContainer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; internal set; }"}</code> |  |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> |  |
| <Link id="m-receivingcontainer-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" ReceivingContainer { get; }"}</code> |  |
| <Link id="m-sourcecontainer-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" SourceContainer { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-transitioncancelled" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> TransitionCancelled"}</code> |  |
| <Link id="m-transitionfinished" /><code>{"event Action TransitionFinished"}</code> |  |
| <Link id="m-transitionstarted" /><code>{"event Action TransitionStarted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-progresstransition" /><code>{"void ProgressTransition(float transitionProgress, "}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> |  |
| <Link id="m-resetandremovereceivingcontainer" /><code>{"void ResetAndRemoveReceivingContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> |  |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" newReceivingContainer, "}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> |  |
| <Link id="m-checkiftransitionisstillvalid" /><code>{"private void CheckIfTransitionIsStillValid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> |  |
| <Link id="m-ontransitionfinished" /><code>{"private void OnTransitionFinished()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidTransition`:

[`ILiquidContainerInternal.AddLiquidInTransition`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-addliquidintransition), [`ILiquidContainerInternal.OutTransition`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-outtransition), [`ILiquidContainerInternal.RemoveLiquidInTransition`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-removeliquidintransition), [`LiquidContainer.AddLiquidInTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-addliquidintransition), [`LiquidContainer.Alta.Liquid.ILiquidContainerInternal.OutTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-alta-liquid-iliquidcontainerinternal-outtransition), [`LiquidContainer.ClearContainedLiquidDueToFailedTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-clearcontainedliquidduetofailedtransition), [`LiquidContainer.inTransitions`](/game-api/types/alta-stats-effects/liquidcontainer#m-intransitions), [`LiquidContainer.outTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-outtransition), [`LiquidContainer.RemoveLiquidInTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-removeliquidintransition), [`LiquidContainer.sortedInTransitions`](/game-api/types/alta-stats-effects/liquidcontainer#m-sortedintransitions), [`StaticLiquidContainer.AddLiquidInTransition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-addliquidintransition), [`StaticLiquidContainer.Alta.Liquid.ILiquidContainerInternal.OutTransition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-alta-liquid-iliquidcontainerinternal-outtransition), [`StaticLiquidContainer.RemoveLiquidInTransition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-removeliquidintransition).
