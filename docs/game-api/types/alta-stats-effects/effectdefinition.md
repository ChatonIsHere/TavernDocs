---
title: "EffectDefinition"
description: "Alta.Alchemy.EffectDefinition : HashedGeneralValue<EffectDefinition>, abstract. Assets live under Cooking/Effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectDefinition

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

`Alta.Alchemy.EffectDefinition : HashedGeneralValue<EffectDefinition>`, abstract. Assets live under `Cooking/Effects`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<EffectDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`IEffectDefinition`](/game-api/types/alta-stats-effects/ieffectdefinition)
- **Derived types** [`BuildUpconcoctionEffect`](/game-api/types/alta-stats-effects/buildupconcoctioneffect), [`BurnEffect`](/game-api/types/alta-stats-effects/burneffect), [`ChanceBasedEffectDefinition`](/game-api/types/alta-stats-effects/chancebasedeffectdefinition), [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition), [`InateEffect`](/game-api/types/alta-stats-effects/inateeffect), [`PoisonEffect`](/game-api/types/alta-stats-effects/poisoneffect), [`RevealEffect`](/game-api/types/alta-stats-effects/revealeffect), [`StatEffect`](/game-api/types/alta-stats-effects/stateffect), [`StatMultiplierEffect`](/game-api/types/alta-stats-effects/statmultipliereffect), [`IndirectStatModifierDefinition`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition)
- **Attributes** `HashedPath`
- **Documented in** [Effects](/game-api/game-systems/effects#effectdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EffectDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effectglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" effectGlyph"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"virtual void CheckApply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |  |
| <Link id="m-apply" /><code>{"protected abstract void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EffectDefinition`:

[`EffectDefinitionApplication.EffectDefinitionApplication`](/game-api/types/alta-stats-effects/effectdefinitionapplication#m-ctor), [`EffectDefinitionApplication.effectToModify`](/game-api/types/alta-stats-effects/effectdefinitionapplication#m-effecttomodify), [`EffectDefinitionApplication.EffectToModify`](/game-api/types/alta-stats-effects/effectdefinitionapplication#m-effecttomodify-2), [`EffectEventHandler.BeginInvoke`](/game-api/types/alta-stats-effects/effecteventhandler#m-begininvoke), [`EffectEventHandler.Invoke`](/game-api/types/alta-stats-effects/effecteventhandler#m-invoke), [`EffectHandler.EffectOverTime`](/game-api/types/alta-stats-effects/effecthandler#m-effectovertime), [`EffectHandler.unitsToRegen`](/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen), [`EffectHandler.EffectOverTimeData.effectDefinition`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-effectdefinition), [`EffectHandler.EffectOverTimeData.EffectOverTimeData`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-ctor), [`EffectHandler.EffectOverTimeData.handleUpdate`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-handleupdate), [`EffectVolumeTrigger.Effect.effect`](/game-api/types/alta-stats-effects/effectvolumetrigger-effect#m-effect), [`StewRecipe.combinedStrengths`](/game-api/types/alta-crafting/stewrecipe#m-combinedstrengths), [`StewRecipe.effectModifiersMap`](/game-api/types/alta-crafting/stewrecipe#m-effectmodifiersmap), [`StewRecipe.EffectModifiersMap`](/game-api/types/alta-crafting/stewrecipe#m-effectmodifiersmap-2), [`StewRecipe.GetModifiedStrength`](/game-api/types/alta-crafting/stewrecipe#m-getmodifiedstrength), [`StewRecipe.HandleEffectApplication`](/game-api/types/alta-crafting/stewrecipe#m-handleeffectapplication), [`StewRecipe.HandleGarnishModifiers`](/game-api/types/alta-crafting/stewrecipe#m-handlegarnishmodifiers), [`LiquidContainerSaveData.Effect.definition`](/game-api/types/alta-stats-effects/liquidcontainersavedata-effect#m-definition).
