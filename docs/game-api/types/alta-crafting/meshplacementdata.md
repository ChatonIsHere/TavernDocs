---
title: "MeshPlacementData"
description: "A saved mesh placement for the Scrapper tool: local transform, mesh and material, with optional texture atlas baking. Build-time data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshPlacementData

A **class** in `Root.Township`, `Alta.Scrapper.Data`.

A saved mesh placement for the Scrapper tool: local transform, mesh and material, with optional texture atlas baking. Build-time data.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<MeshPlacementData>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MeshPlacementData`](/game-api/types/alta-crafting/meshplacementdata), [`MeshPlacementData.Create`](/game-api/types/alta-crafting/meshplacementdata-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/meshplacementdata-create)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshPlacementData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-forcedatlasdefinition" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" forcedAtlasDefinition"}</code> |  |
| <Link id="m-localeulerangles" /><code>{"private Vector3 localEulerAngles"}</code> |  |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> |  |
| <Link id="m-localscale" /><code>{"private Vector3 localScale"}</code> |  |
| <Link id="m-sharedmaterial" /><code>{"private Material sharedMaterial"}</code> |  |
| <Link id="m-sharedmesh" /><code>{"private Mesh sharedMesh"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localeulerangles-2" /><code>{"Vector3 LocalEulerAngles { get; }"}</code> | Saved local rotation in degrees. |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | Saved local position. |
| <Link id="m-localscale-2" /><code>{"Vector3 LocalScale { get; }"}</code> | Saved local scale. |
| <Link id="m-sharedmaterial-2" /><code>{"Material SharedMaterial { get; }"}</code> | Material to render the mesh with. |
| <Link id="m-sharedmesh-2" /><code>{"Mesh SharedMesh { get; }"}</code> | The mesh to place. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakeatlas" /><code>{"bool BakeAtlas(IEnumerable<"}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> definitions)"}</code> | Swaps the mesh and material for an atlased version, using the forced atlas first, then the first definition that applies. Returns true on success. |
| <Link id="m-savedata" /><code>{"void SaveData(Vector3 localScale, Vector3 localEulerAngles, Vector3 localPosition, Mesh sharedMesh, Material sharedMaterial)"}</code> | Stores the transform, mesh and material. |

## Used in

Members of other types that take, return or hold a `MeshPlacementData`:

[`MeshPlacement.data`](/game-api/types/alta-crafting/meshplacement#m-data), [`MeshPlacementSaveData.data`](/game-api/types/alta-crafting/meshplacementsavedata#m-data).
