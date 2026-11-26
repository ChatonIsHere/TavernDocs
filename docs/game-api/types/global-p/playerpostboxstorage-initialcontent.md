---
title: "PlayerPostboxStorage.InitialContent"
description: "A set piece that may be placed in a new player postbox, with a chance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorage.InitialContent

A **class** in `Root.Township`, no namespace.

A set piece that may be placed in a new player postbox, with a chance.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerPostboxStorage`](/game-api/types/global-p/playerpostboxstorage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InitialContent()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"float chance"}</code> | Chance (0 to 1) that the item is added; 1 by default. |
| <Link id="m-data" /><code><Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" data"}</code> | The set piece to add. |

## Used in

Members of other types that take, return or hold a `InitialContent`:

[`PlayerPostboxStorage.InitializeIfNew`](/game-api/types/global-p/playerpostboxstorage#m-initializeifnew), [`PostboxManager.initialContent`](/game-api/types/global-p/postboxmanager#m-initialcontent).
