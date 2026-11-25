---
title: "NailIdentifier"
description: "struct NailIdentifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NailIdentifier

A **struct** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Fields

| Member |
| --- |
| <Link id="m-basestruct" /><code>{"static "}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" baseStruct"}</code> |
| <Link id="m-hitquality" /><code><Link to="/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitQuality"}</code> |
| <Link id="m-nailindex" /><code>{"int nailIndex"}</code> |
| <Link id="m-pieceindex" /><code>{"int pieceIndex"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-setup" /><code>{"static "}<Link to="/game-api/types/alta-crafting/nailidentifier">{"NailIdentifier"}</Link>{" Setup(int pieceIndex, "}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitQuality)"}</code> |

## Used in

Members of other types that take, return or hold a `NailIdentifier`:

[`GenericCraftingStation.RequestSyncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-requestsyncnailhit), [`GenericCraftingStation.syncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit), [`GenericCraftingStation.SyncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit-2).
