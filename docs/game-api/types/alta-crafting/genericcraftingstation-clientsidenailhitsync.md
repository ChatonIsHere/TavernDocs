---
title: "GenericCraftingStation.ClientSideNailHitSync"
description: "struct GenericCraftingStation.ClientSideNailHitSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingStation.ClientSideNailHitSync

A **struct** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`GenericCraftingStation`](/game-api/types/alta-crafting/genericcraftingstation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientSideNailHitSync(int pieceIndex, int nailIndex, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-channelindex" /><code>{"int channelIndex"}</code> |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> |
| <Link id="m-impactorindex" /><code>{"int impactorIndex"}</code> |
| <Link id="m-impacttoolidentifier" /><code>{"uint impactToolIdentifier"}</code> |
| <Link id="m-nailindex" /><code>{"int nailIndex"}</code> |
| <Link id="m-piecehash" /><code>{"int pieceHash"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getimpactdamage" /><code>{"float GetImpactDamage("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `ClientSideNailHitSync`:

[`GenericCraftingStation.syncClientNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncclientnailhit), [`GenericCraftingStation.SyncClientNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncclientnailhit-2).
