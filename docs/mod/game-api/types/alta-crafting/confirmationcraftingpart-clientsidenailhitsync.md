---
title: "ConfirmationCraftingPart.ClientSideNailHitSync"
description: "Message a client sends when it hits one of a confirmation crafting part's nails."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmationCraftingPart.ClientSideNailHitSync

A **struct** in `Root.Township`, `Alta.Crafting`.

Message a client sends when it hits one of a confirmation crafting part's nails. The server works out the damage and applies the hit.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`ConfirmationCraftingPart`](/mod/game-api/types/alta-crafting/confirmationcraftingpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientSideNailHitSync(int nailIndex, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">Creates a `ConfirmationCraftingPart.ClientSideNailHitSync` from `nailIndex` and `impactWithTool`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channelindex" /><code>{"int channelIndex"}</code> | <span className="api-desc">Index of the impact channel used on the impactor.</span> |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> | <span className="api-desc">Direction of the hit.</span> |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | <span className="api-desc">Hit effectiveness from 0 to 1, as reported by the client.</span> |
| <Link id="m-impactorindex" /><code>{"int impactorIndex"}</code> | <span className="api-desc">Index of the impactor on the tool.</span> |
| <Link id="m-impacttoolidentifier" /><code>{"uint impactToolIdentifier"}</code> | <span className="api-desc">Entity identifier of the tool that hit.</span> |
| <Link id="m-nailindex" /><code>{"int nailIndex"}</code> | <span className="api-desc">Which nail was hit (0 to 15).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getimpactdamage" /><code>{"float GetImpactDamage("}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> | <span className="api-desc">Server: looks up the tool entity and returns its damage on the nail's detector, or 0 if the tool is gone.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the fields to the network stream.</span> |

## Used in

Members of other types that take, return or hold a `ClientSideNailHitSync`:

<div className="api-used-in">

[`ConfirmationCraftingPart.syncClientNailHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit), [`ConfirmationCraftingPart.SyncClientNailHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit-2).

</div>
