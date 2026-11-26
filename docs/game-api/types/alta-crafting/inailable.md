---
title: "INailable"
description: "A crafting piece fixed in place by hammering nails, implemented by ConfirmationCraftingPart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INailable

An **interface** in `Root.Township`, `Alta.Crafting`.

A crafting piece fixed in place by hammering nails, implemented by `ConfirmationCraftingPart`. Each `GenericCraftingNail` reports its hits here.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`ConfirmationCraftingPart`](/game-api/types/alta-crafting/confirmationcraftingpart), [`GenericCraftingPiece`](/game-api/types/alta-crafting/genericcraftingpiece)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> | The piece's transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasoverflow" /><code>{"bool HasOverflow("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Whether a hit on the nail counts as overflow. `ConfirmationCraftingPart` always returns false. |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | Called when a nail is fully hammered in. `ConfirmationCraftingPart` crafts the piece into its slot once every nail is done. |
| <Link id="m-receivehit" /><code>{"void ReceiveHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float damage)"}</code> | Server: turns a hammer hit into nail progress and syncs the nail to clients. |
| <Link id="m-synchit" /><code>{"void SyncHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Sends the client-side nail hit effect to players in the chunk. |

## Used in

Members of other types that take, return or hold a `INailable`:

[`GenericCraftingNail.hitReceiver`](/game-api/types/alta-crafting/genericcraftingnail#m-hitreceiver), [`GenericCraftingNail.Setup`](/game-api/types/alta-crafting/genericcraftingnail#m-setup), [`NailSettings.SetupNails`](/game-api/types/alta-crafting/nailsettings#m-setupnails).
