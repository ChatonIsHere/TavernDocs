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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`ConfirmationCraftingPart`](/game-api/types/alta-crafting/confirmationcraftingpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientSideNailHitSync(int nailIndex, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Creates a `ConfirmationCraftingPart.ClientSideNailHitSync` from `nailIndex` and `impactWithTool`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channelindex" /><code>{"int channelIndex"}</code> | Index of the impact channel used on the impactor. |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> | Direction of the hit. |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | Hit effectiveness from 0 to 1, as reported by the client. |
| <Link id="m-impactorindex" /><code>{"int impactorIndex"}</code> | Index of the impactor on the tool. |
| <Link id="m-impacttoolidentifier" /><code>{"uint impactToolIdentifier"}</code> | Entity identifier of the tool that hit. |
| <Link id="m-nailindex" /><code>{"int nailIndex"}</code> | Which nail was hit (0 to 15). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getimpactdamage" /><code>{"float GetImpactDamage("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> | Server: looks up the tool entity and returns its damage on the nail's detector, or 0 if the tool is gone. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the fields to the network stream. |

## Used in

Members of other types that take, return or hold a `ClientSideNailHitSync`:

[`ConfirmationCraftingPart.syncClientNailHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit), [`ConfirmationCraftingPart.SyncClientNailHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit-2).
