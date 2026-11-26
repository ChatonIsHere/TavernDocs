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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`RoomFixPluginInstance`](/game-api/types/alta-world-generation/roomfixplugininstance)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PluginInstance("}<Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator, "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin, bool isEnabled)"}</code> | Creates a `PluginInstance` from `generator`, `plugin` and `isEnabled`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts"}</code> | Per-generator instances of the plugin's parts, passed to `Plugin.Modify`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-generator" /><code><Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" Generator { get; private set; }"}</code> | The generator (cave layer) this instance belongs to. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | Whether it runs. A dynamic plugin is only enabled while the generator is generating dynamic content (on the server, the first time a layer ever generates). |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The plugin asset's name, used in logs. |
| <Link id="m-plugin" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" { get; private set; }"}</code> | The plugin asset. |
| <Link id="m-randompluginidentifier" /><code>{"int RandomPluginIdentifier { get; private set; }"}</code> | A random number from the generator's seeded hash and the plugin id, the same on every machine. |
| <Link id="m-rendergenerator" /><code><Link to="/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" RenderGenerator { get; private set; }"}</code> | The generator cast to `GenerationBase`, or null if it isn't one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifychunk" /><code>{"bool ModifyChunk("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | Adds this plugin's layer to the map chunk and runs its parts. Returns false and logs if a part throws. |
| <Link id="m-renderchunk" /><code>{"IEnumerator RenderChunk("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk) (iterator)"}</code> | Coroutine that renders the plugin's output for a map chunk, if enabled. |

## Used in

Members of other types that take, return or hold a `PluginInstance`:

[`GenerationBase.PluginInstances`](/game-api/types/alta-world-generation/generationbase#m-plugininstances), [`IGenerator.PluginInstances`](/game-api/types/alta-world-generation/igenerator#m-plugininstances), [`MapChunk.AddLayer`](/game-api/types/alta-world-generation/mapchunk#m-addlayer), [`MapChunk.Render`](/game-api/types/alta-world-generation/mapchunk#m-render), [`MapChunkDisplay.Initialize`](/game-api/types/alta-world-generation/mapchunkdisplay#m-initialize), [`MapChunkDisplay.Plugin`](/game-api/types/alta-world-generation/mapchunkdisplay#m-plugin), [`MapChunkLayer.MapChunkLayer`](/game-api/types/alta-world-generation/mapchunklayer#m-ctor), [`MapChunkLayer.Plugin`](/game-api/types/alta-world-generation/mapchunklayer#m-plugin), [`Plugin.GetInstance`](/game-api/types/alta-world-generation/plugin#m-getinstance), [`Plugin.Render`](/game-api/types/alta-world-generation/plugin#m-render), [`ApplyElement.GetInstance`](/game-api/types/alta-world-generation/applyelement#m-getinstance), [`ApplyElementInstance.ApplyElementInstance`](/game-api/types/alta-world-generation/applyelementinstance#m-ctor), [`BlobEdge.GetInstance`](/game-api/types/alta-world-generation/blobedge#m-getinstance), [`BlobEdgeInstance.BlobEdgeInstance`](/game-api/types/alta-world-generation/blobedgeinstance#m-ctor), [`Blur.GetInstance`](/game-api/types/alta-world-generation/blur#m-getinstance), [`BlurInstance.BlurInstance`](/game-api/types/alta-world-generation/blurinstance#m-ctor), [`CellularAutomata.GetInstance`](/game-api/types/alta-world-generation/cellularautomata#m-getinstance), [`CellularAutomataInstance.CellularAutomataInstance`](/game-api/types/alta-world-generation/cellularautomatainstance#m-ctor), [`Circle.GetInstance`](/game-api/types/alta-world-generation/circle#m-getinstance), [`CircleInstance.CircleInstance`](/game-api/types/alta-world-generation/circleinstance#m-ctor), [`CopyPart.GetInstance`](/game-api/types/alta-world-generation/copypart#m-getinstance), [`CopyPartInstance.CopyPartInstance`](/game-api/types/alta-world-generation/copypartinstance#m-ctor), [`Curve.GetInstance`](/game-api/types/alta-world-generation/curve#m-getinstance), [`CurveInstance.CurveInstance`](/game-api/types/alta-world-generation/curveinstance#m-ctor), [`LogRange.GetInstance`](/game-api/types/alta-world-generation/logrange#m-getinstance), [`LogRangeInstance.LogRangeInstance`](/game-api/types/alta-world-generation/lograngeinstance#m-ctor), [`MapGeneratorPart.GetInstance`](/game-api/types/alta-world-generation/mapgeneratorpart#m-getinstance), [`MapGeneratorPartInstance<T>.MapGeneratorPartInstance<T>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-ctor), [`MapGeneratorPartInstance<T>.PluginInstance`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-plugininstance), [`Mask.GetInstance`](/game-api/types/alta-world-generation/mask#m-getinstance), [`MaskInstance.MaskInstance`](/game-api/types/alta-world-generation/maskinstance#m-ctor), [`OperationPart.GetInstance`](/game-api/types/alta-world-generation/operationpart#m-getinstance), [`OperationPartInstance.OperationPartInstance`](/game-api/types/alta-world-generation/operationpartinstance#m-ctor), [`RandomNoise.GetInstance`](/game-api/types/alta-world-generation/randomnoise#m-getinstance), [`RandomNoiseInstance.RandomNoiseInstance`](/game-api/types/alta-world-generation/randomnoiseinstance#m-ctor), [`RoofHole.GetInstance`](/game-api/types/alta-world-generation/roofhole#m-getinstance), [`RoofHoleInstance.RoofHoleInstance`](/game-api/types/alta-world-generation/roofholeinstance#m-ctor), [`RoomFixes.GetInstance`](/game-api/types/alta-world-generation/roomfixes#m-getinstance), [`RoomFixesInstance.RoomFixesInstance`](/game-api/types/alta-world-generation/roomfixesinstance#m-ctor), [`SimplexNoisePart.GetInstance`](/game-api/types/alta-world-generation/simplexnoisepart#m-getinstance), [`SimplexNoisePartInstance.SimplexNoisePartInstance`](/game-api/types/alta-world-generation/simplexnoisepartinstance#m-ctor), [`Stretch.GetInstance`](/game-api/types/alta-world-generation/stretch#m-getinstance), [`StretchInstance.StretchInstance`](/game-api/types/alta-world-generation/stretchinstance#m-ctor), [`RoomFixPlugin.GetInstance`](/game-api/types/alta-world-generation/roomfixplugin#m-getinstance), [`RoomFixPlugin.Render`](/game-api/types/alta-world-generation/roomfixplugin#m-render).
