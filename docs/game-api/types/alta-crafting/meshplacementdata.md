---
title: "MeshPlacementData"
description: "class MeshPlacementData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshPlacementData

A **class** in `Root.Township`, `Alta.Scrapper.Data`.

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
| <Link id="m-localeulerangles-2" /><code>{"Vector3 LocalEulerAngles { get; }"}</code> |  |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> |  |
| <Link id="m-localscale-2" /><code>{"Vector3 LocalScale { get; }"}</code> |  |
| <Link id="m-sharedmaterial-2" /><code>{"Material SharedMaterial { get; }"}</code> |  |
| <Link id="m-sharedmesh-2" /><code>{"Mesh SharedMesh { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakeatlas" /><code>{"bool BakeAtlas(IEnumerable<"}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> definitions)"}</code> |  |
| <Link id="m-savedata" /><code>{"void SaveData(Vector3 localScale, Vector3 localEulerAngles, Vector3 localPosition, Mesh sharedMesh, Material sharedMaterial)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MeshPlacementData`:

[`MeshPlacement.data`](/game-api/types/alta-crafting/meshplacement#m-data), [`MeshPlacementSaveData.data`](/game-api/types/alta-crafting/meshplacementsavedata#m-data).
