---
title: "ImportSettings.PlatformSettings"
description: "Asset import settings for one group of platforms, picked by ImportSettings.Find from the last matching filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImportSettings.PlatformSettings

A **class** in `Root.Township`, the global namespace.

Asset import settings for one group of platforms, picked by `ImportSettings.Find` from the last matching filter.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`ImportSettings`](/mod/game-api/types/global-i-l/importsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformSettings()"}</code> | <span className="api-desc">Creates an `ImportSettings.PlatformSettings` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-compression" /><code><Link to="/mod/game-api/types/global-i-l/importsettings-compressionsettings">{"ImportSettings.CompressionSettings"}</Link>{" compression"}</code> | <span className="api-desc">Compression to use.</span> |
| <Link id="m-customlabels" /><code>{"string[] customLabels"}</code> | <span className="api-desc">Extra asset labels to add.</span> |
| <Link id="m-ismimapenabled" /><code>{"bool isMimapEnabled"}</code> | <span className="api-desc">Whether mipmaps are generated.</span> |
| <Link id="m-issrgb" /><code>{"bool isSRGB"}</code> | <span className="api-desc">Whether the texture is sRGB.</span> |
| <Link id="m-platforms" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platforms"}</code> | <span className="api-desc">Platforms these settings apply to.</span> |
| <Link id="m-scalemode" /><code><Link to="/mod/game-api/types/global-i-l/importsettings-texturetype">{"ImportSettings.TextureType"}</Link>{" scaleMode"}</code> | <span className="api-desc">Texture type (standard or cosmetic) used for scaling.</span> |
| <Link id="m-texturescale" /><code><Link to="/mod/game-api/types/global-i-l/importsettings-scale">{"ImportSettings.Scale"}</Link>{" textureScale"}</code> | <span className="api-desc">How much to scale the texture down.</span> |

## Used in

Members of other types that take, return or hold a `PlatformSettings`:

<div className="api-used-in">

[`ImportSettings.Find`](/mod/game-api/types/global-i-l/importsettings#m-find), [`ImportSettings.Filter.settings`](/mod/game-api/types/global-i-l/importsettings-filter#m-settings).

</div>
