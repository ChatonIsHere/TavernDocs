---
title: "NailIdentifier"
description: "Identifies one nail on a generic-crafting piece, plus how well it was hit, for sending over the network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NailIdentifier

A **struct** in `Root.Township`, `Alta.Crafting`.

Identifies one nail on a generic-crafting piece, plus how well it was hit, for sending over the network.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basestruct" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" baseStruct"}</code> | <span className="api-desc">Shared static instance reused by `Setup`.</span> |
| <Link id="m-hitquality" /><code><Link to="/mod/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitQuality"}</code> | <span className="api-desc">How well the nail was hit.</span> |
| <Link id="m-nailindex" /><code>{"int nailIndex"}</code> | <span className="api-desc">Index of the nail on its piece.</span> |
| <Link id="m-pieceindex" /><code>{"int pieceIndex"}</code> | <span className="api-desc">Identifies the piece the nail belongs to. Despite the name, `GenericCraftingPiece` fills it with the piece's hash.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the piece id, nail index (0 to 15) and hit quality (1 to 3, so `Base` can't be sent).</span> |
| <Link id="m-setup" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" Setup(int pieceIndex, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitQuality)"}</code> | <span className="api-desc">Fills the shared `baseStruct` from a piece id, nail and hit quality, and returns a copy.</span> |

## Used in

Members of other types that take, return or hold a `NailIdentifier`:

<div className="api-used-in">

[`GenericCraftingStation.RequestSyncNailHit`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncnailhit), [`GenericCraftingStation.syncNailHit`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit), [`GenericCraftingStation.SyncNailHit`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit-2).

</div>
