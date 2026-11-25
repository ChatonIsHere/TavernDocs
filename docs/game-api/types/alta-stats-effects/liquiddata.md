---
title: "LiquidData"
description: "Describes a liquid: its colour and visual, the alchemy effects it applies, and any chunk visuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidData

A **class** in `Root.Township`, `Alta.Liquid`.

Describes a liquid: its colour and visual, the alchemy effects it applies, and any chunk visuals. Liquid containers hold it, save it and sync it.

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
| <Link id="m-maxnumberofeffects" /><code>{"const int MaxNumberOfEffects"}</code> | Upper bound for the number of effects. The network code allows up to 1023. |
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
| <Link id="m-chunkvisuals-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> ChunkVisuals { get; }"}</code> | Visuals for solid chunks floating in the liquid. |
| <Link id="m-colortint-2" /><code>{"Color ColorTint { get; }"}</code> | Tint applied over the visual's colour. |
| <Link id="m-cookablesused-2" /><code><Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] CookablesUsed { get; }"}</code> | Cookable ingredients that went into the liquid. Not saved or synced. |
| <Link id="m-effects-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> Effects { get; }"}</code> | Effects applied when the liquid is consumed or splashed. |
| <Link id="m-isconsumablethroughskin-2" /><code>{"bool IsConsumableThroughSkin { get; }"}</code> | True for splash liquids (such as the teleport potion) that work on contact. |
| <Link id="m-liquidvisual-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" LiquidVisual { get; }"}</code> | Base visual data for the liquid. |
| <Link id="m-splashparticlesstrength-2" /><code>{"float SplashParticlesStrength { get; }"}</code> | Strength for splash particles when consumable through skin. |
| <Link id="m-tintedliquidcolor" /><code>{"Color TintedLiquidColor { get; }"}</code> | The visual's colour times the tint. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Server: applies all its effects to a target at the given strength. Logs an error on a client. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True if colour, visual, skin flag, effects and chunk visuals all match (effects and chunks in any order). |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the colour, visual, skin flag and the effect and chunk arrays. |
| <Link id="m-getsave" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" GetSave()"}</code> | Builds save data with the colour, skin flag, visual, effects and chunks. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" data)"}</code> | Fills the liquid from save data. |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> | Compares with `Equals`; two nulls are equal. |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> | Opposite of `==`. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the colour, skin flag, visual, effects and chunk visuals on a network stream. |
| <Link id="m-serializechunksarray" /><code>{"private void SerializeChunksArray("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializeeffectsarray" /><code>{"private void SerializeEffectsArray("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidData`:

[`CookingLiquidVisual.SetLiquid`](/game-api/types/alta-crafting/cookingliquidvisual#m-setliquid), [`CookingLiquidVisual.SetLODRendererPropertyBlockFromLiquid`](/game-api/types/alta-crafting/cookingliquidvisual#m-setlodrendererpropertyblockfromliquid), [`CookingLiquidVisual.SetPropertyBlockFromLiquid`](/game-api/types/alta-crafting/cookingliquidvisual#m-setpropertyblockfromliquid), [`BoilingParticles.SetupForLiquid`](/game-api/types/alta-stats-effects/boilingparticles#m-setupforliquid), [`BottledLiquid.SetLODRendererPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/bottledliquid#m-setlodrendererpropertyblockfromliquid), [`BottledLiquid.SetPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/bottledliquid#m-setpropertyblockfromliquid), [`LiquidContainerLid.AddFilter`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-addfilter), [`LiquidContent.Data`](/game-api/types/alta-stats-effects/liquidcontent#m-data), [`LiquidDataEventHandler.BeginInvoke`](/game-api/types/alta-stats-effects/liquiddataeventhandler#m-begininvoke), [`LiquidDataEventHandler.Invoke`](/game-api/types/alta-stats-effects/liquiddataeventhandler#m-invoke), [`LiquidDefinition.data`](/game-api/types/alta-stats-effects/liquiddefinition#m-data), [`LiquidDefinition.Data`](/game-api/types/alta-stats-effects/liquiddefinition#m-data-2), [`LiquidFillFilter.BeginInvoke`](/game-api/types/alta-stats-effects/liquidfillfilter#m-begininvoke), [`LiquidFillFilter.Invoke`](/game-api/types/alta-stats-effects/liquidfillfilter#m-invoke), [`LiquidSurfaceVisual.Liquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquid), [`LiquidSurfaceVisual.SetLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setliquid), [`LiquidSurfaceVisual.SetLODRendererPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setlodrendererpropertyblockfromliquid), [`LiquidSurfaceVisual.SetMaterialsAcordingToLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setmaterialsacordingtoliquid), [`LiquidSurfaceVisual.SetPropertyBlockFromLiquid`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setpropertyblockfromliquid), [`PickupLiquidContainerEnabler.FilterLiquidAdding`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-filterliquidadding), [`PotionImpactColorer.SetToLiquid`](/game-api/types/alta-stats-effects/potionimpactcolorer#m-settoliquid), [`ColoredPooledParticleSpawner.LiquidData`](/game-api/types/global-c-d/coloredpooledparticlespawner#m-liquiddata), [`ConsumptionManager.CanConsumeLiquid`](/game-api/types/global-c-d/consumptionmanager#m-canconsumeliquid), [`ConsumptionManager.HandleFailedDrinking`](/game-api/types/global-c-d/consumptionmanager#m-handlefaileddrinking), [`LiquidParticlesRendererColorer.ColorToLiquid`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-colortoliquid), [`LiquidParticlesRendererColorer.OverrideLiquidColorToTintedOnPouringRenderers`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-overrideliquidcolortotintedonpouringrenderers), [`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials), [`PlayerDrinkingMouth.HandleLiquidAdd`](/game-api/types/global-p/playerdrinkingmouth#m-handleliquidadd).
