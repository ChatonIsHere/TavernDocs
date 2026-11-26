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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidContainer`](/mod/game-api/types/alta-stats-effects/iliquidcontainer), [`ILiquidContainerInternal`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticLiquidContainer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The liquid this source gives.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedliquid" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; private set; }"}</code> | <span className="api-desc">The fixed liquid this source gives.</span> |

<details className="api-private">
<summary>13 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-liquid-iliquidcontainer-canremovefrom" /><code>{"private bool Alta.Liquid.ILiquidContainer.CanRemoveFrom { get; set; }"}</code> | <span className="api-desc">Whether liquid can be taken from it. Starts true.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-containerpriority" /><code>{"private int Alta.Liquid.ILiquidContainer.ContainerPriority { get; }"}</code> | <span className="api-desc">Always 1000, so it ranks above normal containers.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-containersize" /><code>{"private int Alta.Liquid.ILiquidContainer.ContainerSize { get; }"}</code> | <span className="api-desc">Always `int.MaxValue`.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-currentcontentlevel" /><code>{"private int Alta.Liquid.ILiquidContainer.CurrentContentLevel { get; }"}</code> | <span className="api-desc">Always `int.MaxValue`.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Liquid.ILiquidContainer.Entity { get; }"}</code> | <span className="api-desc">Always null; this isn't a network entity.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-isallowinggradualconsumption" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsAllowingGradualConsumption { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-isempty" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsEmpty { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-isfull" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsFull { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-receivetransitionmultiplier" /><code>{"private float Alta.Liquid.ILiquidContainer.ReceiveTransitionMultiplier { get; }"}</code> | <span className="api-desc">Always 1.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-spaceleft" /><code>{"private int Alta.Liquid.ILiquidContainer.SpaceLeft { get; }"}</code> | <span className="api-desc">Always `int.MaxValue`.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-surfacevisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" Alta.Liquid.ILiquidContainer.SurfaceVisual { get; }"}</code> | <span className="api-desc">Always null; there is no visual.</span> |
| <Link id="m-alta-liquid-iliquidcontainer-totalliquidamountshown" /><code>{"private float Alta.Liquid.ILiquidContainer.TotalLiquidAmountShown { get; }"}</code> | <span className="api-desc">Always about 2.1 billion.</span> |
| <Link id="m-alta-liquid-iliquidcontainerinternal-outtransition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" Alta.Liquid.ILiquidContainerInternal.OutTransition { get; }"}</code> | <span className="api-desc">Always null.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> | <span className="api-desc">Never raised.</span> |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> | <span className="api-desc">Never raised.</span> |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> | <span className="api-desc">Never raised.</span> |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> | <span className="api-desc">Never raised.</span> |

## Methods

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.AddLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amount, bool isForced)"}</code> | <span className="api-desc">Does nothing and returns true.</span> |
| <Link id="m-addliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.AddLiquidInTransition("}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `ContainedLiquid` from `definition`.</span> |
| <Link id="m-canaddto" /><code>{"private bool Alta.Liquid.ILiquidContainer.CanAddTo("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-fillintocontainer" /><code>{"private bool Alta.Liquid.ILiquidContainer.FillIntoContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int amountToFill, bool isForced)"}</code> | <span className="api-desc">Pours an amount of its liquid into another container.</span> |
| <Link id="m-forceempty" /><code>{"private void Alta.Liquid.ILiquidContainer.ForceEmpty()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"private bool Alta.Liquid.ILiquidContainer.IsCompatibleWithOtherContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | <span className="api-desc">True if the other container is empty or holds the same liquid.</span> |
| <Link id="m-removeliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.RemoveLiquid(int amount, bool isForced)"}</code> | <span className="api-desc">Does nothing and returns true.</span> |
| <Link id="m-removeliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.RemoveLiquidInTransition("}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setcontent" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.SetContent("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> | <span className="api-desc">Does nothing.</span> |

</details>
