---
title: "Plugin"
description: "A cave generation step asset (blob, tunnels, crystals, structures and so on), made of MapGeneratorParts that write values into a per-chunk layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Plugin

A **class** in `Root.Township`, `Alta.Caves`.

A cave generation step asset (blob, tunnels, crystals, structures and so on), made of `MapGeneratorPart`s that write values into a per-chunk layer. Run through a `PluginInstance` for each cave layer.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`MarchingCubesPlugin`](/game-api/types/alta-world-generation/marchingcubesplugin), [`RoomFixPlugin`](/game-api/types/alta-world-generation/roomfixplugin)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Plugin()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-element" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element"}</code> | Backing field for `Element`. The base `Render` spawns this element's prefab. |
| <Link id="m-generationstage" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generationstage">{"GenerationStage"}</Link>{" generationStage"}</code> | Backing field for `Stage`, the generation stage the plugin runs in. |
| <Link id="m-isdynamic" /><code>{"private bool isDynamic"}</code> | Backing field for `IsDynamic` (formerly `isServerOnly`). Dynamic plugins only run when the generator generates dynamic content. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. Disabled plugins make instances that skip modify and render. |
| <Link id="m-isnonzerolistcreated" /><code>{"private bool isNonZeroListCreated"}</code> | Backing field for `IsNonZeroListCreated`. If set, each layer builds a list of its non-zero cells after generation. |
| <Link id="m-layerheight" /><code>{"private int layerHeight"}</code> | Backing field for `LayerHeight`, the Y size of this plugin's chunk layer. |
| <Link id="m-layeroverflowxz" /><code>{"private int layerOverflowXZ"}</code> | Backing field for `LayerOverflowXZ`: extra cells the layer reaches past each chunk edge. 1 by default. |
| <Link id="m-parts" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/mapgeneratorpart">{"MapGeneratorPart"}</Link>{"> parts"}</code> | Backing field for `Parts`, the generator parts that modify each chunk in order. |
| <Link id="m-pluginidentifier" /><code>{"private int pluginIdentifier"}</code> | Backing field for `PluginIdentifier`. Seeds the per-plugin random hash and is cached in generated loot saves. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-element-2" /><code><Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" { get; }"}</code> | Optional element whose prefab the default `Render` spawns. |
| <Link id="m-isdynamic-2" /><code>{"bool IsDynamic { get; }"}</code> | Marks plugins that place saved things (crystals, structures, totems). They only run when a layer is first generated on the server. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | Turns the plugin off entirely when false. |
| <Link id="m-isnonzerolistcreated-2" /><code>{"bool IsNonZeroListCreated { get; }"}</code> | When true, the chunk layer builds a list of its non-zero values for later passes such as spawners. |
| <Link id="m-layerheight-2" /><code>{"int LayerHeight { get; }"}</code> | Height in cells of this plugin's value layer in each map chunk. |
| <Link id="m-layeroverflowxz-2" /><code>{"int LayerOverflowXZ { get; }"}</code> | Extra cells kept around each chunk edge in this plugin's layer, so parts can read past the border. |
| <Link id="m-parts-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/mapgeneratorpart">{"MapGeneratorPart"}</Link>{"> Parts { get; }"}</code> | The generator parts run in order by `Modify`. |
| <Link id="m-pluginidentifier-2" /><code>{"int PluginIdentifier { get; }"}</code> | Stable id that seeds the plugin's randomness. Set from the instance id if it is 0 or less. |
| <Link id="m-stage" /><code><Link to="/game-api/types/alta-world-generation/generationstage">{"GenerationStage"}</Link>{" Stage { get; }"}</code> | Which generation stage the plugin belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"virtual "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator)"}</code> | Makes a `PluginInstance` of this plugin for a generator. |
| <Link id="m-modify" /><code>{"virtual void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts)"}</code> | Runs each part on the map chunk. Subclasses can change this. |
| <Link id="m-regenerateidentifier" /><code>{"void RegenerateIdentifier()"}</code> | Editor: sets `PluginIdentifier` from the asset's instance id. |
| <Link id="m-render" /><code>{"virtual IEnumerator Render("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance) (iterator)"}</code> | Coroutine that spawns `Element`'s prefab for the chunk, if there is one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: gives the plugin a new identifier if it has none. |

