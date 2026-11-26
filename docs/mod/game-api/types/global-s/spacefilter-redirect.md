---
title: "SpaceFilter.Redirect"
description: "A rule on a SpaceFilter: points in these forest space types use another fill set's spawn modifiers instead of being dropped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceFilter.Redirect

A **class** in `Root.Township`, the global namespace.

A rule on a `SpaceFilter`: points in these forest space types use another fill set's spawn modifiers instead of being dropped.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SpaceFilter`](/mod/game-api/types/global-s/spacefilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Redirect()"}</code> | Creates a `SpaceFilter.Redirect` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> | Backing field for `FillSet`. |
| <Link id="m-types" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" types"}</code> | Backing field for `Types`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fillset-2" /><code><Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" FillSet { get; }"}</code> | Fill set whose spawn modifiers take over for matching spaces. |
| <Link id="m-types-2" /><code><Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" Types { get; }"}</code> | Space types this redirect applies to. |

## Used in

Members of other types that take, return or hold a `Redirect`:

[`SpaceFilter.redirects`](/mod/game-api/types/global-s/spacefilter#m-redirects).
