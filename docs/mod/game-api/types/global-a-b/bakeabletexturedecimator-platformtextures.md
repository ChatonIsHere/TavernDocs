---
title: "BakeableTextureDecimator.PlatformTextures"
description: "Lists the textures a BakeableTextureDecimator reduces for one platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BakeableTextureDecimator.PlatformTextures

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Lists the textures a `BakeableTextureDecimator` reduces for one platform.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`BakeableTextureDecimator`](/mod/game-api/types/global-a-b/bakeabletexturedecimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformTextures()"}</code> | Creates a `BakeableTextureDecimator.PlatformTextures` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetplatform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | Platforms this entry applies to. |
| <Link id="m-targettextures" /><code>{"private Texture2D[] targetTextures"}</code> | Textures to reduce on those platforms. |

</details>

## Used in

Members of other types that take, return or hold a `PlatformTextures`:

[`BakeableTextureDecimator.textures`](/mod/game-api/types/global-a-b/bakeabletexturedecimator#m-textures).
