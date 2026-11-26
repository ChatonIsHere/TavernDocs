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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`ConfirmationCraftingPart`](/mod/game-api/types/alta-crafting/confirmationcraftingpart), [`GenericCraftingPiece`](/mod/game-api/types/alta-crafting/genericcraftingpiece)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> | <span className="api-desc">The piece's transform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasoverflow" /><code>{"bool HasOverflow("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Whether a hit on the nail counts as overflow. `ConfirmationCraftingPart` always returns false.</span> |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | <span className="api-desc">Called when a nail is fully hammered in. `ConfirmationCraftingPart` crafts the piece into its slot once every nail is done.</span> |
| <Link id="m-receivehit" /><code>{"void ReceiveHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float damage)"}</code> | <span className="api-desc">Server: turns a hammer hit into nail progress and syncs the nail to clients.</span> |
| <Link id="m-synchit" /><code>{"void SyncHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Sends the client-side nail hit effect to players in the chunk.</span> |

## Used in

Members of other types that take, return or hold a `INailable`:

<div className="api-used-in">

[`GenericCraftingNail.hitReceiver`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-hitreceiver), [`GenericCraftingNail.Setup`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-setup), [`NailSettings.SetupNails`](/mod/game-api/types/alta-crafting/nailsettings#m-setupnails).

</div>
