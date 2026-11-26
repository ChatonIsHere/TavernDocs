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
| <Link id="m-ctor" /><code>{"Redirect()"}</code> | <span className="api-desc">Creates a `SpaceFilter.Redirect` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> | <span className="api-desc">Backing field for `FillSet`.</span> |
| <Link id="m-types" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" types"}</code> | <span className="api-desc">Backing field for `Types`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fillset-2" /><code><Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" FillSet { get; }"}</code> | <span className="api-desc">Fill set whose spawn modifiers take over for matching spaces.</span> |
| <Link id="m-types-2" /><code><Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" Types { get; }"}</code> | <span className="api-desc">Space types this redirect applies to.</span> |

## Used in

Members of other types that take, return or hold a `Redirect`:

<div className="api-used-in">

[`SpaceFilter.redirects`](/mod/game-api/types/global-s/spacefilter#m-redirects).

</div>
