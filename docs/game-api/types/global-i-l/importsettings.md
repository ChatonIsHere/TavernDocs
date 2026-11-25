---
title: "ImportSettings"
description: "class ImportSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImportSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImportSettings.Create`](/game-api/types/global-i-l/importsettings-create)
- **Nested types** [`CompressionSettings`](/game-api/types/global-i-l/importsettings-compressionsettings), [`Create`](/game-api/types/global-i-l/importsettings-create), [`Filter`](/game-api/types/global-i-l/importsettings-filter), [`PlatformSettings`](/game-api/types/global-i-l/importsettings-platformsettings), [`Scale`](/game-api/types/global-i-l/importsettings-scale), [`TextureType`](/game-api/types/global-i-l/importsettings-texturetype), [`Type`](/game-api/types/global-i-l/importsettings-type)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImportSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/global-i-l/importsettings-filter">{"ImportSettings.Filter"}</Link>{"[] filters"}</code> |  |
| <Link id="m-settingsmap" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/global-i-l/importsettings">{"ImportSettings"}</Link>{"> settingsMap"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearmap" /><code>{"static void ClearMap()"}</code> |  |
| <Link id="m-find" /><code><Link to="/game-api/types/global-i-l/importsettings-platformsettings">{"ImportSettings.PlatformSettings"}</Link>{" Find(string assetPath, "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime, "}<Link to="/game-api/types/global-i-l/importsettings-type">{"ImportSettings.Type"}</Link>{" type)"}</code> |  |
| <Link id="m-getsettings" /><code>{"static "}<Link to="/game-api/types/global-i-l/importsettings">{"ImportSettings"}</Link>{" GetSettings(string path)"}</code> |  |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> |  |
