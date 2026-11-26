---
title: "IChiselable"
description: "Something a chisel can carve, such as a timber piece."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChiselable

An **interface** in `Root.Township`, `Alta.Carpentry`.

Something a chisel can carve, such as a timber piece. `ChiselingTool` checks it on hit and sends it the damage.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`Chiselable`](/game-api/types/alta-crafting/chiselable), [`BasicChiselable`](/game-api/types/game-other-namespaces/basicchiselable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; }"}</code> | False when the target cannot be chiselled right now. The chisel skips it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirectionleniency" /><code>{"void GetDirectionLeniency(ref float directionMultiplier)"}</code> | Lets the target change how strict the hit direction check is, by adjusting the multiplier passed in. |
| <Link id="m-gethitmultiplier" /><code>{"float GetHitMultiplier(Vector3 hitDirection)"}</code> | How well a hit from this direction lines up, raised to a power by the chisel to scale damage. |
| <Link id="m-receivedamage" /><code>{"void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Applies chisel damage at a point and direction, with the tool and the collider that was hit. |

## Used in

Members of other types that take, return or hold a `IChiselable`:

[`Chiselable.GetChiseleable`](/game-api/types/alta-crafting/chiselable#m-getchiseleable), [`ChiselingTool.hitPiece`](/game-api/types/alta-crafting/chiselingtool#m-hitpiece).
