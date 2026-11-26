---
title: "ImportSettings.PlatformSettings"
description: "Asset import settings for one group of platforms, picked by ImportSettings.Find from the last matching filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImportSettings.PlatformSettings

A **class** in `Root.Township`, no namespace.

Asset import settings for one group of platforms, picked by `ImportSettings.Find` from the last matching filter.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`ImportSettings`](/game-api/types/global-i-l/importsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformSettings()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-compression" /><code><Link to="/game-api/types/global-i-l/importsettings-compressionsettings">{"ImportSettings.CompressionSettings"}</Link>{" compression"}</code> | Compression to use. |
| <Link id="m-customlabels" /><code>{"string[] customLabels"}</code> | Extra asset labels to add. |
| <Link id="m-ismimapenabled" /><code>{"bool isMimapEnabled"}</code> | Whether mipmaps are generated. |
| <Link id="m-issrgb" /><code>{"bool isSRGB"}</code> | Whether the texture is sRGB. |
| <Link id="m-platforms" /><code><Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platforms"}</code> | Platforms these settings apply to. |
| <Link id="m-scalemode" /><code><Link to="/game-api/types/global-i-l/importsettings-texturetype">{"ImportSettings.TextureType"}</Link>{" scaleMode"}</code> | Texture type (standard or cosmetic) used for scaling. |
| <Link id="m-texturescale" /><code><Link to="/game-api/types/global-i-l/importsettings-scale">{"ImportSettings.Scale"}</Link>{" textureScale"}</code> | How much to scale the texture down. |

## Used in

Members of other types that take, return or hold a `PlatformSettings`:

[`ImportSettings.Find`](/game-api/types/global-i-l/importsettings#m-find), [`ImportSettings.Filter.settings`](/game-api/types/global-i-l/importsettings-filter#m-settings).
