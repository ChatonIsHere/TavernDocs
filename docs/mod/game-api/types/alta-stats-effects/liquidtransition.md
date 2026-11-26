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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidTransition("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" sourceContainer)"}</code> | <span className="api-desc">Creates a `LiquidTransition` from `sourceContainer`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentcontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" currentController"}</code> | <span className="api-desc">The controller that set the current target. Only it can progress or reset the pour.</span> |
| <Link id="m-isduringtransitionfinishing" /><code>{"private bool isDuringTransitionFinishing"}</code> | <span className="api-desc">True while `OnTransitionFinished` runs, so the reset inside the fill is ignored.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-receivingcontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" receivingContainer"}</code> | <span className="api-desc">Backing field for `ReceivingContainer`, the container being poured into, or null.</span> |
| <Link id="m-sourcecontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" sourceContainer"}</code> | <span className="api-desc">Backing field for `SourceContainer`, the container being poured from.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; internal set; }"}</code> | <span className="api-desc">True once the transfer ended, was cancelled or the target was removed.</span> |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> | <span className="api-desc">How far the current unit has got, from 0 to 1.</span> |
| <Link id="m-receivingcontainer-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" ReceivingContainer { get; }"}</code> | <span className="api-desc">The container being poured into, or null when there's no target.</span> |
| <Link id="m-sourcecontainer-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" SourceContainer { get; }"}</code> | <span className="api-desc">The container pouring.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-transitioncancelled" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> TransitionCancelled"}</code> | <span className="api-desc">Raised when the target changes before finishing, or the target's liquid stops being compatible.</span> |
| <Link id="m-transitionfinished" /><code>{"event Action TransitionFinished"}</code> | <span className="api-desc">Raised after a unit of liquid was moved.</span> |
| <Link id="m-transitionstarted" /><code>{"event Action TransitionStarted"}</code> | <span className="api-desc">Raised when a new target is set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-progresstransition" /><code>{"void ProgressTransition(float transitionProgress, "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> | <span className="api-desc">Adds progress, scaled by the target's receive multiplier and the global liquid speed. Ignored unless called by the current controller.</span> |
| <Link id="m-resetandremovereceivingcontainer" /><code>{"void ResetAndRemoveReceivingContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> | <span className="api-desc">Clears the target and progress and marks the pour finished, if called by the current controller.</span> |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" newReceivingContainer, "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidtransitioncontroller">{"ILiquidTransitionController"}</Link>{" controller)"}</code> | <span className="api-desc">Starts pouring into a new compatible container, cancelling any pour to a previous one.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkiftransitionisstillvalid" /><code>{"private void CheckIfTransitionIsStillValid("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | <span className="api-desc">When the receiving container's liquid changes, cancels the pour if the two containers no longer mix.</span> |
| <Link id="m-ontransitionfinished" /><code>{"private void OnTransitionFinished()"}</code> | <span className="api-desc">Moves one unit of liquid into the receiving container if it isn't full, then clears the target.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidTransition`:

<div className="api-used-in">

[`ILiquidContainerInternal.AddLiquidInTransition`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-addliquidintransition), [`ILiquidContainerInternal.OutTransition`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-outtransition), [`ILiquidContainerInternal.RemoveLiquidInTransition`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-removeliquidintransition), [`LiquidContainer.AddLiquidInTransition`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-addliquidintransition), [`LiquidContainer.Alta.Liquid.ILiquidContainerInternal.OutTransition`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-alta-liquid-iliquidcontainerinternal-outtransition), [`LiquidContainer.ClearContainedLiquidDueToFailedTransition`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-clearcontainedliquidduetofailedtransition), [`LiquidContainer.inTransitions`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-intransitions), [`LiquidContainer.outTransition`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-outtransition), [`LiquidContainer.RemoveLiquidInTransition`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-removeliquidintransition), [`LiquidContainer.sortedInTransitions`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-sortedintransitions), [`StaticLiquidContainer.AddLiquidInTransition`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-addliquidintransition), [`StaticLiquidContainer.Alta.Liquid.ILiquidContainerInternal.OutTransition`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-alta-liquid-iliquidcontainerinternal-outtransition), [`StaticLiquidContainer.RemoveLiquidInTransition`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-removeliquidintransition).

</div>
