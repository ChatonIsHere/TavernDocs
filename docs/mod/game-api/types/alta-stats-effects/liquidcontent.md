---
title: "LiquidContent"
description: "What a liquid container holds: either a preset LiquidDefinition or a custom mix described only by its LiquidData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContent

A **class** in `Root.Township`, `Alta.Liquid`.

What a liquid container holds: either a preset `LiquidDefinition` or a custom mix described only by its `LiquidData`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids#liquiddefinition-liquidcontent-and-liquiddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContent()"}</code> | <span className="api-desc">Creates a `LiquidContent` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The liquid's data (colour, visuals, effects). For a preset this is the preset's own data.</span> |
| <Link id="m-iscustom" /><code>{"bool IsCustom { get; set; }"}</code> | <span className="api-desc">True for a custom mix (such as a stew or potion) with no preset; `Liquid` is then null.</span> |
| <Link id="m-liquid" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" Liquid { get; set; }"}</code> | <span className="api-desc">The preset liquid definition, or null for a custom mix.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True when both are custom or both preset and their `LiquidData` match by value. The `Liquid` reference itself is not compared.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from `IsCustom`, `Liquid` and `Data`.</span> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" b)"}</code> | <span className="api-desc">Uses `Equals`; two nulls are equal.</span> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" b)"}</code> | <span className="api-desc">Opposite of `==`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The preset's name, or "Custom".</span> |

## Used in

Members of other types that take, return or hold a `LiquidContent`:

<div className="api-used-in">

[`CookingLiquid.ConvertContainerLiquidToStewLiquid`](/mod/game-api/types/alta-crafting/cookingliquid#m-convertcontainerliquidtostewliquid), [`LiquidChunkVisuals.AddVisualsForNewChunks`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-addvisualsfornewchunks), [`LiquidChunkVisuals.CreateVisualBaseOnContent`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-createvisualbaseoncontent), [`StewManager.CreateContentWithTint`](/mod/game-api/types/alta-crafting/stewmanager#m-createcontentwithtint), [`GlobalLiquidContainer.FillLiquidIntoContainer`](/mod/game-api/types/alta-stats-effects/globalliquidcontainer#m-fillliquidintocontainer), [`ILiquidContainer.CanAddTo`](/mod/game-api/types/alta-stats-effects/iliquidcontainer#m-canaddto), [`ILiquidContainer.ContainedLiquid`](/mod/game-api/types/alta-stats-effects/iliquidcontainer#m-containedliquid), [`ILiquidContainerInternal.AddLiquid`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-addliquid), [`ILiquidContainerInternal.SetContent`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal#m-setcontent), [`LiquidContainer.AddLiquid`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-addliquid), [`LiquidContainer.CanAddTo`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-canaddto-2), [`LiquidContainer.ContainedLiquid`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-containedliquid), [`LiquidContainer.content`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-content), [`LiquidContainer.OnContainedLiquidChanged`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-oncontainedliquidchanged), [`LiquidContainer.SetContent`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-setcontent), [`LiquidDefinition.content`](/mod/game-api/types/alta-stats-effects/liquiddefinition#m-content), [`LiquidDefinition.GetAsLiquidContent`](/mod/game-api/types/alta-stats-effects/liquiddefinition#m-getasliquidcontent), [`LiquidTransition.CheckIfTransitionIsStillValid`](/mod/game-api/types/alta-stats-effects/liquidtransition#m-checkiftransitionisstillvalid), [`LiquidTypeChangedHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/liquidtypechangedhandler#m-begininvoke), [`LiquidTypeChangedHandler.Invoke`](/mod/game-api/types/alta-stats-effects/liquidtypechangedhandler#m-invoke), [`PourableContainer.ContainerContainedLiquidChanged`](/mod/game-api/types/alta-stats-effects/pourablecontainer#m-containercontainedliquidchanged), [`PouringParticles.ContainerLiquidTypeChanged`](/mod/game-api/types/alta-stats-effects/pouringparticles#m-containerliquidtypechanged), [`StaticLiquidContainer.AddLiquid`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-addliquid), [`StaticLiquidContainer.CanAddTo`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-canaddto), [`StaticLiquidContainer.ContainedLiquid`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-containedliquid), [`StaticLiquidContainer.SetContent`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-setcontent), [`PotionVisuals.LiquidChanged`](/mod/game-api/types/global-p/potionvisuals#m-liquidchanged).

</div>
