---
title: "LiquidTransition"
description: "One pour in progress from a source liquid container into a receiving one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidTransition

A **class** in `Root.Township`, `Alta.Liquid`.

One pour in progress from a source liquid container into a receiving one. Progress builds up and each time it reaches 1, one unit of liquid moves over.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidTransition("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" sourceContainer)"}</code> | Creates a `LiquidTransition` from `sourceContainer`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentcontroller" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" currentController"}</code> | The controller that set the current target. Only it can progress or reset the pour. |
| <Link id="m-isduringtransitionfinishing" /><code>{"private bool isDuringTransitionFinishing"}</code> | True while `OnTransitionFinished` runs, so the reset inside the fill is ignored. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-receivingcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" receivingContainer"}</code> | Backing field for `ReceivingContainer`, the container being poured into, or null. |
| <Link id="m-sourcecontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" sourceContainer"}</code> | Backing field for `SourceContainer`, the container being poured from. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; internal set; }"}</code> | True once the transfer ended, was cancelled or the target was removed. |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> | How far the current unit has got, from 0 to 1. |
| <Link id="m-receivingcontainer-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" ReceivingContainer { get; }"}</code> | The container being poured into, or null when there's no target. |
| <Link id="m-sourcecontainer-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" SourceContainer { get; }"}</code> | The container pouring. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-transitioncancelled" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> TransitionCancelled"}</code> | Raised when the target changes before finishing, or the target's liquid stops being compatible. |
| <Link id="m-transitionfinished" /><code>{"event Action TransitionFinished"}</code> | Raised after a unit of liquid was moved. |
| <Link id="m-transitionstarted" /><code>{"event Action TransitionStarted"}</code> | Raised when a new target is set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-progresstransition" /><code>{"void ProgressTransition(float transitionProgress, "}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> | Adds progress, scaled by the target's receive multiplier and the global liquid speed. Ignored unless called by the current controller. |
| <Link id="m-resetandremovereceivingcontainer" /><code>{"void ResetAndRemoveReceivingContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> | Clears the target and progress and marks the pour finished, if called by the current controller. |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" newReceivingContainer, "}<Link to="/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> | Starts pouring into a new compatible container, cancelling any pour to a previous one. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkiftransitionisstillvalid" /><code>{"private void CheckIfTransitionIsStillValid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | When the receiving container's liquid changes, cancels the pour if the two containers no longer mix. |
| <Link id="m-ontransitionfinished" /><code>{"private void OnTransitionFinished()"}</code> | Moves one unit of liquid into the receiving container if it isn't full, then clears the target. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidTransition`:

[`ILiquidContainerInternal.AddLiquidInTransition`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-addliquidintransition), [`ILiquidContainerInternal.OutTransition`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-outtransition), [`ILiquidContainerInternal.RemoveLiquidInTransition`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-removeliquidintransition), [`LiquidContainer.AddLiquidInTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-addliquidintransition), [`LiquidContainer.Alta.Liquid.ILiquidContainerInternal.OutTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-alta-liquid-iliquidcontainerinternal-outtransition), [`LiquidContainer.ClearContainedLiquidDueToFailedTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-clearcontainedliquidduetofailedtransition), [`LiquidContainer.inTransitions`](/game-api/types/alta-stats-effects/liquidcontainer#m-intransitions), [`LiquidContainer.outTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-outtransition), [`LiquidContainer.RemoveLiquidInTransition`](/game-api/types/alta-stats-effects/liquidcontainer#m-removeliquidintransition), [`LiquidContainer.sortedInTransitions`](/game-api/types/alta-stats-effects/liquidcontainer#m-sortedintransitions), [`StaticLiquidContainer.AddLiquidInTransition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-addliquidintransition), [`StaticLiquidContainer.Alta.Liquid.ILiquidContainerInternal.OutTransition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-alta-liquid-iliquidcontainerinternal-outtransition), [`StaticLiquidContainer.RemoveLiquidInTransition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-removeliquidintransition).
