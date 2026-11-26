---
title: "OfflinePlayerProgress"
description: "Saved progression levels for one player, used in OfflinePlayerProgressionHandler's save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflinePlayerProgress

A **class** in `Root.Township`, the global namespace.

Saved progression levels for one player, used in `OfflinePlayerProgressionHandler`'s save data.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflinePlayerProgress()"}</code> | <span className="api-desc">Creates an `OfflinePlayerProgress` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levels" /><code>{"int[] levels"}</code> | <span className="api-desc">The player's level in each progression path, indexed by `ProgressionPath`.</span> |
| <Link id="m-useridentifier" /><code>{"int userIdentifier"}</code> | <span className="api-desc">The player's user id.</span> |

## Used in

Members of other types that take, return or hold a `OfflinePlayerProgress`:

<div className="api-used-in">

[`OfflinePlayerProgressionHandlerSaveData.progresses`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandlersavedata#m-progresses).

</div>
