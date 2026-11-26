---
title: "MaterialRect"
description: "A material with its offset and scale inside a texture atlas, and whether mesh UVs need fixing to use it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialRect

A **struct** in `Root.Township`, `Alta.Utilities.Atlas`.

A material with its offset and scale inside a texture atlas, and whether mesh UVs need fixing to use it.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialRect(Material material, Vector4 offsetScale, bool needsFixing)"}</code> |
| <Link id="m-ctor-2" /><code>{"MaterialRect(Material material)"}</code> |
| <Link id="m-ctor-3" /><code>{"MaterialRect("}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{" atlasedMaterial)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"Material Material { get; }"}</code> | The material. |
| <Link id="m-needsfixing" /><code>{"bool NeedsFixing { get; }"}</code> | True when built from an atlased material, so mesh UVs must be remapped to its area. |
| <Link id="m-offsetscale" /><code>{"Vector4 OffsetScale { get; }"}</code> | Offset (x, y) and scale (z, w) of the material's area in the atlas; zero when not atlased. |

## Used in

Members of other types that take, return or hold a `MaterialRect`:

[`MeshFilterExtensions.GetAtlasedMesh`](/game-api/types/alta-utilities/meshfilterextensions-alta-utilities-atlas#m-getatlasedmesh), [`TreeSpecies.LeafMaterialRects`](/game-api/types/alta-crafting/treespecies#m-leafmaterialrects), [`WoodcutTreeAttachmentBaker.GetAttachmentMaterial`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getattachmentmaterial), [`PhysicalMaterial.GetNonDeformingMaterial`](/game-api/types/global-p/physicalmaterial#m-getnondeformingmaterial), [`PhysicalMaterial.MaterialChannel.NonDeformingMaterial`](/game-api/types/global-p/physicalmaterial-materialchannel#m-nondeformingmaterial-2).
