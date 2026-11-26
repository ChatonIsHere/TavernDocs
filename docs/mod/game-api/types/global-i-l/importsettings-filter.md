---
title: "ImportSettings.Filter"
description: "One rule in ImportSettings: an asset path regex, the asset type, and settings per platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImportSettings.Filter

A **class** in `Root.Township`, the global namespace.

One rule in `ImportSettings`: an asset path regex, the asset type, and settings per platform. Later filters win.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`ImportSettings`](/mod/game-api/types/global-i-l/importsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Filter()"}</code> | Creates an `ImportSettings.Filter` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"string filter"}</code> | Regex matched against the asset path (default `*`). |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/global-i-l/importsettings-platformsettings">{"ImportSettings.PlatformSettings"}</Link>{"[] settings"}</code> | Platform settings. The first whose platforms match the runtime is used. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/global-i-l/importsettings-type">{"ImportSettings.Type"}</Link>{" type"}</code> | Whether the rule is for textures or meshes. |

## Used in

Members of other types that take, return or hold a `Filter`:

[`ImportSettings.filters`](/mod/game-api/types/global-i-l/importsettings#m-filters).
