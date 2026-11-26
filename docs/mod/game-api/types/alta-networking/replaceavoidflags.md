---
title: "ReplaceAvoidFlags"
description: "Flags for what to leave alone when one entity replaces another (for example CraftingPart and Fire check them): position, relation, internal state, charge,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReplaceAvoidFlags

An **enum** in `Root.Township`, `Alta.Networking`.

Flags for what to leave alone when one entity replaces another (for example `CraftingPart` and `Fire` check them): position, relation, internal state, charge, stats, health or chunk.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-charge" /><code>{"Charge = 8"}</code> |
| <Link id="m-chunk" /><code>{"Chunk = 64"}</code> |
| <Link id="m-health" /><code>{"Health = 32"}</code> |
| <Link id="m-internal" /><code>{"Internal = 4"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-position" /><code>{"Position = 1"}</code> |
| <Link id="m-relation" /><code>{"Relation = 2"}</code> |
| <Link id="m-stats" /><code>{"Stats = 16"}</code> |

## Used in

Members of other types that take, return or hold a `ReplaceAvoidFlags`:

<div className="api-used-in">

[`ForgedPointCollection.ReplacedWith`](/mod/game-api/types/alta-crafting/forgedpointcollection#m-replacedwith), [`CookingPoint.ReplacedWith`](/mod/game-api/types/alta-crafting/cookingpoint#m-replacedwith), [`CraftingPart.ReplacedWith`](/mod/game-api/types/alta-crafting/craftingpart#m-replacedwith), [`Fire.ReplacedWith`](/mod/game-api/types/alta-stats-effects/fire#m-replacedwith), [`LiquidContainer.ReplacedWith`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-replacedwith), [`IEntityReplaceHandler.ReplacedWith`](/mod/game-api/types/alta-networking/ientityreplacehandler#m-replacedwith), [`NetworkEntity.ReplaceWith`](/mod/game-api/types/alta-networking/networkentity#m-replacewith), [`NetworkRigidbody.ReplacedWith`](/mod/game-api/types/alta-networking/networkrigidbody#m-replacedwith), [`DurabilityModule.ReplacedWith`](/mod/game-api/types/global-c-d/durabilitymodule#m-replacedwith), [`Interactable.ReplacedWith`](/mod/game-api/types/global-i-l/interactable#m-replacedwith), [`InteractableLastPlayerInteractorHandler.ReplacedWith`](/mod/game-api/types/global-i-l/interactablelastplayerinteractorhandler#m-replacedwith), [`PhysicalMaterialPart.ReplacedWith`](/mod/game-api/types/global-p/physicalmaterialpart#m-replacedwith), [`Pickup.ReplacedWith`](/mod/game-api/types/global-p/pickup#m-replacedwith).

</div>
