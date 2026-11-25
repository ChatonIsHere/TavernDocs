---
title: "IChiselable"
description: "interface IChiselable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChiselable

An **interface** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`Chiselable`](/game-api/types/alta-crafting/chiselable), [`BasicChiselable`](/game-api/types/game-other-namespaces/basicchiselable)

## Properties

| Member |
| --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getdirectionleniency" /><code>{"void GetDirectionLeniency(ref float directionMultiplier)"}</code> |
| <Link id="m-gethitmultiplier" /><code>{"float GetHitMultiplier(Vector3 hitDirection)"}</code> |
| <Link id="m-receivedamage" /><code>{"void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |

## Used in

Members of other types that take, return or hold a `IChiselable`:

[`Chiselable.GetChiseleable`](/game-api/types/alta-crafting/chiselable#m-getchiseleable), [`ChiselingTool.hitPiece`](/game-api/types/alta-crafting/chiselingtool#m-hitpiece).
