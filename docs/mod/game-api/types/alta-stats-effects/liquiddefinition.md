---
title: "LiquidDefinition"
description: "A hashed asset for a liquid used in cooking, under Cooking/Liquids."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidDefinition

A **class** in `Root.Township`, `Alta.Liquid`.

A hashed asset for a liquid used in cooking, under `Cooking/Liquids`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<LiquidDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LiquidDefinition`](/mod/game-api/types/alta-stats-effects/liquiddefinition)
- **Attributes** `HashedPath`
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids#liquiddefinition-liquidcontent-and-liquiddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" content"}</code> | Cached `LiquidContent` made by `GetAsLiquidContent`, shared by every caller. |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data"}</code> | Backing field for `Data`: the liquid's colour, visuals and effects. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" Data { get; }"}</code> | The liquid's data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getasliquidcontent" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" GetAsLiquidContent()"}</code> | This liquid as liquid content, made once and then reused. Don't change the returned object. |

## Used in

Members of other types that take, return or hold a `LiquidDefinition`:

[`EffectArea.effect`](/mod/game-api/types/alta-stats-effects/effectarea#m-effect), [`StewContentArguments.LiquidBase`](/mod/game-api/types/alta-crafting/stewcontentarguments#m-liquidbase), [`StewManager.SetBaseLiquid`](/mod/game-api/types/alta-crafting/stewmanager#m-setbaseliquid), [`StewManager.stewLiquidBase`](/mod/game-api/types/alta-crafting/stewmanager#m-stewliquidbase), [`StewManager.StewLiquidBase`](/mod/game-api/types/alta-crafting/stewmanager#m-stewliquidbase-2), [`StewManagerSaveData.liquidBase`](/mod/game-api/types/alta-crafting/stewmanagersavedata#m-liquidbase), [`StewRecipe.FindStewRecipeForIngredients`](/mod/game-api/types/alta-crafting/stewrecipe#m-findstewrecipeforingredients), [`StewRecipe.possibleLiquids`](/mod/game-api/types/alta-crafting/stewrecipe#m-possibleliquids), [`LiquidContainerSaveData.preset`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata#m-preset), [`LiquidContent.Liquid`](/mod/game-api/types/alta-stats-effects/liquidcontent#m-liquid), [`LiquidSettings.debugWaterConcoction`](/mod/game-api/types/alta-stats-effects/liquidsettings#m-debugwaterconcoction), [`LiquidSettings.DebugWaterConcoction`](/mod/game-api/types/alta-stats-effects/liquidsettings#m-debugwaterconcoction-2), [`StaticLiquidContainer.definition`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-definition).
