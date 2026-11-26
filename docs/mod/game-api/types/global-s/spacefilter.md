---
title: "SpaceFilter"
description: "Forest spawn point modifier asset that only allows spawning in certain forest space types, and can send other space types to a different fill set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn point modifier asset that only allows spawning in certain forest space types, and can send other space types to a different fill set.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`SpaceFilter.Create`](/mod/game-api/types/global-s/spacefilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/spacefilter-create), [`Redirect`](/mod/game-api/types/global-s/spacefilter-redirect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpaceFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedtypes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" allowedTypes"}</code> | <span className="api-desc">Space types that keep their weight.</span> |
| <Link id="m-isnonspaceallowed" /><code>{"private bool isNonSpaceAllowed"}</code> | <span className="api-desc">Whether points outside any space keep their weight.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger. Unused in this code.</span> |
| <Link id="m-redirects" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spacefilter-redirect">{"SpaceFilter.Redirect"}</Link>{"[] redirects"}</code> | <span className="api-desc">Space types that switch to another fill set's spawn modifiers instead of being dropped.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Keeps the point if its space type is allowed, swaps in a redirect's modifiers if one matches, else zeroes the weight.</span> |
