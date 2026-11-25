---
title: "ILiquidContainer"
description: "Anything that can hold liquid in whole units: buckets, flasks, cauldrons (LiquidContainer) and endless sources such as water (StaticLiquidContainer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILiquidContainer

An **interface** in `Root.Township`, `Alta.Liquid`.

Anything that can hold liquid in whole units: buckets, flasks, cauldrons (`LiquidContainer`) and endless sources such as water (`StaticLiquidContainer`). Filling and emptying only works on the server.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`StaticLiquidContainer`](/game-api/types/alta-stats-effects/staticliquidcontainer)
- **Documented in** [Liquids](/game-api/game-systems/liquids#iliquidcontainer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canremovefrom" /><code>{"bool CanRemoveFrom { get; set; }"}</code> | Whether liquid can be taken out of this container (unless the fill is forced). |
| <Link id="m-containedliquid" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; }"}</code> | The liquid currently inside, or null when empty. |
| <Link id="m-containerpriority" /><code>{"int ContainerPriority { get; }"}</code> | Higher priority containers fill lower ones they touch, not the other way round. Static sources use 1000. |
| <Link id="m-containersize" /><code>{"int ContainerSize { get; }"}</code> | How many units the container holds. `int.MaxValue` for static sources. |
| <Link id="m-currentcontentlevel" /><code>{"int CurrentContentLevel { get; }"}</code> | How many units are inside now. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity of the container, or null for static sources. |
| <Link id="m-gameobject" /><code>{"GameObject gameObject { get; }"}</code> | The Unity object the container lives on. |
| <Link id="m-isallowinggradualconsumption" /><code>{"bool IsAllowingGradualConsumption { get; }"}</code> | Whether a gradual drinker (sipping) can drink from it. False for static sources. |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | True when no liquid is inside. |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> | True when there is no space left. |
| <Link id="m-receivetransitionmultiplier" /><code>{"float ReceiveTransitionMultiplier { get; }"}</code> | Speeds up liquid transitions (such as heating into another liquid) while in this container. 1 by default. |
| <Link id="m-spaceleft" /><code>{"int SpaceLeft { get; }"}</code> | Units that still fit. |
| <Link id="m-surfacevisual" /><code><Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" SurfaceVisual { get; }"}</code> | The visual that shows the liquid surface, or null. |
| <Link id="m-totalliquidamountshown" /><code>{"float TotalLiquidAmountShown { get; }"}</code> | Amount used for the fill visual: the content level plus any transitions in progress. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> | Event that can veto a liquid before it is added; `CanAddTo` runs it. |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> | Raised when the type of liquid inside changes. |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> | Raised when the amount inside changes. |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> | Raised when `TotalLiquidAmountShown` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto" /><code>{"bool CanAddTo("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> | Whether this container accepts the given liquid: the container must allow adding and no `AddFilter` handler may refuse. |
| <Link id="m-fillintocontainer" /><code>{"bool FillIntoContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int otherContainerSpace, bool isForced = false)"}</code> | Server: moves a number of units into another container. Fails if incompatible, refused, or there is not enough liquid or space. |
| <Link id="m-forceempty" /><code>{"void ForceEmpty()"}</code> | Empties the container regardless of `CanRemoveFrom`. |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"bool IsCompatibleWithOtherContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" liquidContainer)"}</code> | True if either side is empty or both hold the same liquid. |

## Used in

Members of other types that take, return or hold a `ILiquidContainer`:

