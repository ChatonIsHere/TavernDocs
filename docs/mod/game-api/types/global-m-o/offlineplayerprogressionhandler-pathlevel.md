---
title: "OfflinePlayerProgressionHandler.PathLevel"
description: "A path and level pair, used only to log a player's levels as a table."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflinePlayerProgressionHandler.PathLevel

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A path and level pair, used only to log a player's levels as a table.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`OfflinePlayerProgressionHandler`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathLevel(int path, int level)"}</code> | <span className="api-desc">Creates an `OfflinePlayerProgressionHandler.PathLevel` from `path` and `level`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-level" /><code>{"int level"}</code> | <span className="api-desc">The level in that path.</span> |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | <span className="api-desc">The progression path.</span> |

## Used in

Members of other types that take, return or hold a `PathLevel`:

<div className="api-used-in">

[`OfflinePlayerProgressionHandler.GetTable`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandler#m-gettable).

</div>
