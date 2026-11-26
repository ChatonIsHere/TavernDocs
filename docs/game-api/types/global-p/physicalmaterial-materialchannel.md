---
title: "PhysicalMaterial.MaterialChannel"
description: "Private: the render materials for one channel of a PhysicalMaterial, plus its atlas rect when the non-deforming material is baked into an atlas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterial.MaterialChannel

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: the render materials for one channel of a `PhysicalMaterial`, plus its atlas rect when the non-deforming material is baked into an atlas.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PhysicalMaterial`](/game-api/types/global-p/physicalmaterial)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialChannel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterial" /><code>{"private Material atlasedMaterial"}</code> | Baked atlas material, set by `SetupOffsetScale`. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Backing field for `Material`. |
| <Link id="m-needsfixing" /><code>{"private bool needsFixing"}</code> | True once the material is mapped into an atlas. |
| <Link id="m-nondeformingmaterial" /><code>{"private Material nonDeformingMaterial"}</code> | Backing field for `NonAtlasedNonDeformingMaterial`. |
| <Link id="m-offsetscale" /><code>{"private Vector4 offsetScale"}</code> | Backing field for `OffsetScale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | The normal material. |
| <Link id="m-nonatlasednondeformingmaterial" /><code>{"Material NonAtlasedNonDeformingMaterial { get; }"}</code> | The non-deforming material before atlasing. |
| <Link id="m-nondeformingmaterial-2" /><code><Link to="/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" NonDeformingMaterial { get; }"}</code> | The atlased material with its offset and scale, as a `MaterialRect`. |
| <Link id="m-offsetscale-2" /><code>{"Vector4 OffsetScale { get; }"}</code> | Atlas offset and scale of this material. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanup" /><code>{"void CleanUp()"}</code> | Clears the atlas offset and the needs-fixing flag. |
| <Link id="m-setup" /><code>{"void Setup(Material material, Material nonDeformingMaterial)"}</code> | Sets the normal and non-deforming materials. |
| <Link id="m-setupoffsetscale" /><code>{"bool SetupOffsetScale("}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" definition)"}</code> | If the atlas holds the non-deforming material, stores its rect and the baked material. Returns true on a match. |

## Used in

Members of other types that take, return or hold a `MaterialChannel`:

[`PhysicalMaterial.GetChannel`](/game-api/types/global-p/physicalmaterial#m-getchannel), [`PhysicalMaterial.materialChannels`](/game-api/types/global-p/physicalmaterial#m-materialchannels).
