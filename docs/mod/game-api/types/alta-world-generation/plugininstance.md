---
title: "PluginInstance"
description: "One cave generation Plugin running for one generator (cave layer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PluginInstance

A **class** in `Root.Township`, `Alta.Caves`.

One cave generation `Plugin` running for one generator (cave layer). Made by `Plugin.GetInstance`; holds the plugin's part instances and runs them on each map chunk. Both sides build the rock from the same seed.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`RoomFixPluginInstance`](/mod/game-api/types/alta-world-generation/roomfixplugininstance)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PluginInstance("}<Link to="/mod/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator, "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin, bool isEnabled)"}</code> | <span className="api-desc">Creates a `PluginInstance` from `generator`, `plugin` and `isEnabled`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts"}</code> | <span className="api-desc">Per-generator instances of the plugin's parts, passed to `Plugin.Modify`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-generator" /><code><Link to="/mod/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" Generator { get; private set; }"}</code> | <span className="api-desc">The generator (cave layer) this instance belongs to.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">Whether it runs. A dynamic plugin is only enabled while the generator is generating dynamic content (on the server, the first time a layer ever generates).</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The plugin asset's name, used in logs.</span> |
| <Link id="m-plugin" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The plugin asset.</span> |
| <Link id="m-randompluginidentifier" /><code>{"int RandomPluginIdentifier { get; private set; }"}</code> | <span className="api-desc">A random number from the generator's seeded hash and the plugin id, the same on every machine.</span> |
| <Link id="m-rendergenerator" /><code><Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" RenderGenerator { get; private set; }"}</code> | <span className="api-desc">The generator cast to `GenerationBase`, or null if it isn't one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifychunk" /><code>{"bool ModifyChunk("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Adds this plugin's layer to the map chunk and runs its parts. Returns false and logs if a part throws.</span> |
| <Link id="m-renderchunk" /><code>{"IEnumerator RenderChunk("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk) (iterator)"}</code> | <span className="api-desc">Coroutine that renders the plugin's output for a map chunk, if enabled.</span> |

## Used in

Members of other types that take, return or hold a `PluginInstance`:

<div className="api-used-in">

[`GenerationBase.PluginInstances`](/mod/game-api/types/alta-world-generation/generationbase#m-plugininstances), [`IGenerator.PluginInstances`](/mod/game-api/types/alta-world-generation/igenerator#m-plugininstances), [`MapChunk.AddLayer`](/mod/game-api/types/alta-world-generation/mapchunk#m-addlayer), [`MapChunk.Render`](/mod/game-api/types/alta-world-generation/mapchunk#m-render), [`MapChunkDisplay.Initialize`](/mod/game-api/types/alta-world-generation/mapchunkdisplay#m-initialize), [`MapChunkDisplay.Plugin`](/mod/game-api/types/alta-world-generation/mapchunkdisplay#m-plugin), [`MapChunkLayer.MapChunkLayer`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-ctor), [`MapChunkLayer.Plugin`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-plugin), [`Plugin.GetInstance`](/mod/game-api/types/alta-world-generation/plugin#m-getinstance), [`Plugin.Render`](/mod/game-api/types/alta-world-generation/plugin#m-render), [`ApplyElement.GetInstance`](/mod/game-api/types/alta-world-generation/applyelement#m-getinstance), [`ApplyElementInstance.ApplyElementInstance`](/mod/game-api/types/alta-world-generation/applyelementinstance#m-ctor), [`BlobEdge.GetInstance`](/mod/game-api/types/alta-world-generation/blobedge#m-getinstance), [`BlobEdgeInstance.BlobEdgeInstance`](/mod/game-api/types/alta-world-generation/blobedgeinstance#m-ctor), [`Blur.GetInstance`](/mod/game-api/types/alta-world-generation/blur#m-getinstance), [`BlurInstance.BlurInstance`](/mod/game-api/types/alta-world-generation/blurinstance#m-ctor), [`CellularAutomata.GetInstance`](/mod/game-api/types/alta-world-generation/cellularautomata#m-getinstance), [`CellularAutomataInstance.CellularAutomataInstance`](/mod/game-api/types/alta-world-generation/cellularautomatainstance#m-ctor), [`Circle.GetInstance`](/mod/game-api/types/alta-world-generation/circle#m-getinstance), [`CircleInstance.CircleInstance`](/mod/game-api/types/alta-world-generation/circleinstance#m-ctor), [`CopyPart.GetInstance`](/mod/game-api/types/alta-world-generation/copypart#m-getinstance), [`CopyPartInstance.CopyPartInstance`](/mod/game-api/types/alta-world-generation/copypartinstance#m-ctor), [`Curve.GetInstance`](/mod/game-api/types/alta-world-generation/curve#m-getinstance), [`CurveInstance.CurveInstance`](/mod/game-api/types/alta-world-generation/curveinstance#m-ctor), [`LogRange.GetInstance`](/mod/game-api/types/alta-world-generation/logrange#m-getinstance), [`LogRangeInstance.LogRangeInstance`](/mod/game-api/types/alta-world-generation/lograngeinstance#m-ctor), [`MapGeneratorPart.GetInstance`](/mod/game-api/types/alta-world-generation/mapgeneratorpart#m-getinstance), [`MapGeneratorPartInstance<T>.MapGeneratorPartInstance<T>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-ctor), [`MapGeneratorPartInstance<T>.PluginInstance`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-plugininstance), [`Mask.GetInstance`](/mod/game-api/types/alta-world-generation/mask#m-getinstance), [`MaskInstance.MaskInstance`](/mod/game-api/types/alta-world-generation/maskinstance#m-ctor), [`OperationPart.GetInstance`](/mod/game-api/types/alta-world-generation/operationpart#m-getinstance), [`OperationPartInstance.OperationPartInstance`](/mod/game-api/types/alta-world-generation/operationpartinstance#m-ctor), [`RandomNoise.GetInstance`](/mod/game-api/types/alta-world-generation/randomnoise#m-getinstance), [`RandomNoiseInstance.RandomNoiseInstance`](/mod/game-api/types/alta-world-generation/randomnoiseinstance#m-ctor), [`RoofHole.GetInstance`](/mod/game-api/types/alta-world-generation/roofhole#m-getinstance), [`RoofHoleInstance.RoofHoleInstance`](/mod/game-api/types/alta-world-generation/roofholeinstance#m-ctor), [`RoomFixes.GetInstance`](/mod/game-api/types/alta-world-generation/roomfixes#m-getinstance), [`RoomFixesInstance.RoomFixesInstance`](/mod/game-api/types/alta-world-generation/roomfixesinstance#m-ctor), [`SimplexNoisePart.GetInstance`](/mod/game-api/types/alta-world-generation/simplexnoisepart#m-getinstance), [`SimplexNoisePartInstance.SimplexNoisePartInstance`](/mod/game-api/types/alta-world-generation/simplexnoisepartinstance#m-ctor), [`Stretch.GetInstance`](/mod/game-api/types/alta-world-generation/stretch#m-getinstance), [`StretchInstance.StretchInstance`](/mod/game-api/types/alta-world-generation/stretchinstance#m-ctor), [`RoomFixPlugin.GetInstance`](/mod/game-api/types/alta-world-generation/roomfixplugin#m-getinstance), [`RoomFixPlugin.Render`](/mod/game-api/types/alta-world-generation/roomfixplugin#m-render).

</div>
