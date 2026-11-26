---
title: "EffectDefinition"
description: "Base asset for an alchemy or food effect applied to an EffectHandler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectDefinition

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Base asset for an alchemy or food effect applied to an `EffectHandler`. Stored under the hashed path `Cooking/Effects`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<EffectDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`IEffectDefinition`](/mod/game-api/types/alta-stats-effects/ieffectdefinition)
- **Derived types** [`BuildUpconcoctionEffect`](/mod/game-api/types/alta-stats-effects/buildupconcoctioneffect), [`BurnEffect`](/mod/game-api/types/alta-stats-effects/burneffect), [`ChanceBasedEffectDefinition`](/mod/game-api/types/alta-stats-effects/chancebasedeffectdefinition), [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition), [`InateEffect`](/mod/game-api/types/alta-stats-effects/inateeffect), [`PoisonEffect`](/mod/game-api/types/alta-stats-effects/poisoneffect), [`RevealEffect`](/mod/game-api/types/alta-stats-effects/revealeffect), [`StatEffect`](/mod/game-api/types/alta-stats-effects/stateffect), [`StatMultiplierEffect`](/mod/game-api/types/alta-stats-effects/statmultipliereffect), [`IndirectStatModifierDefinition`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition)
- **Attributes** `HashedPath`
- **Documented in** [Effects](/mod/game-api/game-systems/effects#effectdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EffectDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effectglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" effectGlyph"}</code> | Glyph shown for this effect. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"virtual void CheckApply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Entry point for applying the effect. The base version just calls `Apply`; subclasses can add checks. |
| <Link id="m-apply" /><code>{"protected abstract void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies the effect at the given strength. Subclasses implement it. |

## Used in

Members of other types that take, return or hold a `EffectDefinition`:

[`EffectDefinitionApplication.EffectDefinitionApplication`](/mod/game-api/types/alta-stats-effects/effectdefinitionapplication#m-ctor), [`EffectDefinitionApplication.effectToModify`](/mod/game-api/types/alta-stats-effects/effectdefinitionapplication#m-effecttomodify), [`EffectDefinitionApplication.EffectToModify`](/mod/game-api/types/alta-stats-effects/effectdefinitionapplication#m-effecttomodify-2), [`EffectEventHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/effecteventhandler#m-begininvoke), [`EffectEventHandler.Invoke`](/mod/game-api/types/alta-stats-effects/effecteventhandler#m-invoke), [`EffectHandler.EffectOverTime`](/mod/game-api/types/alta-stats-effects/effecthandler#m-effectovertime), [`EffectHandler.unitsToRegen`](/mod/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen), [`EffectHandler.EffectOverTimeData.effectDefinition`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-effectdefinition), [`EffectHandler.EffectOverTimeData.EffectOverTimeData`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-ctor), [`EffectHandler.EffectOverTimeData.handleUpdate`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-handleupdate), [`EffectVolumeTrigger.Effect.effect`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger-effect#m-effect), [`StewRecipe.combinedStrengths`](/mod/game-api/types/alta-crafting/stewrecipe#m-combinedstrengths), [`StewRecipe.effectModifiersMap`](/mod/game-api/types/alta-crafting/stewrecipe#m-effectmodifiersmap), [`StewRecipe.EffectModifiersMap`](/mod/game-api/types/alta-crafting/stewrecipe#m-effectmodifiersmap-2), [`StewRecipe.GetModifiedStrength`](/mod/game-api/types/alta-crafting/stewrecipe#m-getmodifiedstrength), [`StewRecipe.HandleEffectApplication`](/mod/game-api/types/alta-crafting/stewrecipe#m-handleeffectapplication), [`StewRecipe.HandleGarnishModifiers`](/mod/game-api/types/alta-crafting/stewrecipe#m-handlegarnishmodifiers), [`LiquidContainerSaveData.Effect.definition`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-effect#m-definition).
