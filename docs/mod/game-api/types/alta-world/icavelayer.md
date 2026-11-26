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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`IPortalApplier`](/mod/game-api/types/alta-world/iportalapplier)
- **Derived types** [`CaveLayerStreamer`](/mod/game-api/types/alta-world/cavelayerstreamer), [`StaticCaveChunk`](/mod/game-api/types/alta-world/staticcavechunk)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | <span className="api-desc">The location chunk of this layer.</span> |
| <Link id="m-depth" /><code>{"float Depth { get; }"}</code> | <span className="api-desc">How deep the layer is.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The layer's network entity.</span> |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; }"}</code> | <span className="api-desc">Where the layer's entrance is.</span> |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; }"}</code> | <span className="api-desc">The layer number.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; }"}</code> | <span className="api-desc">The cave layer manager.</span> |
| <Link id="m-name" /><code>{"string name { get; set; }"}</code> | <span className="api-desc">The layer object's name.</span> |
| <Link id="m-portaltransform" /><code>{"Transform PortalTransform { get; }"}</code> | <span className="api-desc">Transform of the portal into this layer.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-exitready" /><code>{"event Action<int, float, Vector2, Vector2> ExitReady"}</code> | <span className="api-desc">Raised when the layer's exit is placed, with this layer's number, the depth below it, and the exit position and direction.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getidentifier" /><code>{"string GetIdentifier(int layer)"}</code> | <span className="api-desc">Builds the identifier string for a layer number.</span> |
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layer)"}</code> | <span className="api-desc">Sets the layer's manager and layer number.</span> |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> | <span className="api-desc">Links this layer's portal in a chunk to another layer.</span> |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> | <span className="api-desc">Sets the depth, entrance position and direction.</span> |

## Used in

Members of other types that take, return or hold a `ICaveLayer`:

<div className="api-used-in">

[`CaveLayerManager.CreateLayer`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-createlayer), [`CaveLayerManager.Layers`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-layers), [`CaveLayerManager.RequestPortalRegistering`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-requestportalregistering), [`CaveLayerManager.SpawnWithoutGenerating`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-spawnwithoutgenerating), [`CaveLayerChunk.caveLayer`](/mod/game-api/types/alta-world/cavelayerchunk#m-cavelayer), [`CaveLayerStreamer.neighborStreamer`](/mod/game-api/types/alta-world/cavelayerstreamer#m-neighborstreamer), [`CaveLayerStreamer.RegisterPortal`](/mod/game-api/types/alta-world/cavelayerstreamer#m-registerportal), [`StaticCaveChunk.RegisterPortal`](/mod/game-api/types/alta-world/staticcavechunk#m-registerportal), [`ProgressCommandModule.ConnectTeleporter`](/mod/game-api/types/alta-console/progresscommandmodule#m-connectteleporter), [`ProgressCommandModule.GenerateCavesTo`](/mod/game-api/types/alta-console/progresscommandmodule#m-generatecavesto), [`ProgressCommandModule.RepairTeleporter`](/mod/game-api/types/alta-console/progresscommandmodule#m-repairteleporter).

</div>
