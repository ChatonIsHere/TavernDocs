---
title: "PhysicalMaterial.MaterialChannel"
description: "class PhysicalMaterial.MaterialChannel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterial.MaterialChannel

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PhysicalMaterial`](/game-api/types/global-p/physicalmaterial)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialChannel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-atlasedmaterial" /><code>{"private Material atlasedMaterial"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-needsfixing" /><code>{"private bool needsFixing"}</code> |
| <Link id="m-nondeformingmaterial" /><code>{"private Material nonDeformingMaterial"}</code> |
| <Link id="m-offsetscale" /><code>{"private Vector4 offsetScale"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> |
| <Link id="m-nonatlasednondeformingmaterial" /><code>{"Material NonAtlasedNonDeformingMaterial { get; }"}</code> |
| <Link id="m-nondeformingmaterial-2" /><code><Link to="/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" NonDeformingMaterial { get; }"}</code> |
| <Link id="m-offsetscale-2" /><code>{"Vector4 OffsetScale { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-cleanup" /><code>{"void CleanUp()"}</code> |
| <Link id="m-setup" /><code>{"void Setup(Material material, Material nonDeformingMaterial)"}</code> |
| <Link id="m-setupoffsetscale" /><code>{"bool SetupOffsetScale("}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" definition)"}</code> |

## Used in

Members of other types that take, return or hold a `MaterialChannel`:

[`PhysicalMaterial.GetChannel`](/game-api/types/global-p/physicalmaterial#m-getchannel), [`PhysicalMaterial.materialChannels`](/game-api/types/global-p/physicalmaterial#m-materialchannels).
