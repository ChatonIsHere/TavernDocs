---
title: "SpaceFilter"
description: "Forest spawn point modifier asset that only allows spawning in certain forest space types, and can send other space types to a different fill set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceFilter

A **class** in `Root.Township`, no namespace.

Forest spawn point modifier asset that only allows spawning in certain forest space types, and can send other space types to a different fill set.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`SpaceFilter.Create`](/game-api/types/global-s/spacefilter-create)
- **Nested types** [`Create`](/game-api/types/global-s/spacefilter-create), [`Redirect`](/game-api/types/global-s/spacefilter-redirect)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpaceFilter()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedtypes" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" allowedTypes"}</code> | Space types that keep their weight. |
| <Link id="m-isnonspaceallowed" /><code>{"private bool isNonSpaceAllowed"}</code> | Whether points outside any space keep their weight. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger. Unused in this code. |
| <Link id="m-redirects" /><code>{"private "}<Link to="/game-api/types/global-s/spacefilter-redirect">{"SpaceFilter.Redirect"}</Link>{"[] redirects"}</code> | Space types that switch to another fill set's spawn modifiers instead of being dropped. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Keeps the point if its space type is allowed, swaps in a redirect's modifiers if one matches, else zeroes the weight. |