[`CookingLiquid.liquidContainer`](/game-api/types/alta-crafting/cookingliquid#m-liquidcontainer), [`CookingLiquid.LiquidContainer`](/game-api/types/alta-crafting/cookingliquid#m-liquidcontainer-2), [`CookingLiquid.LiquidContainerContentLevelChanged`](/game-api/types/alta-crafting/cookingliquid#m-liquidcontainercontentlevelchanged), [`CookingLiquidVisual.container`](/game-api/types/alta-crafting/cookingliquidvisual#m-container), [`CookingLiquidVisualTippingPointController.SetVisualsTippingPointToNewLiquidLevel`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-setvisualstippingpointtonewliquidlevel), [`LiquidChunkVisuals.container`](/game-api/types/alta-crafting/liquidchunkvisuals#m-container), [`LiquidChunkVisuals.UpdateLiquidChunks`](/game-api/types/alta-crafting/liquidchunkvisuals#m-updateliquidchunks), [`BoilingParticles.container`](/game-api/types/alta-stats-effects/boilingparticles#m-container), [`BoilingParticles.SetupForContainer`](/game-api/types/alta-stats-effects/boilingparticles#m-setupforcontainer), [`BoilingParticles.UpdateParticleLifetimesBaseOnContentLevel`](/game-api/types/alta-stats-effects/boilingparticles#m-updateparticlelifetimesbaseoncontentlevel), [`ContainerLiquidReceiver.container`](/game-api/types/alta-stats-effects/containerliquidreceiver#m-container), [`ContainerLiquidReceiver.Container`](/game-api/types/alta-stats-effects/containerliquidreceiver#m-container-2), [`GlobalLiquidContainer.FillLiquidIntoContainer`](/game-api/types/alta-stats-effects/globalliquidcontainer#m-fillliquidintocontainer), [`GlobalLiquidContainer.RemoveLiquidFromContainer`](/game-api/types/alta-stats-effects/globalliquidcontainer#m-removeliquidfromcontainer), [`ILiquidParticlesMarker.Container`](/game-api/types/alta-stats-effects/iliquidparticlesmarker#m-container), [`IPourableContainer.InternalContainer`](/game-api/types/alta-stats-effects/ipourablecontainer#m-internalcontainer), [`IPourableContainer.RegisterPouringParticleHit`](/game-api/types/alta-stats-effects/ipourablecontainer#m-registerpouringparticlehit), [`LiquidContainer.FillInto`](/game-api/types/alta-stats-effects/liquidcontainer#m-fillinto), [`LiquidContainer.FillIntoContainer`](/game-api/types/alta-stats-effects/liquidcontainer#m-fillintocontainer), [`LiquidContainer.IsCompatibleWithOtherContainer`](/game-api/types/alta-stats-effects/liquidcontainer#m-iscompatiblewithothercontainer), [`LiquidContainerAmountChangedHandler.BeginInvoke`](/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler#m-begininvoke), [`LiquidContainerAmountChangedHandler.Invoke`](/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler#m-invoke), [`LiquidContainerHandler.BeginInvoke`](/game-api/types/alta-stats-effects/liquidcontainerhandler#m-begininvoke), [`LiquidContainerHandler.Invoke`](/game-api/types/alta-stats-effects/liquidcontainerhandler#m-invoke), [`LiquidContainerLid.container`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-container), [`LiquidContainerLid.Container`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-container-2), [`LiquidContainerTrigger.ContainerContentLevelChanged`](/game-api/types/alta-stats-effects/liquidcontainertrigger#m-containercontentlevelchanged), [`LiquidContainerTrigger.FillOtherContainer`](/game-api/types/alta-stats-effects/liquidcontainertrigger#m-fillothercontainer), [`LiquidContainerTrigger.handledLiquidContainers`](/game-api/types/alta-stats-effects/liquidcontainertrigger#m-handledliquidcontainers), [`LiquidContainerTrigger.thisContainer`](/game-api/types/alta-stats-effects/liquidcontainertrigger#m-thiscontainer), [`LiquidHeatAreaController.SetHeatAreaEnabled`](/game-api/types/alta-stats-effects/liquidheatareacontroller#m-setheatareaenabled), [`LiquidParticleMarker.Container`](/game-api/types/alta-stats-effects/liquidparticlemarker#m-container), [`LiquidPouringParticlesMarker.Container`](/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-container), [`LiquidPouringParticlesMarker.RegisterPouringParticleHit`](/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-registerpouringparticlehit), [`LiquidStencilShaderController.container`](/game-api/types/alta-stats-effects/liquidstencilshadercontroller#m-container), [`LiquidStencilShaderController.HandleLiquidLevelChanged`](/game-api/types/alta-stats-effects/liquidstencilshadercontroller#m-handleliquidlevelchanged), [`LiquidTransition.LiquidTransition`](/game-api/types/alta-stats-effects/liquidtransition#m-ctor), [`LiquidTransition.receivingContainer`](/game-api/types/alta-stats-effects/liquidtransition#m-receivingcontainer), [`LiquidTransition.ReceivingContainer`](/game-api/types/alta-stats-effects/liquidtransition#m-receivingcontainer-2), [`LiquidTransition.SetTarget`](/game-api/types/alta-stats-effects/liquidtransition#m-settarget), [`LiquidTransition.sourceContainer`](/game-api/types/alta-stats-effects/liquidtransition#m-sourcecontainer), [`LiquidTransition.SourceContainer`](/game-api/types/alta-stats-effects/liquidtransition#m-sourcecontainer-2), [`PourableContainer.container`](/game-api/types/alta-stats-effects/pourablecontainer#m-container), [`PourableContainer.ContainerContentAmountChanged`](/game-api/types/alta-stats-effects/pourablecontainer#m-containercontentamountchanged), [`PourableContainer.destinationContainerHitCounts`](/game-api/types/alta-stats-effects/pourablecontainer#m-destinationcontainerhitcounts), [`PourableContainer.FindMostPouredIntoContainer`](/game-api/types/alta-stats-effects/pourablecontainer#m-findmostpouredintocontainer), [`PourableContainer.InternalContainer`](/game-api/types/alta-stats-effects/pourablecontainer#m-internalcontainer), [`PourableContainer.RegisterPouringParticleHit`](/game-api/types/alta-stats-effects/pourablecontainer#m-registerpouringparticlehit), [`StaticLiquidContainer.FillIntoContainer`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-fillintocontainer), [`StaticLiquidContainer.IsCompatibleWithOtherContainer`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-iscompatiblewithothercontainer), [`AutoContainerLid.ContentLevelChanged`](/game-api/types/global-a-b/autocontainerlid#m-contentlevelchanged), [`LiquidGradualDrinker.containerDrinkingFrom`](/game-api/types/global-i-l/liquidgradualdrinker#m-containerdrinkingfrom), [`LiquidGradualDrinker.HandleLiquidContainer`](/game-api/types/global-i-l/liquidgradualdrinker#m-handleliquidcontainer), [`PlayerDrinkingMouth.container`](/game-api/types/global-p/playerdrinkingmouth#m-container), [`PlayerDrinkingMouth.LiquidAmountChanged`](/game-api/types/global-p/playerdrinkingmouth#m-liquidamountchanged), [`PotionVisuals.container`](/game-api/types/global-p/potionvisuals#m-container).
