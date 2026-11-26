---
title: "ChisellingDeckSaveData"
description: "Save data for a ChisellingDeck, the carpentry chiselling station."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChisellingDeckSaveData

A **class** in `Root.Township`, `Alta.Carpentry`.

Save data for a `ChisellingDeck`, the carpentry chiselling station. The deck saves its size; its current `TimberBlock` fills in the rest.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<ChisellingDeck, ChisellingDeckSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ChisellingDeck`](/mod/game-api/types/alta-crafting/chisellingdeck), [`ChisellingDeckSaveData`](/mod/game-api/types/alta-crafting/chisellingdecksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChisellingDeckSaveData()"}</code> | <span className="api-desc">Creates a `ChisellingDeckSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsize" /><code>{"int currentSize"}</code> | <span className="api-desc">How much timber is on the deck. The deck has space while this is below its max size.</span> |
| <Link id="m-donepieces" /><code>{"int[] donePieces"}</code> | <span className="api-desc">Indexes of the block's pieces that have been chiselled off.</span> |
| <Link id="m-hasfollowedrecipe" /><code>{"bool hasFollowedrecipe"}</code> | <span className="api-desc">Whether the block has followed the recipe so far.</span> |
| <Link id="m-physicalmaterial" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">The wood material of the block.</span> |
| <Link id="m-pieces" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] pieces"}</code> | <span className="api-desc">Save data for each piece of the timber block.</span> |
| <Link id="m-spawned" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawned"}</code> | <span className="api-desc">The chisel definition the block has recorded as spawned.</span> |
| <Link id="m-stage" /><code>{"int stage"}</code> | <span className="api-desc">The block's chiselling stage level. Loading steps the block forward to this stage.</span> |

## Used in

Members of other types that take, return or hold a `ChisellingDeckSaveData`:

<div className="api-used-in">

[`TimberBlock.LoadFrom`](/mod/game-api/types/alta-crafting/timberblock#m-loadfrom), [`TimberBlock.SaveInto`](/mod/game-api/types/alta-crafting/timberblock#m-saveinto), [`TimberBlock.Stage.LoadFrom`](/mod/game-api/types/alta-crafting/timberblock-stage#m-loadfrom), [`TimberBlock.Stage.SaveInto`](/mod/game-api/types/alta-crafting/timberblock-stage#m-saveinto).

</div>