</details>

## Used in

Members of other types that take, return or hold a `Plugin`:

[`BiomeResources.plugins`](/game-api/types/alta-world-generation/biomeresources#m-plugins), [`BiomeResources.Plugins`](/game-api/types/alta-world-generation/biomeresources#m-plugins-2), [`WallAlignedDisplay.floorPlan`](/game-api/types/alta-world-generation/wallaligneddisplay#m-floorplan), [`GenerationBase.floorPlugin`](/game-api/types/alta-world-generation/generationbase#m-floorplugin), [`GenerationBase.FloorPlugin`](/game-api/types/alta-world-generation/generationbase#m-floorplugin-2), [`MapChunk.GetLayer`](/game-api/types/alta-world-generation/mapchunk#m-getlayer), [`MapChunk.layers`](/game-api/types/alta-world-generation/mapchunk#m-layers), [`MarchingCubesPlugin.generatorLayer`](/game-api/types/alta-world-generation/marchingcubesplugin#m-generatorlayer), [`PluginInstance.Plugin`](/game-api/types/alta-world-generation/plugininstance#m-plugin), [`PluginInstance.PluginInstance`](/game-api/types/alta-world-generation/plugininstance#m-ctor), [`PluginList.plugins`](/game-api/types/alta-world-generation/pluginlist#m-plugins), [`PluginList.Plugins`](/game-api/types/alta-world-generation/pluginlist#m-plugins-2), [`CopyPart.from`](/game-api/types/alta-world-generation/copypart#m-from), [`CopyPart.From`](/game-api/types/alta-world-generation/copypart#m-from-2), [`CopyPartInstance.from`](/game-api/types/alta-world-generation/copypartinstance#m-from), [`MapGeneratorPart.overrideTarget`](/game-api/types/alta-world-generation/mapgeneratorpart#m-overridetarget), [`MapGeneratorPart.OverrideTarget`](/game-api/types/alta-world-generation/mapgeneratorpart#m-overridetarget-2), [`MapGeneratorPartInstance<T>.Plugin`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-plugin), [`MapGeneratorPartInstance<T>.Target`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-target), [`Mask.mask`](/game-api/types/alta-world-generation/mask#m-mask), [`Mask.MaskPlugin`](/game-api/types/alta-world-generation/mask#m-maskplugin), [`OperationPart.a`](/game-api/types/alta-world-generation/operationpart#m-a), [`OperationPart.A`](/game-api/types/alta-world-generation/operationpart#m-a-2), [`OperationPart.b`](/game-api/types/alta-world-generation/operationpart#m-b), [`OperationPart.B`](/game-api/types/alta-world-generation/operationpart#m-b-2), [`OperationPartInstance.a`](/game-api/types/alta-world-generation/operationpartinstance#m-a), [`OperationPartInstance.b`](/game-api/types/alta-world-generation/operationpartinstance#m-b), [`RandomNoise.coverageMultiplier`](/game-api/types/alta-world-generation/randomnoise#m-coveragemultiplier), [`RandomNoise.CoverageMultiplier`](/game-api/types/alta-world-generation/randomnoise#m-coveragemultiplier-2), [`RoomFixes.manMadeLayer`](/game-api/types/alta-world-generation/roomfixes#m-manmadelayer), [`RoomFixes.ManMadeLayer`](/game-api/types/alta-world-generation/roomfixes#m-manmadelayer-2), [`Stretch.heightMapLayer`](/game-api/types/alta-world-generation/stretch#m-heightmaplayer), [`Stretch.HeightMapLayer`](/game-api/types/alta-world-generation/stretch#m-heightmaplayer-2), [`RoomFixPluginInstance.RoomFixPluginInstance`](/game-api/types/alta-world-generation/roomfixplugininstance#m-ctor), [`Ecosystem.PopulationApplication.plugin`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-plugin), [`Ecosystem.PopulationApplication.Plugin`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-plugin-2).
