---
title: "LiquidContent"
description: "What's in a container: LiquidDefinition Liquid, LiquidData Data, bool IsCustom. Stews are custom content with their own data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContent

A **class** in `Root.Township`, `Alta.Liquid`.

What's in a container: `LiquidDefinition Liquid`, `LiquidData Data`, `bool IsCustom`. Stews are custom content with their own data.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Liquids](/game-api/game-systems/liquids#liquiddefinition-liquidcontent-and-liquiddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContent()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" Data { get; set; }"}</code> |  |
| <Link id="m-iscustom" /><code>{"bool IsCustom { get; set; }"}</code> |  |
| <Link id="m-liquid" /><code><Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" Liquid { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |  |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |  |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" a, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" b)"}</code> |  |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" a, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" b)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidContent`:

[`CookingLiquid.ConvertContainerLiquidToStewLiquid`](/game-api/types/alta-crafting/cookingliquid#m-convertcontainerliquidtostewliquid), [`LiquidChunkVisuals.AddVisualsForNewChunks`](/game-api/types/alta-crafting/liquidchunkvisuals#m-addvisualsfornewchunks), [`LiquidChunkVisuals.CreateVisualBaseOnContent`](/game-api/types/alta-crafting/liquidchunkvisuals#m-createvisualbaseoncontent), [`StewManager.CreateContentWithTint`](/game-api/types/alta-crafting/stewmanager#m-createcontentwithtint), [`GlobalLiquidContainer.FillLiquidIntoContainer`](/game-api/types/alta-stats-effects/globalliquidcontainer#m-fillliquidintocontainer), [`ILiquidContainer.CanAddTo`](/game-api/types/alta-stats-effects/iliquidcontainer#m-canaddto), [`ILiquidContainer.ContainedLiquid`](/game-api/types/alta-stats-effects/iliquidcontainer#m-containedliquid), [`ILiquidContainerInternal.AddLiquid`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-addliquid), [`ILiquidContainerInternal.SetContent`](/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-setcontent), [`LiquidContainer.AddLiquid`](/game-api/types/alta-stats-effects/liquidcontainer#m-addliquid), [`LiquidContainer.CanAddTo`](/game-api/types/alta-stats-effects/liquidcontainer#m-canaddto-2), [`LiquidContainer.ContainedLiquid`](/game-api/types/alta-stats-effects/liquidcontainer#m-containedliquid), [`LiquidContainer.content`](/game-api/types/alta-stats-effects/liquidcontainer#m-content), [`LiquidContainer.OnContainedLiquidChanged`](/game-api/types/alta-stats-effects/liquidcontainer#m-oncontainedliquidchanged), [`LiquidContainer.SetContent`](/game-api/types/alta-stats-effects/liquidcontainer#m-setcontent), [`LiquidDefinition.content`](/game-api/types/alta-stats-effects/liquiddefinition#m-content), [`LiquidDefinition.GetAsLiquidContent`](/game-api/types/alta-stats-effects/liquiddefinition#m-getasliquidcontent), [`LiquidTransition.CheckIfTransitionIsStillValid`](/game-api/types/alta-stats-effects/liquidtransition#m-checkiftransitionisstillvalid), [`LiquidTypeChangedHandler.BeginInvoke`](/game-api/types/alta-stats-effects/liquidtypechangedhandler#m-begininvoke), [`LiquidTypeChangedHandler.Invoke`](/game-api/types/alta-stats-effects/liquidtypechangedhandler#m-invoke), [`PourableContainer.ContainerContainedLiquidChanged`](/game-api/types/alta-stats-effects/pourablecontainer#m-containercontainedliquidchanged), [`PouringParticles.ContainerLiquidTypeChanged`](/game-api/types/alta-stats-effects/pouringparticles#m-containerliquidtypechanged), [`StaticLiquidContainer.AddLiquid`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-addliquid), [`StaticLiquidContainer.CanAddTo`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-canaddto), [`StaticLiquidContainer.ContainedLiquid`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-containedliquid), [`StaticLiquidContainer.SetContent`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-setcontent), [`PotionVisuals.LiquidChanged`](/game-api/types/global-p/potionvisuals#m-liquidchanged).
