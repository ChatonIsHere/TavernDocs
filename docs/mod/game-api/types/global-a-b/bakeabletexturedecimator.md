---
title: "BakeableTextureDecimator"
description: "Asset listing textures to shrink per platform, probably applied by an editor build step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BakeableTextureDecimator

A **class** in `Root.Township`, the global namespace.

Asset listing textures to shrink per platform, probably applied by an editor build step. Holds data only at runtime.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`PlatformTextures`](/mod/game-api/types/global-a-b/bakeabletexturedecimator-platformtextures), [`TextureData`](/mod/game-api/types/global-a-b/bakeabletexturedecimator-texturedata)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BakeableTextureDecimator()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activedata" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/bakeabletexturedecimator-texturedata">{"BakeableTextureDecimator.TextureData"}</Link>{"> activeData"}</code> | <span className="api-desc">Hidden record of each touched texture's override, max size and format, probably so it can be restored.</span> |
| <Link id="m-textures" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bakeabletexturedecimator-platformtextures">{"BakeableTextureDecimator.PlatformTextures"}</Link>{"[] textures"}</code> | <span className="api-desc">Per platform flag, the textures to decimate.</span> |

</details>
