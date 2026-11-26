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
| <Link id="m-ctor" /><code>{"LiquidData("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisual, "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects, "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] cookablesUsed, "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunkVisuals, Color colorTint)"}</code> | <span className="api-desc">Creates a `LiquidData` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"LiquidData()"}</code> | <span className="api-desc">Creates a `LiquidData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxnumberofeffects" /><code>{"const int MaxNumberOfEffects"}</code> | <span className="api-desc">Upper bound for the number of effects. The network code allows up to 1023.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkvisuals" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunkVisuals"}</code> | <span className="api-desc">Backing field for `ChunkVisuals`: floating chunk visuals (such as food bits) shown in the liquid.</span> |
| <Link id="m-colortint" /><code>{"private Color colorTint"}</code> | <span className="api-desc">Backing field for `ColorTint`. Multiplied by the visual's colour for `TintedLiquidColor`.</span> |
| <Link id="m-cookablesused" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] cookablesUsed"}</code> | <span className="api-desc">Backing field for `CookablesUsed`, the cooked items that went into this liquid. Not saved or synced here.</span> |
| <Link id="m-effects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects"}</code> | <span className="api-desc">Backing field for `Effects`, the effects `Apply` runs on whoever drinks or is splashed.</span> |
| <Link id="m-isconsumablethroughskin" /><code>{"private bool isConsumableThroughSkin"}</code> | <span className="api-desc">Backing field for `IsConsumableThroughSkin`. Splash liquids (such as the teleport potion) apply on particle contact.</span> |
| <Link id="m-liquidvisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisual"}</code> | <span className="api-desc">Backing field for `LiquidVisual`, the liquid's look and base colour.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-splashparticlesstrength" /><code>{"private float splashParticlesStrength"}</code> | <span className="api-desc">Backing field for `SplashParticlesStrength`: effect strength when applied by splash particles. 1 by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkvisuals-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> ChunkVisuals { get; }"}</code> | <span className="api-desc">Visuals for solid chunks floating in the liquid.</span> |
| <Link id="m-colortint-2" /><code>{"Color ColorTint { get; }"}</code> | <span className="api-desc">Tint applied over the visual's colour.</span> |
| <Link id="m-cookablesused-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] CookablesUsed { get; }"}</code> | <span className="api-desc">Cookable ingredients that went into the liquid. Not saved or synced.</span> |
| <Link id="m-effects-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> Effects { get; }"}</code> | <span className="api-desc">Effects applied when the liquid is consumed or splashed.</span> |
| <Link id="m-isconsumablethroughskin-2" /><code>{"bool IsConsumableThroughSkin { get; }"}</code> | <span className="api-desc">True for splash liquids (such as the teleport potion) that work on contact.</span> |
| <Link id="m-liquidvisual-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" LiquidVisual { get; }"}</code> | <span className="api-desc">Base visual data for the liquid.</span> |
| <Link id="m-splashparticlesstrength-2" /><code>{"float SplashParticlesStrength { get; }"}</code> | <span className="api-desc">Strength for splash particles when consumable through skin.</span> |
| <Link id="m-tintedliquidcolor" /><code>{"Color TintedLiquidColor { get; }"}</code> | <span className="api-desc">The visual's colour times the tint.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Server: applies all its effects to a target at the given strength. Logs an error on a client.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True if colour, visual, skin flag, effects and chunk visuals all match (effects and chunks in any order).</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of the colour, visual, skin flag and the effect and chunk arrays.</span> |
| <Link id="m-getsave" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" GetSave()"}</code> | <span className="api-desc">Builds save data with the colour, skin flag, visual, effects and chunks.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" data)"}</code> | <span className="api-desc">Fills the liquid from save data.</span> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> | <span className="api-desc">Compares with `Equals`; two nulls are equal.</span> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" b)"}</code> | <span className="api-desc">Opposite of `==`.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the colour, skin flag, visual, effects and chunk visuals on a network stream.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializechunksarray" /><code>{"private void SerializeChunksArray("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the chunk visuals as a count and their hashes.</span> |
| <Link id="m-serializeeffectsarray" /><code>{"private void SerializeEffectsArray("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the effect applications as a count and each entry.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidData`:

<div className="api-used-in">

[`CookingLiquidVisual.SetLiquid`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setliquid), [`CookingLiquidVisual.SetLODRendererPropertyBlockFromLiquid`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setlodrendererpropertyblockfromliquid), [`CookingLiquidVisual.SetPropertyBlockFromLiquid`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setpropertyblockfromliquid), [`BoilingParticles.SetupForLiquid`](/mod/game-api/types/alta-stats-effects/boilingparticles#m-setupforliquid), [`BottledLiquid.SetLODRendererPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-setlodrendererpropertyblockfromliquid), [`BottledLiquid.SetPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-setpropertyblockfromliquid), [`LiquidContainerLid.AddFilter`](/mod/game-api/types/alta-stats-effects/liquidcontainerlid#m-addfilter), [`LiquidContent.Data`](/mod/game-api/types/alta-stats-effects/liquidcontent#m-data), [`LiquidDataEventHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/liquiddataeventhandler#m-begininvoke), [`LiquidDataEventHandler.Invoke`](/mod/game-api/types/alta-stats-effects/liquiddataeventhandler#m-invoke), [`LiquidDefinition.data`](/mod/game-api/types/alta-stats-effects/liquiddefinition#m-data), [`LiquidDefinition.Data`](/mod/game-api/types/alta-stats-effects/liquiddefinition#m-data-2), [`LiquidFillFilter.BeginInvoke`](/mod/game-api/types/alta-stats-effects/liquidfillfilter#m-begininvoke), [`LiquidFillFilter.Invoke`](/mod/game-api/types/alta-stats-effects/liquidfillfilter#m-invoke), [`LiquidSurfaceVisual.Liquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquid), [`LiquidSurfaceVisual.SetLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setliquid), [`LiquidSurfaceVisual.SetLODRendererPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setlodrendererpropertyblockfromliquid), [`LiquidSurfaceVisual.SetMaterialsAcordingToLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setmaterialsacordingtoliquid), [`LiquidSurfaceVisual.SetPropertyBlockFromLiquid`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setpropertyblockfromliquid), [`PickupLiquidContainerEnabler.FilterLiquidAdding`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-filterliquidadding), [`PotionImpactColorer.SetToLiquid`](/mod/game-api/types/alta-stats-effects/potionimpactcolorer#m-settoliquid), [`ColoredPooledParticleSpawner.LiquidData`](/mod/game-api/types/global-c-d/coloredpooledparticlespawner#m-liquiddata), [`ConsumptionManager.CanConsumeLiquid`](/mod/game-api/types/global-c-d/consumptionmanager#m-canconsumeliquid), [`ConsumptionManager.HandleFailedDrinking`](/mod/game-api/types/global-c-d/consumptionmanager#m-handlefaileddrinking), [`LiquidParticlesRendererColorer.ColorToLiquid`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-colortoliquid), [`LiquidParticlesRendererColorer.OverrideLiquidColorToTintedOnPouringRenderers`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-overrideliquidcolortotintedonpouringrenderers), [`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials), [`PlayerDrinkingMouth.HandleLiquidAdd`](/mod/game-api/types/global-p/playerdrinkingmouth#m-handleliquidadd).

</div>
