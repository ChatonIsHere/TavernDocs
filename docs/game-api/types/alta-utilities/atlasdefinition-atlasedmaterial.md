---
title: "AtlasDefinition.AtlasedMaterial"
description: "One source material inside an AtlasDefinition and where it sits in the baked texture atlas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasDefinition.AtlasedMaterial

A **class** in `Root.Township`, `Alta.Utilities.Atlas`.

One source material inside an `AtlasDefinition` and where it sits in the baked texture atlas.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`AtlasDefinition`](/game-api/types/alta-utilities/atlasdefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AtlasedMaterial()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custompadding" /><code>{"int customPadding"}</code> | Padding override for this material in the atlas; -1 means use the default. |
| <Link id="m-material" /><code>{"Material material"}</code> | The original material that renderers use before atlasing. |
| <Link id="m-rect" /><code>{"Vector4 rect"}</code> | Offset and scale of this material's area in the atlas (x, y offset and z, w scale), written into mesh UVs. |
| <Link id="m-scale" /><code><Link to="/game-api/types/alta-utilities/scale">{"Scale"}</Link>{" scale"}</code> | How much to scale this material's textures when packing (quarter, half, regular, two or four times). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Compares the wrapped `material` against the given object, not against another `AtlasedMaterial`. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Uses the wrapped material's hash code. |

## Used in

Members of other types that take, return or hold a `AtlasedMaterial`:

[`AtlasDefinition.GetMaterialRect`](/game-api/types/alta-utilities/atlasdefinition#m-getmaterialrect), [`AtlasDefinition.materialReferences`](/game-api/types/alta-utilities/atlasdefinition#m-materialreferences), [`AtlasDefinition.materials`](/game-api/types/alta-utilities/atlasdefinition#m-materials), [`AtlasDefinition.MaterialReferences.MaterialRect`](/game-api/types/alta-utilities/atlasdefinition-materialreferences#m-materialrect), [`AtlasDefinition.MaterialReferences.MaterialReferences`](/game-api/types/alta-utilities/atlasdefinition-materialreferences#m-ctor), [`MaterialRect.MaterialRect`](/game-api/types/alta-utilities/materialrect#m-ctor-3).
