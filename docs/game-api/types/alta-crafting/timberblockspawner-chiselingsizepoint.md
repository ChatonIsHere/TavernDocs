---
title: "TimberBlockSpawner.ChiselingSizePoint"
description: "A stop along the TimberBlockSpawner slider and the largest block size allowed there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlockSpawner.ChiselingSizePoint

A **class** in `Root.Township`, `Alta.Carpentry`.

A stop along the `TimberBlockSpawner` slider and the largest block size allowed there. Sliding to a smaller stop resizes the deck's block.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TimberBlockSpawner`](/game-api/types/alta-crafting/timberblockspawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselingSizePoint()"}</code> | Creates a `TimberBlockSpawner.ChiselingSizePoint` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxsize" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" maxSize"}</code> | Backing field for `MaxSize`. |
| <Link id="m-position" /><code>{"private float position"}</code> | Backing field for `Position`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxsize-2" /><code><Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" MaxSize { get; }"}</code> | Largest block size allowed at this stop. |
| <Link id="m-position-2" /><code>{"float Position { get; }"}</code> | Local X position of the stop. |

## Used in

Members of other types that take, return or hold a `ChiselingSizePoint`:

[`TimberBlockSpawner.availablePoints`](/game-api/types/alta-crafting/timberblockspawner#m-availablepoints).
