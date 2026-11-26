---
title: "ImportSettings"
description: "Asset import settings for textures and meshes, chosen per platform by path filters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImportSettings

A **class** in `Root.Township`, the global namespace.

Asset import settings for textures and meshes, chosen per platform by path filters.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImportSettings.Create`](/mod/game-api/types/global-i-l/importsettings-create)
- **Nested types** [`CompressionSettings`](/mod/game-api/types/global-i-l/importsettings-compressionsettings), [`Create`](/mod/game-api/types/global-i-l/importsettings-create), [`Filter`](/mod/game-api/types/global-i-l/importsettings-filter), [`PlatformSettings`](/mod/game-api/types/global-i-l/importsettings-platformsettings), [`Scale`](/mod/game-api/types/global-i-l/importsettings-scale), [`TextureType`](/mod/game-api/types/global-i-l/importsettings-texturetype), [`Type`](/mod/game-api/types/global-i-l/importsettings-type)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImportSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filters" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/importsettings-filter">{"ImportSettings.Filter"}</Link>{"[] filters"}</code> | Path filters with their per-platform settings; later filters win. |
| <Link id="m-settingsmap" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/global-i-l/importsettings">{"ImportSettings"}</Link>{"> settingsMap"}</code> | Static cache of settings by path, only ever cleared here. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearmap" /><code>{"static void ClearMap()"}</code> | Clears the cached settings map. |
| <Link id="m-find" /><code><Link to="/mod/game-api/types/global-i-l/importsettings-platformsettings">{"ImportSettings.PlatformSettings"}</Link>{" Find(string assetPath, "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime, "}<Link to="/mod/game-api/types/global-i-l/importsettings-type">{"ImportSettings.Type"}</Link>{" type)"}</code> | Returns the settings for the asset path, type and platform from the last matching filter, or null. |
| <Link id="m-getsettings" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/importsettings">{"ImportSettings"}</Link>{" GetSettings(string path)"}</code> | Always returns null in this build. |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> | True if any filter has settings for the given platform. |
