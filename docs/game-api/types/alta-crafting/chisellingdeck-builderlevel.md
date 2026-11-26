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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`ChisellingDeck`](/game-api/types/alta-crafting/chisellingdeck)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuilderLevel()"}</code> | Creates a `ChisellingDeck.BuilderLevel` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blocktospawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" blockToSpawn"}</code> | Backing field for `BlockToSpawn`. |
| <Link id="m-size" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | Backing field for `Size`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blocktospawn-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" BlockToSpawn { get; }"}</code> | The block prefab spawned for this size. |
| <Link id="m-size-2" /><code><Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | The block size this entry is for. |

## Used in

Members of other types that take, return or hold a `BuilderLevel`:

[`ChisellingDeck.levels`](/game-api/types/alta-crafting/chisellingdeck#m-levels).
