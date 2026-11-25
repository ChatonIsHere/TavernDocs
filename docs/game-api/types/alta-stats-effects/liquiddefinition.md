---
title: "LiquidDefinition"
description: "HashedGeneralValue<LiquidDefinition> asset under Cooking/Liquids: a named liquid (water, a potion). LiquidData Data, LiquidContent GetAsLiquidContent("
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidDefinition

A **class** in `Root.Township`, `Alta.Liquid`.

`HashedGeneralValue<LiquidDefinition>` asset under `Cooking/Liquids`: a named liquid (water, a potion). `LiquidData Data`, `LiquidContent GetAsLiquidContent()` (cached).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<LiquidDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LiquidDefinition`](/game-api/types/alta-stats-effects/liquiddefinition)
- **Attributes** `HashedPath`
- **Documented in** [Liquids](/game-api/game-systems/liquids#liquiddefinition-liquidcontent-and-liquiddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" content"}</code> |  |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code><Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" Data { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getasliquidcontent" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" GetAsLiquidContent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidDefinition`:

[`EffectArea.effect`](/game-api/types/alta-stats-effects/effectarea#m-effect), [`StewContentArguments.LiquidBase`](/game-api/types/alta-crafting/stewcontentarguments#m-liquidbase), [`StewManager.SetBaseLiquid`](/game-api/types/alta-crafting/stewmanager#m-setbaseliquid), [`StewManager.stewLiquidBase`](/game-api/types/alta-crafting/stewmanager#m-stewliquidbase), [`StewManager.StewLiquidBase`](/game-api/types/alta-crafting/stewmanager#m-stewliquidbase-2), [`StewManagerSaveData.liquidBase`](/game-api/types/alta-crafting/stewmanagersavedata#m-liquidbase), [`StewRecipe.FindStewRecipeForIngredients`](/game-api/types/alta-crafting/stewrecipe#m-findstewrecipeforingredients), [`StewRecipe.possibleLiquids`](/game-api/types/alta-crafting/stewrecipe#m-possibleliquids), [`LiquidContainerSaveData.preset`](/game-api/types/alta-stats-effects/liquidcontainersavedata#m-preset), [`LiquidContent.Liquid`](/game-api/types/alta-stats-effects/liquidcontent#m-liquid), [`LiquidSettings.debugWaterConcoction`](/game-api/types/alta-stats-effects/liquidsettings#m-debugwaterconcoction), [`LiquidSettings.DebugWaterConcoction`](/game-api/types/alta-stats-effects/liquidsettings#m-debugwaterconcoction-2), [`StaticLiquidContainer.definition`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-definition).
