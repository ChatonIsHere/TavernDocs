---
title: "OfflinePlayerProgressionHandler.PathLevel"
description: "A path and level pair, used only to log a player's levels as a table."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflinePlayerProgressionHandler.PathLevel

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A path and level pair, used only to log a player's levels as a table.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`OfflinePlayerProgressionHandler`](/game-api/types/global-m-o/offlineplayerprogressionhandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PathLevel(int path, int level)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-level" /><code>{"int level"}</code> | The level in that path. |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | The progression path. |

## Used in

Members of other types that take, return or hold a `PathLevel`:

[`OfflinePlayerProgressionHandler.GetTable`](/game-api/types/global-m-o/offlineplayerprogressionhandler#m-gettable).
