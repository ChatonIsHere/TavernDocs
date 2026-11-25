---
title: "Plugin"
description: "class Plugin in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Plugin

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`MarchingCubesPlugin`](/game-api/types/alta-world-generation/marchingcubesplugin), [`RoomFixPlugin`](/game-api/types/alta-world-generation/roomfixplugin)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Plugin()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-element" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element"}</code> |  |
| <Link id="m-generationstage" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generationstage">{"GenerationStage"}</Link>{" generationStage"}</code> |  |
| <Link id="m-isdynamic" /><code>{"private bool isDynamic"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-isnonzerolistcreated" /><code>{"private bool isNonZeroListCreated"}</code> |  |
| <Link id="m-layerheight" /><code>{"private int layerHeight"}</code> |  |
| <Link id="m-layeroverflowxz" /><code>{"private int layerOverflowXZ"}</code> |  |
| <Link id="m-parts" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/mapgeneratorpart">{"MapGeneratorPart"}</Link>{"> parts"}</code> |  |
| <Link id="m-pluginidentifier" /><code>{"private int pluginIdentifier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-element-2" /><code><Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isdynamic-2" /><code>{"bool IsDynamic { get; }"}</code> |  |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> |  |
| <Link id="m-isnonzerolistcreated-2" /><code>{"bool IsNonZeroListCreated { get; }"}</code> |  |
| <Link id="m-layerheight-2" /><code>{"int LayerHeight { get; }"}</code> |  |
| <Link id="m-layeroverflowxz-2" /><code>{"int LayerOverflowXZ { get; }"}</code> |  |
| <Link id="m-parts-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/mapgeneratorpart">{"MapGeneratorPart"}</Link>{"> Parts { get; }"}</code> |  |
| <Link id="m-pluginidentifier-2" /><code>{"int PluginIdentifier { get; }"}</code> |  |
| <Link id="m-stage" /><code><Link to="/game-api/types/alta-world-generation/generationstage">{"GenerationStage"}</Link>{" Stage { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"virtual "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator)"}</code> |  |
| <Link id="m-modify" /><code>{"virtual void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts)"}</code> |  |
| <Link id="m-regenerateidentifier" /><code>{"void RegenerateIdentifier()"}</code> |  |
| <Link id="m-render" /><code>{"virtual IEnumerator Render("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance) (iterator)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Plugin`:

[`BiomeResources.plugins`](/game-api/types/alta-world-generation/biomeresources#m-plugins), [`BiomeResources.Plugins`](/game-api/types/alta-world-generation/biomeresources#m-plugins-2), [`WallAlignedDisplay.floorPlan`](/game-api/types/alta-world-generation/wallaligneddisplay#m-floorplan), [`GenerationBase.floorPlugin`](/game-api/types/alta-world-generation/generationbase#m-floorplugin), [`GenerationBase.FloorPlugin`](/game-api/types/alta-world-generation/generationbase#m-floorplugin-2), [`MapChunk.GetLayer`](/game-api/types/alta-world-generation/mapchunk#m-getlayer), [`MapChunk.layers`](/game-api/types/alta-world-generation/mapchunk#m-layers), [`MarchingCubesPlugin.generatorLayer`](/game-api/types/alta-world-generation/marchingcubesplugin#m-generatorlayer), [`PluginInstance.Plugin`](/game-api/types/alta-world-generation/plugininstance#m-plugin), [`PluginInstance.PluginInstance`](/game-api/types/alta-world-generation/plugininstance#m-ctor), [`PluginList.plugins`](/game-api/types/alta-world-generation/pluginlist#m-plugins), [`PluginList.Plugins`](/game-api/types/alta-world-generation/pluginlist#m-plugins-2), [`CopyPart.from`](/game-api/types/alta-world-generation/copypart#m-from), [`CopyPart.From`](/game-api/types/alta-world-generation/copypart#m-from-2), [`CopyPartInstance.from`](/game-api/types/alta-world-generation/copypartinstance#m-from), [`MapGeneratorPart.overrideTarget`](/game-api/types/alta-world-generation/mapgeneratorpart#m-overridetarget), [`MapGeneratorPart.OverrideTarget`](/game-api/types/alta-world-generation/mapgeneratorpart#m-overridetarget-2), [`MapGeneratorPartInstance<T>.Plugin`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-plugin), [`MapGeneratorPartInstance<T>.Target`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-target), [`Mask.mask`](/game-api/types/alta-world-generation/mask#m-mask), [`Mask.MaskPlugin`](/game-api/types/alta-world-generation/mask#m-maskplugin), [`OperationPart.a`](/game-api/types/alta-world-generation/operationpart#m-a), [`OperationPart.A`](/game-api/types/alta-world-generation/operationpart#m-a-2), [`OperationPart.b`](/game-api/types/alta-world-generation/operationpart#m-b), [`OperationPart.B`](/game-api/types/alta-world-generation/operationpart#m-b-2), [`OperationPartInstance.a`](/game-api/types/alta-world-generation/operationpartinstance#m-a), [`OperationPartInstance.b`](/game-api/types/alta-world-generation/operationpartinstance#m-b), [`RandomNoise.coverageMultiplier`](/game-api/types/alta-world-generation/randomnoise#m-coveragemultiplier), [`RandomNoise.CoverageMultiplier`](/game-api/types/alta-world-generation/randomnoise#m-coveragemultiplier-2), [`RoomFixes.manMadeLayer`](/game-api/types/alta-world-generation/roomfixes#m-manmadelayer), [`RoomFixes.ManMadeLayer`](/game-api/types/alta-world-generation/roomfixes#m-manmadelayer-2), [`Stretch.heightMapLayer`](/game-api/types/alta-world-generation/stretch#m-heightmaplayer), [`Stretch.HeightMapLayer`](/game-api/types/alta-world-generation/stretch#m-heightmaplayer-2), [`RoomFixPluginInstance.RoomFixPluginInstance`](/game-api/types/alta-world-generation/roomfixplugininstance#m-ctor), [`Ecosystem.PopulationApplication.plugin`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-plugin), [`Ecosystem.PopulationApplication.Plugin`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-plugin-2).
