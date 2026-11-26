---
title: "PhysicalMaterial.MaterialChannel"
description: "Private: the render materials for one channel of a PhysicalMaterial, plus its atlas rect when the non-deforming material is baked into an atlas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterial.MaterialChannel

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: the render materials for one channel of a `PhysicalMaterial`, plus its atlas rect when the non-deforming material is baked into an atlas.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PhysicalMaterial`](/mod/game-api/types/global-p/physicalmaterial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialChannel()"}</code> | <span className="api-desc">Creates a `PhysicalMaterial.MaterialChannel` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterial" /><code>{"private Material atlasedMaterial"}</code> | <span className="api-desc">Baked atlas material, set by `SetupOffsetScale`.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Backing field for `Material`.</span> |
| <Link id="m-needsfixing" /><code>{"private bool needsFixing"}</code> | <span className="api-desc">True once the material is mapped into an atlas.</span> |
| <Link id="m-nondeformingmaterial" /><code>{"private Material nonDeformingMaterial"}</code> | <span className="api-desc">Backing field for `NonAtlasedNonDeformingMaterial`.</span> |
| <Link id="m-offsetscale" /><code>{"private Vector4 offsetScale"}</code> | <span className="api-desc">Backing field for `OffsetScale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | <span className="api-desc">The normal material.</span> |
| <Link id="m-nonatlasednondeformingmaterial" /><code>{"Material NonAtlasedNonDeformingMaterial { get; }"}</code> | <span className="api-desc">The non-deforming material before atlasing.</span> |
| <Link id="m-nondeformingmaterial-2" /><code><Link to="/mod/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" NonDeformingMaterial { get; }"}</code> | <span className="api-desc">The atlased material with its offset and scale, as a `MaterialRect`.</span> |
| <Link id="m-offsetscale-2" /><code>{"Vector4 OffsetScale { get; }"}</code> | <span className="api-desc">Atlas offset and scale of this material.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanup" /><code>{"void CleanUp()"}</code> | <span className="api-desc">Clears the atlas offset and the needs-fixing flag.</span> |
| <Link id="m-setup" /><code>{"void Setup(Material material, Material nonDeformingMaterial)"}</code> | <span className="api-desc">Sets the normal and non-deforming materials.</span> |
| <Link id="m-setupoffsetscale" /><code>{"bool SetupOffsetScale("}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">If the atlas holds the non-deforming material, stores its rect and the baked material. Returns true on a match.</span> |

## Used in

Members of other types that take, return or hold a `MaterialChannel`:

<div className="api-used-in">

[`PhysicalMaterial.GetChannel`](/mod/game-api/types/global-p/physicalmaterial#m-getchannel), [`PhysicalMaterial.materialChannels`](/mod/game-api/types/global-p/physicalmaterial#m-materialchannels).

</div>
