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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids#liquiddefinition-liquidcontent-and-liquiddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidData("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisual, "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects, "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] cookablesUsed, "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunkVisuals, Color colorTint)"}</code> | Creates a `LiquidData` with default values. |
| <Link id="m-ctor-2" /><code>{"LiquidData()"}</code> | Creates a `LiquidData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxnumberofeffects" /><code>{"const int MaxNumberOfEffects"}</code> | Upper bound for the number of effects. The network code allows up to 1023. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkvisuals" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunkVisuals"}</code> | Backing field for `ChunkVisuals`: floating chunk visuals (such as food bits) shown in the liquid. |
| <Link id="m-colortint" /><code>{"private Color colorTint"}</code> | Backing field for `ColorTint`. Multiplied by the visual's colour for `TintedLiquidColor`. |
| <Link id="m-cookablesused" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] cookablesUsed"}</code> | Backing field for `CookablesUsed`, the cooked items that went into this liquid. Not saved or synced here. |
| <Link id="m-effects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects"}</code> | Backing field for `Effects`, the effects `Apply` runs on whoever drinks or is splashed. |
| <Link id="m-isconsumablethroughskin" /><code>{"private bool isConsumableThroughSkin"}</code> | Backing field for `IsConsumableThroughSkin`. Splash liquids (such as the teleport potion) apply on particle contact. |
| <Link id="m-liquidvisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisual"}</code> | Backing field for `LiquidVisual`, the liquid's look and base colour. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-splashparticlesstrength" /><code>{"private float splashParticlesStrength"}</code> | Backing field for `SplashParticlesStrength`: effect strength when applied by splash particles. 1 by default. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkvisuals-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> ChunkVisuals { get; }"}</code> | Visuals for solid chunks floating in the liquid. |
| <Link id="m-colortint-2" /><code>{"Color ColorTint { get; }"}</code> | Tint applied over the visual's colour. |
| <Link id="m-cookablesused-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] CookablesUsed { get; }"}</code> | Cookable ingredients that went into the liquid. Not saved or synced. |
| <Link id="m-effects-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> Effects { get; }"}</code> | Effects applied when the liquid is consumed or splashed. |
| <Link id="m-isconsumablethroughskin-2" /><code>{"bool IsConsumableThroughSkin { get; }"}</code> | True for splash liquids (such as the teleport potion) that work on contact. |
| <Link id="m-liquidvisual-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" LiquidVisual { get; }"}</code> | Base visual data for the liquid. |
| <Link id="m-splashparticlesstrength-2" /><code>{"float SplashParticlesStrength { get; }"}</code> | Strength for splash particles when consumable through skin. |
| <Link id="m-tintedliquidcolor" /><code>{"Color TintedLiquidColor { get; }"}</code> | The visual's colour times the tint. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Server: applies all its effects to a target at the given strength. Logs an error on a client. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True if colour, visual, skin flag, effects and chunk visuals all match (effects and chunks in any order). |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the colour, visual, skin flag and the effect and chunk arrays. |
| <Link id="m-getsave" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" GetSave()"}</code> | Builds save data with the colour, skin flag, visual, effects and chunks. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" data)"}</code> | Fills the liquid from save data. |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> | Compares with `Equals`; two nulls are equal. |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> | Opposite of `==`. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the colour, skin flag, visual, effects and chunk visuals on a network stream. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializechunksarray" /><code>{"private void SerializeChunksArray("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the chunk visuals as a count and their hashes. |
| <Link id="m-serializeeffectsarray" /><code>{"private void SerializeEffectsArray("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the effect applications as a count and each entry. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidData`:

[`CookingLiquidVisual.SetLiquid`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setliquid), [`CookingLiquidVisual.SetLODRendererPropertyBlockFromLiquid`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setlodrendererpropertyblockfromliquid), [`CookingLiquidVisual.SetPropertyBlockFromLiquid`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setpropertyblockfromliquid), [`BoilingParticles.SetupForLiquid`](/mod/game-api/types/alta-stats-effects/boilingparticles#m-setupforliquid), [`BottledLiquid.SetLODRendererPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-setlodrendererpropertyblockfromliquid), [`BottledLiquid.SetPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-setpropertyblockfromliquid), [`LiquidContainerLid.AddFilter`](/mod/game-api/types/alta-stats-effects/liquidcontainerlid#m-addfilter), [`LiquidContent.Data`](/mod/game-api/types/alta-stats-effects/liquidcontent#m-data), [`LiquidDataEventHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/liquiddataeventhandler#m-begininvoke), [`LiquidDataEventHandler.Invoke`](/mod/game-api/types/alta-stats-effects/liquiddataeventhandler#m-invoke), [`LiquidDefinition.data`](/mod/game-api/types/alta-stats-effects/liquiddefinition#m-data), [`LiquidDefinition.Data`](/mod/game-api/types/alta-stats-effects/liquiddefinition#m-data-2), [`LiquidFillFilter.BeginInvoke`](/mod/game-api/types/alta-stats-effects/liquidfillfilter#m-begininvoke), [`LiquidFillFilter.Invoke`](/mod/game-api/types/alta-stats-effects/liquidfillfilter#m-invoke), [`LiquidSurfaceVisual.Liquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquid), [`LiquidSurfaceVisual.SetLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setliquid), [`LiquidSurfaceVisual.SetLODRendererPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setlodrendererpropertyblockfromliquid), [`LiquidSurfaceVisual.SetMaterialsAcordingToLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setmaterialsacordingtoliquid), [`LiquidSurfaceVisual.SetPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setpropertyblockfromliquid), [`PickupLiquidContainerEnabler.FilterLiquidAdding`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-filterliquidadding), [`PotionImpactColorer.SetToLiquid`](/mod/game-api/types/alta-stats-effects/potionimpactcolorer#m-settoliquid), [`ColoredPooledParticleSpawner.LiquidData`](/mod/game-api/types/global-c-d/coloredpooledparticlespawner#m-liquiddata), [`ConsumptionManager.CanConsumeLiquid`](/mod/game-api/types/global-c-d/consumptionmanager#m-canconsumeliquid), [`ConsumptionManager.HandleFailedDrinking`](/mod/game-api/types/global-c-d/consumptionmanager#m-handlefaileddrinking), [`LiquidParticlesRendererColorer.ColorToLiquid`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-colortoliquid), [`LiquidParticlesRendererColorer.OverrideLiquidColorToTintedOnPouringRenderers`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-overrideliquidcolortotintedonpouringrenderers), [`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials), [`PlayerDrinkingMouth.HandleLiquidAdd`](/mod/game-api/types/global-p/playerdrinkingmouth#m-handleliquidadd).
