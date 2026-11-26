---
title: "OfflinePlayerProgress"
description: "Saved progression levels for one player, used in OfflinePlayerProgressionHandler's save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflinePlayerProgress

A **class** in `Root.Township`, no namespace.

Saved progression levels for one player, used in `OfflinePlayerProgressionHandler`'s save data.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OfflinePlayerProgress()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levels" /><code>{"int[] levels"}</code> | The player's level in each progression path, indexed by `ProgressionPath`. |
| <Link id="m-useridentifier" /><code>{"int userIdentifier"}</code> | The player's user id. |

## Used in

Members of other types that take, return or hold a `OfflinePlayerProgress`:

[`OfflinePlayerProgressionHandlerSaveData.progresses`](/game-api/types/global-m-o/offlineplayerprogressionhandlersavedata#m-progresses).
