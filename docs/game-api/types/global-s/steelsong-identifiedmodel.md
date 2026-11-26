---
title: "SteelSong.IdentifiedModel"
description: "A forged model that the local player is working with the Steel Song skill, with its pickup identifier and current hit streak."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSong.IdentifiedModel

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A forged model that the local player is working with the Steel Song skill, with its pickup identifier and current hit streak. Client side.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SteelSong`](/game-api/types/global-s/steelsong)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IdentifiedModel("}<Link to="/game-api/types/alta-crafting/forgedmodel">{"ForgedModel"}</Link>{" model, uint identifier)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hitcount" /><code>{"int HitCount { get; set; }"}</code> | Current streak of well-timed hits, capped at the skill's level count and reset to 0 on a bad hit. |
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> | Network identifier of the pickup the model belongs to. |
| <Link id="m-model" /><code><Link to="/game-api/types/alta-crafting/forgedmodel">{"ForgedModel"}</Link>{" Model { get; }"}</code> | The forged model being hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ishitvalid" /><code>{"bool IsHitValid()"}</code> | True if the model isn't finished and at least one forged point still glows. |

## Used in

Members of other types that take, return or hold a `IdentifiedModel`:

[`SteelSong.activeDetectors`](/game-api/types/global-s/steelsong#m-activedetectors).
