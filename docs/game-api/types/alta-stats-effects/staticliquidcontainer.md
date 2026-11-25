---
title: "StaticLiquidContainer"
description: "class StaticLiquidContainer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticLiquidContainer

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidContainer`](/game-api/types/alta-stats-effects/iliquidcontainer), [`ILiquidContainerInternal`](/game-api/types/alta-stats-effects/iliquidcontainerinternal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticLiquidContainer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" definition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedliquid" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; private set; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-canremovefrom" /><code>{"private bool Alta.Liquid.ILiquidContainer.CanRemoveFrom { get; set; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-containerpriority" /><code>{"private int Alta.Liquid.ILiquidContainer.ContainerPriority { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-containersize" /><code>{"private int Alta.Liquid.ILiquidContainer.ContainerSize { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-currentcontentlevel" /><code>{"private int Alta.Liquid.ILiquidContainer.CurrentContentLevel { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Liquid.ILiquidContainer.Entity { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-isallowinggradualconsumption" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsAllowingGradualConsumption { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-isempty" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsEmpty { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-isfull" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsFull { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-receivetransitionmultiplier" /><code>{"private float Alta.Liquid.ILiquidContainer.ReceiveTransitionMultiplier { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-spaceleft" /><code>{"private int Alta.Liquid.ILiquidContainer.SpaceLeft { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-surfacevisual" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" Alta.Liquid.ILiquidContainer.SurfaceVisual { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainer-totalliquidamountshown" /><code>{"private float Alta.Liquid.ILiquidContainer.TotalLiquidAmountShown { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainerinternal-outtransition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" Alta.Liquid.ILiquidContainerInternal.OutTransition { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> |  |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> |  |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> |  |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.AddLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amount, bool isForced)"}</code> |  |
| <Link id="m-addliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.AddLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-canaddto" /><code>{"private bool Alta.Liquid.ILiquidContainer.CanAddTo("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> |  |
| <Link id="m-fillintocontainer" /><code>{"private bool Alta.Liquid.ILiquidContainer.FillIntoContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int amountToFill, bool isForced)"}</code> |  |
| <Link id="m-forceempty" /><code>{"private void Alta.Liquid.ILiquidContainer.ForceEmpty()"}</code> |  |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsCompatibleWithOtherContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> |  |
| <Link id="m-removeliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.RemoveLiquid(int amount, bool isForced)"}</code> |  |
| <Link id="m-removeliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.RemoveLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> |  |
| <Link id="m-setcontent" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.SetContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> |  |
