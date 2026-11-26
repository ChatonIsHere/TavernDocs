---
title: "StaticLiquidContainer"
description: "An endless liquid source of one fixed liquid, with no visual or network entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticLiquidContainer

A **class** in `Root.Township`, `Alta.Liquid`.

An endless liquid source of one fixed liquid, with no visual or network entity. It is never empty or full, and adding or removing always succeeds without changing it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidContainer`](/game-api/types/alta-stats-effects/iliquidcontainer), [`ILiquidContainerInternal`](/game-api/types/alta-stats-effects/iliquidcontainerinternal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticLiquidContainer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" definition"}</code> | The liquid this source gives. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedliquid" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; private set; }"}</code> | The fixed liquid this source gives. |

<details>
<summary>13 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-liquid-iliquidcontainer-canremovefrom" /><code>{"private bool Alta.Liquid.ILiquidContainer.CanRemoveFrom { get; set; }"}</code> | Whether liquid can be taken from it. Starts true. |
| <Link id="m-alta-liquid-iliquidcontainer-containerpriority" /><code>{"private int Alta.Liquid.ILiquidContainer.ContainerPriority { get; }"}</code> | Always 1000, so it ranks above normal containers. |
| <Link id="m-alta-liquid-iliquidcontainer-containersize" /><code>{"private int Alta.Liquid.ILiquidContainer.ContainerSize { get; }"}</code> | Always `int.MaxValue`. |
| <Link id="m-alta-liquid-iliquidcontainer-currentcontentlevel" /><code>{"private int Alta.Liquid.ILiquidContainer.CurrentContentLevel { get; }"}</code> | Always `int.MaxValue`. |
| <Link id="m-alta-liquid-iliquidcontainer-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Liquid.ILiquidContainer.Entity { get; }"}</code> | Always null; this isn't a network entity. |
| <Link id="m-alta-liquid-iliquidcontainer-isallowinggradualconsumption" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsAllowingGradualConsumption { get; }"}</code> | Always false. |
| <Link id="m-alta-liquid-iliquidcontainer-isempty" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsEmpty { get; }"}</code> | Always false. |
| <Link id="m-alta-liquid-iliquidcontainer-isfull" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsFull { get; }"}</code> | Always false. |
| <Link id="m-alta-liquid-iliquidcontainer-receivetransitionmultiplier" /><code>{"private float Alta.Liquid.ILiquidContainer.ReceiveTransitionMultiplier { get; }"}</code> | Always 1. |
| <Link id="m-alta-liquid-iliquidcontainer-spaceleft" /><code>{"private int Alta.Liquid.ILiquidContainer.SpaceLeft { get; }"}</code> | Always `int.MaxValue`. |
| <Link id="m-alta-liquid-iliquidcontainer-surfacevisual" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" Alta.Liquid.ILiquidContainer.SurfaceVisual { get; }"}</code> | Always null; there is no visual. |
| <Link id="m-alta-liquid-iliquidcontainer-totalliquidamountshown" /><code>{"private float Alta.Liquid.ILiquidContainer.TotalLiquidAmountShown { get; }"}</code> | Always about 2.1 billion. |
| <Link id="m-alta-liquid-iliquidcontainerinternal-outtransition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" Alta.Liquid.ILiquidContainerInternal.OutTransition { get; }"}</code> | Always null. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> | Never raised. |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> | Never raised. |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> | Never raised. |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> | Never raised. |

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.AddLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amount, bool isForced)"}</code> | Does nothing and returns true. |
| <Link id="m-addliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.AddLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | Does nothing. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `ContainedLiquid` from `definition`. |
| <Link id="m-canaddto" /><code>{"private bool Alta.Liquid.ILiquidContainer.CanAddTo("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> | Always true. |
| <Link id="m-fillintocontainer" /><code>{"private bool Alta.Liquid.ILiquidContainer.FillIntoContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int amountToFill, bool isForced)"}</code> | Pours an amount of its liquid into another container. |
| <Link id="m-forceempty" /><code>{"private void Alta.Liquid.ILiquidContainer.ForceEmpty()"}</code> | Does nothing. |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsCompatibleWithOtherContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | True if the other container is empty or holds the same liquid. |
| <Link id="m-removeliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.RemoveLiquid(int amount, bool isForced)"}</code> | Does nothing and returns true. |
| <Link id="m-removeliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.RemoveLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | Does nothing. |
| <Link id="m-setcontent" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.SetContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> | Does nothing. |

</details>
