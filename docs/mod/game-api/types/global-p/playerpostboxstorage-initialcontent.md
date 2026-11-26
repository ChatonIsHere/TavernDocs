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
| <Link id="m-ctor" /><code>{"InitialContent()"}</code> | <span className="api-desc">Creates a `PlayerPostboxStorage.InitialContent` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"float chance"}</code> | <span className="api-desc">Chance (0 to 1) that the item is added; 1 by default.</span> |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" data"}</code> | <span className="api-desc">The set piece to add.</span> |

## Used in

Members of other types that take, return or hold a `InitialContent`:

<div className="api-used-in">

[`PlayerPostboxStorage.InitializeIfNew`](/mod/game-api/types/global-p/playerpostboxstorage#m-initializeifnew), [`PostboxManager.initialContent`](/mod/game-api/types/global-p/postboxmanager#m-initialcontent).

</div>
