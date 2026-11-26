---
title: "PlayerPostboxStorage.InitialContent"
description: "A set piece that may be placed in a new player postbox, with a chance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorage.InitialContent

A **class** in `Root.Township`, the global namespace.

A set piece that may be placed in a new player postbox, with a chance.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerPostboxStorage`](/mod/game-api/types/global-p/playerpostboxstorage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InitialContent()"}</code> | Creates a `PlayerPostboxStorage.InitialContent` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"float chance"}</code> | Chance (0 to 1) that the item is added; 1 by default. |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" data"}</code> | The set piece to add. |

## Used in

Members of other types that take, return or hold a `InitialContent`:

[`PlayerPostboxStorage.InitializeIfNew`](/mod/game-api/types/global-p/playerpostboxstorage#m-initializeifnew), [`PostboxManager.initialContent`](/mod/game-api/types/global-p/postboxmanager#m-initialcontent).
