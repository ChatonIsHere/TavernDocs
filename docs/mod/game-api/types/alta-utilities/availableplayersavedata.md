---
title: "AvailablePlayerSaveData"
description: "Holds the Available enum: which starting inventory preset new players get (None, DeckedOut or Default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AvailablePlayerSaveData

A **class** in `Root.Township`, `Alta.Utilities`.

Holds the `Available` enum: which starting inventory preset new players get (`None`, `DeckedOut` or `Default`). The server setting `InitialPlayerInventory` picks one and `PlayerSaveData.GetCurrent` finds the matching asset.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested types** [`Available`](/mod/game-api/types/alta-utilities/availableplayersavedata-available)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AvailablePlayerSaveData()"}</code> | <span className="api-desc">Creates an `AvailablePlayerSaveData` with default values.</span> |
