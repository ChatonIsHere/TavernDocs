---
title: "SteelSong.IdentifiedModel"
description: "A forged model that the local player is working with the Steel Song skill, with its pickup identifier and current hit streak."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSong.IdentifiedModel

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A forged model that the local player is working with the Steel Song skill, with its pickup identifier and current hit streak. Client side.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SteelSong`](/mod/game-api/types/global-s/steelsong)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IdentifiedModel("}<Link to="/mod/game-api/types/alta-crafting/forgedmodel">{"ForgedModel"}</Link>{" model, uint identifier)"}</code> | <span className="api-desc">Creates a `SteelSong.IdentifiedModel` from `model` and `identifier`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hitcount" /><code>{"int HitCount { get; set; }"}</code> | <span className="api-desc">Current streak of well-timed hits, capped at the skill's level count and reset to 0 on a bad hit.</span> |
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> | <span className="api-desc">Network identifier of the pickup the model belongs to.</span> |
| <Link id="m-model" /><code><Link to="/mod/game-api/types/alta-crafting/forgedmodel">{"ForgedModel"}</Link>{" Model { get; }"}</code> | <span className="api-desc">The forged model being hit.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ishitvalid" /><code>{"bool IsHitValid()"}</code> | <span className="api-desc">True if the model isn't finished and at least one forged point still glows.</span> |

## Used in

Members of other types that take, return or hold a `IdentifiedModel`:

<div className="api-used-in">

[`SteelSong.activeDetectors`](/mod/game-api/types/global-s/steelsong#m-activedetectors).

</div>
