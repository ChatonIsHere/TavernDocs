---
title: "BakeableTextureDecimator"
description: "Asset listing textures to shrink per platform, probably applied by an editor build step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BakeableTextureDecimator

A **class** in `Root.Township`, no namespace.

Asset listing textures to shrink per platform, probably applied by an editor build step. Holds data only at runtime.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`PlatformTextures`](/game-api/types/global-a-b/bakeabletexturedecimator-platformtextures), [`TextureData`](/game-api/types/global-a-b/bakeabletexturedecimator-texturedata)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BakeableTextureDecimator()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activedata" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/bakeabletexturedecimator-texturedata">{"BakeableTextureDecimator.TextureData"}</Link>{"> activeData"}</code> | Hidden record of each touched texture's override, max size and format, probably so it can be restored. |
| <Link id="m-textures" /><code>{"private "}<Link to="/game-api/types/global-a-b/bakeabletexturedecimator-platformtextures">{"BakeableTextureDecimator.PlatformTextures"}</Link>{"[] textures"}</code> | Per platform flag, the textures to decimate. |

</details>
