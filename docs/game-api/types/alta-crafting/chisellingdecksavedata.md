---
title: "ChisellingDeckSaveData"
description: "class ChisellingDeckSaveData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChisellingDeckSaveData

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<ChisellingDeck, ChisellingDeckSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ChisellingDeck`](/game-api/types/alta-crafting/chisellingdeck), [`ChisellingDeckSaveData`](/game-api/types/alta-crafting/chisellingdecksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChisellingDeckSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsize" /><code>{"int currentSize"}</code> |  |
| <Link id="m-donepieces" /><code>{"int[] donePieces"}</code> |  |
| <Link id="m-hasfollowedrecipe" /><code>{"bool hasFollowedrecipe"}</code> |  |
| <Link id="m-physicalmaterial" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> |  |
| <Link id="m-pieces" /><code><Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] pieces"}</code> |  |
| <Link id="m-spawned" /><code><Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawned"}</code> |  |
| <Link id="m-stage" /><code>{"int stage"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChisellingDeckSaveData`:

[`TimberBlock.LoadFrom`](/game-api/types/alta-crafting/timberblock#m-loadfrom), [`TimberBlock.SaveInto`](/game-api/types/alta-crafting/timberblock#m-saveinto), [`TimberBlock.Stage.LoadFrom`](/game-api/types/alta-crafting/timberblock-stage#m-loadfrom), [`TimberBlock.Stage.SaveInto`](/game-api/types/alta-crafting/timberblock-stage#m-saveinto).
