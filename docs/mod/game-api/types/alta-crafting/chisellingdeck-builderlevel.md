---
title: "ChisellingDeck.BuilderLevel"
description: "Inspector entry on ChisellingDeck that maps a block size to the timber block prefab spawned for it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChisellingDeck.BuilderLevel

A **class** in `Root.Township`, `Alta.Carpentry`.

Inspector entry on `ChisellingDeck` that maps a block size to the timber block prefab spawned for it.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`ChisellingDeck`](/mod/game-api/types/alta-crafting/chisellingdeck)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuilderLevel()"}</code> | <span className="api-desc">Creates a `ChisellingDeck.BuilderLevel` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blocktospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" blockToSpawn"}</code> | <span className="api-desc">Backing field for `BlockToSpawn`.</span> |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | <span className="api-desc">Backing field for `Size`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blocktospawn-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" BlockToSpawn { get; }"}</code> | <span className="api-desc">The block prefab spawned for this size.</span> |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | <span className="api-desc">The block size this entry is for.</span> |

## Used in

Members of other types that take, return or hold a `BuilderLevel`:

<div className="api-used-in">

[`ChisellingDeck.levels`](/mod/game-api/types/alta-crafting/chisellingdeck#m-levels).

</div>
