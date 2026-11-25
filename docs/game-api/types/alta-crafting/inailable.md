---
title: "INailable"
description: "interface INailable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INailable

An **interface** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`ConfirmationCraftingPart`](/game-api/types/alta-crafting/confirmationcraftingpart), [`GenericCraftingPiece`](/game-api/types/alta-crafting/genericcraftingpiece)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasoverflow" /><code>{"bool HasOverflow("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-oncomplete" /><code>{"void OnComplete("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> |  |
| <Link id="m-receivehit" /><code>{"void ReceiveHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float damage)"}</code> |  |
| <Link id="m-synchit" /><code>{"void SyncHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |

## Used in

Members of other types that take, return or hold a `INailable`:

[`GenericCraftingNail.hitReceiver`](/game-api/types/alta-crafting/genericcraftingnail#m-hitreceiver), [`GenericCraftingNail.Setup`](/game-api/types/alta-crafting/genericcraftingnail#m-setup), [`NailSettings.SetupNails`](/game-api/types/alta-crafting/nailsettings#m-setupnails).
