---
title: "ICaveLayer"
description: "One layer of a procedural cave, managed by a CaveLayerManager and linked to the layers around it by portals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICaveLayer

An **interface** in `Root.Township`, `Alta.Chunks`.

One layer of a procedural cave, managed by a `CaveLayerManager` and linked to the layers around it by portals.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IPortalApplier`](/game-api/types/alta-world/iportalapplier)
- **Derived types** [`CaveLayerStreamer`](/game-api/types/alta-world/cavelayerstreamer), [`StaticCaveChunk`](/game-api/types/alta-world/staticcavechunk)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | The location chunk of this layer. |
| <Link id="m-depth" /><code>{"float Depth { get; }"}</code> | How deep the layer is. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The layer's network entity. |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; }"}</code> | Where the layer's entrance is. |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; }"}</code> | The layer number. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; }"}</code> | The cave layer manager. |
| <Link id="m-name" /><code>{"string name { get; set; }"}</code> | The layer object's name. |
| <Link id="m-portaltransform" /><code>{"Transform PortalTransform { get; }"}</code> | Transform of the portal into this layer. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-exitready" /><code>{"event Action<int, float, Vector2, Vector2> ExitReady"}</code> | Raised when the layer's exit is placed, with this layer's number, the depth below it, and the exit position and direction. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getidentifier" /><code>{"string GetIdentifier(int layer)"}</code> | Builds the identifier string for a layer number. |
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layer)"}</code> | Sets the layer's manager and layer number. |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> | Links this layer's portal in a chunk to another layer. |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> | Sets the depth, entrance position and direction. |

## Used in

Members of other types that take, return or hold a `ICaveLayer`:

[`CaveLayerManager.CreateLayer`](/game-api/types/alta-world-generation/cavelayermanager#m-createlayer), [`CaveLayerManager.Layers`](/game-api/types/alta-world-generation/cavelayermanager#m-layers), [`CaveLayerManager.RequestPortalRegistering`](/game-api/types/alta-world-generation/cavelayermanager#m-requestportalregistering), [`CaveLayerManager.SpawnWithoutGenerating`](/game-api/types/alta-world-generation/cavelayermanager#m-spawnwithoutgenerating), [`CaveLayerChunk.caveLayer`](/game-api/types/alta-world/cavelayerchunk#m-cavelayer), [`CaveLayerStreamer.neighborStreamer`](/game-api/types/alta-world/cavelayerstreamer#m-neighborstreamer), [`CaveLayerStreamer.RegisterPortal`](/game-api/types/alta-world/cavelayerstreamer#m-registerportal), [`StaticCaveChunk.RegisterPortal`](/game-api/types/alta-world/staticcavechunk#m-registerportal), [`ProgressCommandModule.ConnectTeleporter`](/game-api/types/alta-console/progresscommandmodule#m-connectteleporter), [`ProgressCommandModule.GenerateCavesTo`](/game-api/types/alta-console/progresscommandmodule#m-generatecavesto), [`ProgressCommandModule.RepairTeleporter`](/game-api/types/alta-console/progresscommandmodule#m-repairteleporter).
