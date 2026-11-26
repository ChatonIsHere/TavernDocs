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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlockSpawner`](/mod/game-api/types/alta-crafting/timberblockspawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselingSizePoint()"}</code> | <span className="api-desc">Creates a `TimberBlockSpawner.ChiselingSizePoint` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxsize" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" maxSize"}</code> | <span className="api-desc">Backing field for `MaxSize`.</span> |
| <Link id="m-position" /><code>{"private float position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxsize-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" MaxSize { get; }"}</code> | <span className="api-desc">Largest block size allowed at this stop.</span> |
| <Link id="m-position-2" /><code>{"float Position { get; }"}</code> | <span className="api-desc">Local X position of the stop.</span> |

## Used in

Members of other types that take, return or hold a `ChiselingSizePoint`:

<div className="api-used-in">

[`TimberBlockSpawner.availablePoints`](/mod/game-api/types/alta-crafting/timberblockspawner#m-availablepoints).

</div>
