---
title: "LiquidData"
description: "Serializable class: Effects (EffectDefinitionApplications), ColorTint, LiquidVisual, ChunkVisuals, CookablesUsed, IsConsumableThroughSkin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidData

A **class** in `Root.Township`, `Alta.Liquid`.

`[Serializable]` class: `Effects` (`EffectDefinitionApplication`s), `ColorTint`, `LiquidVisual`, `ChunkVisuals`, `CookablesUsed`, `IsConsumableThroughSkin`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Liquids](/game-api/game-systems/liquids#liquiddefinition-liquidcontent-and-liquiddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidData("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisual, "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects, "}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] cookablesUsed, "}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunkVisuals, Color colorTint)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"LiquidData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxnumberofeffects" /><code>{"const int MaxNumberOfEffects"}</code> |  |
| <Link id="m-chunkvisuals" /><code>{"private "}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunkVisuals"}</code> |  |
| <Link id="m-colortint" /><code>{"private Color colorTint"}</code> |  |
| <Link id="m-cookablesused" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] cookablesUsed"}</code> |  |
| <Link id="m-effects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects"}</code> |  |
| <Link id="m-isconsumablethroughskin" /><code>{"private bool isConsumableThroughSkin"}</code> |  |
| <Link id="m-liquidvisual" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisual"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-splashparticlesstrength" /><code>{"private float splashParticlesStrength"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkvisuals-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> ChunkVisuals { get; }"}</code> |  |
| <Link id="m-colortint-2" /><code>{"Color ColorTint { get; }"}</code> |  |
| <Link id="m-cookablesused-2" /><code><Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] CookablesUsed { get; }"}</code> |  |
| <Link id="m-effects-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> Effects { get; }"}</code> |  |
| <Link id="m-isconsumablethroughskin-2" /><code>{"bool IsConsumableThroughSkin { get; }"}</code> |  |
| <Link id="m-liquidvisual-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" LiquidVisual { get; }"}</code> |  |
| <Link id="m-splashparticlesstrength-2" /><code>{"float SplashParticlesStrength { get; }"}</code> |  |
| <Link id="m-tintedliquidcolor" /><code>{"Color TintedLiquidColor { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |  |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |  |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |  |
| <Link id="m-getsave" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" GetSave()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" data)"}</code> |  |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> |  |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializechunksarray" /><code>{"private void SerializeChunksArray("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializeeffectsarray" /><code>{"private void SerializeEffectsArray("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidData`:

[`CookingLiquidVisual.SetLiquid`](/game-api/types/alta-crafting/cookingliquidvisual#m-setliquid), [`CookingLiquidVisual.SetLODRendererPropertyBlockFromLiquid`](/game-api/types/alta-crafting/cookingliquidvisual#m-setlodrendererpropertyblockfromliquid), [`CookingLiquidVisual.SetPropertyBlockFromLiquid`](/game-api/types/alta-crafting/cookingliquidvisual#m-setpropertyblockfromliquid), [`BoilingParticles.SetupForLiquid`](/game-api/types/alta-stats-effects/boilingparticles#m-setupforliquid), [`BottledLiquid.SetLODRendererPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/bottledliquid#m-setlodrendererpropertyblockfromliquid), [`BottledLiquid.SetPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/bottledliquid#m-setpropertyblockfromliquid), [`LiquidContainerLid.AddFilter`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-addfilter), [`LiquidContent.Data`](/game-api/types/alta-stats-effects/liquidcontent#m-data), [`LiquidDataEventHandler.BeginInvoke`](/game-api/types/alta-stats-effects/liquiddataeventhandler#m-begininvoke), [`LiquidDataEventHandler.Invoke`](/game-api/types/alta-stats-effects/liquiddataeventhandler#m-invoke), [`LiquidDefinition.data`](/game-api/types/alta-stats-effects/liquiddefinition#m-data), [`LiquidDefinition.Data`](/game-api/types/alta-stats-effects/liquiddefinition#m-data-2), [`LiquidFillFilter.BeginInvoke`](/game-api/types/alta-stats-effects/liquidfillfilter#m-begininvoke), [`LiquidFillFilter.Invoke`](/game-api/types/alta-stats-effects/liquidfillfilter#m-invoke), [`LiquidSurfaceVisual.Liquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquid), [`LiquidSurfaceVisual.SetLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setliquid), [`LiquidSurfaceVisual.SetLODRendererPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setlodrendererpropertyblockfromliquid), [`LiquidSurfaceVisual.SetMaterialsAcordingToLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setmaterialsacordingtoliquid), [`LiquidSurfaceVisual.SetPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setpropertyblockfromliquid), [`PickupLiquidContainerEnabler.FilterLiquidAdding`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-filterliquidadding), [`PotionImpactColorer.SetToLiquid`](/game-api/types/alta-stats-effects/potionimpactcolorer#m-settoliquid), [`ColoredPooledParticleSpawner.LiquidData`](/game-api/types/global-c-d/coloredpooledparticlespawner#m-liquiddata), [`ConsumptionManager.CanConsumeLiquid`](/game-api/types/global-c-d/consumptionmanager#m-canconsumeliquid), [`ConsumptionManager.HandleFailedDrinking`](/game-api/types/global-c-d/consumptionmanager#m-handlefaileddrinking), [`LiquidParticlesRendererColorer.ColorToLiquid`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-colortoliquid), [`LiquidParticlesRendererColorer.OverrideLiquidColorToTintedOnPouringRenderers`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-overrideliquidcolortotintedonpouringrenderers), [`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials), [`PlayerDrinkingMouth.HandleLiquidAdd`](/game-api/types/global-p/playerdrinkingmouth#m-handleliquidadd).
