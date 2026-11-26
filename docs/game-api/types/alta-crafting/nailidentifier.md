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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basestruct" /><code>{"static "}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" baseStruct"}</code> | Shared static instance reused by `Setup`. |
| <Link id="m-hitquality" /><code><Link to="/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitQuality"}</code> | How well the nail was hit. |
| <Link id="m-nailindex" /><code>{"int nailIndex"}</code> | Index of the nail on its piece. |
| <Link id="m-pieceindex" /><code>{"int pieceIndex"}</code> | Identifies the piece the nail belongs to. Despite the name, `GenericCraftingPiece` fills it with the piece's hash. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the piece id, nail index (0 to 15) and hit quality (1 to 3, so `Base` can't be sent). |
| <Link id="m-setup" /><code>{"static "}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" Setup(int pieceIndex, "}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitQuality)"}</code> | Fills the shared `baseStruct` from a piece id, nail and hit quality, and returns a copy. |

## Used in

Members of other types that take, return or hold a `NailIdentifier`:

[`GenericCraftingStation.RequestSyncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncnailhit), [`GenericCraftingStation.syncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit), [`GenericCraftingStation.SyncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit-2).
