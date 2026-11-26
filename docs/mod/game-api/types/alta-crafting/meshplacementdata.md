---
title: "MeshPlacementData"
description: "A saved mesh placement for the Scrapper tool: local transform, mesh and material, with optional texture atlas baking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshPlacementData

A **class** in `Root.Township`, `Alta.Scrapper.Data`.

A saved mesh placement for the Scrapper tool: local transform, mesh and material, with optional texture atlas baking. Build-time data.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<MeshPlacementData>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MeshPlacementData`](/mod/game-api/types/alta-crafting/meshplacementdata), [`MeshPlacementData.Create`](/mod/game-api/types/alta-crafting/meshplacementdata-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/meshplacementdata-create)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshPlacementData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcedatlasdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" forcedAtlasDefinition"}</code> | <span className="api-desc">Atlas to try first when baking. Cleared after the bake attempt.</span> |
| <Link id="m-localeulerangles" /><code>{"private Vector3 localEulerAngles"}</code> | <span className="api-desc">Saved local rotation in euler angles.</span> |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">Saved local position.</span> |
| <Link id="m-localscale" /><code>{"private Vector3 localScale"}</code> | <span className="api-desc">Saved local scale.</span> |
| <Link id="m-sharedmaterial" /><code>{"private Material sharedMaterial"}</code> | <span className="api-desc">Saved material; replaced by the atlas material when baked.</span> |
| <Link id="m-sharedmesh" /><code>{"private Mesh sharedMesh"}</code> | <span className="api-desc">Saved mesh; replaced by the atlas mesh when baked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localeulerangles-2" /><code>{"Vector3 LocalEulerAngles { get; }"}</code> | <span className="api-desc">Saved local rotation in degrees.</span> |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | <span className="api-desc">Saved local position.</span> |
| <Link id="m-localscale-2" /><code>{"Vector3 LocalScale { get; }"}</code> | <span className="api-desc">Saved local scale.</span> |
| <Link id="m-sharedmaterial-2" /><code>{"Material SharedMaterial { get; }"}</code> | <span className="api-desc">Material to render the mesh with.</span> |
| <Link id="m-sharedmesh-2" /><code>{"Mesh SharedMesh { get; }"}</code> | <span className="api-desc">The mesh to place.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakeatlas" /><code>{"bool BakeAtlas(IEnumerable<"}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> definitions)"}</code> | <span className="api-desc">Swaps the mesh and material for an atlased version (forced atlas first, then the first that applies). True on success.</span> |
| <Link id="m-savedata" /><code>{"void SaveData(Vector3 localScale, Vector3 localEulerAngles, Vector3 localPosition, Mesh sharedMesh, Material sharedMaterial)"}</code> | <span className="api-desc">Stores the transform, mesh and material.</span> |

## Used in

Members of other types that take, return or hold a `MeshPlacementData`:

<div className="api-used-in">

[`MeshPlacement.data`](/mod/game-api/types/alta-crafting/meshplacement#m-data), [`MeshPlacementSaveData.data`](/mod/game-api/types/alta-crafting/meshplacementsavedata#m-data).

</div>
